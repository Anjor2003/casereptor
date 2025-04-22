"use server"

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products"
import { db } from "@/db"
import { stripe } from "@/lib/stripe"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Order } from "@prisma/client"

export const createCheckoutSession = async ({configId}:{configId:string}) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId},
  })
  if(!configuration){
    throw new Error('No se encontró la configuración')
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user){
    throw new Error('Necesitas iniciar sesión')
  }
  const {material, finish} = configuration
  let price = BASE_PRICE;
  if(material === 'polycarbonate') price += PRODUCT_PRICES.material.polycarbonate;
  if(finish === 'textured') price += PRODUCT_PRICES.finish.textured;

  let order: Order | undefined = undefined;


  const newUser = await db.user.findUnique({
    where: { id: user.id },
  });

  if (!newUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.email || "",
      },
    });
  }

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuration.id,
    },
  })

  if(existingOrder){
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        configurationId: configuration.id,
        userId: user.id,
        amount: price / 100,
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom iPhone Case",
    images:[configuration.imageUrl],
    default_price_data: {
      currency:"EUR",
      unit_amount: price,
    }
  })

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URI}/thank-you?orderId=${order?.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URI}/configure/preview?id=${configuration.id}`,
    payment_method_types: ["card","paypal"],
    mode: "payment",
    shipping_address_collection: {allowed_countries:["ES"]},
    metadata:{
      userId: user.id,
      orderId: order.id,
    },
    line_items:[{price: product.default_price as string, quantity: 1}]
  })

  return {url: stripeSession.url}
}

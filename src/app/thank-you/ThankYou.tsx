"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import PhonePreview from "@/components/PhonePreview";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";

  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  if (data === undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Cargando su orden...</h3>
          <p>Esto no tomara mucho tiempo.</p>
        </div>
      </div>
    );
  }
  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Verificando su pago...</h3>
          <p>Esto nos llevara un momento.</p>
        </div>
      </div>
    );
  }
  const { configuration, billingAddress, shippingAddress, amount } = data;
  const { color } = configuration;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-base font-medium text-primary">Gracias!</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tu carcasa esta en camino!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            Hemos recibido tu pedido, y lo estamos procesando.
          </p>

          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Pedido Numero</p>
            <p className="mt-2 text-zinc-500">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              Hiciste una gran eleccion!
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              En Casereptor creemos que una funda de telefono personalizada es
              el mejor regalo para un amigo o familia. Nosotros te ayudamos a
              elegir la perfecta funda para ti. Te ayudaremos a elegir el
              material, color y acabado para que te sientas orgulloso de tu
              funda de telefono.
            </p>
          </div>
        </div>

        <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
          <PhonePreview
            croppedImageUrl={configuration.croppedImageUrl!}
            color={color!}
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

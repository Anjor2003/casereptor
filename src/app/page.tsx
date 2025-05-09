/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/Icons";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWithWrapper className="pt-10 pb-24 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/reptor-1.png" alt="logo img" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Tu funda de telefono{" "}
                <span className="bg-green-600 text-white px-2">
                  personalizada
                </span>{" "}
                con tu imagen
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Captura tus recuerdos favoritos con tu propia,{" "}
                <span className="font-semibold">uno-de-uno</span> funda de
                telefono. Casereptor te permite proteger tus recuerdos, no solo
                tu funda.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Material duradero y de alta calidad.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />5 años
                    de garantía de impresión
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Compatible con los modelos actuales de IPhone
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.png"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt=""
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt=""
              />
              <Phone className="w-64" imgSrc="/testimonials/1.png" />
            </div>
          </div>
        </MaxWithWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWithWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Nuestros{" "}
              <span className="relative px-2">
                clientes
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              que dicen
            </h2>
            <img
              src="/reptor-2.png"
              className="w-24 order-0 lg:order-2"
              alt="reptor logo 2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2  gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg.pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;La funda se siente duradera y ademas recibi un elogio
                  por su diseño. Tengo la funda desde hace dos meses y medio{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    la imagen es super nitida
                  </span>
                  , en la funda que tenia anteriormente la imagen empezo a
                  desvanecerse en un tono amarillo despues de unas semanas. Me
                  encanta!&ldquo;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="size-12 rounded-full object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Compra Verificada</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Comentario segundo usuario */}
            <div className="flex flex-auto flex-col gap-4 lg.pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Normalmente guardo el teléfono junto con las llaves en
                  el bolsillo, y eso provocó arañazos bastante fuertes en todas
                  mis últimas fundas. Esta, además de un arañazo apenas
                  perceptible en la esquina,
                  <span className="p-0.5 bg-slate-800 text-white">
                    parece nuevo después de aproximadamente medio año
                  </span>
                  . Me encanta!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="size-12 rounded-full object-cover"
                  src="/users/user-2.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Mari Carmen</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Compra Verificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWithWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWithWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Sube tu foto y obten{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  tu propia carcasa
                </span>{" "}
                ahora
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                alt="flecha"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  alt="caballo"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 size-full"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline  mr-1.5" />
              Silicona de alta calidad
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline  mr-1.5" />
              Revestimiento resistente a arañazos y huellas dactilares
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline  mr-1.5" />
              Compatible con carga inalambrica
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline  mr-1.5" />5 años
              de garantia de impresion
            </li>
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mt-8 mx-auto",
                })}
                href="/configure/upload">
                Crea tu carcasa ahora
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWithWrapper>
      </section>
    </div>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

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
  const { color, } = configuration

  return <div className="bg-white">
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-xl">
        <p className="text-base font-medium text-primary">Gracias!</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Tu carcasa esta en camino!
        </h1>
      </div>
    </div>
  </div>;
};

export default ThankYou;

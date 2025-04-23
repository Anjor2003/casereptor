"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";
import { object } from "zod";
import { updateOrderStatus } from "./actions";
import { useRouter } from "next/navigation";

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  esperando_envio: "Esperando Envio",
  cumplido: "Completado",
  enviado: "Enviado",
};

const StatusDropdown = ({
  id,
  orderStatus,
}: {
  id: string;
  orderStatus: OrderStatus;
}) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["update-order-status"],
    mutationFn: updateOrderStatus,
    onSuccess: () => router.refresh(),
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className="w-52 flex justify-between items-center">
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenuRadioItem
            key={status}
            value={status}
            className={cn(
              "flex text-sm gap-1 items-center p-2-5 cursor-default hover:bg-zinc-100",
              {
                "bg-zinc-100": orderStatus === status,
              },
            )}
            onClick={() => mutate({ id, newStatus: status as OrderStatus })}>
            <Check
              className={cn(
                "mr-2 size-4 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0",
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;

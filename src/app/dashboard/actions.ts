"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const updateOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    where: {
      id,
    },
    data: {
      status: newStatus,
    },
  });
};

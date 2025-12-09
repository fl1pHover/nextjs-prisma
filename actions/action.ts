
"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteUser(userId: number) {
  await prisma.user.delete({
    where: { id: userId },
  });

  revalidatePath("/users");
}

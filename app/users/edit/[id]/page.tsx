// import EditUserForm from "@/component/edit-user-form";
// import prisma from "@/lib/prisma";
// import { notFound } from "next/navigation";

// export default async function EditUserPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const userId = parseInt(params.id);
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//   });

//   if (!user) {
//     notFound();
//   }

//   return <EditUserForm user={user} />;
// }

import EditUserForm from "@/component/edit-user-form";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    notFound();
  }

  return <EditUserForm user={user} />;
}

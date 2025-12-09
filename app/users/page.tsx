import DeleteButton from "@/component/del-user-button";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany({});

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16 text-[#333333]">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">
        Users
      </h1>
      <div className="">
        {users.map((user) => (
          <div
            // href={`/users/profile/${user.id}`}
            key={user.id}
            className="grid grid-cols-4 border border-b-0 last:border-b p-1 hover:bg-gray-200 transition"
          >
            <h1 className="font-semibold">ID: {user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            {/*<h1>{user.role}</h1>*/}
            <div className="flex items-center gap-1 justify-end">
              <Link
                href={`/users/edit/${user.id}`}
                className="bg-blue-500 text-white p-2"
              >
                Edit
              </Link>
              <DeleteButton userId={user.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

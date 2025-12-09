import prisma from "@/lib/prisma";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16 text-[#333333]">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">
        Users
      </h1>
      <div className="">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-3 border border-b-0 last:border-b p-1"
          >
            <h1 className="font-semibold">ID: {user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

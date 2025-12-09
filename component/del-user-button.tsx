"use client";

import { deleteUser } from "@/actions/action";

export default function DeleteButton({ userId }: { userId: number }) {
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();

        const ok = confirm("yg uu?");
        if (!ok) return;

        await deleteUser(userId);
      }}
      className="bg-red-500 text-white p-2 w-fit cursor-pointer"
    >
      Delete
    </button>
  );
}

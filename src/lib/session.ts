"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { User } from "@/models/users";

export async function getSession() {
  const user = (await cookies()).get("user")?.value;
  const token = (await cookies()).get("token")?.value;

  if (!user || !token) {
    return null;
  }

  return { user: JSON.parse(user) as User, token };
}

export async function deleteSession() {
  (await cookies()).delete("user");
  (await cookies()).delete("token");

  redirect("/auth/login");
}

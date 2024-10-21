"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserBase } from "@/models/interfaces";

export async function getSession() {
  const user = cookies().get("user")?.value;
  const token = cookies().get("token")?.value;

  if (!user || !token) {
    return null;
  }

  return { user: JSON.parse(user) as UserBase, token };
}

export async function deleteSession() {
  cookies().delete("user");
  cookies().delete("token");

  redirect("/auth/login");
}

"use server";

import { env } from "@/env/client";
import { User, UserCreate } from "@/models/interfaces";

const BASE_PATH = "/usuarios";

export async function getUsers(): Promise<User[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener los usuarios.");
  }

  const data = await req.json();
  return data;
}

export async function createUser(user: UserCreate) {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!req.ok) {
    throw new Error("No se pudo crear el usuario.");
  }

  return req.json();
}

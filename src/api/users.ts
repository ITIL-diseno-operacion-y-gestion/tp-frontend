"use server";

import { cookies } from "next/headers";

import { env } from "@/env/client";
import {
  User,
  UserLogin,
  UserLoginResponse,
  UserRegister,
} from "@/models/interfaces";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/usuarios`;

export async function getUsers(): Promise<User[]> {
  const req = await fetch(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los usuarios.");
  }

  const data = await req.json();
  return data;
}

export async function register(user: UserRegister) {
  const req = await fetch(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!req.ok) {
    console.error(await req.json());
    throw new Error("No se pudo crear el usuario.");
  }

  return req.json();
}

export async function login(user: UserLogin): Promise<UserLoginResponse> {
  const res = await fetch(`${BASE_PATH}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = (await res.json()) as UserLoginResponse;

    cookies().set("token", data.token, {
      maxAge: 60 * 60 * 24 * 7,
    });

    const userData = {
      apellido: data.apellido,
      email: data.email,
      nombre: data.nombre,
      id: data.id,
    };
    cookies().set("user", JSON.stringify(userData), {
      maxAge: 60 * 60 * 24 * 7,
    });

    return data;
  } else {
    const error = await res.json();
    console.error(error);
    throw new Error(error.detail);
  }
}

export async function logout() {
  cookies().delete("token");
  cookies().delete("user");
}

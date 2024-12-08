"use server";

import { fetchWithTimeout } from "@/lib/utils";
import {
  User,
  UserLogin,
  UserLoginResponse,
  UserRegister,
} from "@/models/users";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/usuarios`;

export async function getUsers(): Promise<User[]> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["users"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los usuarios.");
  }

  const data = await req.json();
  return data;
}

export async function register(user: UserRegister): Promise<User> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (err) {
    throw new Error("No se pudo registrar el usuario.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    console.error(res);
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function login(user: UserLogin): Promise<UserLoginResponse> {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (err) {
    throw new Error("No se pudo iniciar sesión.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    console.error(res);
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

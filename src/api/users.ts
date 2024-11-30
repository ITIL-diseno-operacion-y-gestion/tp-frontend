"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import {
  User,
  UserLogin,
  UserLoginResponse,
  UserRegister,
} from "@/models/users";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/usuarios`;

export async function getUsers(): Promise<User[]> {
  const req = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["users"],
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener los usuarios.");
  }

  const data = await req.json();
  return data;
}

export async function register(user: UserRegister): Promise<User> {
  const req = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    console.error(res);
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function login(user: UserLogin): Promise<UserLoginResponse> {
  const req = await fetchWithTimeout(`${BASE_PATH}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    console.error(res);
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

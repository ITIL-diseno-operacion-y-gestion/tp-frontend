"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { ErrorConocido, ErrorConocidoCreate } from "@/models/errores-conocidos";
import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/errores-conocidos`;

export async function getErroresConocidos(): Promise<ErrorConocido[]> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["errores-conocidos"],
    }
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los errores conocidos.");
  }

  const data = await req.json();
  return data;
}

export async function createErrorConocido(errorConocido: ErrorConocidoCreate) {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(errorConocido),
  });

  if (err) {
    throw new Error("No se pudo crear el error conocido.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

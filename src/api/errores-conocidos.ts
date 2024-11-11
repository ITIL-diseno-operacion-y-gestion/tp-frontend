"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { ErrorConocido, ErrorConocidoCreate } from "@/models/errores-conocidos";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/errores-conocidos`;

export async function getErroresConocidos(): Promise<ErrorConocido[]> {
  const req = await fetchWithTimeout(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los errores conocidos.");
  }

  const data = await req.json();
  return data;
}

export async function createErrorConocido(errorConocido: ErrorConocidoCreate) {
  const req = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(errorConocido),
  });

  if (!req.ok) {
    throw new Error("No se pudo crear el error conocido.");
  }

  return req.json();
}

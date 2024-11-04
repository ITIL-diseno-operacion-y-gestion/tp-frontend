"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { ErrorConocido } from "@/models/errores-conocidos";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/errores-conocidos`;

export async function getErroresConocidos(): Promise<ErrorConocido[]> {
  const req = await fetchWithTimeout(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los errores conocidos.");
  }

  const data = await req.json();
  return data;
}

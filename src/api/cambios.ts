"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { Cambio, CambioCreate } from "@/models/cambios";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/cambios`;

export async function getCambios(): Promise<Cambio[]> {
  const req = await fetchWithTimeout(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los cambios.");
  }

  const data = await req.json();
  return data;
}

export async function getCambio(id: number): Promise<Cambio> {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener el cambio.");
  }

  const data = await req.json();
  return data;
}

export async function createCambio(cambio: CambioCreate) {
  const req = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cambio),
  });

  if (!req.ok) {
    console.error("ERROR: ", await req.text());
    throw new Error("No se pudo crear el cambio.");
  }

  return req.json();
}

export async function deleteCambio(id: number) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (!req.ok) {
    throw new Error("No se pudo borrar el cambio.");
  }
}

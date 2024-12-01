"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { Cambio, CambioCreate } from "@/models/cambios";
import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/cambios`;

export async function getCambios(): Promise<Cambio[]> {
  const req = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["cambios"],
    }
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener los cambios.");
  }

  const data = await req.json();
  return data;
}

export async function getCambio(id: number): Promise<Cambio> {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    next: {
      tags: ["cambios"],
    }
  });

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
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function updateCambio(id: number, cambio: CambioCreate) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cambio),
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }
}

export async function deleteCambio(id: number) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (!req.ok) {
    throw new Error("No se pudo borrar el cambio.");
  }
}

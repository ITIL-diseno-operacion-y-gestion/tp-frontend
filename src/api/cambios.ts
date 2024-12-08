"use server";

import { fetchWithTimeout } from "@/lib/utils";
import { Cambio, CambioCreate } from "@/models/cambios";
import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/cambios`;

export async function getCambios(): Promise<Cambio[]> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["cambios"],
    }
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los cambios.");
  }

  const data = await req.json();
  return data;
}

export async function getCambio(id: number): Promise<Cambio> {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    next: {
      tags: ["cambios"],
    }
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener el cambio.");
  }

  const data = await req.json();
  return data;
}

export async function createCambio(cambio: CambioCreate) {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cambio),
  });

  if (err) {
    throw new Error("No se pudo crear el cambio.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function updateCambio(id: number, cambio: CambioCreate) {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cambio),
  });

  if (err) {
    throw new Error("No se pudo actualizar el cambio.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }
}

export async function deleteCambio(id: number) {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (err || !req.ok) {
    throw new Error("No se pudo borrar el cambio.");
  }
}

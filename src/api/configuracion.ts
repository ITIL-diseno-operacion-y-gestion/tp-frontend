"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import {
  ItemConfiguracion,
  ItemConfiguracionCreate,
} from "@/models/configuracion";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/configuracion/articulos`;

export async function getArticulosConfiguracion(): Promise<
  ItemConfiguracion[]
> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["configuracion"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los articulos de configuracion.");
  }

  const data = await req.json();
  return data;
}

export async function getArticuloConfiguracion(
  id: number,
): Promise<ItemConfiguracion> {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    next: {
      tags: ["configuracion"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener el articulo de configuracion.");
  }

  const data = await req.json();
  return data;
}

export async function createArticuloConfiguracion(
  articulo: ItemConfiguracionCreate,
) {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articulo),
  });

  if (err) {
    throw new Error("No se pudo crear el articulo de configuracion.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function updateArticuloConfiguracion(articulo: ItemConfiguracionCreate) {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articulo),
  });

  if (err) {
    throw new Error("No se pudo actualizar el articulo de configuracion.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function deleteArticuloConfiguracion(id: number) {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (err || !req.ok) {
    throw new Error("No se pudo eliminar el articulo de configuracion.");
  }

  return req.json();
}

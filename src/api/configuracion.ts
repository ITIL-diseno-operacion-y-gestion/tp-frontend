"use server";

import { env } from "@/env/client";
import {
  ItemConfiguracion,
  ItemConfiguracionCreate,
} from "@/models/configuracion";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/configuracion/articulos`;

export async function getArticulosConfiguracion(): Promise<
  ItemConfiguracion[]
> {
  const req = await fetch(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener la configuración.");
  }

  const data = await req.json();
  return data;
}

export async function getArticuloConfiguracion(
  id: number,
): Promise<ItemConfiguracion> {
  const req = await fetch(`${BASE_PATH}/${id}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener la configuración.");
  }

  const data = await req.json();
  return data;
}

export async function createArticuloConfiguracion(
  articulo: ItemConfiguracionCreate,
) {
  const req = await fetch(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articulo),
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    console.error(res);
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

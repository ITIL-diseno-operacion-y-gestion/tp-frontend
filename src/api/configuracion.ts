import {
  ArticuloConfiguracion,
  ArticuloConfiguracionCreate,
} from "@/app/configuracion/models";
import { env } from "@/env/client";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = "/configuracion/articulos";

export async function getArticulosConfiguracion(): Promise<
  ArticuloConfiguracion[]
> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener la configuración.");
  }

  const data = await req.json();
  return data;
}

export async function getArticuloConfiguracion(
  id: number,
): Promise<ArticuloConfiguracion> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}/${id}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener la configuración.");
  }

  const data = await req.json();
  return data;
}

export async function createArticuloConfiguracion(
  articulo: ArticuloConfiguracionCreate,
) {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`, {
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

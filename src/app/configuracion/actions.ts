"use server";

import { env } from "@/env/client";

import { ItemConfiguracion } from "./models";

export async function getElementosConfiguracion(): Promise<
  ItemConfiguracion[]
> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/configuracion/articulos`);

  if (!req.ok) {
    throw new Error("No se pudo obtener la configuración.");
  }

  const data = await req.json();
  return data;
}
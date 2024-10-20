"use server";

import { Incidente, IncidenteCreate } from "@/app/incidentes/models";
import { env } from "@/env/client";

const BASE_PATH = "/incidentes";

export async function getIncidentes(): Promise<Incidente[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener los incidentes.");
  }

  const data = await req.json();
  return data;
}

export async function createIncidente(incidente: IncidenteCreate) {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(incidente),
  });

  if (!req.ok) {
    throw new Error("No se pudo crear el incidente.");
  }

  return req.json();
}

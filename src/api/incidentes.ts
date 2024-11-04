"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { Incidente, IncidenteCreate } from "@/models/incidentes";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/incidentes`;

export async function getIncidentes(): Promise<Incidente[]> {
  const req = await fetchWithTimeout(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los incidentes.");
  }

  const data = await req.json();
  return data;
}

export async function getIncidente(id: number): Promise<Incidente> {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener el incidente.");
  }

  const data = await req.json();
  return data;
}

export async function createIncidente(incidente: IncidenteCreate) {
  const req = await fetchWithTimeout(BASE_PATH, {
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

export async function deleteIncidente(id: number) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (!req.ok) {
    throw new Error("No se pudo borrar el incidente.");
  }
}
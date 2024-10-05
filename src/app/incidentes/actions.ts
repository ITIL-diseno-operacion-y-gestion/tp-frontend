import { env } from "@/env/client";

import { Incidente } from "./models";

export async function getIncidentesTickets(): Promise<Incidente[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/incidentes/tickets`);

  if (!req.ok) {
    throw new Error("No se pudo obtener los incidentes.");
  }

  const data = await req.json();
  return data;
}

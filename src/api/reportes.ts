import { env } from "@/env/client";
import { Reporte } from "@/models/reportes";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/reportes`;

export async function getReporte(): Promise<Reporte> {
  const req = await fetch(BASE_PATH, {
    next: {
      tags: ["reportes"],
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener los reportes.");
  }

  const data = await req.json();
  return data;
}

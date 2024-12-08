import { fetchWithTimeout } from "@/lib/utils";
import { Reporte } from "@/models/reportes";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/reportes`;

export async function getReporte(): Promise<Reporte> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["reportes"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los reportes.");
  }

  const data = await req.json();
  return data;
}

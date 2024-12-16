import { fetchWithTimeout } from "@/lib/utils";
import { Reporte } from "@/models/reportes";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/reportes`;

export async function getReporte(id_agente_asociado: number | undefined): Promise<Reporte> {
  const path = new URL(BASE_PATH);

  if (id_agente_asociado) {
    path.searchParams.append("id_agente_asociado", id_agente_asociado.toString());
  }
  const [err, req] = await fetchWithTimeout(path.toString(), {
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

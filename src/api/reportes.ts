import { fetchWithTimeout } from "@/lib/utils";
import { Reporte } from "@/models/reportes";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/reportes`;

export async function getReporte(
  id_agente_asociado: number | undefined,
  desde: Date | undefined,
  hasta: Date | undefined,
): Promise<Reporte> {
  const path = new URL(BASE_PATH);

  if (id_agente_asociado) {
    path.searchParams.append(
      "id_agente_asignado",
      id_agente_asociado.toString(),
    );
  }

  if (desde) {
    path.searchParams.append("desde", desde.toISOString());
  }

  if (hasta) {
    path.searchParams.append("hasta", hasta.toISOString());
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

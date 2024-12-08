import { fetchWithTimeout } from "@/lib/utils";
import { Auditoria, auditoriaSchema } from "@/models/auditorias";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/auditorias`;

export async function getAuditorias(): Promise<Auditoria[]> {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["auditorias"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener las auditorias.");
  }

  const data = await req.json();

  // lo hago así para q parsee los estados y las fechas
  return data.map((x: unknown) => auditoriaSchema.parse(x));
}

export async function getAuditoria(id: number, entidad: Auditoria["clase_entidad"]): Promise<Auditoria[]> {
  const queryParams = new URLSearchParams({ entidad });
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}?${queryParams.toString()}`, {
    next: {
      tags: ["auditorias"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener la auditoria.");
  }

  const data = await req.json();
  console.log(data);

  return data.map((x: unknown) => auditoriaSchema.parse(x));
  
}
import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { Auditoria, auditoriaSchema } from "@/models/auditorias";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/auditorias`;

export async function getAuditorias(): Promise<Auditoria[]> {
  const req = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["auditorias"],
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener las auditorias.");
  }

  const data = await req.json();

  // lo hago así para q parsee los estados y las fechas
  return data.map((x: unknown) => auditoriaSchema.parse(x));
}

export async function getAuditoria(id: number, entidad: Auditoria["clase_entidad"]): Promise<Auditoria[]> {
  const queryParams = new URLSearchParams({ entidad });
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}?${queryParams.toString()}`, {
    next: {
      tags: ["auditorias"],
    },
  });

  if (!req.ok) {
    console.log(await req.text());
    throw new Error("No se pudo obtener la auditoria.");
  }

  const data = await req.json();
  console.log(data);

  return data.map((x: unknown) => auditoriaSchema.parse(x));
  
}
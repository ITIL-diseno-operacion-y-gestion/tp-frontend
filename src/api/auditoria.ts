import { env } from "@/env/client";
import { Auditoria, auditoriaSchema } from "@/models/auditorias";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/auditorias`;

export async function getAuditoria(): Promise<Auditoria[]> {
  const req = await fetch(BASE_PATH, {
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

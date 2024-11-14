import { env } from "@/env/client";
import { Auditoria } from "@/models/auditorias";

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
  return data;
}

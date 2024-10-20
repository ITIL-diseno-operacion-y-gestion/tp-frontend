import { Problema, ProblemaCreate } from "@/app/problemas/models";
import { env } from "@/env/client";

const BASE_PATH = "/problemas";

export async function getProblemas(): Promise<Problema[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener los problemas.");
  }

  const data = await req.json();
  return data;
}

export async function createProblema(problema: ProblemaCreate) {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}${BASE_PATH}`, {
    method: "POST",
    body: JSON.stringify(problema),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo crear el problema.");
  }

  return req.json();
}

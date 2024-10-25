import { Problema, ProblemaCreate } from "@/app/problemas/models";
import { env } from "@/env/client";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/problemas`;

export async function getProblemas(): Promise<Problema[]> {
  const req = await fetch(BASE_PATH);

  if (!req.ok) {
    throw new Error("No se pudo obtener los problemas.");
  }

  const data = await req.json();
  return data;
}

export async function getProblema(id: number): Promise<Problema> {
  const req = await fetch(`${BASE_PATH}/${id}`);

  if (!req.ok) {
    throw new Error("No se pudo obtener el problema.");
  }

  const data = await req.json();
  return data;
}

export async function createProblema(problema: ProblemaCreate) {
  const req = await fetch(BASE_PATH, {
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

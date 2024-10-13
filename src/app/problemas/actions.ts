"use server";

import { env } from "@/env/client";

import { Problema } from "./models";

export async function getProblemas(): Promise<Problema[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/problemas`);

  if (!req.ok) {
    return [];
    //throw new Error("No se pudo obtener los problemas.");
  }

  const data = await req.json();

  return data;
}

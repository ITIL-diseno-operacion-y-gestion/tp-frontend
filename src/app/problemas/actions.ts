"use server";

import { env } from "@/env/client";

import { Problema } from "./models";

const placeHolder: Problema[] = [
  {
    id: 1,
    categoria: "Categoria 1",
    sintomas: "Sintomas 1",
    prioridad: "alta",
    estado: "detectado",
    id_usuario: 1,
  },
  {
    id: 2,
    categoria: "Categoria 2",
    sintomas: "Sintomas 2",
    prioridad: "media",
    estado: "analizandose",
    id_usuario: 2,
  },
  {
    id: 3,
    categoria: "Categoria 3",
    sintomas: "Sintomas 3",
    prioridad: "baja",
    estado: "asignado",
    id_usuario: 3,
  },
  {
    id: 4,
    categoria: "Categoria 4",
    sintomas: "Sintomas 4",
    prioridad: "alta",
    estado: "resuelto",
    id_usuario: 4,
  },
  {
    id: 5,
    categoria: "Categoria 5",
    sintomas: "Sintomas 5",
    prioridad: "media",
    estado: "cerrado",
    id_usuario: 5,
  },
];

export async function getProblemas(): Promise<Problema[]> {
  const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/problemas`);

  return placeHolder;
  if (!req.ok) {
    //throw new Error("No se pudo obtener los problemas.");
  }

  const data = await req.json();
  return data;
}

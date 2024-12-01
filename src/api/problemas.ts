"use server";

import { env } from "@/env/client";
import { fetchWithTimeout } from "@/lib/utils";
import { Problema, ProblemaCreate } from "@/models/problemas";
import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${env.NEXT_PUBLIC_API_URL}/problemas`;

export async function getProblemas(): Promise<Problema[]> {
  const req = await fetchWithTimeout(BASE_PATH, {
    next: {
      tags: ["problemas"],
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener los problemas.");
  }

  const data = await req.json();
  return data;
}

export async function getProblema(id: number): Promise<Problema> {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    next: {
      tags: ["problemas"],
    },
  });

  if (!req.ok) {
    throw new Error("No se pudo obtener el problema.");
  }

  const data = await req.json();
  return data;
}

export async function createProblema(problema: ProblemaCreate) {
  const req = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    body: JSON.stringify(problema),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function updateProblema(
  idProblema: number,
  problema: Partial<Problema>,
) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${idProblema}`, {
    method: "PATCH",
    body: JSON.stringify(problema),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function deleteProblema(id: number) {
  const req = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (!req.ok) {
    throw new Error("No se pudo borrar el problema.");
  }
}

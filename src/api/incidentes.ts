"use server";

import { fetchWithTimeout } from "@/lib/utils";
import { Incidente, IncidenteCreate, IncidenteUpdate } from "@/models/incidentes";

import { ActionResponse, actionResponseToString } from "./actions/models";

const BASE_PATH = `${process.env.NEXT_PUBLIC_API_URL}/incidentes`;

export async function getIncidentes(usuarioId?: number): Promise<Incidente[]> {
  const searchParams = new URLSearchParams();
  if (usuarioId) {
    searchParams.set("id_usuario", usuarioId.toString());
  }

  let url = BASE_PATH;
  if (searchParams.toString()) {
    url += `?${searchParams.toString()}`;
  }
  const [err, req] = await fetchWithTimeout(url, {
    next: {
      tags: ["incidentes"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener los incidentes.");
  }

  const data = await req.json();
  return data;
}

export async function getIncidente(id: number): Promise<Incidente> {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    next: {
      tags: ["incidentes"],
    },
  });

  if (err || !req.ok) {
    throw new Error("No se pudo obtener el incidente");
  }

  const data = await req.json();
  return data;
}

export async function createIncidente(incidente: IncidenteCreate) {
  const [err, req] = await fetchWithTimeout(BASE_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(incidente),
  });

  if (err) {
    throw new Error("No se pudo crear el incidente.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function updateIncidente(id: number, incidente: Partial<IncidenteUpdate>) {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(incidente),
  });

  if (err) {
    throw new Error("No se pudo actualizar el incidente.");
  }

  if (!req.ok) {
    const res = (await req.json()) as ActionResponse;
    throw new Error(actionResponseToString(res));
  }

  return req.json();
}

export async function deleteIncidente(id: number) {
  const [err, req] = await fetchWithTimeout(`${BASE_PATH}/${id}`, {
    method: "DELETE",
  });

  if (err || !req.ok) {
    throw new Error("No se pudo borrar el incidente.");
  }
}

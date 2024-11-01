"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { IncidenteCreate, incidenteCreateSchema } from "@/models/incidentes";
import { FormState } from "@/models/schemas";

import { createIncidente } from "../incidentes";

export const crearIncidente = async (
  formState: FormState<IncidenteCreate>,
  formData: FormData,
): Promise<FormState<IncidenteCreate>> => {
  const rawFormData = Object.fromEntries(formData);
  console.log({
    ...rawFormData,
    ids_articulos: formData.getAll("ids_articulos"),
  });
  const incidenteCreate = incidenteCreateSchema.safeParse({
    ...rawFormData,
    ids_articulos: formData.getAll("ids_articulos"),
  });

  if (!incidenteCreate.success) {
    return { errors: incidenteCreate.error.flatten().fieldErrors };
  }

  try {
    await createIncidente(incidenteCreate.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Incidente guardado correctamente!");

  revalidatePath("/incidentes");
  redirect(`/incidentes?${searchParams.toString()}`);
};

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { IncidenteCreate, incidenteCreateSchema } from "@/models/incidentes";
import { FormState } from "@/models/schemas";

import { createIncidente, deleteIncidente } from "../incidentes";

export const crearIncidente = async (
  formState: FormState<IncidenteCreate>,
  formData: FormData,
): Promise<FormState<IncidenteCreate>> => {
  const rawFormData = Object.fromEntries(formData);
  const incidenteCreate = incidenteCreateSchema.safeParse({
    ...rawFormData,
    ids_articulos: formData.getAll("ids_articulos"),
  });

  if (!incidenteCreate.success) {
    const errors = incidenteCreate.error.flatten().fieldErrors;
    return { errors };
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

export const borrarIncidente = async (id: number): Promise<void> => {
  try {
    await deleteIncidente(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  revalidatePath("/incidentes");
  redirect("/incidentes");
};

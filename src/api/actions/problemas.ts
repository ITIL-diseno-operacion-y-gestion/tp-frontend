"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { ProblemaCreate, problemaCreateSchema } from "@/models/problemas";
import { FormState } from "@/models/schemas";

import { createProblema, deleteProblema, updateProblema } from "../problemas";

export const crearProblema = async (
  formState: FormState<ProblemaCreate>,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData);

  const problemaCreate = problemaCreateSchema.safeParse({
    ...rawFormData,
    ids_incidentes: formData.getAll("id_incidentes"),
  });

  if (!problemaCreate.success) {
    const errors = problemaCreate.error.flatten().fieldErrors;
    return { errors, fields: rawFormData as Partial<ProblemaCreate> };
  }

  try {
    await createProblema(problemaCreate.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message, fields: rawFormData as Partial<ProblemaCreate> };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Problema guardado correctamente!");

  revalidateTag("problemas");
  redirect(`/problemas?${searchParams.toString()}`);
};

export const actualizarProblema = async (
  id: number,
  formState: FormState<ProblemaCreate>,
  formData: FormData,
) => {
  const rawFormData = Object.fromEntries(formData);

  const problemaCreate = problemaCreateSchema.safeParse({
    ...rawFormData,
    ids_incidentes: formData.getAll("ids_incidentes"),
  });

  if (!problemaCreate.success) {
    const errors = problemaCreate.error.flatten().fieldErrors;
    return { errors, fields: rawFormData as Partial<ProblemaCreate> };
  }

  try {
    await updateProblema(id, problemaCreate.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message, fields: rawFormData as Partial<ProblemaCreate> };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Problema actualizado correctamente!");

  revalidateTag("problemas");
  redirect(`/problemas?${searchParams.toString()}`);
};

export async function borrarProblema(id: number): Promise<void> {
  try {
    await deleteProblema(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Problema borrado correctamente!");

  revalidateTag("problemas");
  redirect(`/problemas?${searchParams.toString()}`);
}

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ProblemaCreate, problemaCreateSchema } from "@/models/problemas";
import { FormState } from "@/models/schemas";

import { createProblema, deleteProblema } from "../problemas";

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
    return { errors };
  }

  try {
    await createProblema(problemaCreate.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Problema guardado correctamente!");

  revalidatePath("/problemas");
  redirect(`/problemas?${searchParams.toString()}`);
};

export async function borrarProblema(id: number): Promise<void> {
  try {
    await deleteProblema(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  revalidatePath("/problemas");
  redirect("/problemas");
}

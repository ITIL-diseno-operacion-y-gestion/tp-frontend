"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CambioCreate, cambioCreateSchema } from "@/models/cambios";
import { FormState } from "@/models/schemas";

import { createCambio, deleteCambio } from "../cambios";

export const crearCambio = async (
  formState: FormState<CambioCreate>,
  formData: FormData,
): Promise<FormState<CambioCreate>> => {
  const rawFormData = Object.fromEntries(formData);

  const cambio = cambioCreateSchema.safeParse({
    ...rawFormData,
    ids_articulos: formData.getAll("ids_articulos"),
  });

  if (!cambio.success) {
    const errors = cambio.error.flatten().fieldErrors;
    return { errors };
  }

  try {
    await createCambio(cambio.data);
  } catch (error) {
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidatePath("/cambios");
  redirect(`/cambios?${searchParams.toString()}`);
};

export async function borrarCambio(id: number) {
  try {
    await deleteCambio(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  revalidatePath("/cambios");
  redirect("/cambios");
}

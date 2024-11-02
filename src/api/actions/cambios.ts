"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CambioCreate, cambioCreateSchema } from "@/models/cambios";
import { FormState } from "@/models/schemas";

import { createCambio } from "../cambios";

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
    console.log(cambio.error);
    return {
      errors: cambio.error.flatten().fieldErrors,
    };
  }

  try {
    await createCambio(cambio.data);
  } catch (error) {
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "false");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidatePath("/cambios");
  redirect(`/cambios?${searchParams.toString()}`);
};

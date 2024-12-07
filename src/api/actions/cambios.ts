"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { CambioCreate, cambioCreateSchema } from "@/models/cambios";
import { FormState } from "@/models/schemas";

import { createCambio, deleteCambio, updateCambio } from "../cambios";

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
    return { errors, fields: rawFormData as Partial<CambioCreate> };
  }

  try {
    await createCambio(cambio.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message, fields: rawFormData as Partial<CambioCreate> };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidateTag("cambios");
  redirect(`/cambios?${searchParams.toString()}`);
};

export const actualizarCambio = async (
  id: number,
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
    return { errors, fields: rawFormData as Partial<CambioCreate> };
  }

  try {
    await updateCambio(id, cambio.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message, fields: rawFormData as Partial<CambioCreate> };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo actualizado correctamente!");

  revalidateTag("cambios");
  redirect(`/cambios?${searchParams.toString()}`);
};

export async function borrarCambio(id: number) {
  try {
    await deleteCambio(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo borrado correctamente!");

  revalidateTag("cambios");
  redirect(`/cambios?${searchParams.toString()}`);
}

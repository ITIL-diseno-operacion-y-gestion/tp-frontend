"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import {
  ItemConfiguracionCreate,
  itemConfiguracionCreateSchema,
} from "@/models/configuracion";
import { FormState } from "@/models/schemas";

import {
  createArticuloConfiguracion,
  deleteArticuloConfiguracion,
  updateArticuloConfiguracion,
} from "../configuracion";

export const crearItemConfiguracion = async (
  formState: FormState<ItemConfiguracionCreate>,
  formData: FormData,
): Promise<FormState<ItemConfiguracionCreate>> => {
  const rawFormData = Object.fromEntries(formData);

  const itemConfiguracion =
    itemConfiguracionCreateSchema.safeParse(rawFormData);

  if (!itemConfiguracion.success) {
    return {
      errors: itemConfiguracion.error.flatten().fieldErrors,
    };
  }

  try {
    await createArticuloConfiguracion(itemConfiguracion.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidateTag("configuracion");
  redirect(`/configuracion?${searchParams.toString()}`);
};

export const actualizarItemConfiguracion = async (
  id: number,
  formState: FormState<ItemConfiguracionCreate>,
  formData: FormData,
): Promise<FormState<ItemConfiguracionCreate>> => {
  const rawFormData = Object.fromEntries(formData);

  const itemConfiguracion = itemConfiguracionCreateSchema.safeParse({
    ...rawFormData,
    id,
  });

  // TODO: Crear endpoint PUT o PATCH item configuracion

  if (!itemConfiguracion.success) {
    const errors = itemConfiguracion.error.flatten().fieldErrors;
    return { errors };
  }

  try {
    await updateArticuloConfiguracion(itemConfiguracion.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo editado correctamente!");

  revalidateTag("configuracion");
  redirect(`/configuracion/${id}?${searchParams.toString()}`);
};

export const borrarItemConfiguracion = async (id: number): Promise<void> => {
  try {
    await deleteArticuloConfiguracion(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo borrado correctamente!");
  revalidateTag("configuracion");
  redirect(`/configuracion?${searchParams.toString()}`);
};

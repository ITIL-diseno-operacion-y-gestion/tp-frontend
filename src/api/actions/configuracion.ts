"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ItemConfiguracionCreate,
  itemConfiguracionCreateSchema,
  itemConfiguracionSchema,
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
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidatePath("/configuracion");
  redirect(`/configuracion?${searchParams.toString()}`);
};

export const actualizarItemConfiguracion = async (
  id: number,
  formState: FormState<ItemConfiguracionCreate>,
  formData: FormData,
): Promise<FormState<ItemConfiguracionCreate>> => {
  console.log("ID: ", id);
  const rawFormData = Object.fromEntries(formData);

  const itemConfiguracion = itemConfiguracionSchema.safeParse({
    ...rawFormData,
    id,
  });

  if (!itemConfiguracion.success) {
    return {
      errors: itemConfiguracion.error.flatten().fieldErrors,
    };
  }

  try {
    await updateArticuloConfiguracion(itemConfiguracion.data);
  } catch (error) {
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "false");
  searchParams.set("message", "Articulo editado correctamente!");

  revalidatePath(`/configuracion/${id}`);
  redirect(`/configuracion/${id}?${searchParams.toString()}`);
};

export const borrarItemConfiguracion = async (id: number): Promise<void> => {
  try {
    await deleteArticuloConfiguracion(id);
  } catch (error) {
    console.error("ERROR: ", error);
  }

  revalidatePath("/configuracion");
  redirect("/configuracion");
};

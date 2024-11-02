"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ItemConfiguracionCreate,
  itemConfiguracionCreateSchema,
} from "@/models/configuracion";
import { FormState } from "@/models/schemas";

import { createArticuloConfiguracion } from "../configuracion";

export const crearItemConfiguracion = async (
  formState: FormState<ItemConfiguracionCreate>,
  formData: FormData,
): Promise<FormState<ItemConfiguracionCreate>> => {
  const itemConfiguracionCreateRaw = Object.fromEntries(formData);

  const itemConfiguracion = itemConfiguracionCreateSchema.safeParse(
    itemConfiguracionCreateRaw,
  );

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
  searchParams.set("success", "false");
  searchParams.set("message", "Articulo guardado correctamente!");

  revalidatePath("/configuracion");
  redirect(`/configuracion?${searchParams.toString()}`);
};

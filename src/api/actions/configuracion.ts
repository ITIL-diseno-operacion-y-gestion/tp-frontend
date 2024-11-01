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

  let success = false;
  let message = "Hubo un error inesperado!";
  try {
    await createArticuloConfiguracion(itemConfiguracion.data);
    success = true;
    message = "Articulo guardado correctamente!";
  } catch (error) {
    return {
      message: (error as Error).message,
    };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", success.toString());
  searchParams.set("message", message);

  if (success) {
    revalidatePath("/configuracion");
    redirect(`/configuracion?${searchParams.toString()}`);
  } else {
    redirect(`/configuracion/new?${searchParams.toString()}`);
  }
};

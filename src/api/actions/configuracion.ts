"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ArticuloConfiguracionCreate,
  TipoItemConfiguracion,
} from "@/app/configuracion/models";

import { createArticuloConfiguracion } from "../configuracion";
import { FormState } from "./models";

export const crearItemConfiguracion = async (
  formState: FormState,
  formData: FormData,
) => {
  const data: ArticuloConfiguracionCreate = {
    nombre: formData.get("nombre") as string,
    descripcion: formData.get("descripcion") as string,
    tipo: formData.get("tipo") as TipoItemConfiguracion,
    version: +formData.get("version")! as number,
    titular: formData.get("titular") as string,
    info_fabricacion: formData.get("info_fabricacion") as string,
    localizacion: formData.get("localizacion") as string,
    relacion_items: formData.get("relacion_items") as string,
  };

  let success = false;
  let message = "Hubo un error inesperado!";
  try {
    await createArticuloConfiguracion(data);
    success = true;
    message = "Articulo guardado correctamente!";
  } catch (error) {
    return {
      msg: (error as Error).message,
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

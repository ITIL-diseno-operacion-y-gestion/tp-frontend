"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import {
  ErrorConocidoCreate,
  errorConocidoCreateSchema,
} from "@/models/errores-conocidos";
import { FormState } from "@/models/schemas";

import { createErrorConocido } from "../errores-conocidos";

export const crearErrorConocido = async (
  formState: FormState<ErrorConocidoCreate>,
  formData: FormData,
): Promise<FormState<ErrorConocidoCreate>> => {
  const rawFormData = Object.fromEntries(formData);

  const errorConocido = errorConocidoCreateSchema.safeParse({
    ...rawFormData,
    ids_incidentes: formData.getAll("ids_articulos"),
    ids_problemas: formData.getAll("ids_problemas"),
  });

  if (!errorConocido.success) {
    const errors = errorConocido.error.flatten().fieldErrors;
    return { errors, fields: rawFormData as Partial<ErrorConocidoCreate> };
  }

  try {
    await createErrorConocido(errorConocido.data);
  } catch (error) {
    const message = (error as Error).message;
    return { message, fields: rawFormData as Partial<ErrorConocidoCreate> };
  }

  const searchParams = new URLSearchParams();
  searchParams.set("success", "true");
  searchParams.set("message", "Error guardado correctamente!");

  revalidateTag("errores-conocidos");
  redirect(`/errores-conocidos?${searchParams.toString()}`);
};

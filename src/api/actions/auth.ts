"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserLogin, UserRegister } from "@/models/interfaces";

import { login, register } from "../users";
import { FormState } from "./models";

export const handleSignUp = async (
  prevState: FormState,
  formData: FormData,
) => {
  const userRegister: UserRegister = {
    nombre: formData.get("name") as string,
    apellido: formData.get("surname") as string,
    email: formData.get("email") as string,
    contrasenia: formData.get("password") as string,
  };

  try {
    await register(userRegister);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      msg: (error as Error).message,
    };
  }

  revalidateTag("users");
  redirect("/auth/login");
};

export const handleLogin = async (prevState: FormState, formData: FormData) => {
  const userLogin: UserLogin = {
    email: formData.get("email") as string,
    contrasenia: formData.get("password") as string,
  };

  let data;
  try {
    data = await login(userLogin);
  } catch (error) {
    return {
      msg: (error as Error).message,
    };
  }

  cookies().set("token", data.token, {
    maxAge: 60 * 60 * 24 * 7,
  });

  const userData = {
    apellido: data.apellido,
    email: data.email,
    nombre: data.nombre,
    id: data.id,
  };
  cookies().set("user", JSON.stringify(userData), {
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/configuracion");
};

"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { FormState } from "@/models/schemas";
import {
  UserRegister,
  userLoginSchema,
  userRegisterSchema,
} from "@/models/users";

import { login, register } from "../users";

export const handleSignUp = async (
  prevState: FormState<UserRegister>,
  formData: FormData,
) => {
  const userRegisterRaw = Object.fromEntries(formData);

  const userRegister = userRegisterSchema.safeParse(userRegisterRaw);

  if (!userRegister.success) {
    return {
      errors: userRegister.error.flatten(),
    };
  }

  try {
    await register(userRegister.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      msg: (error as Error).message,
    };
  }

  revalidateTag("users");
  redirect("/auth/login");
};

export const handleLogin = async (
  prevState: FormState<UserRegister>,
  formData: FormData,
) => {
  const userRaw = Object.fromEntries(formData);

  const userLogin = userLoginSchema.safeParse(userRaw);

  if (!userLogin.success) {
    console.log(userLogin.data);
    return {
      errors: userLogin.error.flatten().fieldErrors,
      message: "Error en los datos ingresados.",
    };
  }

  let data;
  try {
    data = await login(userLogin.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      message: (error as Error).message,
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

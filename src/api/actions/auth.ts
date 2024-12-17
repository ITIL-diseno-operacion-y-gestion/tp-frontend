"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { FormState } from "@/models/schemas";
import {
  UserLogin,
  UserRegister,
  userLoginSchema,
  userRegisterSchema,
} from "@/models/users";

import { login, register } from "../users";

export const handleSignUp = async (
  prevState: FormState<UserRegister>,
  formData: FormData,
): Promise<FormState<UserRegister>> => {
  const userRegisterRaw = Object.fromEntries(formData);

  const userRegister = userRegisterSchema.safeParse(userRegisterRaw);

  if (!userRegister.success) {
    return {
      errors: userRegister.error.flatten().fieldErrors,
      fields: userRegisterRaw,
    };
  }

  try {
    await register(userRegister.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      message: (error as Error).message,
      fields: userRegister.data,
    };
  }

  revalidateTag("users");
  redirect("/auth/login");
};

export const handleLogin = async (
  prevState: FormState<UserLogin>,
  formData: FormData,
): Promise<FormState<UserLogin>> => {
  const userRaw = Object.fromEntries(formData);

  const userLogin = userLoginSchema.safeParse(userRaw);

  if (!userLogin.success) {
    console.log(userLogin.data);
    return {
      errors: userLogin.error.flatten().fieldErrors,
      fields: userRaw,
    };
  }

  let data;
  try {
    data = await login(userLogin.data);
  } catch (error) {
    console.error("ERROR: ", error);
    return {
      message: (error as Error).message,
      fields: userLogin.data,
    };
  }

  (await cookies()).set("token", data.token, {
    maxAge: 60 * 60 * 24 * 7,
  });

  const userData = {
    apellido: data.apellido,
    email: data.email,
    nombre: data.nombre,
    id: data.id,
    rol: data.rol,
  };
  (await cookies()).set("user", JSON.stringify(userData), {
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/incidentes");
};

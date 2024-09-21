"use server";

import { redirect } from "next/navigation";

import { userSchema } from "@/models/schemas";

export async function signUp(data: FormData) {
  const user = userSchema.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });

  if (!user.success) {
    console.error(user.error.flatten());
    return {
      errors: user.error.flatten().fieldErrors,
    };
  }

  // Call the API to sign up the user
  const res = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(user.data),
  });

  if (res.ok) {
    redirect("/dashboard");
  } else {
    const error = await res.json();
    return error;
  }
}

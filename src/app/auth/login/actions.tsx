"use server";

import { redirect } from "next/navigation";

export async function signIn(data: FormData) {
  const user = {
    email: data.get("email"),
    password: data.get("password"),
  };

  // Call the API to sign up the user
  const res = await fetch("/api/signin", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (res.ok) {
    redirect("/dashboard");
  } else {
    const error = await res.json();
    return error;
  }
}

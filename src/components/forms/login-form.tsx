import { redirect } from "next/navigation";

import { login } from "@/api/users";
import { UserLogin } from "@/models/interfaces";

import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

export function LoginForm() {
  const handleLogin = async (formData: FormData) => {
    "use server";

    const userLogin: UserLogin = {
      email: formData.get("email") as string,
      contrasenia: formData.get("password") as string,
    };

    try {
      await login(userLogin);
    } catch (error) {
      console.error("ERROR: ", error);
    }

    redirect("/configuracion");
  };
  return (
    <form action={handleLogin} className="space-y-4">
      <TextField
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        required
      />
      <TextField
        name="password"
        type="password"
        label="Contraseña"
        autoComplete="current-password"
        required
      />
      <SubmitButton label="Iniciar sesión" />
    </form>
  );
}

import { redirect } from "next/navigation";

import { register } from "@/api/users";
import { UserRegister } from "@/models/interfaces";

import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

export function SignupForm() {
  const handleSignUp = async (formData: FormData) => {
    "use server";

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
    }

    redirect("/auth/login");
  };
  return (
    <form action={handleSignUp} className="space-y-4">
      <div className="flex justify-between gap-x-2">
        <TextField
          name="name"
          label="Nombre"
          autoComplete="given-name"
          required
        />
        <TextField
          name="surname"
          label="Apellido"
          autoComplete="family-name"
          required
        />
      </div>
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

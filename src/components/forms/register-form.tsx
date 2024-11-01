"use client";

import { handleSignUp } from "@/api/actions/auth";
import { FormState } from "@/models/schemas";
import { UserRegister } from "@/models/users";

import { useFormState } from "react-dom";

import { ErrorAlert } from "../form/error-alert";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState: FormState<UserRegister> = {
  errors: {},
  message: "",
};

export function SignupForm() {
  const [state, action] = useFormState(handleSignUp, initialState);

  return (
    <form action={action} className="space-y-4">
      <div className="flex justify-between gap-x-2">
        <TextField
          name="nombre"
          label="Nombre"
          autoComplete="given-name"
          error={state.errors?.nombre}
          required
        />
        <TextField
          name="apellido"
          label="Apellido"
          autoComplete="family-name"
          error={state.errors?.apellido}
          required
        />
      </div>
      <TextField
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        error={state.errors?.email}
        required
      />
      <TextField
        name="contrasenia"
        type="password"
        label="Contraseña"
        autoComplete="current-password"
        error={state.errors?.contrasenia}
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al registrarse"
          description={state.message}
        />
      )}
      <SubmitButton label="Registrarse" />
    </form>
  );
}

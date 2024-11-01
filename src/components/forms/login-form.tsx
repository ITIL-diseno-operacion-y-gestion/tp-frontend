"use client";

import { handleLogin } from "@/api/actions/auth";
import { FormState } from "@/models/schemas";
import { UserLogin } from "@/models/users";

import { useFormState } from "react-dom";

import { ErrorAlert } from "../form/error-alert";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState: FormState<UserLogin> = {
  errors: {},
  message: "",
};

export function LoginForm() {
  const [state, action] = useFormState(handleLogin, initialState);

  return (
    <form action={action} className="space-y-4">
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
          description={state.message}
          title="Hubo un error al iniciar sesión"
        />
      )}
      <SubmitButton label="Iniciar sesión" />
    </form>
  );
}

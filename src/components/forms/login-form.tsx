"use client";

import { useActionState } from "react";

import { handleLogin } from "@/api/actions/auth";
import { FormState } from "@/models/schemas";
import { UserLogin } from "@/models/users";

import { ErrorAlert } from "../form/error-alert";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { PasswordField } from "../password-field";

const initialState: FormState<UserLogin> = {
  errors: {},
  message: "",
};

export function LoginForm() {
  const [state, action] = useActionState(handleLogin, initialState);

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
      <PasswordField error={state.errors?.contrasenia} />

      {state.message && (
        <ErrorAlert
          description={state.message}
          title="Hubo un error al iniciar sesión"
        />
      )}
      <SubmitButton
        label="Iniciar sesión"
        pendingLabel="Espere un momento..."
      />
    </form>
  );
}

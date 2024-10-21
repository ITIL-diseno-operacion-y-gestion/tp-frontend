"use client";

import { handleLogin } from "@/api/actions/auth";

import { useFormState } from "react-dom";

import { ErrorDisplay } from "../form/error-display";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState = {
  msg: "",
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
        required
      />
      <TextField
        name="password"
        type="password"
        label="Contraseña"
        autoComplete="current-password"
        required
      />
      {state.msg && <ErrorDisplay error={state.msg} />}
      <SubmitButton label="Iniciar sesión" />
    </form>
  );
}

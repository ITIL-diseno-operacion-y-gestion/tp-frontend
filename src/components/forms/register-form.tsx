"use client";

import { handleSignUp } from "@/api/actions/auth";

import { useFormState } from "react-dom";

import { ErrorDisplay } from "../form/error-display";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState = {
  msg: "",
};

export function SignupForm() {
  const [state, action] = useFormState(handleSignUp, initialState);

  return (
    <form action={action} className="space-y-4">
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
      {state.msg && <ErrorDisplay error={state.msg} />}
      <SubmitButton label="Registrarse" />
    </form>
  );
}

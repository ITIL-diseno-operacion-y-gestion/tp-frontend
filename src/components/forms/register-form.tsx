"use client";

import { useActionState } from "react";

import { handleSignUp } from "@/api/actions/auth";
import { FormState } from "@/models/schemas";
import { UserRegister, userRoles } from "@/models/users";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { PasswordField } from "../password-field";

const initialState: FormState<UserRegister> = {
  errors: {},
  message: "",
};

export function SignupForm() {
  const [state, action] = useActionState(handleSignUp, initialState);

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
      <SelectField name="rol" label="Rol" error={state.errors?.rol} required>
        {userRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </SelectField>
      <PasswordField error={state.errors?.contrasenia} />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al registrarse"
          description={state.message}
        />
      )}
      <SubmitButton label="Registrarse" className="!mt-8" />
    </form>
  );
}

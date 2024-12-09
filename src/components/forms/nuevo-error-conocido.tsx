"use client";

import { useActionState } from "react";

import { crearErrorConocido } from "@/api/actions/errores-conocidos";
import { ErrorConocidoCreate } from "@/models/errores-conocidos";
import { Incidente } from "@/models/incidentes";
import { Problema } from "@/models/problemas";
import { FormState } from "@/models/schemas";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<ErrorConocidoCreate> = {
  errors: {},
  message: "",
};

export function NuevoErrorConocidoForm({
  incidentes,
  problemas,
}: {
  incidentes: Incidente[];
  problemas: Problema[];
}) {
  const [state, action] = useActionState(crearErrorConocido, initialState);

  return (
    <form className="space-y-4" action={action}>
      <TextField
        name="solucion_provisoria"
        label="Solución provisoria"
        error={state.errors?.solucion_provisoria}
        defaultValue={state.fields?.solucion_provisoria}
        required
      />
      <TextField
        name="solucion_definitiva"
        label="Solución definitiva"
        error={state.errors?.solucion_definitiva}
        defaultValue={state.fields?.solucion_definitiva}
        required
      />

      <TextField
        name="sintomas"
        label="Síntomas"
        error={state.errors?.sintomas}
        defaultValue={state.fields?.sintomas}
        required
      />

      <div className="flex gap-x-3">
        <SelectField
          name="ids_problemas"
          label="Problemas Relacionados"
          error={state.errors?.ids_problemas}
          defaultValue={state.fields?.ids_problemas?.map((id) => id.toString())}
          required
          multiple
        >
          {problemas.map((problema) => (
            <option key={problema.id} value={problema.id}>
              {problema.id} {problema.categoria}
            </option>
          ))}
        </SelectField>
        <SelectField
          name="ids_incidentes"
          label="Incidentes relacionados"
          error={state.errors?.ids_incidentes}
          defaultValue={state.fields?.ids_incidentes?.map((id) =>
            id.toString(),
          )}
          required
          multiple
        >
          {incidentes.map((incidente) => (
            <option key={incidente.id} value={incidente.id}>
              {incidente.id} {incidente.informacion_adicional}
            </option>
          ))}
        </SelectField>
      </div>

      <TextAreaField
        name="descripcion"
        label="Descripción"
        error={state.errors?.descripcion}
        defaultValue={state.fields?.descripcion}
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el incidente"
          description={state.message}
        />
      )}
      <SubmitButton label="Crear Error Conocido" />
    </form>
  );
}

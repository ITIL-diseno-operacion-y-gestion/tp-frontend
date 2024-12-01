"use client";

import { useActionState } from "react";

import { actualizarProblema, crearProblema } from "@/api/actions/problemas";
import {
  Incidente,
  categoriasProblema,
  estadosProblema,
  prioridades,
} from "@/models/incidentes";
import { Problema, ProblemaCreate } from "@/models/problemas";
import { FormState } from "@/models/schemas";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState: FormState<ProblemaCreate> = {
  errors: {},
  message: "",
};

export function NuevoProblemaForm({
  incidentes,
  initialValues,
}: {
  incidentes: Incidente[];
  initialValues?: Problema;
}) {
  const editing = !!initialValues;
  const [state, action] = useActionState(
    editing ? actualizarProblema.bind(null, initialValues.id) : crearProblema,
    initialState,
  );

  return (
    <form className="space-y-4" action={action}>
      <div className="grid gap-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
        <SelectField
          label="Categoría"
          name="categoria"
          error={state.errors?.categoria}
          defaultValue={initialValues?.categoria}
          required
        >
          {categoriasProblema.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </SelectField>
        <SelectField
          label="Prioridad"
          name="prioridad"
          defaultValue={initialValues?.prioridad}
          error={state.errors?.prioridad}
          required
        >
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </SelectField>
        <SelectField
          label="Estado"
          name="estado"
          defaultValue={initialValues?.estado}
          error={state.errors?.estado}
          required
        >
          {estadosProblema.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <TextField
          name="nombre"
          label="Nombre"
          error={state.errors?.nombre}
          defaultValue={initialValues?.nombre}
          required
        />
        <TextField
          name="sintomas"
          label="Síntomas"
          error={state.errors?.sintomas}
          defaultValue={initialValues?.sintomas}
          required
        />
      </div>
      <SelectField
        label="Incidentes Relacionados"
        name="ids_incidentes"
        error={state.errors?.ids_incidentes}
        defaultValue={initialValues?.incidentes.map((x) => x.id.toString())}
        multiple
        required
      >
        {incidentes.map((incidente) => (
          <option key={incidente.id} value={incidente.id}>
            {incidente.categoria} - {incidente.servicios_afectados}
          </option>
        ))}
      </SelectField>
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el problema"
          description={state.message}
        />
      )}
      <SubmitButton
        label={editing ? "Actualizar Problema" : " Crear Problema"}
      />
    </form>
  );
}

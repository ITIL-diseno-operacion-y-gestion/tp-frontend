"use client";

import { crearProblema } from "@/api/actions/problemas";
import {
  Incidente,
  categoriasProblema,
  estadosProblema,
  prioridades,
} from "@/models/incidentes";
import { ProblemaCreate } from "@/models/problemas";
import { FormState } from "@/models/schemas";
import { User } from "@/models/users";

import { useFormState } from "react-dom";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

const initialState: FormState<ProblemaCreate> = {
  errors: {},
  message: "",
};

export function NuevoProblemaForm({
  usuarios,
  incidentes,
}: {
  usuarios: User[];
  incidentes: Incidente[];
}) {
  const [state, action] = useFormState(crearProblema, initialState);

  return (
    <form className="space-y-4" action={action}>
      <div className="grid gap-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3">
        <SelectField
          label="Categoría"
          name="categoria"
          error={state.errors?.categoria}
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
          name="sintomas"
          label="Síntomas"
          error={state.errors?.sintomas}
          required
        />
        <SelectField
          name="id_usuario"
          label="Usuario"
          error={state.errors?.id_usuario}
          required
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre} {usuario.apellido}
            </option>
          ))}
        </SelectField>
      </div>
      <SelectField
        label="Incidentes Relacionados"
        name="id_incidentes"
        error={state.errors?.ids_incidentes}
        multiple
        required
      >
        {incidentes.map((incidente) => (
          <option key={incidente.id} value={incidente.id}>
            {incidente.categoria} - {incidente.servicios_afectados}
          </option>
        ))}
      </SelectField>
      <SubmitButton label="Crear Problema" />
    </form>
  );
}

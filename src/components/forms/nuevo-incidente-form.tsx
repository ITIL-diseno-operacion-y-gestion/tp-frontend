"use client";

import { useActionState } from "react";

import { crearIncidente } from "@/api/actions/incidentes";
import { ItemConfiguracion } from "@/models/configuracion";
import {
  IncidenteCreate,
  categoriasProblema,
  formasNotificacion,
  prioridades,
} from "@/models/incidentes";
import { FormState } from "@/models/schemas";
import { User } from "@/models/users";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<IncidenteCreate> = {
  errors: {},
  message: "",
};

export function NuevoIncidenteForm({
  usuarios,
  articulos,
}: {
  usuarios: User[];
  articulos: ItemConfiguracion[];
}) {
  const [state, action] = useActionState(crearIncidente, initialState);

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField
          name="categoria"
          label="Categoría"
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
          name="forma_de_notificacion"
          label="Forma de notificación"
          error={state.errors?.forma_de_notificacion}
          required
        >
          {formasNotificacion.map((forma) => (
            <option key={forma} value={forma}>
              {forma}
            </option>
          ))}
        </SelectField>
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
        <SelectField
          name="prioridad"
          label="Prioridad"
          error={state.errors?.prioridad}
          required
        >
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </SelectField>
      </div>
      <TextField
        name="servicios_afectados"
        label="Servicios afectados"
        error={state.errors?.servicios_afectados}
        required
      />

      <TextField
        name="reportador"
        label="Reportador"
        error={state.errors?.reportador}
        required
      />

      <div className="flex gap-x-3">
        <SelectField
          name="usuarios_afectados"
          label="Usuarios afectados"
          error={state.errors?.usuarios_afectados}
          required
          multiple
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre} {usuario.apellido}
            </option>
          ))}
        </SelectField>
        <SelectField
          name="ids_articulos"
          label="Artículos de configuración afectados"
          error={state.errors?.ids_articulos}
          required
          multiple
        >
          {articulos.map((articulo) => (
            <option key={articulo.id} value={articulo.id}>
              {articulo.nombre}
            </option>
          ))}
        </SelectField>
      </div>

      <TextAreaField
        name="informacion_adicional"
        label="Información adicional"
        error={state.errors?.informacion_adicional}
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el incidente"
          description={state.message}
        />
      )}
      <SubmitButton label="Crear Incidente" />
    </form>
  );
}

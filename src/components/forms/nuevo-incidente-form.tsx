"use client";

import { useActionState } from "react";

import { actualizarIncidente, crearIncidente } from "@/api/actions/incidentes";
import { ItemConfiguracion } from "@/models/configuracion";
import {
  Incidente,
  IncidenteCreate,
  categoriasProblema,
  estadosProblema,
  formasNotificacion,
  prioridades,
} from "@/models/incidentes";
import { FormState } from "@/models/schemas";

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
  articulos,
  id_titular,
  initialValues,
}: {
  articulos: ItemConfiguracion[];
  id_titular: number;
  initialValues?: Incidente;
}) {
  const editing = !!initialValues;
  const [state, action] = useActionState(
    editing ? actualizarIncidente.bind(null, initialValues.id) : crearIncidente,
    initialState,
  );

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-3 md:flex-nowrap">
        <SelectField
          name="categoria"
          label="Categoría"
          error={state.errors?.categoria}
          defaultValue={state.fields?.categoria ?? initialValues?.categoria}
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
          error={
            state.errors?.forma_de_notificacion ??
            state.errors?.forma_de_notificacion
          }
          defaultValue={initialValues?.forma_de_notificacion}
          required
        >
          {formasNotificacion.map((forma) => (
            <option key={forma} value={forma}>
              {forma}
            </option>
          ))}
        </SelectField>
        <input name="id_usuario" value={id_titular} hidden readOnly />
        <SelectField
          name="prioridad"
          label="Prioridad"
          error={state.errors?.prioridad}
          defaultValue={state.fields?.prioridad ?? initialValues?.prioridad}
          required
        >
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <TextField
          name="nombre"
          label="Nombre"
          error={state.errors?.nombre}
          defaultValue={state.fields?.nombre ?? initialValues?.nombre}
          required
        />
        <SelectField
          name="estado"
          label="Estado"
          error={state.errors?.estado}
          defaultValue={
            state.fields?.estado ?? initialValues?.estado ?? undefined
          }
          required
        >
          {estadosProblema.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </SelectField>
      </div>
      <TextField
        name="servicios_afectados"
        label="Servicios afectados"
        error={state.errors?.servicios_afectados}
        defaultValue={
          state.fields?.servicios_afectados ??
          initialValues?.servicios_afectados
        }
        required
      />

      <div className="flex gap-x-3">
        <SelectField
          name="ids_articulos"
          label="Artículos de configuración afectados"
          error={state.errors?.ids_articulos}
          defaultValue={
            state.fields?.ids_articulos?.map((id) => id.toString()) ??
            initialValues?.articulos_afectados.map((x) => x.id.toString())
          }
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
        defaultValue={
          state.fields?.informacion_adicional ??
          initialValues?.informacion_adicional
        }
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el incidente"
          description={state.message}
        />
      )}
      <SubmitButton
        label={editing ? "Actualizar Incidente" : "Crear Incidente"}
      />
    </form>
  );
}

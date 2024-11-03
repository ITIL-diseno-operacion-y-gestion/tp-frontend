"use client";

import { useActionState } from "react";

import { actualizarItemConfiguracion } from "@/api/actions/configuracion";
import {
  ItemConfiguracion,
  estadoItemConfiguracion,
  tiposItemConfiguracion,
} from "@/models/configuracion";
import { FormState } from "@/models/schemas";
import { User } from "@/models/users";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<ItemConfiguracion> = {
  errors: {},
  message: "",
};

export function ActualizarConfiguracionForm({
  usuarios,
  id,
  initialValues,
}: {
  usuarios: User[];
  id: number;
  initialValues: ItemConfiguracion;
}) {
  const [state, action] = useActionState(
    actualizarItemConfiguracion.bind(null, id),
    initialState,
  );

  // TODO: Terminar el form

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <TextField
          name="nombre"
          label="Nombre"
          defaultValue={initialValues.nombre}
          error={state.errors?.nombre}
          required
        />
        <SelectField
          name="tipo"
          label="Tipo"
          defaultValue={initialValues.tipo}
          error={state.errors?.tipo}
          required
        >
          {tiposItemConfiguracion.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </SelectField>
        <TextField
          name="version"
          label="Versión"
          type="number"
          defaultValue={
            initialValues.version === null ? "" : initialValues.version
          }
          error={state.errors?.version}
          required
        />
      </div>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField
          name="id_titular"
          label="Titular"
          defaultValue={initialValues.id_titular}
          error={state.errors?.id_titular}
          required
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre}
            </option>
          ))}
        </SelectField>
        <TextField
          name="localizacion"
          label="Localización"
          defaultValue={initialValues.localizacion}
          error={state.errors?.localizacion}
          required
        />
        <TextField
          name="relacion_items"
          label="Relación de items"
          defaultValue={initialValues.relacion_items}
          error={state.errors?.relacion_items}
          required
        />
      </div>
      <TextAreaField
        name="descripcion"
        label="Descripción"
        defaultValue={initialValues.descripcion}
        error={state.errors?.descripcion}
        required
      />
      <TextAreaField
        name="info_fabricacion"
        label="Información de fabricación"
        defaultValue={initialValues.info_fabricacion}
        error={state.errors?.info_fabricacion}
        required
      />
      <SelectField
        name="estado"
        label="Estado"
        defaultValue={initialValues.estado}
        error={state.errors?.estado}
        required
      >
        {estadoItemConfiguracion.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </SelectField>
      {state.message && (
        <ErrorAlert
          title="Hubo un error al actualizar el artículo de configuración"
          description={state.message}
        />
      )}
      <SubmitButton label="Actualizar articulo de configuracion" />
    </form>
  );
}

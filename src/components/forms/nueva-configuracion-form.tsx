"use client";

import { useActionState } from "react";

import { crearItemConfiguracion } from "@/api/actions/configuracion";
import {
  ItemConfiguracionCreate,
  estadoItemConfiguracion,
  tiposItemConfiguracion,
} from "@/models/configuracion";
import { FormState } from "@/models/schemas";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<ItemConfiguracionCreate> = {
  errors: {},
  message: "",
};

export function NuevaConfiguracionForm({ id_titular }: { id_titular: number }) {
  const [state, action] = useActionState(crearItemConfiguracion, initialState);

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <TextField
          name="nombre"
          label="Nombre"
          error={state.errors?.nombre}
          required
        />
        <SelectField
          name="tipo"
          label="Tipo"
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
          error={state.errors?.version}
        />
      </div>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <input name="id_titular" value={id_titular} hidden readOnly />
        <TextField
          name="localizacion"
          label="Localización"
          error={state.errors?.localizacion}
          required
        />
        <TextField
          name="relacion_items"
          label="Relación de items"
          error={state.errors?.relacion_items}
          required
        />
      </div>
      <TextAreaField
        name="descripcion"
        label="Descripción"
        error={state.errors?.descripcion}
        required
      />
      <TextAreaField
        name="info_fabricacion"
        label="Información de fabricación"
        error={state.errors?.info_fabricacion}
        required
      />
      <SelectField
        name="estado"
        label="Estado"
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
          title="Hubo un error al crear el artículo de configuración"
          description={state.message}
        />
      )}
      <SubmitButton label="Crear articulo de configuracion" />
    </form>
  );
}

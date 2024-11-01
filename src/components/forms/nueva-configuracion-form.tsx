"use client";

import { crearItemConfiguracion } from "@/api/actions/configuracion";
import {
  ItemConfiguracionCreate,
  estadoItemConfiguracion,
  tiposItemConfiguracion,
} from "@/models/configuracion";
import { FormState } from "@/models/schemas";
import { User } from "@/models/users";

import { useFormState } from "react-dom";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<ItemConfiguracionCreate> = {
  errors: {},
  message: "",
};

export function NuevaConfiguracionForm({ usuarios }: { usuarios: User[] }) {
  const [state, action] = useFormState(crearItemConfiguracion, initialState);

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
          required
        />
      </div>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField
          name="id_titular"
          label="Titular"
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

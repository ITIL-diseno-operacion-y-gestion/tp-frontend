"use client";

import { crearItemConfiguracion } from "@/api/actions/configuracion";
import { tiposItemConfiguracion } from "@/app/configuracion/models";
import { User } from "@/models/interfaces";

import { useFormState } from "react-dom";

import { ErrorDisplay } from "../form/error-display";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState = {
  msg: "",
};

export function NuevaConfiguracionForm({ usuarios }: { usuarios: User[] }) {
  const [state, action] = useFormState(crearItemConfiguracion, initialState);

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <TextField name="nombre" label="Nombre" required />
        <SelectField name="tipo" label="Tipo" required>
          {tiposItemConfiguracion.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </SelectField>
        <TextField name="version" label="Versión" type="number" required />
      </div>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField name="titular" label="Titular" required>
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre}
            </option>
          ))}
        </SelectField>
        <TextField name="localizacion" label="Localización" />
        <TextField name="relacion_items" label="Relación de items" />
      </div>
      <TextAreaField name="descripcion" label="Descripción" required />

      <TextAreaField
        name="info_fabricacion"
        label="Información de fabricación"
      />
      {state.msg && <ErrorDisplay error={state.msg} />}
      <SubmitButton label="Crear articulo de configuracion" />
    </form>
  );
}

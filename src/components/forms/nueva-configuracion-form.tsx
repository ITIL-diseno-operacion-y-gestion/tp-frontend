"use client";

import { crearItemConfiguracion } from "@/api/actions/configuracion";
import { tiposItemConfiguracion } from "@/app/configuracion/models";

import { useFormState } from "react-dom";

import { ErrorDisplay } from "../form/error-display";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState = {
  msg: "",
};

export function NuevaConfiguracionForm() {
  const [state, action] = useFormState(crearItemConfiguracion, initialState);

  return (
    <form className="space-y-4" action={action}>
      <TextField name="nombre" label="Nombre" required />
      <TextAreaField name="descripcion" label="Descripción" required />
      <SelectField name="tipo" label="Tipo" required>
        {tiposItemConfiguracion.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </SelectField>
      <TextField name="version" label="Versión" type="number" required />
      <TextField name="titular" label="Titular" required />
      <TextAreaField
        name="info_fabricacion"
        label="Información de fabricación"
      />
      <TextField name="localizacion" label="Localización" />
      <TextField name="relacion_items" label="Relación de items" />
      {state.msg && <ErrorDisplay error={state.msg} />}
      <SubmitButton label="Crear articulo de configuracion" />
    </form>
  );
}

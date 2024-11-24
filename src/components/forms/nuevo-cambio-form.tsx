"use client";

import { useActionState } from "react";

import { crearCambio } from "@/api/actions/cambios";
import { CambioCreate, estadosCambio, impactos } from "@/models/cambios";
import { ItemConfiguracion } from "@/models/configuracion";
import { categoriasProblema, prioridades } from "@/models/incidentes";
import { FormState } from "@/models/schemas";

import { ErrorAlert } from "../form/error-alert";
import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

const initialState: FormState<CambioCreate> = {
  errors: {},
  message: "",
};

export function NuevoCambioForm({
  articulos,
  id_titular,
}: {
  articulos: ItemConfiguracion[];
  id_titular: number;
}) {
  const [state, action] = useActionState(crearCambio, initialState);

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
          name="impacto"
          label="Impacto"
          error={state.errors?.impacto}
          required
        >
          {impactos.map((impacto) => (
            <option key={impacto} value={impacto}>
              {impacto}
            </option>
          ))}
        </SelectField>
        <SelectField
          name="estado"
          label="Estado"
          error={state.errors?.estado}
          required
        >
          {estadosCambio.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
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
        name="horas_necesarias"
        label="Horas Necesarias"
        error={state.errors?.horas_necesarias}
        type="number"
        required
      />
      <TextField
        name="costo_estimado"
        label="Costo Estimado"
        error={state.errors?.costo_estimado}
        type="number"
        required
      />
      <TextField
        name="fecha_de_implementacion"
        label="Fecha de Implementación"
        error={state.errors?.fecha_de_implementacion}
        type="date"
        required
      />

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
      <div className="flex gap-x-3">
        <input name="id_titular" value={id_titular} hidden />
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
        name="descripcion"
        label="Descripcion"
        error={state.errors?.descripcion}
        required
      />
      <TextAreaField
        name="motivo_de_implementacion"
        label="Motivo de Implementación"
        error={state.errors?.motivo_de_implementacion}
        required
      />
      <TextAreaField
        name="riesgos_asociados"
        label="Riesgos Asociados"
        error={state.errors?.riesgos_asociados}
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el cambio"
          description={state.message}
        />
      )}
      <SubmitButton label="Crear Cambio" />
    </form>
  );
}

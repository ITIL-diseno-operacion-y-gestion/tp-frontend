"use client";

import { useActionState } from "react";

import { actualizarCambio, crearCambio } from "@/api/actions/cambios";
import {
  Cambio,
  CambioCreate,
  estadosCambio,
  impactos,
} from "@/models/cambios";
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
  initialValues,
}: {
  articulos: ItemConfiguracion[];
  id_titular: number;
  initialValues?: Cambio;
}) {
  const editing = !!initialValues;
  const [state, action] = useActionState(
    editing ? actualizarCambio.bind(null, initialValues.id) : crearCambio,
    initialState,
  );

  return (
    <form className="space-y-4" action={action}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField
          name="categoria"
          label="Categoría"
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
          name="impacto"
          label="Impacto"
          error={state.errors?.impacto}
          defaultValue={initialValues?.impacto}
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
          defaultValue={initialValues?.estado}
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
          defaultValue={initialValues?.prioridad}
          required
        >
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </SelectField>
      </div>
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <TextField
          name="horas_necesarias"
          label="Horas Necesarias"
          error={state.errors?.horas_necesarias}
          defaultValue={initialValues?.horas_necesarias}
          type="number"
          required
        />
        <TextField
          name="costo_estimado"
          label="Costo Estimado"
          error={state.errors?.costo_estimado}
          defaultValue={initialValues?.costo_estimado}
          type="number"
          required
        />
      </div>
      <TextField
        name="nombre"
        label="Nombre"
        error={state.errors?.nombre}
        defaultValue={initialValues?.nombre}
        required
      />
      {/* TODO: Ver como hacer para q se setee bien el default value */}
      <TextField
        name="fecha_de_implementacion"
        label="Fecha de Implementación"
        error={state.errors?.fecha_de_implementacion}
        defaultValue={
          initialValues?.fecha_de_implementacion &&
          new Date(initialValues.fecha_de_implementacion).toISOString()
        }
        type="date"
        required
      />

      <SelectField
        name="categoria"
        label="Categoría"
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
      <div className="flex gap-x-3">
        <input name="id_solicitante" value={id_titular} hidden readOnly />
        <SelectField
          name="ids_articulos"
          label="Artículos de configuración afectados"
          error={state.errors?.ids_articulos}
          defaultValue={initialValues?.articulos_afectados.map((articulo) =>
            articulo.id.toString(),
          )}
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
        defaultValue={initialValues?.descripcion}
        required
      />
      <TextAreaField
        name="motivo_de_implementacion"
        label="Motivo de Implementación"
        error={state.errors?.motivo_de_implementacion}
        defaultValue={initialValues?.motivo_de_implementacion}
        required
      />
      <TextAreaField
        name="riesgos_asociados"
        label="Riesgos Asociados"
        error={state.errors?.riesgos_asociados}
        defaultValue={initialValues?.riesgos_asociados}
        required
      />
      {state.message && (
        <ErrorAlert
          title="Hubo un error al crear el cambio"
          description={state.message}
        />
      )}
      <SubmitButton label={editing ? "Actualizar Cambio" : "Crear Cambio"} />
    </form>
  );
}

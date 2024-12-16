"use client";

import { Reporte } from "@/models/reportes";

import { ChartEstadoArticulosConfiguracion } from "./charts/chart-estado-articulos";
import { ChartTipoArticulos } from "./charts/chart-tipo-articulos";

export function ArticuloReporteView({
  articulos,
}: {
  articulos: Reporte["articulos"];
}) {
  const { estado, tipo } = articulos;
  return (
    <div className="grid grid-cols-2 gap-6 border p-6">
      <div>
        <h3 className="text-xl font-bold">Estado</h3>
        <ChartEstadoArticulosConfiguracion estado={estado} />
      </div>

      <div>
        <h3 className="text-xl font-bold">Tipo</h3>
        <ChartTipoArticulos tipo={tipo} />
      </div>
    </div>
  );
}

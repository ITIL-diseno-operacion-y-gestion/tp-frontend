"use client";

import { Reporte } from "@/models/reportes";

import { ChartEstadoArticulosConfiguracion } from "./charts/chart-estado-articulos";
import { ChartTipoArticulos } from "./charts/chart-tipo-articulos";
import { TotalView } from "./total-view";

export function ArticuloReporteView({
  articulos,
}: {
  articulos: Reporte["articulos"];
}) {
  const { estado, tipo, total } = articulos;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 border p-6">
      <div>
        <h3 className="text-xl font-bold">Estado</h3>
        <ChartEstadoArticulosConfiguracion estado={estado} />
      </div>

      <div>
        <h3 className="text-xl font-bold">Tipo</h3>
        <ChartTipoArticulos tipo={tipo} />
      </div>

      <TotalView total={total} />
    </div>
  );
}

import { Reporte } from "@/models/reportes";

import { ChartCategoria } from "./charts/chart-categoria";
import { ChartPrioridad } from "./charts/chart-prioridad";
import { ArticuloCantidadView } from "./articulo-cantidad-view";

export function IncidentesReporteView({
  incidentes,
}: {
  incidentes: Reporte["incidentes"];
}) {
  const { generales, personales } = incidentes;

  const IncidenteReporte = ({
    prioridad,
    categoria,
    articulo,
  }: Reporte["incidentes"]["generales"]) => {
    return (
      <div className="grid grid-cols-3 border p-6 sm:grid-cols-2 md:grid-cols-3">
        <ArticuloCantidadView listado={articulo} entidad="incidente" />

        <div>
          <h3 className="text-lg font-bold">Categoría</h3>
          <ChartCategoria categoria={categoria} />
        </div>

        <div>
          <h3 className="text-lg font-bold">Prioridad</h3>
          <ChartPrioridad prioridad={prioridad} />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Generales</h2>
      <IncidenteReporte {...generales} />
      <h2 className="text-2xl font-bold">Personales</h2>
      <IncidenteReporte {...personales} />
    </>
  );
}

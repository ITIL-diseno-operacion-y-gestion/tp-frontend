import { Reporte } from "@/models/reportes";

import { ArticuloCantidadView } from "./articulo-cantidad-view";
import { ChartCategoria } from "./charts/chart-categoria";
import { ChartPrioridad } from "./charts/chart-prioridad";
import { ConformidadResolucionPromedio } from "./conformidad-resolucion-promedio";
import { TotalView } from "./total-view";

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
    conformidad_resolucion_promedio,
    total,
  }: Reporte["incidentes"]["generales"]) => {
    return (
      <div className="grid grid-cols-3 border p-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-bold">Categoría</h4>
          <ChartCategoria categoria={categoria} />
        </div>

        <div>
          <h4 className="text-lg font-bold">Prioridad</h4>
          <ChartPrioridad prioridad={prioridad} />
        </div>

        <TotalView total={total} />
        <ArticuloCantidadView listado={articulo} entidad="incidente" />

        <ConformidadResolucionPromedio
          conformidad_resolucion_promedio={conformidad_resolucion_promedio}
        />
      </div>
    );
  };

  return (
    <>
      <h3 className="text-xl font-bold">Generales</h3>
      <IncidenteReporte {...generales} />
      <h3 className="text-xl font-bold">Personales</h3>
      <IncidenteReporte {...personales} />
    </>
  );
}

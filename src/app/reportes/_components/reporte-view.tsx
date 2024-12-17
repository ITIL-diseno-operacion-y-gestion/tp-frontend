import { Reporte } from "@/models/reportes";

import { ArticuloReporteView } from "./articulos-reporte-view";
import { CambiosReporteView } from "./cambios-reporte-view";
import { ErroresReporteView } from "./errores-reporte-view";
import { IncidentesReporteView } from "./incidentes-reporte-view";
import { ProblemasReporteView } from "./problemas-reporte";

export default function ReporteView({ reporte }: { reporte: Reporte }) {
  const { articulos, cambios, errores, incidentes, problemas } = reporte;

  return (
    <div className="border p-6 [&>div]:mb-6">
      <h2 className="text-2xl font-bold">Artículos</h2>
      <ArticuloReporteView articulos={articulos} />
      
      <h2 className="text-2xl font-bold">Cambios</h2>
      <CambiosReporteView cambios={cambios} />
      
      <h2 className="text-2xl font-bold">Errores</h2>
      <ErroresReporteView errores={errores} />

      <h2 className="text-2xl font-bold">Incidentes</h2>
      <IncidentesReporteView incidentes={incidentes} />
      
      <h2 className="text-2xl font-bold">Problemas</h2>
      <ProblemasReporteView problemas={problemas} />
    </div>
  );
}

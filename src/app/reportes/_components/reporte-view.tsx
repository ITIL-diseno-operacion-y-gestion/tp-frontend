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
      <p>
        <strong>Artículos:</strong>
      </p>
      <ArticuloReporteView articulos={articulos} />
      <p>
        <strong>Cambios:</strong>
      </p>
      <CambiosReporteView cambios={cambios} />
      <p>
        <strong>Errores:</strong>
      </p>
      <ErroresReporteView errores={errores} />

      <p>
        <strong>Incidentes:</strong>
      </p>
      <IncidentesReporteView incidentes={incidentes} />
      <p>
        <strong>Problemas:</strong>
      </p>
      <ProblemasReporteView problemas={problemas} />
    </div>
  );
}

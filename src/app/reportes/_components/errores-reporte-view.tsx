import { Reporte } from "@/models/reportes";

import { ArticuloCantidadView } from "./articulo-cantidad-view";

export function ErroresReporteView({
  errores,
}: {
  errores: Reporte["errores"];
}) {
  const { incidente, problema } = errores;

  return (
    <div className="border p-6">
      <ArticuloCantidadView
        listado={incidente}
        entidad="error"
        entidadTiene="incidentes"
      />

      <ArticuloCantidadView
        listado={problema}
        entidad="error"
        entidadTiene="problemas"
      />
    </div>
  );
}

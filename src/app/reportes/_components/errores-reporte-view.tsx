import { Reporte } from "@/models/reportes";

import { ArticuloCantidadView } from "./articulo-cantidad-view";
import { TotalView } from "./total-view";

export function ErroresReporteView({
  errores,
}: {
  errores: Reporte["errores"];
}) {
  const { incidente, problema, total } = errores;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 border p-6">
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

      <TotalView total={total} />
    </div>
  );
}

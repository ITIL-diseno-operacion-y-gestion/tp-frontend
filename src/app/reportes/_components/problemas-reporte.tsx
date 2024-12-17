import { Reporte } from "@/models/reportes";

import { ArticuloCantidadView } from "./articulo-cantidad-view";
import { ChartCategoria } from "./charts/chart-categoria";
import { ChartEstadoProblema } from "./charts/chart-estado-problema";
import { TotalView } from "./total-view";
import { TiempoResolucionPromedio } from "./tiempo-resolucion-promedio";

export function ProblemasReporteView({
  problemas,
}: {
  problemas: Reporte["problemas"];
}) {
  const { generales, personales } = problemas;

  const ProblemaView = ({
    categoria,
    estado,
    incidente,
    tiempo_promedio_resolucion,
    total,
  }: Reporte["problemas"]["generales"]) => {
    return (
      <div className="grid border p-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-bold">Estado</h4>
          <ChartEstadoProblema estado={estado} />
        </div>

        <div>
          <h4 className="text-lg font-bold">Categoría</h4>
          <ChartCategoria categoria={categoria} />
        </div>
        <TotalView total={total} />

        <ArticuloCantidadView
          listado={incidente}
          entidad="problema"
          entidadTiene="incidentes"
        />

        <TiempoResolucionPromedio tiempo_promedio_resolucion={tiempo_promedio_resolucion} />
      </div>
    );
  };

  return (
    <>
      <h3 className="text-xl font-bold">Generales</h3>
      <ProblemaView {...generales} />
      <h3 className="text-xl font-bold">Personales</h3>
      <ProblemaView {...personales} />
    </>
  );
}

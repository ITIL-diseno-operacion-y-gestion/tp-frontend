import { Reporte } from "@/models/reportes";

import { ArticuloCantidadView } from "./articulo-cantidad-view";
import { ChartCategoria } from "./charts/chart-categoria";
import { ChartEstadoProblema } from "./charts/chart-estado-problema";

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
  }: Reporte["problemas"]["generales"]) => {
    return (
      <div className="grid border p-6 sm:grid-cols-2 md:grid-cols-3">
        <ArticuloCantidadView
          listado={incidente}
          entidad="problema"
          entidadTiene="incidentes"
        />

        <div>
          <h3 className="text-lg font-bold">Estado</h3>
          <ChartEstadoProblema estado={estado} />
        </div>

        <div>
          <h3 className="text-lg font-bold">Categoría</h3>
          <ChartCategoria categoria={categoria} />
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Generales</h2>
      <ProblemaView {...generales} />
      <h2 className="text-2xl font-bold">Personales</h2>
      <ProblemaView {...personales} />
    </>
  );
}

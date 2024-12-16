import { Reporte } from "@/models/reportes";

import { ChartEstadoProblema } from "./charts/chart-estado-problema";
import { ChartCategoria } from "./charts/chart-categoria";

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
        <div>
          <h3 className="text-lg font-bold">Incidentes</h3>
          {Object.entries(incidente).map(([key, value]) => (
            <ul key={key}>
              <li>
                {key}: {value || 0}
              </li>
            </ul>
          ))}
        </div>

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

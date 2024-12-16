import { Reporte } from "@/models/reportes";

import { ChartCategoria } from "./charts/chart-categoria";
import { ChartEstadoCambios } from "./charts/chart-estado-cambios";
import { ChartPrioridad } from "./charts/chart-prioridad";

export function CambiosReporteView({
  cambios,
}: {
  cambios: Reporte["cambios"];
}) {
  const { estado, articulo, categoria, prioridad } = cambios;

  return (
    <div className="grid border p-6 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="text-xl font-bold">Estado</h3>
        <ChartEstadoCambios estado={estado} />
      </div>


      <div>
        <h3 className="text-xl font-bold">Categoría</h3>
        <ChartCategoria categoria={categoria} />
      </div>

      <div>
        <h3 className="text-xl font-bold">Prioridad</h3>
        <ChartPrioridad prioridad={prioridad} />
      </div>

      <div>
        <h3 className="text-xl font-bold">Artículo</h3>
        {articulo &&
          Object.entries(articulo).map(([key, value]) => (
            <ul key={key}>
              <li>
                {key}: {JSON.stringify(value) || 0}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}

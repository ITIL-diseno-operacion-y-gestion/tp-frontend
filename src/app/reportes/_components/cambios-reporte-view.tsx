import { Reporte } from "@/models/reportes";
import { ChartEstadoCambios } from "./charts/chart-estado-cambios";
import { ChartPrioridad } from "./charts/chart-prioridad";
import { ChartCategoria } from "./charts/chart-categoria";

export function CambiosReporteView({
  cambios,
}: {
  cambios: Reporte["cambios"];
}) {
  const { estado, articulo, categoria, prioridad } = cambios;

  return (
    <div className="border p-6">
      <p>
        <strong>Estado:</strong>
      </p>
      <ChartEstadoCambios estado={estado} />

      <p>
        <strong>Artículo:</strong>
      </p>
      {articulo && Object.entries(articulo).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {JSON.stringify(value) || 0}
          </li>
        </ul>
      ))}

      <p>
        <strong>Categoría:</strong>
      </p>
      <ChartCategoria categoria={categoria} />

      <p>
        <strong>Prioridad:</strong>
      </p>
      <ChartPrioridad prioridad={prioridad} />
    </div>
  );
}

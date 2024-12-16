import { Reporte } from "@/models/reportes";
import { ChartEstadoCambios } from "./charts/chart-estado-cambios";

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
      {Object.entries(categoria).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}

      <p>
        <strong>Prioridad:</strong>
      </p>
      {Object.entries(prioridad).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}
    </div>
  );
}

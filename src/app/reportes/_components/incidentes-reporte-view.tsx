import { Reporte } from "@/models/reportes";

export function IncidentesReporteView({
  incidentes,
}: {
  incidentes: Reporte["incidentes"];
}) {
  const { articulo, categoria, prioridad } = incidentes;

  return (
    <div className="border p-6">
      <p>
        <strong>Artículo:</strong>
      </p>
      {Object.entries(articulo).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
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

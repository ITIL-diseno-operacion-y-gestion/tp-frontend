import { Reporte } from "@/models/reportes";

export function ProblemasReporteView({
  problemas,
}: {
  problemas: Reporte["problemas"];
}) {
  const { estado, categoria, incidente } = problemas;

  return (
    <div className="border p-6">
      <p>
        <strong>Estado:</strong>
      </p>
      {Object.entries(estado).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}

      <p>
        <strong>Incidente:</strong>
      </p>
      {Object.entries(incidente).map(([key, value]) => (
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
    </div>
  );
}

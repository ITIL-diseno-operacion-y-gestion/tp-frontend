import { Reporte } from "@/models/reportes";

export function ErroresReporteView({
  errores,
}: {
  errores: Reporte["errores"];
}) {
  const { incidente, problema } = errores;

  return (
    <div className="border p-6">
      <p>
        <strong>Incidente:</strong>
      </p>
      {Object.entries(incidente).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {JSON.stringify(value) || 0}
          </li>
        </ul>
      ))}

      <p>
        <strong>Problema:</strong>
      </p>
      {Object.entries(problema).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {JSON.stringify(value) || 0}
          </li>
        </ul>
      ))}
    </div>
  );
}

import { Reporte } from "@/models/reportes";

export function IncidentesReporteView({
  incidentes,
}: {
  incidentes: Reporte["incidentes"];
}) {
  const { generales, personales } = incidentes;

  const IncidenteReporte = ({
    prioridad,
    categoria,
    articulo,
  }: Reporte["incidentes"]["generales"]) => {
    return (
      <div className="border p-6">
        <p>
          <strong>Artículo:</strong>
        </p>
        {articulo &&
          Object.entries(articulo).map(([key, value]) => (
            <ul key={key}>
              <li>
                {key}: {value || 0}
              </li>
            </ul>
          ))}

        <p>
          <strong>Categoría:</strong>
        </p>
        {categoria &&
          Object.entries(categoria).map(([key, value]) => (
            <ul key={key}>
              <li>
                {key}: {value || 0}
              </li>
            </ul>
          ))}

        <p>
          <strong>Prioridad:</strong>
        </p>
        {prioridad &&
          Object.entries(prioridad).map(([key, value]) => (
            <ul key={key}>
              <li>
                {key}: {value || 0}
              </li>
            </ul>
          ))}
      </div>
    );
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Generales</h2>
      <IncidenteReporte {...generales} />
      <h2 className="text-2xl font-bold">Personales</h2>
      <IncidenteReporte {...personales} />
    </>
  );
}


import { Reporte } from "@/models/reportes";


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
      <div className="border p-6">
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


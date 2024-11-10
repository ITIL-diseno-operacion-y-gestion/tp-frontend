import { Reporte } from "@/models/reportes";

export function ArticuloReporteView({
  articulos,
}: {
  articulos: Reporte["articulos"];
}) {
  const { estado, tipo } = articulos;

  return (
    <div className="border p-6">
      <p>
        <strong>Estado:</strong>
      </p>
      <ul>
        <li>En almacen: {estado["en almacen"] || 0}</li>
        <li>En producción: {estado["en produccion"] || 0}</li>
        <li>En mantenimiento: {estado["en mantenimiento"] || 0}</li>
        <li>En creación: {estado["en creacion"] || 0}</li>
        <li>En prueba: {estado["en prueba"] || 0}</li>
        <li>Encargado: {estado["encargado"] || 0}</li>
        <li>Planeado: {estado["planeado"] || 0}</li>
      </ul>

      <p>
        <strong>Tipo:</strong>
      </p>
      {Object.entries(tipo).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}
    </div>
  );
}

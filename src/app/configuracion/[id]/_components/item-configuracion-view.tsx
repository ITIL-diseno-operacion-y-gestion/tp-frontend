import { ItemConfiguracion } from "../../models";

export function ItemConfiguracionView({ item }: { item: ItemConfiguracion }) {
  const {
    descripcion,
    tipo,
    version,
    fecha_de_alta,
    esta_activo,
    titular,
    id,
    nombre,
    info_fabricacion,
    localizacion,
    relacion_items,
  } = item;

  return (
    <div className="rounded bg-white p-8 shadow-md">
      <h1 className="text-2xl font-bold">{nombre}</h1>
      <p className="text-sm text-gray-600">{descripcion}</p>
      <div className="mt-4">
        <p>
          <span className="font-semibold">Tipo:</span> {tipo}
        </p>
        <p>
          <span className="font-semibold">Versión:</span> {version}
        </p>
        <p>
          <span className="font-semibold">Fecha de alta:</span> {fecha_de_alta}
        </p>
        <p>
          <span className="font-semibold">Activo:</span>{" "}
          {esta_activo ? "Sí" : "No"}
        </p>
        <p>
          <span className="font-semibold">Titular:</span> {titular}
        </p>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p>
          <span className="font-semibold">Información de fabricación:</span>{" "}
          {info_fabricacion}
        </p>
        <p>
          <span className="font-semibold">Localización:</span> {localizacion}
        </p>
        <p>
          <span className="font-semibold">Relación de items:</span>{" "}
          {relacion_items}
        </p>
      </div>
    </div>
  );
}

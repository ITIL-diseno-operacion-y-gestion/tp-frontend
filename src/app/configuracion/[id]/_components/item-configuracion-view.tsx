import { ChipEstadoConfiguracion } from "@/components/chips/chip-estado-configuracion";
import { ChipFecha } from "@/components/chips/chip-fecha";
import { ChipTipo } from "@/components/chips/chip-tipo";
import { ItemConfiguracion } from "@/models/configuracion";

export function ItemConfiguracionView({ item }: { item: ItemConfiguracion }) {
  const {
    nombre,
    tipo,
    info_fabricacion,
    localizacion,
    estado,
    fecha_de_alta,
    id_titular,
    descripcion,
    version,
    relacion_items,
    id,
    esta_activo,
  } = item;

  return (
    <div className="mx-auto max-w-lg rounded bg-white p-8 shadow-md">
      <h1 className="text-2xl font-bold">{nombre}</h1>
      <p className="text-sm text-gray-600">{descripcion}</p>
      <div className="mt-4">
        <p>
          <span className="font-semibold">Tipo:</span> <ChipTipo tipo={tipo} />
        </p>
        <p>
          <span className="font-semibold"> Estado:</span>
          <ChipEstadoConfiguracion estado={estado} />
        </p>
        <p>
          <span className="font-semibold">Versión:</span> {version}
        </p>
        <div className="flex gap-2">
          <span className="font-semibold">Fecha de alta:</span>
          <ChipFecha fecha={fecha_de_alta} />
        </div>
        <p>
          <span className="font-semibold">Activo:</span>{" "}
          {esta_activo ? "Sí" : "No"}
        </p>
        <p>
          <span className="font-semibold">Titular:</span> {id_titular}
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

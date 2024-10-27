import { ItemConfiguracionView } from "@/app/configuracion/[id]/_components/item-configuracion-view";

import { Incidente } from "../../models";

export default function IncidenteView({ incidente }: { incidente: Incidente }) {
  const {
    id,
    id_usuario,
    fecha_de_alta,
    forma_de_notificacion,
    usuarios_afectados,
    servicios_afectados,
    prioridad,
    categoria,
    informacion_adicional,
    articulos_afectados,
  } = incidente;

  return (
    <div className="px-4">
      <p>Id: {id}</p>
      <p>Usuario: {id_usuario}</p>
      <p>Fecha de alta: {fecha_de_alta}</p>
      <p>Forma de notificación: {forma_de_notificacion}</p>
      <p>Usuarios afectados: {usuarios_afectados}</p>
      <p>Servicios afectados: {servicios_afectados}</p>
      <p>Prioridad: {prioridad}</p>
      <p>Categoría: {categoria}</p>
      <p>Información adicional: {informacion_adicional}</p>
      <p>Artículos afectados:</p>
      <ul className="mt-4 space-y-4">
        {articulos_afectados?.map((articulo) => (
          <li key={articulo.id}>
            <ItemConfiguracionView item={articulo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

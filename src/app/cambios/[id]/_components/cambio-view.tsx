import Link from "next/link";

import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { formatDate } from "@/lib/utils";
import { Cambio } from "@/models/cambios";

export function CambioView({ cambio }: { cambio: Cambio }) {
  return (
    <div>
      <p>ID: {cambio.id}</p>
      <p>Estado: {cambio.estado}</p>
      <p>
        Prioridad: <ChipPrioridad prioridad={cambio.prioridad} />
      </p>
      <p>Fecha de Creacion: {formatDate(cambio.fecha_de_creacion)}</p>
      <p>
        Fecha de Implementación: {formatDate(cambio.fecha_de_implementacion)}
      </p>
      <p>Impacto: {cambio.impacto}</p>
      <p>Costo Estimado: {cambio.costo_estimado}</p>
      <p>Categoria: {cambio.categoria}</p>
      <p>Riesgos Asociados: {cambio.riesgos_asociados}</p>
      <p>Horas Necesarias: {cambio.horas_necesarias}</p>
      <p>Descripcion: {cambio.descripcion}</p>
      <p>Motivo de Implementacion: {cambio.motivo_de_implementacion}</p>
      <p className="space-x-4">
        Articulos Afectados:{" "}
        {cambio.articulos_afectados.map((articulo) => (
          <Link
            href={`/configuracion/${articulo.id}`}
            key={articulo.id}
            className="text-blue-500 hover:underline"
          >
            {articulo.nombre}
          </Link>
        ))}
      </p>
    </div>
  );
}

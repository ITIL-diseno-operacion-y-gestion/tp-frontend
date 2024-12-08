import Link from "next/link";

import { Problema } from "@/models/problemas";

import { useDraggable } from "@dnd-kit/core";

import { ChipPrioridad } from "../../../components/chips/chip-prioridad";
import { ChipCategoria } from "@/components/chips/chip-categoria";

export function DraggableProblema({ problema }: { problema: Problema }) {
  const { categoria, sintomas, prioridad, id, nombre } = problema;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="px-4"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="h-56 w-full overflow-clip bg-gray-50 px-4 py-3 shadow-lg">
        <h4 className="text-xl font-bold mb-2">{nombre}</h4>
        <ChipCategoria categoria={categoria} />
        <p className="line-clamp-3">{sintomas}</p>
        <ChipPrioridad prioridad={prioridad} />
        <Link
          href={`/problemas/${id}`}
          className="underline-offset-3 mt-4 block underline hover:font-bold"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

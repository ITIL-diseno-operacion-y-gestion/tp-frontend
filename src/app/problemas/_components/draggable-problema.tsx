import Link from "next/link";

import { useDraggable } from "@dnd-kit/core";

import { Problema } from "../models";
import { ChipPrioridad } from "./chip-prioridad";

export function DraggableProblema({ problema }: { problema: Problema }) {
  const { categoria, sintomas, id_usuario, prioridad, id } = problema;

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
        <h4 className="text-xl font-bold">{categoria}</h4>
        <p className="line-clamp-3">{sintomas}</p>
        <p>{id_usuario}</p>
        <ChipPrioridad prioridad={prioridad} />
        <Link href={`/problemas/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
}

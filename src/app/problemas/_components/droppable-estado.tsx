import { cn } from "@/lib/utils";
import { EstadoProblema } from "@/models/incidentes";

import { useDroppable } from "@dnd-kit/core";

import { ChipEstado } from "../../../components/chips/chip-estado";
import { bgEstado } from "../_lib/colores";

export function DroppableEstado({
  estado,
  children,
}: {
  estado: EstadoProblema;
  children: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({
    id: estado,
  });

  return (
    <section className={`${bgEstado[estado]} min-w-64`}>
      <ChipEstado estado={estado} />
      <ul
        ref={setNodeRef}
        className={cn(
          "h-[calc(100%-36px)] space-y-4 pb-10 pt-4", // le resto 36px del ChipEstado para que no haga overflow
        )}
      >
        {children}
      </ul>
    </section>
  );
}
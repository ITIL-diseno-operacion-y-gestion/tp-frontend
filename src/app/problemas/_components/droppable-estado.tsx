import { cn, uppercaseFirst } from "@/lib/utils";
import { EstadoProblema } from "@/models/incidentes";

import { useDroppable } from "@dnd-kit/core";

import { bgEstado, colorEstado } from "../_lib/colores";

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

function ChipEstado({ estado }: { estado: EstadoProblema }) {
  return (
    <h3
      className={`min-w-52 px-2 py-1 text-center text-lg font-semibold text-white ${colorEstado[estado]}`}
    >
      {uppercaseFirst(estado)}
    </h3>
  );
}
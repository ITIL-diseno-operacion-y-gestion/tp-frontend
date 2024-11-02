import { Prioridad } from "@/models/incidentes";

import { colorPrioridad } from "../_lib/colores";

export function ChipPrioridad({ prioridad }: { prioridad: Prioridad }) {
  return (
    <span
      className={`rounded px-2 py-1 text-white ${colorPrioridad[prioridad]}`}
    >
      {prioridad}
    </span>
  );
}

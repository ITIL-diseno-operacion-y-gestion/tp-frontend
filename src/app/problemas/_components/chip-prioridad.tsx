import { colorPrioridad } from "../_lib/colores";
import { Problema } from "../models";

export function ChipPrioridad({
  prioridad,
}: {
  prioridad: Problema["prioridad"];
}) {
  return (
    <span
      className={`rounded px-2 py-1 text-white ${colorPrioridad[prioridad]}`}
    >
      {prioridad}
    </span>
  );
}

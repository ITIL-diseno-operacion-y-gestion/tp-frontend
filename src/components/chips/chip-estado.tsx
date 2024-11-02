import { uppercaseFirst } from "@/lib/utils";
import { EstadoProblema } from "@/models/incidentes";

import { colorEstado } from "../../app/problemas/_lib/colores";

export function ChipEstado({ estado }: { estado: EstadoProblema }) {
  // TODO: No es un chip, debería sacar de acá
  return (
    <h3
      className={`min-w-52 px-2 py-1 text-center text-lg font-semibold text-white ${colorEstado[estado]}`}
    >
      {uppercaseFirst(estado)}
    </h3>
  );
}

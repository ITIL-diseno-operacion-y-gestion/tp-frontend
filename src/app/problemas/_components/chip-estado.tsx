import { uppercaseFirst } from "@/lib/utils";

import { colorEstado } from "../_lib/colores";
import { Problema } from "../models";

export function ChipEstado({ estado }: { estado: Problema["estado"] }) {
  return (
    <h3
      className={`min-w-52 px-2 py-1 text-center text-lg font-semibold text-white ${colorEstado[estado]}`}
    >
      {uppercaseFirst(estado)}
    </h3>
  );
}

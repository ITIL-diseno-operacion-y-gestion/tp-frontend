import { ChipEstadoProblema } from "@/components/chips/chip-estado-problema";
import { EstadoProblema } from "@/models/incidentes";

import { CustomCellRendererProps } from "ag-grid-react";

export function EstadoCell(params: CustomCellRendererProps) {
  const estado: EstadoProblema | null = params.value;
  return (
    <div className="inline-block align-middle">
      {estado ? (
        <ChipEstadoProblema estado={estado} />
      ) : (
        "Sin definir"
      )}
    </div>
  );
}

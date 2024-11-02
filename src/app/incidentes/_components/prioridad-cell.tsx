import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { Prioridad } from "@/models/incidentes";

import { CustomCellRendererProps } from "ag-grid-react";

export function PrioridadCell(params: CustomCellRendererProps) {
  const prioridad: Prioridad = params.value;
  return <ChipPrioridad prioridad={prioridad} />;
}

import { ChipCategoria } from "@/components/chips/chip-categoria";
import { CategoriaProblema } from "@/models/incidentes";

import { CustomCellRendererProps } from "ag-grid-react";

export function CategoriaCell(params: CustomCellRendererProps) {
  const categoria: CategoriaProblema = params.value;
  return <ChipCategoria categoria={categoria} />;
}

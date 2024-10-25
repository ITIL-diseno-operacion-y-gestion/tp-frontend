import Link from "next/link";

import { CustomCellRendererProps } from "ag-grid-react";

export function LinkIncidente(params: CustomCellRendererProps) {
  const id = params.value;
  return <Link href={`/incidentes/${id}`}>Ver Incidente</Link>;
}

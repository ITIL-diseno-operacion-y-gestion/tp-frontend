import { formatDate } from "@/lib/utils";

import { CustomCellRendererProps } from "ag-grid-react";
import { CalendarIcon } from "lucide-react";

export function FechaAltaCell(params: CustomCellRendererProps) {
  const fechaAlta: Date = params.value;

  return (
    <div className="flex items-center gap-2">
      <CalendarIcon className="size-4" />
      {formatDate(fechaAlta)}
    </div>
  );
}

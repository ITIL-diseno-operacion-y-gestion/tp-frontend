import { ChipFormaNotificacion } from "@/components/chips/chip-forma-notificacion";
import { FormaNotificacion } from "@/models/incidentes";

import { CustomCellRendererProps } from "ag-grid-react";

export function FormaNotificacionCell(params: CustomCellRendererProps) {
  const formaNotificacion: FormaNotificacion = params.value;
  return <ChipFormaNotificacion formaNotificacion={formaNotificacion} />;
}

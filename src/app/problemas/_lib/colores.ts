import { Problema } from "../models";

/**
 * El color de fondo de cada estado (debajo del label)
 */
export const bgEstado: Record<Problema["estado"], string> = {
  analizandose: "bg-yellow-200",
  asignado: "bg-cyan-200",
  cerrado: "bg-green-200",
  detectado: "bg-red-200",
  resuelto: "bg-purple-200",
};

/**
 * El color del label de cada estado
 */
export const colorEstado: Record<Problema["estado"], string> = {
  analizandose: "bg-yellow-500",
  asignado: "bg-cyan-500",
  cerrado: "bg-green-500",
  detectado: "bg-red-500",
  resuelto: "bg-purple-500",
};

export const colorPrioridad: Record<Problema["prioridad"], string> = {
  alta: "bg-red-500",
  baja: "bg-green-500",
  media: "bg-yellow-500",
};

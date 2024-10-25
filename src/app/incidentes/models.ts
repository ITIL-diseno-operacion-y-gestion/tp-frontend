import {
  CategoriaProblema,
  FormaNotificacion,
  Prioridad,
} from "@/models/types";

import { ArticuloConfiguracion } from "../configuracion/models";

export interface Incidente {
  id: number;
  id_usuario: number;
  fecha_de_alta: string;
  forma_de_notificacion: FormaNotificacion;
  usuarios_afectados: string;
  servicios_afectados: string;
  prioridad: Prioridad;
  categoria: CategoriaProblema;
  informacion_adicional: string;
  articulos_afectados: ArticuloConfiguracion[];
}

export type IncidenteCreate = Omit<
  Incidente,
  "id" | "fecha_de_alta" | "articulos_afectados"
>;

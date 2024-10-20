import {
  CategoriaProblema,
  FormaNotificacion,
  Prioridad,
} from "@/models/types";

export interface Incidente {
  id: number;
  id_usuario: number;
  fecha_de_alta: string;
  forma_de_notificacion: FormaNotificacion;
  reportador: string;
  usuarios_afectados: string;
  servicios_afectados: string;
  prioridad: Prioridad;
  categoria: CategoriaProblema;
  informacion_adicional: string;
}

export type IncidenteCreate = Omit<Incidente, "id" | "fecha_de_alta">;

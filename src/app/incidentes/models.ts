export interface Incidente {
  id: number;
  id_usuario: number;
  fecha_de_alta: string;
  forma_de_notificacion: string;
  reportador: string;
  usuarios_afectados: string;
  servicios_afectados: string;
  prioridad: string;
  categoria: string;
  informacion_adicional: string;
}

export type IncidenteCreate = Omit<Incidente, "id" | "fecha_de_alta">;

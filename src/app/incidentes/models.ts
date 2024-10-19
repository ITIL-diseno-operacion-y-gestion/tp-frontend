import { CategoriaProblema, Prioridad } from "@/models/types";

export const formasNotificacion = [
  "llamada telefonica",
  "email",
  "sms",
  "formulario web",
  "chat en vivo",
];

export type FormaNotificacion = (typeof formasNotificacion)[number];

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

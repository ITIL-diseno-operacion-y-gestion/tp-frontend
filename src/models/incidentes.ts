import { z } from "zod";

import { itemConfiguracionSchema } from "./configuracion";

export const prioridades = ["baja", "media", "alta"] as const;

export const categoriasProblema = [
  "de seguridad",
  "tecnico",
  "de disponibilidad",
  "de datos",
  "legal",
] as const;

export const estadosProblema = [
  "detectado",
  "analizandose",
  "asignado",
  "resuelto",
  "cerrado",
] as const;

export const formasNotificacion = [
  "llamada telefonica",
  "email",
  "sms",
  "formulario web",
  "chat en vivo",
] as const;

const incidenteBaseSchema = z.object({
  id_usuario: z.coerce.number(),
  forma_de_notificacion: z.enum(formasNotificacion),
  reportador: z.string(),
  usuarios_afectados: z.string(),
  servicios_afectados: z.string(),
  prioridad: z.enum(prioridades),
  categoria: z.enum(categoriasProblema),
  informacion_adicional: z.string(),
});

export const incidenteCreateSchema = incidenteBaseSchema.extend({
  ids_articulos: z.array(z.coerce.number()),
});

export const incidenteSchema = incidenteBaseSchema.extend({
  id: z.number(),
  fecha_de_alta: z.string(),
  articulos_afectados: z.array(itemConfiguracionSchema),
});

export type Prioridad = (typeof prioridades)[number];

export type CategoriaProblema = (typeof categoriasProblema)[number];

export type EstadoProblema = (typeof estadosProblema)[number];

export type FormaNotificacion = (typeof formasNotificacion)[number];

export type IncidenteCreate = z.infer<typeof incidenteCreateSchema>;

export type Incidente = z.infer<typeof incidenteSchema>;
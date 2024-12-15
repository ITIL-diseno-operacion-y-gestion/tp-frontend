import { z } from "zod";

export const tiposItemConfiguracion = [
  "hardware",
  "software",
  "network",
  "documentacion",
  "instalacion",
  "proveedor",
  "servicio tecnico",
] as const;

export const estadoItemConfiguracion = [
  "planeado",
  "encargado",
  "en creacion",
  "en prueba",
  "en almacen",
  "en produccion",
  "en mantenimiento",
] as const;

export type TipoItemConfiguracion = (typeof tiposItemConfiguracion)[number];

export type EstadoItemConfiguracion = (typeof estadoItemConfiguracion)[number];

export const itemConfiguracionCreateSchema = z.object({
  nombre: z.string(),
  descripcion: z.string(),
  id_titular: z.string(),
  tipo: z.enum(tiposItemConfiguracion),
  info_fabricacion: z.string(),
  version: z.coerce.number().nullable().optional(),
  localizacion: z.string(),
  relacion_items: z.string(),
  estado: z.enum(estadoItemConfiguracion),
});

export const itemConfiguracionSchema = itemConfiguracionCreateSchema.extend({
  id: z.number(),
  fecha_de_alta: z.string(),
  esta_activo: z.boolean(),
});

export type ItemConfiguracionCreate = z.infer<
  typeof itemConfiguracionCreateSchema
>;

export type ItemConfiguracion = z.infer<typeof itemConfiguracionSchema>;

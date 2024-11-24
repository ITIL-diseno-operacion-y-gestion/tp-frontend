import { z } from "zod";

import { estadosProblema } from "./incidentes";

export type EstadoAuditoria = Record<string, string | number | boolean>;

export const clase_entidad = ["usuario", "articulo"] as const;

export const auditoriaSchema = z.object({
  id: z.number(),
  id_entidad: z.coerce.number(), // coerce, xq lo pasan como string
  clase_entidad: z.enum(clase_entidad),
  accion: z.string(),
  fecha_de_accion: z.coerce.date(),
  estado_nuevo: z
    .string()
    .transform((arg): EstadoAuditoria => {
      try {
        return JSON.parse(arg);
      } catch {
        return {};
      }
    }),
});


  /*
  estado_anterior: z
    .string()
    .transform((arg): EstadoAuditoria | null => {
      try {
        return JSON.parse(arg);
      } catch {
        return null;
      }
    })
    .nullable(),
  */

export type Auditoria = z.infer<typeof auditoriaSchema>;

export type EstadoProblema = (typeof estadosProblema)[number];

/*
export const genreSchema = z.object({
	id: z.number(),
	nombre: z.string()
});

export type Genre = z.infer<typeof genreSchema>; */

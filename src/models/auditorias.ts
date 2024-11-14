import { z } from "zod";

import { estadosProblema } from "./incidentes";

const auditoriaBaseSchema = z.object({
  id: z.number(),
  clase_entidad: z.string(),
  accion: z.string(),
  fecha: z.coerce.date(),
  estado_anterior: z.array(z.string()),
  estado_nuevo: z.array(z.string()),
});

export type Auditoria = z.infer<typeof auditoriaBaseSchema>;

export type EstadoProblema = (typeof estadosProblema)[number];

/*
export const genreSchema = z.object({
	id: z.number(),
	nombre: z.string()
});

export type Genre = z.infer<typeof genreSchema>; */

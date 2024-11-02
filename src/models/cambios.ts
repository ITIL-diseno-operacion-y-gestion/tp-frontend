import { z } from "zod";

import { itemConfiguracionSchema } from "./configuracion";
import { categoriasProblema, prioridades } from "./incidentes";

export const estadosCambio = [
  "creado",
  "recibido",
  "aceptado",
  "rechazado",
  "en progreso",
  "aplicado",
] as const;

export const impactos = ["menor", "significativo", "mayor"] as const;

const cambioBaseSchema = z.object({
  id_solicitante: z.coerce.number(),
  estado: z.enum(estadosCambio),
  motivo_de_implementacion: z.string(),
  descripcion: z.string(),
  prioridad: z.enum(prioridades), // TODO: Pedir q agreguen urgente
  categoria: z.enum(categoriasProblema),
  impacto: z.enum(impactos),
  fecha_de_implementacion: z.coerce.date(),
  horas_necesarias: z.coerce.number().positive(),
  costo_estimado: z.coerce.number().positive(),
  riesgos_asociados: z.string(),
});

export const cambioCreateSchema = cambioBaseSchema.extend({
  ids_articulos: z.array(z.coerce.number()),
});

export const cambioSchema = cambioBaseSchema.extend({
  id: z.number(),
  fecha_de_creacion: z.date(),
  articulos_afectados: z.array(itemConfiguracionSchema),
});

export type EstadoCambio = (typeof estadosCambio)[number];

export type Impacto = (typeof impactos)[number];

export type CambioCreate = z.infer<typeof cambioCreateSchema>;

export type Cambio = z.infer<typeof cambioSchema>;

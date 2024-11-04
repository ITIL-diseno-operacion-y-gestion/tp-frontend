import { z } from "zod";

import { incidenteSchema } from "./incidentes";
import { problemaSchema } from "./problemas";

const baseErrorConocidoSchema = z.object({
  descripcion: z.string(),
  sintomas: z.string(),
  solucion_definitiva: z.string(),
  solucion_provisoria: z.string(),
});

export const errorConocidoCreateSchema = baseErrorConocidoSchema.extend({
  ids_incidentes: z.array(z.coerce.number()),
  ids_problemas: z.array(z.coerce.number()),
});

export const errorConocidoSchema = baseErrorConocidoSchema.extend({
  id: z.number(),
  fecha_de_creacion: z.date(),
  incidentes: z.array(incidenteSchema),
  problemas: z.array(problemaSchema),
});

export type ErrorConocidoCreate = z.infer<typeof errorConocidoCreateSchema>;

export type ErrorConocido = z.infer<typeof errorConocidoSchema>;

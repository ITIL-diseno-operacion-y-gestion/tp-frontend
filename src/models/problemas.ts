import { z } from "zod";

import {
  categoriasProblema,
  estadosProblema,
  incidenteSchema,
  prioridades,
} from "./incidentes";

const problemaBaseSchema = z.object({
  id_usuario: z.coerce.number(),
  sintomas: z.string(),
  prioridad: z.enum(prioridades),
  categoria: z.enum(categoriasProblema),
  estado: z.enum(estadosProblema),
});

export const problemaCreateSchema = problemaBaseSchema.extend({
  ids_incidentes: z.array(z.coerce.number()),
});

export const problemaSchema = problemaBaseSchema.extend({
  id: z.number(),
  incidentes: z.array(incidenteSchema),
});

export type ProblemaCreate = z.infer<typeof problemaCreateSchema>;

export type Problema = z.infer<typeof problemaSchema>;
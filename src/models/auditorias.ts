import { z } from "zod";

const auditoriaBaseSchema = z.object({
  id: z.string(),
  clase_entidad: z.string(),
  accion: z.string(),
  fecha: z.string(),
  estado_anterior: z.string(),
  estado_nuevo: z.string(),
});

export type Auditoria = z.infer<typeof auditoriaBaseSchema>;

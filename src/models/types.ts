export const prioridades = ["baja", "media", "alta"] as const;

export const categoriasProblema = [
  "de seguridad",
  "tecnico",
  "de disponibilidad",
  "de datos",
  "legal",
] as const;

export type Prioridad = (typeof prioridades)[number];

export type CategoriaProblema = (typeof categoriasProblema)[number];

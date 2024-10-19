export const prioridades = ["baja", "media", "alta"] as const;

export type Prioridad = (typeof prioridades)[number];

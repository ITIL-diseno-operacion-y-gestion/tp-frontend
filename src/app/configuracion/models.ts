export const tiposItemConfiguracion = [
  "hardware",
  "software",
  "network",
  "documentacion",
  "instalacion",
  "proveedor",
  "servicio tecnico",
] as const;

export type TipoItemConfiguracion = (typeof tiposItemConfiguracion)[number];

export interface ItemConfiguracion {
  descripcion: string;
  tipo: TipoItemConfiguracion;
  version: number;
  fecha_de_alta: string;
  esta_activo: boolean;
  titular: string;
  id: number;
  nombre: string;
  info_fabricacion: string;
  localizacion: string;
  relacion_items: string;
}

export type ItemConfiguracionCreate = Omit<
  ItemConfiguracion,
  "id" | "fecha_de_alta" | "esta_activo"
>;

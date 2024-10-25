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

export interface ArticuloConfiguracion {
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
  estado: EstadoItemConfiguracion;
}

export type ArticuloConfiguracionCreate = Omit<
  ArticuloConfiguracion,
  "id" | "fecha_de_alta" | "esta_activo"
>;

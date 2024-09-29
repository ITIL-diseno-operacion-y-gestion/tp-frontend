export interface ItemConfiguracion {
  descripcion: string;
  tipo: string;
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

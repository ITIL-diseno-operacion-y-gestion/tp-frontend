import { Prioridad } from "@/models/types";

export interface ProblemaCreate {
  id_usuario: number;
  sintomas: string;
  prioridad: Prioridad;
  categoria: string;
  estado: Estado;
}

export interface Problema extends ProblemaCreate {
  id: number;
}

export type Estado =
  | "detectado"
  | "analizandose"
  | "asignado"
  | "resuelto"
  | "cerrado";

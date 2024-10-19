import { CategoriaProblema, EstadoProblema, Prioridad } from "@/models/types";

export interface ProblemaCreate {
  id_usuario: number;
  sintomas: string;
  prioridad: Prioridad;
  categoria: CategoriaProblema;
  estado: EstadoProblema;
}

export interface Problema extends ProblemaCreate {
  id: number;
}

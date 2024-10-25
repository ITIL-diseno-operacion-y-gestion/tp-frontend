import { CategoriaProblema, EstadoProblema, Prioridad } from "@/models/types";

import { Incidente } from "../incidentes/models";

export interface ProblemaCreate {
  id_usuario: number;
  sintomas: string;
  prioridad: Prioridad;
  categoria: CategoriaProblema;
  estado: EstadoProblema;
}

export interface Problema extends ProblemaCreate {
  id: number;
  incidentes: Incidente[];
}

import { CategoriaProblema, EstadoProblema, Prioridad } from "@/models/types";

import { Incidente } from "../incidentes/models";

export interface ProblemaCreate {
  id_usuario: number;
  sintomas: string;
  prioridad: Prioridad;
  categoria: CategoriaProblema;
  estado: EstadoProblema;
  ids_incidentes: number[];
}

export interface Problema extends Omit<ProblemaCreate, "ids_incidentes"> {
  id: number;
  incidentes: Incidente[];
}

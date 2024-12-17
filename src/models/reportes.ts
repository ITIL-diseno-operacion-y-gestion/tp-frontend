/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstadoCambio } from "./cambios";
import {
  EstadoItemConfiguracion,
  TipoItemConfiguracion,
} from "./configuracion";
import { CategoriaProblema, EstadoProblema, Prioridad } from "./incidentes";

export interface Reporte {
  articulos: Articulos;
  cambios: Cambios;
  incidentes: Incidentes;
  problemas: Problemas;
  errores: Errores;
}

interface Errores {
  incidente: any;
  problema: Record<string, number>;
  total: number;
}

interface Problemas {
  generales: ProblemasGeneralOPersonal;
  personales: ProblemasGeneralOPersonal;
}

interface ProblemasGeneralOPersonal {
  categoria: Record<CategoriaProblema, number | undefined>;
  estado: Record<EstadoProblema, number | undefined>;
  incidente: Record<string, number>;
  total: number;
  tiempo_promedio_resolucion: string;
}

interface Incidentes {
  generales: GeneralOPersonal;
  personales: GeneralOPersonal;
}

interface GeneralOPersonal {
  prioridad: Record<Prioridad, number | undefined>;
  categoria: Record<CategoriaProblema, number | undefined>;
  articulo: Record<string, number>;
  conformidad_resolucion_promedio: number;
  total: number;
}

interface Cambios {
  estado: Record<EstadoCambio, number | undefined>;
  prioridad: Record<Prioridad, number | undefined>;
  categoria: Record<any, number | undefined>;
  articulo: Record<string, number>;
  total: number;
}

interface Articulos {
  tipo: Record<TipoItemConfiguracion, number | undefined>;
  estado: Record<EstadoItemConfiguracion, number | undefined>;
  total: number;
}

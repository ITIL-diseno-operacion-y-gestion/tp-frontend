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
  incidente: object; // Q carajo va acá
  problema: object;
}

interface Problemas {
  categoria: Record<CategoriaProblema, number | undefined>;
  estado: Record<EstadoProblema, number | undefined>;
  incidente: Record<string, number | undefined>;
}

interface Incidentes {
  prioridad: Record<Prioridad, number | undefined>;
  categoria: Record<CategoriaProblema, number | undefined>;
  articulo: Record<string, number | undefined>;
}

interface Cambios {
  estado: Record<EstadoCambio, number | undefined>;
  categoria: Record<CategoriaProblema, number | undefined>;
  articulo: Record<string, number | undefined>;
  prioridad: Record<Prioridad, number | undefined>;
}

interface Articulos {
  tipo: Record<TipoItemConfiguracion, number | undefined>;
  estado: Record<EstadoItemConfiguracion, number | undefined>;
}

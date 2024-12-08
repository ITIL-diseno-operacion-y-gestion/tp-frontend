"use client";

import { Incidente } from "@/models/incidentes";

import { ColDef } from "ag-grid-community";

import { CategoriaCell } from "./_components/categoria-cell";
import { FechaAltaCell } from "./_components/fecha-alta-cell";
import { FormaNotificacionCell } from "./_components/forma-notificacion-cell";
import { AccionesIncidente } from "./_components/acciones-incidente";
import { PrioridadCell } from "./_components/prioridad-cell";

export const columns: ColDef<Incidente>[] = [
  {
    field: "id",
    headerName: "Acciones",
    width: 120,
    cellRenderer: AccionesIncidente,
  },
  { field: "prioridad", width: 90, cellRenderer: PrioridadCell },
  { field: "id_usuario", headerName: "ID Usuario", width: 100 },
  {
    field: "fecha_de_alta",
    headerName: "Fecha de alta",
    width: 120,
    type: "date",
    cellRenderer: FechaAltaCell,
  },
  {
    field: "categoria",
    headerName: "Categoría",
    width: 150,
    cellRenderer: CategoriaCell,
  },
  {
    field: "forma_de_notificacion",
    headerName: "Forma de notificación",
    width: 180,
    cellRenderer: FormaNotificacionCell,
  },
  {
    field: "servicios_afectados",
    headerName: "Servicios afectados",
    width: 200,
  },
  {
    field: "informacion_adicional",
    headerName: "Información adicional",
    width: 200,
  },
  
  {
    field: "agente asignado",
    headerName: "Agente asignado",
    width: 200,
  },
];

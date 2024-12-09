"use client";

import { Incidente } from "@/models/incidentes";

import { ColDef } from "ag-grid-community";

import { AccionesIncidente } from "./_components/acciones-incidente";
import { CategoriaCell } from "./_components/categoria-cell";
import { EstadoCell } from "./_components/estado-cell";
import { FechaAltaCell } from "./_components/fecha-alta-cell";
import { FormaNotificacionCell } from "./_components/forma-notificacion-cell";
import { PrioridadCell } from "./_components/prioridad-cell";

export const columns: ColDef<Incidente>[] = [
  {
    field: "id",
    headerName: "Acciones",
    width: 120,
    cellRenderer: AccionesIncidente,
  },
  { field: "prioridad", width: 100, cellRenderer: PrioridadCell },
  {
    field: "estado",
    headerName: "Estado",
    width: 160,
    cellRenderer: EstadoCell,
  },
  {
    field: "id_agente_asignado",
    headerName: "Agente asignado",
    width: 150,
  },
  {
    field: "categoria",
    headerName: "Categoría",
    width: 180,
    cellRenderer: CategoriaCell,
  },
  {
    field: "fecha_de_alta",
    headerName: "Fecha de alta",
    width: 120,
    type: "date",
    cellRenderer: FechaAltaCell,
  },
  {
    field: "forma_de_notificacion",
    headerName: "Forma de notificación",
    width: 180,
    cellRenderer: FormaNotificacionCell,
  },
  { field: "id_usuario", headerName: "ID Usuario", width: 100 },
  {
    field: "servicios_afectados",
    headerName: "Servicios afectados",
    width: 270,
  },
];

"use client";

import { Incidente } from "@/models/incidentes";

import { ColDef } from "ag-grid-community";

import { CategoriaCell } from "./_components/categoria-cell";
import { FormaNotificacionCell } from "./_components/forma-notificacion-cell";
import { LinkIncidente } from "./_components/link-incidente";
import { PrioridadCell } from "./_components/prioridad-cell";

export const columns: ColDef<Incidente>[] = [
  {
    field: "id",
    headerName: "Acciones",
    width: 200,
    cellRenderer: LinkIncidente,
  },
  { field: "prioridad", width: 100, cellRenderer: PrioridadCell },
  { field: "id_usuario", headerName: "ID Usuario", width: 150 },
  {
    field: "fecha_de_alta",
    headerName: "Fecha de alta",
    width: 200,
    type: "date",
    valueFormatter: (params) =>
      new Date(params.value).toLocaleDateString("es-AR"),
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
    width: 250,
    cellRenderer: FormaNotificacionCell,
  },
  { field: "usuarios_afectados", headerName: "Usuarios afectados", width: 200 },
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
];

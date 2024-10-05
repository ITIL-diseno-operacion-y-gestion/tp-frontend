import { ColDef } from "ag-grid-community";

import { Incidente } from "./models";

export const columns: ColDef<Incidente>[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "id_usuario", headerName: "ID Usuario", width: 150 },
  { field: "fecha_de_alta", headerName: "Fecha de alta", width: 200 },
  {
    field: "forma_de_notificacion",
    headerName: "Forma de notificación",
    width: 250,
  },
  { field: "reportador", width: 150 },
  { field: "usuarios_afectados", headerName: "Usuarios afectados", width: 200 },
  {
    field: "servicios_afectados",
    headerName: "Servicios afectados",
    width: 200,
  },
  { field: "prioridad", width: 150 },
  { field: "categoria", headerName: "Categoría", width: 150 },
  {
    field: "informacion_adicional",
    headerName: "Información adicional",
    width: 200,
  },
];

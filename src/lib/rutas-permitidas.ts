import { Route } from "next";

import { UserRole } from "@/models/users";

export const rutasPermitidas: Record<UserRole, Route[]> = {
  cliente: ["/incidentes"],
  agente: [
    "/configuracion",
    "/incidentes",
    "/problemas",
    "/errores-conocidos",
    "/cambios",
  ],
  supervisor: [
    "/configuracion",
    "/incidentes",
    "/problemas",
    "/errores-conocidos",
    "/cambios",
  ],
};

// TODO: Todavía pueden acceder si usan la URL directamente
"use client";

import { Auditoria } from "@/models/auditorias";

import { Handle, Position } from "@xyflow/react";

import { EstadoAuditoriaView } from "./estado-view";

export function NodeAuditoria({ data }: { data: Auditoria }) {
  return (
    <div className="rounded-md border bg-white p-2">
      <Handle type="source" position={Position.Right} />
      <EstadoAuditoriaView auditoria={data} />
      <Handle type="target" position={Position.Left} id="a" />
    </div>
  );
}

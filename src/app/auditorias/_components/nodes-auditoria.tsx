"use client";

import { useCallback, useState } from "react";

import { Auditoria } from "@/models/auditorias";

import {
  Background,
  Controls,
  Edge,
  MarkerType,
  Node,
  NodeTypes,
  OnNodesChange,
  ReactFlow,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { NodeAuditoria } from "./node-auditoria";

const nodeTypes: NodeTypes = {
  auditoria: NodeAuditoria,
};

export function NodesAuditoria({ auditorias }: { auditorias: Auditoria[] }) {
  const [nodes, setNodes] = useState<Node[]>(
    auditorias.map((auditoria, index) => ({
      id: index.toString(),
      type: "auditoria",
      data: auditoria,
      position: { x: 0 + 400 * index, y: 0 },
    })),
  );
  const edges: Edge[] = auditorias.slice(-1).map((_, index) => ({
    id: index.toString(),
    source: index.toString(),
    target: (index + 1).toString(),
    markerEnd: {
      height: 30,
      width: 30,
      type: MarkerType.ArrowClosed,
    },
    label: auditorias[index+1].fecha_de_accion.toLocaleDateString("es-AR"),
  }));

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

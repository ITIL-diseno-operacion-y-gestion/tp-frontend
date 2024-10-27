"use client";

import { updateProblema } from "@/api/problemas";
import { EstadoProblema, estadosProblema, prioridades } from "@/models/types";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

import { Problema } from "../models";
import { DraggableProblema } from "./draggable-problema";
import { DroppableEstado } from "./droppable-estado";
import { revalidateProblemas } from "./revalidate-problemas";

export function TablaProblemas({ problemas }: { problemas: Problema[] }) {
  const problemasAgrupados = {
    detectado: filtrarProblemas("detectado", problemas),
    analizandose: filtrarProblemas("analizandose", problemas),
    asignado: filtrarProblemas("asignado", problemas),
    resuelto: filtrarProblemas("resuelto", problemas),
    cerrado: filtrarProblemas("cerrado", problemas),
  };

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="grid grid-flow-col overflow-x-auto border 2xl:grid-cols-5">
        {estadosProblema.map((estado) => (
          <DroppableEstado key={estado} estado={estado}>
            {problemasAgrupados[estado].map((problema) => (
              <DraggableMarkup key={problema.id} problema={problema} />
            ))}
          </DroppableEstado>
        ))}
      </div>
    </DndContext>
  );

  async function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;

    const id = active.id;
    const problema = problemas.find((p) => p.id === id);
    const estado = over?.id as EstadoProblema | undefined;

    if (!problema || !estado) return;

    if (problema.estado !== estado) {
      await updateProblema(problema.id, { estado });
      revalidateProblemas();
    }
  }
}

const filtrarProblemas = (estado: EstadoProblema, problemas: Problema[]) => {
  return problemas.filter((p) => p.estado === estado).sort(sortByPrioridad);
};

const DraggableMarkup = ({ problema }: { problema: Problema }) => {
  return <DraggableProblema problema={problema} />;
};

const sortByPrioridad = (a: Problema, b: Problema) => {
  return prioridades.indexOf(b.prioridad) - prioridades.indexOf(a.prioridad);
};

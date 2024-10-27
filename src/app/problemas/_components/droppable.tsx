"use client";

import { cn } from "@/lib/utils";

import { useDroppable } from "@dnd-kit/core";

export function Droppable({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(isOver ? "bg-green-500" : "bg-red-500")}
    >
      {children}
    </div>
  );
}

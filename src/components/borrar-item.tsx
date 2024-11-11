"use client";

import { MouseEvent } from "react";

import { Button } from "@/components/ui/button";

export function BorrarItem({
  id,
  action,
}: {
  id: number;
  action: (id: number) => Promise<void>;
}) {
  const formAction = action.bind(null, id);

  const confirmDelete = (e: MouseEvent<HTMLButtonElement>) => {
    if (!confirm("¿Estás seguro de que deseas borrar este elemento?")) {
      e.preventDefault();
    }
  };

  return (
    <form action={formAction}>
      <Button variant="destructive" type="submit" onClick={confirmDelete}>
        Borrar
      </Button>
    </form>
  );
}

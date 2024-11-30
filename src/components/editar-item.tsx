import { Route } from "next";
import Link from "next/link";

import { Button } from "./ui/button";

export function EditarItem({ id }: { id: number }) {
  return (
    <Link href={`${id}/edit` as Route}>
      <Button variant="secondary">Editar</Button>
    </Link>
  );
}

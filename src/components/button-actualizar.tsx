import { Route } from "next";
import { revalidatePath } from "next/cache";

import { RefreshCcw } from "lucide-react";

import { Button } from "./ui/button";

export function ButtonActualizar({ path }: { path: Route }) {
  const onSubmit = async () => {
    "use server";

    revalidatePath(path);
  };

  return (
    <form action={onSubmit}>
      <Button variant="secondary" type="submit">
        <RefreshCcw className="mr-2 size-4 text-gray-800" /> Actualizar
      </Button>
    </form>
  );
}

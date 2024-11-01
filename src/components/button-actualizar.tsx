import { Route } from "next";
import { revalidatePath, revalidateTag } from "next/cache";

import { RefreshCcw } from "lucide-react";

import { Button } from "./ui/button";

export function ButtonActualizar({
  path,
  tag,
}: {
  path?: Route;
  tag?: string;
}) {
  const onSubmit = async () => {
    "use server";

    if (path) revalidatePath(path);
    if (tag) revalidateTag(tag);
  };

  return (
    <form action={onSubmit}>
      <Button variant="secondary" type="submit">
        <RefreshCcw className="mr-2 size-4 text-gray-800" /> Actualizar
      </Button>
    </form>
  );
}

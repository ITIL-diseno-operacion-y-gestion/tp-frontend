import Link from "next/link";

import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";

export default function NuevoProblemaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-center text-xl font-bold">Nuevo Problema</h1>
      <NuevoProblemaForm />
      <Button variant="secondary" asChild>
        <Link href="/problemas">Volver</Link>
      </Button>
    </div>
  );
}

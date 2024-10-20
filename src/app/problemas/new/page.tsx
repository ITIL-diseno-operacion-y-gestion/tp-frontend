import Link from "next/link";

import { Title } from "@/components/common/title";
import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";

export default function NuevoProblemaPage() {
  return (
    <div className="space-y-8">
      <Title>Nuevo Problema</Title>
      <NuevoProblemaForm />
      <Button variant="secondary" asChild>
        <Link href="/problemas">Volver</Link>
      </Button>
    </div>
  );
}

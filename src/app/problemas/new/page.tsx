import Link from "next/link";

import { getIncidentes } from "@/api/incidentes";
import { Title } from "@/components/common/title";
import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";

export default async function NuevoProblemaPage() {
  const incidentes = await getIncidentes();

  return (
    <div className="space-y-8">
      <Title>Nuevo Problema</Title>
      <NuevoProblemaForm incidentes={incidentes} />
      <Button variant="secondary" asChild>
        <Link href="/problemas">Volver</Link>
      </Button>
    </div>
  );
}

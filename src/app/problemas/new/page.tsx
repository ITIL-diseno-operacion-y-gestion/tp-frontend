import Link from "next/link";

import { getIncidentes } from "@/api/incidentes";
import { Title } from "@/components/common/title";
import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";

export default async function NuevoProblemaPage() {
  const user = await getSession();

  if (!user) throw new Error("No hay usuario logueado");

  const incidentes = await getIncidentes();

  return (
    <div className="space-y-8">
      <Title>Nuevo Problema</Title>
      <NuevoProblemaForm id_titular={user.user.id} incidentes={incidentes} />
      <Button variant="secondary" asChild>
        <Link href="/problemas">Volver</Link>
      </Button>
    </div>
  );
}

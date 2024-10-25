import Link from "next/link";

import { getIncidentes } from "@/api/incidentes";
import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";

export default async function NuevoProblemaPage() {
  const users = await getUsers();
  const incidentes = await getIncidentes();

  return (
    <div className="space-y-8">
      <Title>Nuevo Problema</Title>
      <NuevoProblemaForm usuarios={users} incidentes={incidentes} />
      <Button variant="secondary" asChild>
        <Link href="/problemas">Volver</Link>
      </Button>
    </div>
  );
}

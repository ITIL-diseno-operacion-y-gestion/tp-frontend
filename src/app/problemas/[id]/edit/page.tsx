import Link from "next/link";

import { getIncidentes } from "@/api/incidentes";
import { getProblema } from "@/api/problemas";
import { Title } from "@/components/common/title";
import { NuevoProblemaForm } from "@/components/forms/nuevo-problema-form";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";

export default async function EditProblemaPage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await props.params).id, 10);
  const incidentes = await getIncidentes();
  const problema = await getProblema(id);
  const user = await getSession();

  if (!user) throw new Error("No hay usuario logueado");

  return (
    <>
      <Title>Editando Problema #{id}</Title>
      <NuevoProblemaForm incidentes={incidentes} initialValues={problema} />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </>
  );
}

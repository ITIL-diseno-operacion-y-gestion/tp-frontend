import { getArticulosConfiguracion } from "@/api/configuracion";
import { getIncidente } from "@/api/incidentes";
import { Title } from "@/components/common/title";
import { NuevoIncidenteForm } from "@/components/forms/nuevo-incidente-form";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";
import Link from "next/link";

export default async function EditIncidentePage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await props.params).id, 10);
  const articulos = await getArticulosConfiguracion();
  const user = await getSession();
  const incidente = await getIncidente(id);

  if (!user) throw new Error("No hay usuario logueado");

  return (
    <>
      <Title>Editando Incidente #{id}</Title>
      <NuevoIncidenteForm articulos={articulos} id_titular={user.user.id} initialValues={incidente} />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </>
  );
}

import Link from "next/link";

import { getArticulosConfiguracion } from "@/api/configuracion";
import { Title } from "@/components/common/title";
import { NuevoIncidenteForm } from "@/components/forms/nuevo-incidente-form";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";

export default async function NuevaConfiguracionPage() {
  const user = await getSession();

  if (!user) throw new Error("No hay usuario logueado");

  const articulos = await getArticulosConfiguracion();

  return (
    <div className="space-y-8">
      <Title>Nuevo Incidente</Title>
      <NuevoIncidenteForm articulos={articulos} id_titular={user.user.id} />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </div>
  );
}

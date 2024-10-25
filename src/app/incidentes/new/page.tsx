import Link from "next/link";

import { getArticulosConfiguracion } from "@/api/configuracion";
import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { NuevoIncidenteForm } from "@/components/forms/nuevo-incidente-form";
import { Button } from "@/components/ui/button";

export default async function NuevaConfiguracionPage() {
  const users = await getUsers();
  const articulos = await getArticulosConfiguracion();

  return (
    <div className="space-y-8">
      <Title>Nuevo Incidente</Title>
      <NuevoIncidenteForm usuarios={users} articulos={articulos} />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </div>
  );
}

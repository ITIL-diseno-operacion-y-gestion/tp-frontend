import Link from "next/link";

import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { NuevaConfiguracionForm } from "@/components/forms/nueva-configuracion-form";
import { Button } from "@/components/ui/button";

export default async function NuevaConfiguracionPage() {
  const users = await getUsers();

  return (
    <div className="space-y-8">
      <Title>Nueva Configuración</Title>
      <NuevaConfiguracionForm usuarios={users} />
      <Button variant="secondary" asChild>
        <Link href="/configuracion">Volver</Link>
      </Button>
    </div>
  );
}

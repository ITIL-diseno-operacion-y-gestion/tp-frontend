import Link from "next/link";

import { Title } from "@/components/common/title";
import { NuevaConfiguracionForm } from "@/components/forms/nueva-configuracion-form";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/session";

export default async function NuevaConfiguracionPage() {
  const session = await getSession();
  const userId = session!.user.id;

  return (
    <div className="space-y-8">
      <Title>Nueva Configuración</Title>
      <NuevaConfiguracionForm id_titular={userId} />
      <Button variant="secondary" asChild>
        <Link href="/configuracion">Volver</Link>
      </Button>
    </div>
  );
}

import Link from "next/link";

import { Title } from "@/components/common/title";
import { NuevaConfiguracionForm } from "@/components/forms/nueva-configuracion-form";
import { Button } from "@/components/ui/button";

export default function NuevaConfiguracionPage() {
  return (
    <div className="space-y-8">
      <Title>Nueva Configuración</Title>
      <NuevaConfiguracionForm />
      <Button variant="secondary" asChild>
        <Link href="/configuracion">Volver</Link>
      </Button>
    </div>
  );
}

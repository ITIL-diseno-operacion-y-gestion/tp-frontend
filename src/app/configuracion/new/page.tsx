import Link from "next/link";

import { NuevaConfiguracionForm } from "@/components/forms/nueva-configuracion-form";
import { Button } from "@/components/ui/button";

export default function NuevaConfiguracionPage() {
  return (
    <div className="space-y-8">
      <h1 className="mb-4 text-center text-xl font-bold">
        Nueva Configuración
      </h1>
      <NuevaConfiguracionForm />
      <Button variant="secondary" asChild>
        <Link href="/configuracion">Volver</Link>
      </Button>
    </div>
  );
}

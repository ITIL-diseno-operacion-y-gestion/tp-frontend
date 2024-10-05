import Link from "next/link";

import { NuevoIncidenteForm } from "@/components/forms/nuevo-incidente-form";
import { Button } from "@/components/ui/button";

export default function NuevaConfiguracionPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-center text-xl font-bold">Nuevo Incidente</h1>
      <NuevoIncidenteForm />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </div>
  );
}

import Link from "next/link";

import { Title } from "@/components/common/title";
import { NuevoIncidenteForm } from "@/components/forms/nuevo-incidente-form";
import { Button } from "@/components/ui/button";

export default function NuevaConfiguracionPage() {
  return (
    <div className="space-y-8">
      <Title>Nuevo Incidente</Title>
      <NuevoIncidenteForm />
      <Button variant="secondary" asChild>
        <Link href="/incidentes">Volver</Link>
      </Button>
    </div>
  );
}

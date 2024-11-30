import Link from "next/link";

import { getCambio } from "@/api/cambios";
import { getArticulosConfiguracion } from "@/api/configuracion";
import { Title } from "@/components/common/title";
import { NuevoCambioForm } from "@/components/forms/nuevo-cambio-form";
import { Button } from "@/components/ui/button";

export default async function EditItemConfiguracionPage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = +(await props.params).id;
  const [item, articulos] = await Promise.all([
    getCambio(id),
    getArticulosConfiguracion(),
  ]);

  return (
    <div className="space-y-8">
      <Title>Editando Cambio #{id}</Title>
      <NuevoCambioForm
        id_titular={item.id_solicitante}
        articulos={articulos}
        initialValues={item}
      />
      <Button variant="secondary" asChild>
        <Link href="/cambios">Volver</Link>
      </Button>
    </div>
  );
}

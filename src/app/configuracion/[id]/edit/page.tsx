import Link from "next/link";

import { getArticuloConfiguracion } from "@/api/configuracion";
import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { ActualizarConfiguracionForm } from "@/components/forms/actualizar-configuracion-form";
import { Button } from "@/components/ui/button";

export default async function EditItemConfiguracionPage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = +(await props.params).id;
  const item = await getArticuloConfiguracion(id);
  const users = await getUsers();

  return (
    <div className="space-y-8">
      <Title>Editando Configuración {id}</Title>
      <ActualizarConfiguracionForm
        usuarios={users}
        id={id}
        initialValues={item}
      />
      <Button variant="secondary" asChild>
        <Link href="/configuracion">Volver</Link>
      </Button>
    </div>
  );
}

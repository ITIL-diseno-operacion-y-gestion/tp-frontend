import Link from "next/link";

import { borrarItemConfiguracion } from "@/api/actions/configuracion";
import { getArticuloConfiguracion } from "@/api/configuracion";
import { BorrarItem } from "@/components/borrar-item";
import { Title } from "@/components/common/title";

import { ItemConfiguracionView } from "./_components/item-configuracion-view";

export default async function ConfiguracionItemPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  const elemento = await getArticuloConfiguracion(id);

  return (
    <div className="space-y-4">
      <Title>Configuracion</Title>
      <ItemConfiguracionView item={elemento} />
      <hr />
      <h2 className="text-lg font-semibold">Acciones</h2>
      <div className="space-x-4">
        <Link href={`/configuracion/${id}/edit`}>
          <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-blue-600">
            Editar
          </button>
        </Link>
        <Link href="/configuracion" className="mt-6">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Volver
          </button>
        </Link>
        <BorrarItem id={id} action={borrarItemConfiguracion} />
      </div>
    </div>
  );
}

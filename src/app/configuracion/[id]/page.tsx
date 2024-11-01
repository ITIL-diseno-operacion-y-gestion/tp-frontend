import Link from "next/link";

import { getArticuloConfiguracion } from "@/api/configuracion";
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
      <Link href="/configuracion" className="mt-6">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Volver
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

import { Title } from "@/components/common/title";

import { ItemConfiguracionView } from "./_components/item-configuracion-view";
import { getElementoConfiguracion } from "./actions";

export default async function ConfiguracionItemPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id, 10);
  console.log(id);
  const elemento = await getElementoConfiguracion(id);

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

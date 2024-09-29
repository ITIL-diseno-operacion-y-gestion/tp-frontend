import Link from "next/link";

import { ItemConfiguracionPreview } from "./_components/item-configuracion";
import { getElementosConfiguracion } from "./actions";

export default async function ConfiguaracionPage() {
  const elementos = await getElementosConfiguracion();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-xl font-bold">Configuracion</h1>
      <Link href="/configuracion/new">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Nuevo elemento
        </button>
      </Link>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {elementos.map((elemento, index) => (
          <ItemConfiguracionPreview key={index} item={elemento} />
        ))}
      </section>
    </div>
  );
}

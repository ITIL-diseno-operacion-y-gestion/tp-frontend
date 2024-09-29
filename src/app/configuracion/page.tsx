import Link from "next/link";

import { ButtonActualizar } from "@/components/button-actualizar";
import { SearchBox } from "@/components/search-box";

import { ItemConfiguracionPreview } from "./_components/item-configuracion";
import { getElementosConfiguracion } from "./actions";

export default async function ConfiguaracionPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || "";
  let elementos = await getElementosConfiguracion();
  if (query) {
    elementos = elementos.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-center text-xl font-bold">Configuracion</h1>
      <div className="flex justify-between">
        <Link href="/configuracion/new">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Nuevo elemento
          </button>
        </Link>
        <div className="flex flex-wrap gap-x-4">
          <ButtonActualizar path="/configuracion" />
          <SearchBox />
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {elementos.map((elemento, index) => (
          <ItemConfiguracionPreview key={index} item={elemento} />
        ))}
      </section>
    </div>
  );
}

import Link from "next/link";

import { getArticulosConfiguracion } from "@/api/configuracion";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";
import { SearchBox } from "@/components/search-box";

import { ItemConfiguracionPreview } from "./_components/item-configuracion";

export default async function ConfiguaracionPage(props: {
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";
  let elementos = await getArticulosConfiguracion();
  if (query) {
    elementos = elementos.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return (
    <div className="space-y-8">
      <Title>Configuración</Title>
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

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {elementos.map((elemento, index) => (
          <ItemConfiguracionPreview key={index} item={elemento} />
        ))}
      </section>
    </div>
  );
}

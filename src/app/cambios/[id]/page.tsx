import Link from "next/link";

import { getCambio } from "@/api/cambios";
import { Title } from "@/components/common/title";

import { CambioView } from "./_components/cambio-view";

export default async function CambioDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await props.params).id, 10);
  const cambio = await getCambio(id);

  return (
    <div className="space-y-4">
      <Title>Cambio {cambio.id}</Title>
      <CambioView cambio={cambio} />
      <Link href="/cambios" className="mt-6">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Volver
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

import { borrarProblema } from "@/api/actions/problemas";
import { getProblema } from "@/api/problemas";
import { BorrarItem } from "@/components/borrar-item";
import { Title } from "@/components/common/title";

import { ItemProblemaView } from "./_components/item-problema-view";

export default async function ProblemaDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  const problema = await getProblema(id);

  return (
    <div className="space-y-4">
      <Title>Problema</Title>
      <ItemProblemaView item={problema} />
      <BorrarItem id={id} action={borrarProblema} />
      <Link href="/problemas" className="mt-6">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Volver
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

import { getProblema } from "@/api/problemas";
import { Title } from "@/components/common/title";

import { ItemProblemaView } from "./_components/item-problema-view";

export default async function ProblemaDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = parseInt(params.id, 10);
  const problema = await getProblema(id);

  return (
    <>
      <Title>Problema</Title>
      <ItemProblemaView problema={problema} />
      <Link href="/problemas" className="">
        <button className="rounded bg-blue-500 px-4 py-2 text-white mt-4 hover:bg-blue-600">
          Volver
        </button>
      </Link>
    </>
  );
}

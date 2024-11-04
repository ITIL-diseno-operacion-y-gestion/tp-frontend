import Link from "next/link";

import { borrarIncidente } from "@/api/actions/incidentes";
import { getIncidente } from "@/api/incidentes";
import { BorrarItem } from "@/components/borrar-item";
import { Title } from "@/components/common/title";

import IncidenteView from "./_components/incidente-view";

export default async function IncidentesDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = +params.id;
  const incidente = await getIncidente(id);

  return (
    <div>
      <Title>Incidente {id}</Title>
      <IncidenteView incidente={incidente} />
      <BorrarItem id={id} action={borrarIncidente} />
      <Link href="/incidentes" className="mt-6">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Volver
        </button>
      </Link>
    </div>
  );
}

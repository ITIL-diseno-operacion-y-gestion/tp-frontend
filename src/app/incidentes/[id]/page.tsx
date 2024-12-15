import Link from "next/link";

import { getIncidente } from "@/api/incidentes";
import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { getSession } from "@/lib/session";

import IncidenteView from "./_components/incidente-view";

export default async function IncidentesDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = +params.id;
  const [session, incidente, usuarios] = await Promise.all([
    getSession(),
    getIncidente(id),
    getUsers(),
  ]);

  if (!session?.user) throw new Error("No hay usuario logueado");
  
  return (
    <div>
      <Title>Incidente #{id}</Title>
      <IncidenteView
        incidente={incidente}
        usuario={session.user}
        usuarios={usuarios}
      />
      <div className="mt-6 flex gap-x-4">
        <Link href="/incidentes" className="mt-6">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

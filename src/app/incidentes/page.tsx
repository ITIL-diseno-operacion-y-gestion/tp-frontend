import Link from "next/link";

import { ButtonActualizar } from "@/components/button-actualizar";

import { TablaIncidentes } from "./_components/tabla-incidentes";
import { getIncidentesTickets } from "./actions";
import { columns } from "./columns";

export default async function IncidentesPage() {
  const incidentes = await getIncidentesTickets();
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Incidentes</h1>
      <div className="flex justify-between">
        <Link href="/incidentes/new">
          <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Nuevo incidente
          </button>
        </Link>
        <div className="flex flex-wrap gap-x-4">
          <ButtonActualizar path="/incidentes" />
        </div>
      </div>

      <TablaIncidentes rowData={incidentes} colDefs={columns} />
    </div>
  );
}
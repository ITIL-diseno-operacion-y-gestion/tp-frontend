import Link from "next/link";

import { getErroresConocidos } from "@/api/errores-conocidos";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";

import { TablaErroresConocidos } from "./_components/tabla-errores-conocidos";

export default async function ErroresConocidosPage() {
  const erroresConocidos = await getErroresConocidos();

  return (
    <div>
      <Title>Incidentes</Title>
      <div className="flex justify-between">
        <Link href="/incidentes/new">
          <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Nuevo incidente
          </button>
        </Link>
        <div className="flex flex-wrap gap-x-4">
          <ButtonActualizar path="/errores-conocidos" />
        </div>
      </div>

      <TablaErroresConocidos errores={erroresConocidos} />
    </div>
  );
}

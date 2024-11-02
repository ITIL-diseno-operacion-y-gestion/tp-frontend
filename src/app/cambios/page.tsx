import Link from "next/link";

import { getCambios } from "@/api/cambios";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";

import { TablaCambios } from "./_components/tabla-cambios";

export default async function CambiosPage() {
  const cambios = await getCambios();

  return (
    <div className="space-y-4">
      <Title>Cambios</Title>
      <div className="flex justify-between">
        <Link href="/cambios/new">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Nuevo cambio
          </button>
        </Link>
        <ButtonActualizar path="/cambios" />
      </div>
      <TablaCambios cambios={cambios} />
    </div>
  );
}

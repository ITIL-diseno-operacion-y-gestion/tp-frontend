import Link from "next/link";

import { ButtonActualizar } from "@/components/button-actualizar";

import { TablaProblemas } from "./_components/tabla-problemas";
import { getProblemas } from "./actions";

export default async function ProblemasPage() {
  const problemas = await getProblemas();

  return (
    <div className="space-y-4">
      <h1 className="mb-4 text-center text-xl font-bold">Problemas</h1>
      <div className="flex justify-between">
        <Link href="/problemas/new">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Nuevo problema
          </button>
        </Link>
        <ButtonActualizar path="/problemas" />
      </div>
      <TablaProblemas problemas={problemas} />
    </div>
  );
}

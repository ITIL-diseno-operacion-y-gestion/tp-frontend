import Link from "next/link";

import { borrarProblema } from "@/api/actions/problemas";
import { BorrarItem } from "@/components/borrar-item";
import { ChipCategoria } from "@/components/chips/chip-categoria";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { SubTitle } from "@/components/common/subtitle";
import { EditarItem } from "@/components/editar-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Problema } from "@/models/problemas";

import { ChipEstadoProblema } from "@/components/chips/chip-estado-problema";

export function ItemProblemaView({ problema }: { problema: Problema }) {
  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {problema.nombre}
          <ChipPrioridad prioridad={problema.prioridad} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <section className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold">Categoría</h3>
              <div className="flex items-center space-x-1">
                <ChipCategoria categoria={problema.categoria} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Estado</h3>
              <div className="flex items-center space-x-1">
                <ChipEstadoProblema estado={problema.estado} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Síntomas</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {problema.sintomas}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold">
              Incidentes ({problema.incidentes.length})
            </h3>
            <ul className="mt-4 space-y-4">
              {problema.incidentes.map((incidente) => (
                <li key={incidente.id}>
                  <Link
                    href={`/incidentes/${incidente.id}`}
                    className="text-blue-500"
                  >
                    {incidente.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mt-10">
          <hr />
          <SubTitle className="mt-4 text-left">Acciones</SubTitle>
          <div className="flex gap-x-4">
            <EditarItem id={problema.id} />
            <BorrarItem id={problema.id} action={borrarProblema} />
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

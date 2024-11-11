import Link from "next/link";

import { ChipCategoria } from "@/components/chips/chip-categoria";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Cambio } from "@/models/cambios";

import { CalendarIcon, ClockIcon, DollarSignIcon } from "lucide-react";

export function CambioView({ cambio }: { cambio: Cambio }) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Detalle</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Prioridad</h3>
            <ChipPrioridad prioridad={cambio.prioridad} />
          </div>
          <div>
            <h3 className="font-semibold">Categoría</h3>
            <ChipCategoria categoria={cambio.categoria} />
          </div>
          <div>
            <h3 className="font-semibold">Impacto</h3>
            <>{cambio.impacto}</>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">ID Solicitante</h3>
            <p>{cambio.id_solicitante}</p>
          </div>
          <div>
            <h3 className="font-semibold">Estado</h3>
            {cambio.estado}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Motivo de Implementación</h3>
          <p>{cambio.motivo_de_implementacion}</p>
        </div>

        <div>
          <h3 className="font-semibold">Descripción</h3>
          <p>{cambio.descripcion}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Fecha de Implementación</h3>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDate(cambio.fecha_de_implementacion)}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Fecha de Creacion: </h3>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDate(cambio.fecha_de_creacion)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Horas Necesarias</h3>
            <div className="flex items-center">
              <ClockIcon className="mr-2 h-4 w-4" />
              {cambio.horas_necesarias}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Costo Estimado</h3>
            <div className="flex items-center">
              <DollarSignIcon className="mr-2 h-4 w-4" />
              {cambio.costo_estimado.toLocaleString("es-ES", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Riesgos Asociados</h3>
          <p>{cambio.riesgos_asociados}</p>
        </div>

        <div>
          <h3 className="font-semibold">Articulos Afectados</h3>
          <p className="space-x-4">
            {cambio.articulos_afectados.map((articulo) => (
              <Link
                href={`/configuracion/${articulo.id}`}
                key={articulo.id}
                className="text-blue-500 hover:underline"
              >
                {articulo.nombre}
              </Link>
            ))}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

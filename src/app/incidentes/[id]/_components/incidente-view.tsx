import Link from "next/link";

import { borrarIncidente } from "@/api/actions/incidentes";
import { BorrarItem } from "@/components/borrar-item";
import { ChipFormaNotificacion } from "@/components/chips/chip-forma-notificacion";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Incidente } from "@/models/incidentes";

export default function IncidenteView({ incidente }: { incidente: Incidente }) {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Incidente #{incidente.id}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">ID de Usuario</h3>
            <p>{incidente.id_usuario}</p>
          </div>
          <div>
            <h3 className="font-semibold">Forma de Notificación</h3>
            <ChipFormaNotificacion
              formaNotificacion={incidente.forma_de_notificacion}
            />
          </div>
          <div>
            <h3 className="font-semibold">Nombre</h3>
            <p>{incidente.nombre}</p>
          </div>
          <div>
            <h3 className="font-semibold">Fecha de Alta</h3>
            <p>{formatDate(incidente.fecha_de_alta)}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Servicios Afectados</h3>
          <p>{incidente.servicios_afectados}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Prioridad</h3>
            <ChipPrioridad prioridad={incidente.prioridad} />
          </div>
          <div>
            <h3 className="font-semibold">Categoría</h3>
            <p>{incidente.categoria}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Información Adicional</h3>
          <p>{incidente.informacion_adicional}</p>
        </div>
        <div>
          <h3 className="font-semibold">Artículos Afectados</h3>
          <ul className="space-y-4">
            {incidente.articulos_afectados.length === 0 ? (
              <p>No hay artículos afectados</p>
            ) : (
              incidente.articulos_afectados.map((articulo) => (
                <li key={articulo.id}>
                  <Link
                    href={`/configuracion/${articulo.id}`}
                    className="text-blue-500"
                  >
                    {articulo.nombre}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="flex gap-x-4">
          <Button variant="secondary" asChild>
            <Link href={`/incidentes/${incidente.id}/edit`}>Editar</Link>
          </Button>

          <BorrarItem id={incidente.id} action={borrarIncidente} />
        </div>
      </CardContent>
    </Card>
  );
}

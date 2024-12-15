import Link from "next/link";

import { borrarIncidente } from "@/api/actions/incidentes";
import { BorrarItem } from "@/components/borrar-item";
import { ChipCategoria } from "@/components/chips/chip-categoria";
import { ChipEstadoProblema } from "@/components/chips/chip-estado-problema";
import { ChipFecha } from "@/components/chips/chip-fecha";
import { ChipFormaNotificacion } from "@/components/chips/chip-forma-notificacion";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { EditarItem } from "@/components/editar-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Incidente } from "@/models/incidentes";
import { User } from "@/models/users";

import { AsignarAgenteDialog } from "./asignar-agente-dialog";
import { AsignarAMiMismoDialog } from "./asignar-a-mi-mismo-dialog";

export default function IncidenteView({
  incidente,
  usuarios,
  usuario,
}: {
  incidente: Incidente;
  usuarios: User[];
  usuario: User;
}) {
  const esAgente = usuario.rol === "agente";
  const esSupervisor = usuario.rol === "supervisor";
  const agenteId = usuario.id;

  const agenteAsignado = incidente.id_agente_asignado
    ? usuarios.find((usuario) => usuario.id === incidente.id_agente_asignado)
    : null;
  const reportador = usuarios.find((usuario) => usuario.id === incidente.id_usuario);
  const nombreReportador = reportador ? `${reportador.nombre} ${reportador.apellido}` : "";

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{incidente.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Prioridad</h3>
            <ChipPrioridad prioridad={incidente.prioridad} />
          </div>
          <div>
            <h3 className="font-semibold">Categoría</h3>
            <ChipCategoria categoria={incidente.categoria} />
          </div>
          <div>
            <h3 className="font-semibold">Forma de Notificación</h3>
            <ChipFormaNotificacion
              formaNotificacion={incidente.forma_de_notificacion}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Estado</h3>
            {incidente.estado ? (
              <ChipEstadoProblema estado={incidente.estado} />
            ) : (
              "No tiene asignado un estado"
            )}
          </div>
          <div>
            <h3 className="font-semibold">Fecha de Alta</h3>
            <ChipFecha fecha={incidente.fecha_de_alta} />
          </div>
          <div>
            <h3 className="font-semibold">ID reportador</h3>
            <p>{nombreReportador}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Agente asignado</h3>
          <p>
            {agenteAsignado
              ? `${agenteAsignado.nombre} ${agenteAsignado.apellido}`
              : "No hay agente asignado"}
          </p>
          {esSupervisor && (
            <AsignarAgenteDialog
              incidenteId={incidente.id}
              agenteAsignado={incidente.id_agente_asignado}
              usuarios={usuarios}
            />
          )}
          {esAgente && !incidente.id_agente_asignado && (
            <AsignarAMiMismoDialog incidenteId={incidente.id} agenteId={agenteId} />
          )}
        </div>

        <div>
          <h3 className="font-semibold">Servicios Afectados</h3>
          <p>{incidente.servicios_afectados}</p>
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
          <EditarItem id={incidente.id} />
          <BorrarItem id={incidente.id} action={borrarIncidente} />
        </div>
      </CardContent>
    </Card>
  );
}

import { formatDate } from "@/lib/utils";
import { Auditoria } from "@/models/auditorias";

import { EstadoAuditoriaView } from "./estado-view";

const AuditoriaView = ({ auditoria }: { auditoria: Auditoria }) => {
  return (
    <div className="border p-6">
      <p>
        <strong>Id:</strong> {auditoria.id}
      </p>
      <p>
        <strong>Id Entidad:</strong> {auditoria.id_entidad}
      </p>
      <p>
        <strong>Entidad:</strong> {auditoria.clase_entidad}
      </p>
      <p>
        <strong>Accion:</strong> {auditoria.accion}
      </p>
      <p>
        <strong>Fecha:</strong> {formatDate(auditoria.fecha_de_accion)}
      </p>
      <div className="mt-6">
        <strong>Estado anterior:</strong>{" "}
        <EstadoAuditoriaView estado={auditoria.estado_anterior} />
      </div>
      <div className="mt-6">
        <strong>Estado Nuevo:</strong>{" "}
        <EstadoAuditoriaView estado={auditoria.estado_nuevo} />
      </div>
    </div>
  );
};

export default AuditoriaView;

import { Auditoria } from "@/models/auditorias";

const AuditoriaView = ({ auditoria }: { auditoria: Auditoria }) => {
  return (
    <div className="border p-6">
      <p>
        <strong>Id:</strong> {auditoria.id}
      </p>
      <p>
        <strong>Entidad:</strong> {auditoria.clase_entidad}
      </p>
      <p>
        <strong>Accion:</strong> {auditoria.accion}
      </p>
      <p>
        <strong>Fecha:</strong> {auditoria.fecha}
      </p>
      <p>
        <strong>Estado anterior:</strong> {auditoria.estado_anterior}
      </p>
      <p>
        <strong>estado_nuevo:</strong> {auditoria.estado_nuevo}
      </p>
    </div>
  );
};

export default AuditoriaView;

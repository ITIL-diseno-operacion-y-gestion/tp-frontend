import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn, formatDate } from "@/lib/utils";
import { Auditoria } from "@/models/auditorias";

const AuditoriaPreview = ({ auditoria }: { auditoria: Auditoria }) => {
  const color = colorAuditoria(auditoria.clase_entidad);

  return (
    <Link
      href={`/auditorias/${auditoria.clase_entidad}/${auditoria.id_entidad}`}
    >
      <article
        className={cn(
          "rounded-lg border p-6 text-center hover:scale-105",
          color,
        )}
      >
        <p className="text-xl font-semibold">
          {auditoria.clase_entidad} #{auditoria.id}
        </p>
        <div className="space-x-4">
          <Badge>{auditoria.accion}</Badge>
          <Badge>{auditoria.id_entidad}</Badge>
          <Badge variant="outline">
            {formatDate(auditoria.fecha_de_accion)}
          </Badge>
        </div>
      </article>
    </Link>
  );
};

const colorAuditoria = (accion: Auditoria["clase_entidad"]): string => {
  switch (accion) {
    case "articulo":
      return "bg-green-200";
    case "usuario":
      return "bg-blue-200";
    case "incidente":
      return "bg-yellow-200";
    case "problema":
      return "bg-orange-200";
    case "error":
      return "bg-red-200";
    case "cambio":
      return "bg-purple-200";
    default:
      return "bg-gray-200";
  }
};

export default AuditoriaPreview;

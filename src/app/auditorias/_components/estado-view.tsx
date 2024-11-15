import { formatDate } from "@/lib/utils";
import { EstadoAuditoria } from "@/models/auditorias";

export const EstadoAuditoriaView = ({
  estado,
}: {
  estado: EstadoAuditoria | null;
}) => {
  if (!estado) return <p>Sin registros</p>;

  return (
    <div className="pl-6">
      {Object.keys(estado).map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {formatValue(estado[key])}
        </p>
      ))}
    </div>
  );
};

const formatValue = (value: string | number | boolean) => {
  if (typeof value === "boolean") {
    return value ? "Si" : "No";
  }

  if (typeof value === "number") {
    return value;
  }

  if (new Date(value).toString() !== "Invalid Date") {
    return formatDate(value);
  }

  return value;
};

import { formatDate } from "@/lib/utils";
import { Auditoria } from "@/models/auditorias";

export const EstadoAuditoriaView = ({
  auditoria,
}: {
  auditoria: Auditoria | null;
}) => {
  if (!auditoria) return <p>Sin registros</p>;
  return (
    <div className="inline-block border-2 border-blue-600 p-6">
      <Item name="ID" value={auditoria.id} />
      <Item name="Acción" value={auditoria.accion} />
      <div className="h-4"></div>

      {Object.keys(auditoria.estado_nuevo).map((key, index) => (
        <Item
          name={key}
          key={index}
          value={formatValue(auditoria.estado_nuevo[key])}
        />
      ))}
    </div>
  );
};

const formatValue = (value: string | number | boolean | Date) => {
  if (typeof value === "boolean") {
    return value ? "Si" : "No";
  }

  if (typeof value === "number") {
    return value;
  }

  if (new Date(value).toString() !== "Invalid Date") {
    return formatDate(value);
  }

  return value as string;
};

const Item = ({ name, value }: { name: string; value: React.ReactNode }) => {
  return (
    <p>
      <strong>{name}:</strong> {value}
    </p>
  );
};

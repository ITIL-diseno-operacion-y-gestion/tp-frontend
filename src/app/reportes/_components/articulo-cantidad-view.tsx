import { uppercaseFirst } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const ArticuloCantidadView = ({
  listado,
  entidad,
  entidadTiene = "artículos"
}: {
  listado: Record<string, number>;
  entidad: string;
  entidadTiene?: string;
}) => {
  return (
    <div>
      <h4 className="text-xl font-bold">{uppercaseFirst(entidadTiene)}</h4>
      <ul className="mt-2">
        {Object.entries(listado).map(([key, value]) => (
          <li key={key}>
            {key} <ArrowRight className="inline" /> {value}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-gray-500">
        Se lee el {entidad} i tiene un total de n {entidadTiene}
      </p>
    </div>
  );
};

import Link from "next/link";

import { ItemConfiguracion } from "@/models/configuracion";

type Props = {
  item: ItemConfiguracion;
};

export function ItemConfiguracionPreview(props: Props) {
  const { nombre, descripcion, esta_activo, tipo, id } = props.item;

  return (
    <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <h2 className="text-lg font-bold">{nombre}</h2>
      <p className="text-sm text-gray-600">{descripcion}</p>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex gap-x-3">
          <ChipActivo activo={esta_activo} />
          <ChipTipo tipo={tipo} />
        </div>
        <Link href={`/configuracion/${id}`}>
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
}

const ChipActivo = ({ activo }: { activo: boolean }) => {
  const color = activo ? "bg-green-500" : "bg-red-500";
  return (
    <span className={`rounded-full px-2 py-1 text-white ${color}`}>
      {activo ? "Activo" : "Inactivo"}
    </span>
  );
};

const ChipTipo = ({ tipo }: { tipo: string }) => {
  const color = "bg-blue-500";
  return (
    <span className={`rounded-full px-2 py-1 text-white ${color}`}>{tipo}</span>
  );
};

import { TipoItemConfiguracion } from "@/models/configuracion";

const colorTipo: Record<TipoItemConfiguracion, string> = {
  documentacion: "bg-blue-500",
  hardware: "bg-yellow-500",
  instalacion: "bg-green-500",
  network: "bg-purple-500",
  proveedor: "bg-indigo-500",
  "servicio tecnico": "bg-pink-500",
  software: "bg-red-500",
};

export const ChipTipo = ({ tipo }: { tipo: TipoItemConfiguracion }) => {
  return (
    <span className={`rounded-full px-2 py-1 text-white ${colorTipo[tipo]}`}>{tipo}</span>
  );
};

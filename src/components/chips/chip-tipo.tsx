import { TipoItemConfiguracion } from "@/models/configuracion";

export const ChipTipo = ({ tipo }: { tipo: TipoItemConfiguracion }) => {
  let color = "";

  switch (tipo) {
    case "documentacion":
      color = "bg-blue-500";
      break;
    case "hardware":
      color = "bg-yellow-500";
      break;
    case "instalacion":
      color = "bg-green-500";
      break;
    case "network":
      color = "bg-purple-500";
      break;
    case "proveedor":
      color = "bg-indigo-500";
      break;
    case "servicio tecnico":
      color = "bg-pink-500";
      break;
    case "software":
      color = "bg-red-500";
      break;
    default:
      color = "bg-gray-500";
  }
  return (
    <span className={`rounded-full px-2 py-1 text-white ${color}`}>{tipo}</span>
  );
};

import { EstadoItemConfiguracion } from "@/models/configuracion";

import {
  Construction,
  KeyboardMusic,
  Leaf,
  PencilRuler,
  Presentation,
  TestTubeDiagonal,
  Warehouse,
} from "lucide-react";

const colorEstado: Record<EstadoItemConfiguracion, string> = {
  "en almacen": "bg-yellow-500",
  "en creacion": "bg-blue-500",
  "en mantenimiento": "bg-green-500",
  "en produccion": "bg-purple-500",
  "en prueba": "bg-red-500",
  encargado: "bg-orange-500",
  planeado: "bg-cyan-500",
};

const estadoIcon: Record<EstadoItemConfiguracion, React.ReactNode> = {
  "en almacen": <Warehouse className="h-4 w-4" />,
  "en creacion": <PencilRuler className="h-4 w-4" />,
  "en mantenimiento": <Construction className="h-4 w-4" />,
  "en produccion": <KeyboardMusic className="h-4 w-4" />,
  "en prueba": <TestTubeDiagonal className="h-4 w-4" />,
  encargado: <Presentation className="h-4 w-4" />,
  planeado: <Leaf className="h-4 w-4" />,
};

export function ChipEstadoConfiguracion({
  estado,
}: {
  estado: EstadoItemConfiguracion;
}) {
  return (
    <span
      className={`flex max-w-max items-center gap-1 rounded-full px-2 py-1 text-sm text-white ${colorEstado[estado]}`}
    >
      {estadoIcon[estado]}
      {estado}
    </span>
  );
}

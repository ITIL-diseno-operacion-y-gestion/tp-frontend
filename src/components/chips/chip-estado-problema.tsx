import { EstadoProblema } from "@/models/incidentes";
import { CheckCircle, Clock, Eye, Search } from "lucide-react";

const colorEstado: Record<EstadoProblema, string> = {
  analizandose: "bg-yellow-500",
  asignado: "bg-orange-500",
  detectado: "bg-blue-500",
  resuelto: "bg-green-500",
  cerrado: "bg-purple-500",
};

const estadoIcon: Record<EstadoProblema, React.ReactNode> = {
  detectado: <Eye className="h-4 w-4" />,
  analizandose: <Search className="h-4 w-4" />,
  asignado: <Clock className="h-4 w-4" />,
  resuelto: <CheckCircle className="h-4 w-4" />,
  cerrado: <CheckCircle className="h-4 w-4" />,
};

export function ChipEstadoProblema({ estado }: { estado: EstadoProblema }) {
  return (
    <span
      className={`rounded-full px-2 py-1 flex gap-1 items-center text-sm text-white ${colorEstado[estado]}`}
    >
      {estadoIcon[estado]}
      {estado}
    </span>
  );
}

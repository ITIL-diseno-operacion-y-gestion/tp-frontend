import { EstadoCambio } from "@/models/cambios";

const colorEstado: Record<EstadoCambio, string> = {
  creado: "bg-yellow-500",
  "en progreso": "bg-orange-500",
  recibido: "bg-blue-500",
  aceptado: "bg-green-500",
  aplicado: "bg-purple-500",
  rechazado: "bg-red-500",
};
export function ChipEstadoCambio({ estado }: { estado: EstadoCambio }) {
  return (
    <span
      className={`rounded-full px-2 py-1 text-sm text-white ${colorEstado[estado]}`}
    >
      {estado}
    </span>
  );
}

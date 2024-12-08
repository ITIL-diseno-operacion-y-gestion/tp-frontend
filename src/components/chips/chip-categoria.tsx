import { CategoriaProblema } from "@/models/incidentes";

const colorCategoria: Record<CategoriaProblema, string> = {
  "de datos": "bg-blue-500",
  "de disponibilidad": "bg-yellow-500",
  "de seguridad": "bg-cyan-500",
  legal: "bg-purple-500",
  tecnico: "bg-indigo-500",
};

export function ChipCategoria({ categoria }: { categoria: CategoriaProblema }) {
  return (
    <span
      className={`rounded-full px-2 py-1 text-sm text-white ${colorCategoria[categoria]}`}
    >
      {categoria}
    </span>
  );
}

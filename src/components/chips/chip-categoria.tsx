import { CategoriaProblema } from "@/models/incidentes";
import { Problema } from "@/models/problemas";

import { Cable, Cpu, Database, Scale, Shield } from "lucide-react";

const colorCategoria: Record<CategoriaProblema, string> = {
  "de datos": "bg-blue-500",
  "de disponibilidad": "bg-yellow-500",
  "de seguridad": "bg-cyan-500",
  legal: "bg-purple-500",
  tecnico: "bg-indigo-500",
};

const categoriaIcon: Record<Problema["categoria"], React.ReactNode> = {
  "de seguridad": <Shield className="h-4 w-4" />,
  tecnico: <Cpu className="h-4 w-4" />,
  "de disponibilidad": <Cable className="h-4 w-4" />,
  "de datos": <Database className="h-4 w-4" />,
  legal: <Scale className="h-4 w-4" />,
};

export function ChipCategoria({ categoria }: { categoria: CategoriaProblema }) {
  return (
    <span
      className={`flex max-w-max items-center gap-1 rounded-full px-2 py-1 text-sm text-white ${colorCategoria[categoria]}`}
    >
      {categoriaIcon[categoria]}
      {categoria}
    </span>
  );
}

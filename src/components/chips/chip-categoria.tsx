import { cn } from "@/lib/utils";
import { CategoriaProblema } from "@/models/incidentes";

export function ChipCategoria({ categoria }: { categoria: CategoriaProblema }) {
  let color = "";
  switch (categoria) {
    case "de datos":
      color = "bg-blue-500";
      break;
    case "de disponibilidad":
      color = "bg-yellow-500";
      break;
    case "de seguridad":
      color = "bg-cyan-500";
      break;
    case "legal":
      color = "bg-purple-500";
      break;
    case "tecnico":
      color = "bg-indigo-500";
      break;
    default:
      color = "bg-gray-500";
      break;
  }

  return (
    <span className={cn("rounded-full px-2 py-1 text-sm text-white", color)}>
      {categoria}
    </span>
  );
}

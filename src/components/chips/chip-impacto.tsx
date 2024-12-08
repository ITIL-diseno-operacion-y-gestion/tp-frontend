import { Impacto } from "@/models/cambios";

const colorImpacto: Record<Impacto, string> = {
  menor: "bg-green-500",
  significativo: "bg-yellow-500",
  mayor: "bg-red-500",
};

export function ChipImpacto({ impacto }: { impacto: Impacto }) {
  return (
    <span className={`rounded px-2 py-1 text-white ${colorImpacto[impacto]}`}>
      {impacto}
    </span>
  );
}

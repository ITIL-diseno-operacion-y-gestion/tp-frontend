"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EstadoProblema } from "@/models/incidentes";

import { Pie, PieChart } from "recharts";

export const ChartEstado = ({ estado }: { estado: EstadoProblema }) => {
  if (!estado) return null;
  // "detectado" | "analizandose" | "asignado" | "resuelto" | "cerrado"
  const chartConfig = {
    detectado: { color: "pink", label: "Planeado" },
    analizandose: { color: "blue", label: "Encargado" },
    asignado: { color: "purple", label: "En creación" },
    resuelto: { color: "red", label: "En prueba" },
    cerrado: { color: "orange", label: "En almacén" },
    value: {
      label: "Cantidad",
    },
  } satisfies ChartConfig;

  const data = Object.entries(estado).map(([key, value]) => ({
    name: key.split(" ").join("_"),
    value,
    fill: `var(--color-${key.split(" ").join("_")})`,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="-translate-y-2 flex-wrap gap-2"
        />
        <Pie dataKey="value" nameKey="name" innerRadius={30} data={data} />
      </PieChart>
    </ChartContainer>
  );
};

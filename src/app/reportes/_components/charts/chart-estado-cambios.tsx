"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { EstadoCambio } from "@/models/cambios";

import { Pie, PieChart } from "recharts";

export const ChartEstadoCambios = ({
  estado,
}: {
  estado: Record<EstadoCambio, number | undefined>;
}) => {
  const chartConfig = {
    creado: { color: "pink", label: "creado" },
    recibido: { color: "blue", label: "recibido" },
    aceptado: { color: "purple", label: "aceptado" },
    rechazado: { color: "red", label: "rechazado" },
    en_progreso: { color: "orange", label: "en progreso" },
    aplicado: { color: "yellow", label: "aplicado" },
    value: {
      label: "Cantidad",
    },
  } satisfies ChartConfig;

  const data = Object.entries(estado).map(([key, value]) => ({
    name: key.split(" ").join("_"),
    value,
    fill: `var(--color-${key.split(" ").join("_")})`,
  }));

  console.log(data);
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

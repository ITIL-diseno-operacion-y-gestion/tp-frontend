"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TipoItemConfiguracion } from "@/models/configuracion";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

export const ChartTipoArticulos = ({
  tipo,
}: {
  tipo: Record<TipoItemConfiguracion, number | undefined>;
}) => {
  const chartConfig = {
    hardware: { color: "pink", label: "hardware" },
    software: { color: "blue", label: "software" },
    network: { color: "purple", label: "network" },
    documentacion: { color: "red", label: "documentacion" },
    instalacion: { color: "orange", label: "instalacion" },
    proveedor: { color: "yellow", label: "proveedor" },
    servicio_tecnico: { color: "gray", label: "servicio tecnico" },
    value: {
      label: "Cantidad",
    },
  } satisfies ChartConfig;

  const data = Object.entries(tipo).map(([key, value]) => ({
    name: key.split(" ").join("_"),
    value,
    fill: `var(--color-${key.split(" ").join("_")})`,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-video max-h-[200px]"
    >
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{
          left: 50,
        }}
      >
        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="value" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="value" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
};

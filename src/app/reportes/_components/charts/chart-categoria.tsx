"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CategoriaProblema } from "@/models/incidentes";

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

export const ChartCategoria = ({
  categoria,
}: {
  categoria: Record<CategoriaProblema, number | undefined>;
}) => {
  const chartConfig = {
    de_seguridad: { color: "pink", label: "De seguridad" },
    tecnico: { color: "blue", label: "tecnico" },
    de_disponibilidad: { color: "purple", label: "De disponib." },
    de_datos: { color: "red", label: "De datos" },
    legal: { color: "orange", label: "legal" },
    value: {
      label: "Cantidad",
    },
  } satisfies ChartConfig;

  const data = Object.entries(categoria).map(([key, value]) => ({
    name: key.split(" ").join("_"),
    value,
    fill: `var(--color-${key.split(" ").join("_")})`,
  }));

  return (
    <ChartContainer config={chartConfig} className="aspect-[20/9] max-h-[400px]">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="value"
          strokeWidth={2}
          radius={8}
          activeIndex={2}
          activeBar={({ ...props }) => {
            return (
              <Rectangle
                {...props}
                fillOpacity={0.8}
                stroke={props.payload.fill}
                strokeDasharray={4}
                strokeDashoffset={4}
              />
            );
          }}
        />
      </BarChart>
    </ChartContainer>
  );
};

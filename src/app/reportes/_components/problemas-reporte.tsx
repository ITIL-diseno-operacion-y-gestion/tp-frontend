"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Reporte } from "@/models/reportes";

import { Pie, PieChart } from "recharts";

export function ProblemasReporteView({
  problemas,
}: {
  problemas: Reporte["problemas"];
}) {
  const { estado, categoria, incidente } = problemas;

  return (
    <div className="border p-6">
      <p>
        <strong>Estado:</strong>
      </p>
      <ChartEstado estado={estado} />
      <p>
        <strong>Incidente:</strong>
      </p>
      {Object.entries(incidente).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}

      <p>
        <strong>Categoría:</strong>
      </p>
      {Object.entries(categoria).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}
    </div>
  );
}

const ChartEstado = ({
  estado,
}: {
  estado: Reporte["problemas"]["estado"];
}) => {
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

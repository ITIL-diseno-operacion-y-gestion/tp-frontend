"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Reporte } from "@/models/reportes";

import { LabelList, Pie, PieChart } from "recharts";

export function ArticuloReporteView({
  articulos,
}: {
  articulos: Reporte["articulos"];
}) {
  const { estado, tipo } = articulos;

  return (
    <div className="border p-6">
      <p>
        <strong>Estado:</strong>
      </p>
      <ChartEstado estado={estado} />

      <p>
        <strong>Tipo:</strong>
      </p>
      {Object.entries(tipo).map(([key, value]) => (
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
  estado: Reporte["articulos"]["estado"];
}) => {
  const chartConfig = {
    planeado: { color: "pink", label: "Planeado" },
    encargado: { color: "blue", label: "Encargado" },
    en_creacion: { color: "purple", label: "En creación" },
    en_prueba: { color: "red", label: "En prueba" },
    en_almacen: { color: "orange", label: "En almacén" },
    en_produccion: { color: "yellow", label: "En producción" },
    en_mantenimiento: { color: "gray", label: "En mantenimiento" },
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
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <Pie dataKey="value" nameKey="name" innerRadius={30} data={data}>
          <LabelList
            dataKey="name"
            className="fill-black"
            stroke="none"
            fontSize={14}
            fontWeight="bold"
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

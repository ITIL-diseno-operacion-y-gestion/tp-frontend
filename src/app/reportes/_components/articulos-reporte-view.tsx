"use client";

import { Reporte } from "@/models/reportes";

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
      {Object.entries(estado).map(([key, value]) => (
        <ul key={key}>
          <li>
            {key}: {value || 0}
          </li>
        </ul>
      ))}

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

/*
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
*/

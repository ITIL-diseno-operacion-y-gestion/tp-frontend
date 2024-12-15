import { getReporte } from "@/api/reportes";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";

import ReporteView from "./_components/reporte-view";

export default async function ReportesPage() {
  const reporte = await getReporte();

  return (
    <>
      <Title>Reportes</Title>
      <div className="flex justify-end mb-4">
        <ButtonActualizar path="/reportes" />
      </div>
      <ReporteView reporte={reporte} />
    </>
  );
}

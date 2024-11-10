import { getReporte } from "@/api/reportes";
import { Title } from "@/components/common/title";

import ReporteView from "./_components/reporte-view";

export default async function ReportesPage() {
  const reporte = await getReporte();

  return (
    <>
      <Title>Reportes</Title>
      <ReporteView reporte={reporte} />
    </>
  );
}

import { getReporte } from "@/api/reportes";
import { Title } from "@/components/common/title";

import ReporteView from "./_components/reporte-view";
import { FiltroGeneralesParticulares } from "./_components/filtro-generales-particulares";

export default async function ReportesPage() {
  const reporte = await getReporte();

  return (
    <>
      <Title>Reportes</Title>
      <FiltroGeneralesParticulares />
      <ReporteView reporte={reporte} />
    </>
  );
}

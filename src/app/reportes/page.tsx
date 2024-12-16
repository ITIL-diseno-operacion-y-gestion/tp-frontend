import { getReporte } from "@/api/reportes";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";
import { getSession } from "@/lib/session";

import ReporteView from "./_components/reporte-view";

export default async function ReportesPage() {
  const session = await getSession();

  if (!session) throw new Error("No hay usuario logueado");

  const id_agente_asociado =
    session.user.rol === "agente" ? session.user.id : undefined;
  const reporte = await getReporte(id_agente_asociado);

  return (
    <>
      <Title>Reportes</Title>
      <div className="mb-4 flex justify-end">
        <ButtonActualizar path="/reportes" />
      </div>
      <ReporteView reporte={reporte} />
    </>
  );
}

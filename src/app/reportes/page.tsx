import { getReporte } from "@/api/reportes";
import { getAgentes } from "@/api/users";
import { ButtonActualizar } from "@/components/button-actualizar";
import { Title } from "@/components/common/title";
import { getSession } from "@/lib/session";

import { FiltroAgenteAsociado } from "./_components/filtro-agente-asociado";
import { FiltroFechas } from "./_components/filtro-fechas";
import ReporteView from "./_components/reporte-view";

export default async function ReportesPage(props: {
  searchParams?: Promise<{
    desde?: string;
    hasta?: string;
    id_agente_asociado?: number;
  }>;
}) {
  const session = await getSession();

  if (!session) throw new Error("No hay usuario logueado");

  const searchParams = await props.searchParams;
  const desde = searchParams?.desde ? new Date(searchParams.desde) : undefined;
  const hasta = searchParams?.hasta ? new Date(searchParams.hasta) : undefined;
  const id_agente_asociado =
    session.user.rol === "agente"
      ? session.user.id
      : searchParams?.id_agente_asociado || undefined;

  const reporte = await getReporte(id_agente_asociado, desde, hasta);
  const esSupervisor = session.user.rol === "supervisor";
  const usuarios = esSupervisor ? await getAgentes() : [];

  return (
    <>
      <Title>Reportes</Title>
      <div className="mb-4 flex justify-between">
        <div>
          <FiltroFechas tipo="desde" />
          <FiltroFechas tipo="hasta" />
          {esSupervisor && <FiltroAgenteAsociado usuarios={usuarios} />}
        </div>
        <ButtonActualizar path="/reportes" />
      </div>
      <ReporteView reporte={reporte} />
    </>
  );
}

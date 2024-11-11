import { getIncidentes } from "@/api/incidentes";
import { getProblemas } from "@/api/problemas";
import { Title } from "@/components/common/title";
import { NuevoErrorConocidoForm } from "@/components/forms/nuevo-error-conocido";

export default async function NuevoErrorConocidoPage() {
  const [incidentes, problemas] = await Promise.all([
    getIncidentes(),
    getProblemas(),
  ]);

  return (
    <>
      <Title>Nuevo Error Conocido</Title>
      <NuevoErrorConocidoForm incidentes={incidentes} problemas={problemas} />
    </>
  );
}

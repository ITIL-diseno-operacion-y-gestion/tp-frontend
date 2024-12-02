import { getAuditorias } from "@/api/auditoria";
import { Title } from "@/components/common/title";

import AuditoriaPreview from "./_components/auditoria-preview";
import { FiltroEntidad } from "./_components/filtro-entidad";

export default async function AuditoriasPage(props: {
  searchParams?: Promise<{
    entidad?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  let auditorias = await getAuditorias();

  if (searchParams?.entidad) {
    auditorias = auditorias.filter(
      (auditoria) => auditoria.clase_entidad === searchParams.entidad,
    );
  }

  return (
    <>
      <Title>Auditorías</Title>
      <FiltroEntidad />
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 mt-6">
        {auditorias.map((auditoria) => (
          <li key={auditoria.id}>
            <AuditoriaPreview auditoria={auditoria} />
          </li>
        ))}
      </ul>
    </>
  );
}

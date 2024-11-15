import { getAuditoria } from "@/api/auditoria";
import { Title } from "@/components/common/title";

import AuditoriaView from "./_components/auditoria-view";

export default async function AuditoriasPage() {
  const auditoria = await getAuditoria();

  return (
    <>
      <Title>Auditorías</Title>
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {auditoria.map((auditoria) => (
          <li key={auditoria.id}>
            <AuditoriaView auditoria={auditoria} />
          </li>
        ))}
      </ul>
    </>
  );
}

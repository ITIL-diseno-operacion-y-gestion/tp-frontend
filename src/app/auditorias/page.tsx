import { getAuditorias } from "@/api/auditoria";
import AuditoriaPreview from "./_components/auditoria-preview";
import { Title } from "@/components/common/title";

export default async function AuditoriasPage() {
  const auditorias = await getAuditorias();

  return (
    <>
      <Title>Auditorías</Title>
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {auditorias.map((auditoria) => (
          <li key={auditoria.id}>
            <AuditoriaPreview auditoria={auditoria} />
          </li>
        ))}
      </ul>
    </>
  );
}

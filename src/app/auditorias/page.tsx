import { getAuditoria } from "@/api/auditoria";
import { Title } from "@/components/common/title";

import AuditoriaView from "./_components/auditoria-view";

export default async function AuditoriasPage() {
  const auditoria = await getAuditoria();
  // const { articulos, cambios, errores, incidentes, problemas } = reporte;

  return (
    <>
      <Title>Usuarios</Title>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {auditoria.map((auditoria) => (
          <li key={auditoria.id}>
            <AuditoriaView auditoria={auditoria} />
          </li>
        ))}
      </ul>
    </>
  );
}

import { getAuditoria } from "@/api/auditoria";
import { Title } from "@/components/common/title";
import { Auditoria } from "@/models/auditorias";

import { NodesAuditoria } from "../../_components/nodes-auditoria";

export default async function AuditoriaDetailsPage(props: {
  params: Promise<{ entidad: string; id: string }>;
}) {
  const { entidad, id } = await props.params;
  const auditoria = await getAuditoria(
    +id,
    entidad as Auditoria["clase_entidad"],
  );

  console.log(JSON.stringify(auditoria, null, 2));

  return (
    <>
      <Title>
        Auditoria {auditoria[0].clase_entidad} #{auditoria[0].id_entidad}
      </Title>

      <NodesAuditoria auditorias={auditoria} />
    </>
  );
}

/*
<ul>
        {auditoria.map((auditoria, index) => (
          <li className="flex items-center" key={index}>
            <EstadoAuditoriaView estado={auditoria.estado_nuevo} />
          </li>
        ))}
      </ul>
      */

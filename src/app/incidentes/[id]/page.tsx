import { getIncidente } from "@/api/incidentes";
import { Title } from "@/components/common/title";

import IncidenteView from "./_components/incidente-view";

export default async function IncidentesDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = +params.id;
  const incidente = await getIncidente(id);

  return (
    <div>
      <Title>Incidente {id}</Title>
      <IncidenteView incidente={incidente} />
    </div>
  );
}

import { Title } from "@/components/common/title";

export default async function IncidentesDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;

  return (
    <div>
      <Title>Incidente {id}</Title>
    </div>
  );
}

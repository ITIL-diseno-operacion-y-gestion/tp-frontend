import { Title } from "@/components/common/title";

export default async function EditIncidentePage(props: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await props.params).id, 10);
  return (
    <>
      <Title>Editando Incidente #{id}</Title>
    </>
  );
}

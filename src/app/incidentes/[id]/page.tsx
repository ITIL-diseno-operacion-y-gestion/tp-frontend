export default async function IncidentesDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;

  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-bold">Incidente {id}</h1>
    </div>
  );
}

export function ErrorDisplay({ error }: { error?: string }) {
  if (!error) return null;

  return <p className="text-red-500">{error}</p>;
}

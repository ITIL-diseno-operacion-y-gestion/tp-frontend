export function ErrorDisplay({ error }: { error?: string[] }) {
  if (!error) return null;

  return (
    <p className="text-red-500" aria-live="polite">
      {error.join("\n")}
    </p>
  );
}

"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  label = "Guardar",
  pendingLabel = "Cargando...",
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-700 disabled:bg-blue-500/70"
      disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

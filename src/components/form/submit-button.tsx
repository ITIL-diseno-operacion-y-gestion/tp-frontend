"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ label = "Guardar" }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-700"
      disabled={pending}
    >
      {pending ? "Guardando..." : label}
    </button>
  );
}

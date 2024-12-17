"use client";

import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

import { Label } from "@/components/ui/label";
import { uppercaseFirst } from "@/lib/utils";

export function FiltroFechas({ tipo }: { tipo: "desde" | "hasta" }) {
  const ref = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback(() => {
    const term = ref.current?.value;
    const params = new URLSearchParams(searchParams);
    console.log(params.toString());
    if (term) {
      params.set(tipo, term);
    } else {
      params.delete(tipo);
    }
    replace(`${pathname as Route}?${params.toString()}`, { scroll: false });
  }, []);

  return (
    <div className="mr-4 inline">
      <Label htmlFor="selector-entidad" className="font-bold">
        {uppercaseFirst(tipo)}:
      </Label>
      <input
        type="date"
        className="ml-6 rounded border p-2"
        ref={ref}
        onChange={() => handleSearch()}
        defaultValue={searchParams.get(tipo)?.toString()}
      />
    </div>
  );
}

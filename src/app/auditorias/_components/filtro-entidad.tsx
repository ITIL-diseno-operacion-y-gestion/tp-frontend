"use client";

import { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clase_entidad } from "@/models/auditorias";

export function FiltroEntidad() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term && term !== "todos") {
      params.set("entidad", term);
    } else {
      params.delete("entidad");
    }
    replace(`${pathname as Route}?${params.toString()}`, { scroll: false });
  }, []);

  return (
    <>
      <Label htmlFor="selector-entidad">Entidad</Label>
      <Select onValueChange={handleSearch}>
        <SelectTrigger id="selector-entidad" className="w-[180px]">
          <SelectValue placeholder="todos" />
        </SelectTrigger>
        <SelectContent>
          <>
            <SelectItem value="todos">Todos</SelectItem>
            {clase_entidad.map((clase) => (
              <SelectItem key={clase} value={clase}>
                {clase}
              </SelectItem>
            ))}
          </>
        </SelectContent>
      </Select>
    </>
  );
}

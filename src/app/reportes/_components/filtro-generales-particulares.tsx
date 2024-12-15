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

export function FiltroGeneralesParticulares() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term === "generales") {
      params.set("tipo", "generales");
    } else {
      params.delete("tipo");
    }
    replace(`${pathname as Route}?${params.toString()}`, { scroll: false });
  }, []);

  return (
    <div className="mb-6">
      <Label htmlFor="selector-tipo">Tipo</Label>
      <Select onValueChange={handleSearch} defaultValue="particulares">
        <SelectTrigger id="selector-tipo" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="particulares">
            Particulares
          </SelectItem>
          <SelectItem value="generales">Generales</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

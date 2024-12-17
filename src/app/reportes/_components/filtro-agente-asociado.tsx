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
import { User } from "@/models/users";

export function FiltroAgenteAsociado({ usuarios }: { usuarios: User[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const agenteAsociadoDefault =
    searchParams.get("id_agente_asociado") &&
    usuarios.find(
      (usuario) =>
        usuario.id === parseInt(searchParams.get("id_agente_asociado") || ""),
    );

  const handleSearch = useCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(params.toString());
    if (term) {
      params.set("id_agente_asociado", term);
    } else {
      params.delete("id_agente_asociado");
    }
    replace(`${pathname as Route}?${params.toString()}`, { scroll: false });
  }, []);

  return (
    <div className="mr-4 inline-block">
      <Label htmlFor="selector-entidad" className="mr-6 font-bold">
        Agente asociado:
      </Label>
      <Select onValueChange={handleSearch}>
        <SelectTrigger className="w-56">
          <SelectValue
            placeholder={
              agenteAsociadoDefault
                ? `${agenteAsociadoDefault.nombre} ${agenteAsociadoDefault.apellido}`
                : "Seleccione un agente"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {usuarios.map((usuario) => (
            <SelectItem value={usuario.id.toString()} key={usuario.id}>
              {usuario.nombre} {usuario.apellido}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

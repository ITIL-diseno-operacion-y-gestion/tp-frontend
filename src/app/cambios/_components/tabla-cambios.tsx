import Link from "next/link";

import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cambio } from "@/models/cambios";

export function TablaCambios({ cambios }: { cambios: Cambio[] }) {
  return (
    <Table>
      <TableCaption>Todos los cambios realizados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead>Fecha de creación</TableHead>
          <TableHead>Fecha de implementación</TableHead>
          <TableHead>Impacto</TableHead>
          <TableHead>Costo estimado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cambios.map((cambio) => (
          <TableRow key={cambio.id}>
            <TableCell className="font-bold">
              <Link href={`/cambios/${cambio.id}`}>{cambio.id}</Link>
            </TableCell>
            <TableCell>{cambio.estado}</TableCell>
            <TableCell>
              <ChipPrioridad prioridad={cambio.prioridad} />
            </TableCell>
            <TableCell>
              {new Date(cambio.fecha_de_creacion).toLocaleDateString("es-AR")}
            </TableCell>
            <TableCell>
              {new Date(cambio.fecha_de_implementacion).toLocaleDateString(
                "es-AR",
              )}
            </TableCell>
            <TableCell>{cambio.impacto}</TableCell>
            <TableCell>
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(cambio.costo_estimado)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

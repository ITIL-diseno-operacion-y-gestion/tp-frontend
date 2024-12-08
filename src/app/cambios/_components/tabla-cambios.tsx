import Link from "next/link";

import { ChipEstadoCambio } from "@/components/chips/chip-estado-cambio";
import { ChipFecha } from "@/components/chips/chip-fecha";
import { ChipImpacto } from "@/components/chips/chip-impacto";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { Button } from "@/components/ui/button";
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

import { Edit, Eye } from "lucide-react";

export function TablaCambios({ cambios }: { cambios: Cambio[] }) {
  return (
    <Table>
      <TableCaption>Todos los cambios realizados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Acciones</TableHead>
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
              <Acciones id={cambio.id.toString()} />
            </TableCell>
            <TableCell>
              <ChipEstadoCambio estado={cambio.estado} />
            </TableCell>
            <TableCell>
              <ChipPrioridad prioridad={cambio.prioridad} />
            </TableCell>
            <TableCell>
              <ChipFecha fecha={cambio.fecha_de_creacion} />
            </TableCell>
            <TableCell>
              <ChipFecha fecha={cambio.fecha_de_implementacion} />
            </TableCell>
            <TableCell>
              <ChipImpacto impacto={cambio.impacto} />
            </TableCell>
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

const Acciones = ({ id }: { id: string }) => (
  <div className="mt-0.5 flex items-end gap-2">
    <Link href={`/cambios/${id}`}>
      <Button size="icon" variant="outline" className="size-8">
        <Eye className="size-4" />
      </Button>
    </Link>
    <Link href={`/cambios/${id}/edit`}>
      <Button size="icon" variant="outline" className="size-8">
        <Edit className="size-4" />
      </Button>
    </Link>
  </div>
);

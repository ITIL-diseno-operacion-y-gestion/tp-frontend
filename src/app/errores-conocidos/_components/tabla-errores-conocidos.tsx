import Link from "next/link";

import { ChipFecha } from "@/components/chips/chip-fecha";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ErrorConocido } from "@/models/errores-conocidos";

export function TablaErroresConocidos({
  errores,
}: {
  errores: ErrorConocido[];
}) {
  return (
    <Table>
      <TableCaption>Errores conocidos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Síntomas</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Fecha de Creación</TableHead>
          <TableHead>Solución Provisoria</TableHead>
          <TableHead>Solución Definitiva</TableHead>
          <TableHead>Problemas Relacionados</TableHead>
          <TableHead>Incidentes Relacionados</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {errores.map((error) => (
          <TableRow key={error.id}>
            <TableCell>{error.sintomas}</TableCell>
            <TableCell>{error.descripcion}</TableCell>
            <TableCell>
              <ChipFecha fecha={error.fecha_de_creacion} />
            </TableCell>
            <TableCell>{error.solucion_provisoria}</TableCell>
            <TableCell>{error.solucion_definitiva}</TableCell>
            <TableCell>
              <div className="space-x-2">
                {error.problemas.map((problema) => (
                  <Link
                    href={`/problemas/${problema.id}`}
                    key={problema.id}
                    className="text-blue-500"
                  >
                    {problema.nombre}
                  </Link>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <div className="space-x-2">
                {error.incidentes.map((incidente) => (
                  <Link
                    href={`/incidentes/${incidente.id}`}
                    key={incidente.id}
                    className="text-blue-500"
                  >
                    {incidente.nombre}
                  </Link>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

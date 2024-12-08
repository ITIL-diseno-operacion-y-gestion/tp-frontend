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
          <TableHead>Nombre</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Fecha de Creación</TableHead>
          <TableHead>Síntomas</TableHead>
          <TableHead>Solución Provisoria</TableHead>
          <TableHead>Solución Definitiva</TableHead>
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
            <TableCell>{error.sintomas}</TableCell>
            <TableCell>{error.solucion_provisoria}</TableCell>
            <TableCell>{error.solucion_definitiva}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

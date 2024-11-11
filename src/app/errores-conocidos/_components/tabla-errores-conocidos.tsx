import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {errores.map((error) => (
          <TableRow key={error.id}>
            <TableCell>{error.sintomas}</TableCell>
            <TableCell>{error.descripcion}</TableCell>
            <TableCell>{formatDate(error.fecha_de_creacion)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

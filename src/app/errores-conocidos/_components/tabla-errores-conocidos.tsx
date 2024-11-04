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
      <TableHead>
        <TableRow>
          <TableHeader>Nombre</TableHeader>
          <TableHeader>Descripción</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {errores.map((error) => (
          <TableRow key={error.id}>
            <TableCell>{error.sintomas}</TableCell>
            <TableCell>{error.descripcion}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

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
        </TableRow>
      </TableHeader>
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

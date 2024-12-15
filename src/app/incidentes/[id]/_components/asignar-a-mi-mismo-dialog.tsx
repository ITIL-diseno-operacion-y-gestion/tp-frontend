import { asignarAgente } from "@/api/actions/incidentes";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AsignarAMiMismoDialog({
  incidenteId,
  agenteId,
}: {
  incidenteId: number;
  agenteId: number;
}) {
  const action = asignarAgente.bind(null, incidenteId);

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>
        Asignar a mí mismo
      </DialogTrigger>
      <DialogContent>
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Asignar a mi mismo</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" name="agente" value={agenteId}>Asignar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { asignarAgente } from "@/api/actions/incidentes";
import { SelectField } from "@/components/form/select-field";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/models/users";

export function AsignarAgenteDialog({
  usuarios,
  agenteAsignado,
  incidenteId,
}: {
  usuarios: User[];
  incidenteId: number;
  agenteAsignado: number | null;
}) {
  const action = asignarAgente.bind(null, incidenteId);
  const agentes = usuarios.filter((usuario) => usuario.rol === "agente");

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>Asignar Agente</DialogTrigger>
      <DialogContent>
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Seleccione el agente a asignar</DialogTitle>
          </DialogHeader>
          <SelectField
            label="Agente"
            name="agente"
            defaultValue={agenteAsignado?.toString()}
            className="my-6"
            required
          >
            <>
              <option value="">Seleccione un agente</option>
              <optgroup label="Agentes">
                {agentes.map((agente) => (
                  <option key={agente.id} value={agente.id}>
                    {agente.nombre}
                  </option>
                ))}
              </optgroup>
            </>
          </SelectField>
          <DialogFooter>
            <Button type="submit">Asignar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

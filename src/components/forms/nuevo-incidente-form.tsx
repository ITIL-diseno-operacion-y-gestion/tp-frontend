import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { IncidenteCreate } from "@/app/incidentes/models";
import { env } from "@/env/client";
import {
  CategoriaProblema,
  Prioridad,
  categoriasProblema,
  prioridades,
} from "@/models/types";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

export function NuevoIncidenteForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: IncidenteCreate = {
      categoria: formData.get("categoria") as CategoriaProblema,
      forma_de_notificacion: formData.get("forma_de_notificacion") as string, // TODO: Tipar forma de notificacion
      id_usuario: +formData.get("id_usuario")! as number,
      informacion_adicional: formData.get("informacion_adicional") as string,
      prioridad: formData.get("prioridad") as Prioridad,
      reportador: formData.get("reportador") as string,
      servicios_afectados: formData.get("servicios_afectados") as string,
      usuarios_afectados: formData.get("usuarios_afectados") as string,
    };
    console.log(data);

    const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/incidentes`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.ok) {
      revalidatePath("/incidentes");
      const searchParams = new URLSearchParams();
      searchParams.set("success", "true");
      searchParams.set("message", "Incidente guardado correctamente!");
      redirect(`/incidentes?${searchParams.toString()}`);
    } else {
      console.error("ERROR: ", await req.json());
      const searchParams = new URLSearchParams();
      searchParams.set("success", "false");
      searchParams.set("message", "Hubo un error inesperado!");
      redirect(`/incidentes/new?${searchParams.toString()}`);
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <SelectField name="categoria" label="Categoría" required>
        {categoriasProblema.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </SelectField>
      <TextField
        name="forma_de_notificacion"
        label="Forma de notificación"
        required
      />
      <TextField
        name="id_usuario"
        label="ID de usuario"
        type="number"
        required
      />
      <TextAreaField
        name="informacion_adicional"
        label="Información adicional"
      />
      <SelectField name="prioridad" label="Prioridad" required>
        {prioridades.map((prioridad) => (
          <option key={prioridad} value={prioridad}>
            {prioridad}
          </option>
        ))}
      </SelectField>
      <TextField name="reportador" label="Reportador" required />
      <TextField
        name="servicios_afectados"
        label="Servicios afectados"
        required
      />
      <TextField
        name="usuarios_afectados"
        label="Usuarios afectados"
        required
      />
      <SubmitButton label="Crear Incidente" />
    </form>
  );
}

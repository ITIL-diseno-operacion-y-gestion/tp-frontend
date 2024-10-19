import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ProblemaCreate } from "@/app/problemas/models";
import { env } from "@/env/client";
import {
  CategoriaProblema,
  categoriasProblema,
  estadosProblema,
  prioridades,
} from "@/models/types";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

export function NuevoProblemaForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: ProblemaCreate = {
      categoria: formData.get("categoria") as CategoriaProblema,
      id_usuario: +formData.get("id_usuario")! as number,
      prioridad: formData.get("prioridad") as ProblemaCreate["prioridad"],
      sintomas: formData.get("sintomas") as string,
      estado: formData.get("estado") as ProblemaCreate["estado"],
    };
    console.log(data);

    const req = await fetch(`${env.NEXT_PUBLIC_API_URL}/problemas`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.ok) {
      revalidatePath("/problemas");
      const searchParams = new URLSearchParams();
      searchParams.set("success", "true");
      searchParams.set("message", "Problema guardado correctamente!");
      redirect(`/problemas?${searchParams.toString()}`);
    } else {
      console.error("ERROR: ", await req.json());
      const searchParams = new URLSearchParams();
      searchParams.set("success", "false");
      searchParams.set("message", "Hubo un error inesperado!");
      redirect(`/problemas/new?${searchParams.toString()}`);
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <SelectField label="Categoría" name="categoria" required>
        {categoriasProblema.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </SelectField>
      <TextField name="sintomas" label="Síntomas" required />
      <TextField name="id_usuario" label="ID usuario" type="number" required />
      <SelectField label="Prioridad" name="prioridad" required>
        {prioridades.map((prioridad) => (
          <option key={prioridad} value={prioridad}>
            {prioridad}
          </option>
        ))}
      </SelectField>
      <SelectField label="Estado" name="estado" required>
        {estadosProblema.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </SelectField>
      <SubmitButton label="Crear Problema" />
    </form>
  );
}

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createProblema } from "@/api/problemas";
import { ProblemaCreate } from "@/app/problemas/models";
import { User } from "@/models/interfaces";
import {
  CategoriaProblema,
  categoriasProblema,
  estadosProblema,
  prioridades,
} from "@/models/types";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";

export function NuevoProblemaForm({ usuarios }: { usuarios: User[] }) {
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

    let success = false;
    let message = "Hubo un error inesperado!";
    try {
      await createProblema(data);
      success = true;
      message = "Problema guardado correctamente!";
    } catch (error) {
      console.error("ERROR: ", error);
    }

    const searchParams = new URLSearchParams();
    searchParams.set("success", success.toString());
    searchParams.set("message", message);

    if (success) {
      revalidatePath("/problemas");
      redirect(`/problemas?${searchParams.toString()}`);
    } else {
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
      <SelectField name="id_usuario" label="Usuario" required>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>
            {usuario.nombre} {usuario.apellido}
          </option>
        ))}
      </SelectField>
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

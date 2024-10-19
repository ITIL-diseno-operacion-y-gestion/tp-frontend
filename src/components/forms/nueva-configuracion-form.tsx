import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ItemConfiguracionCreate,
  TipoItemConfiguracion,
  tiposItemConfiguracion,
} from "@/app/configuracion/models";
import { env } from "@/env/client";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

export function NuevaConfiguracionForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: ItemConfiguracionCreate = {
      nombre: formData.get("nombre") as string,
      descripcion: formData.get("descripcion") as string,
      tipo: formData.get("tipo") as TipoItemConfiguracion,
      version: +formData.get("version")! as number,
      titular: formData.get("titular") as string,
      info_fabricacion: formData.get("info_fabricacion") as string,
      localizacion: formData.get("localizacion") as string,
      relacion_items: formData.get("relacion_items") as string,
    };
    console.log(data);

    const req = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/configuracion/articulos`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (req.ok) {
      revalidatePath("/configuracion");
      const searchParams = new URLSearchParams();
      searchParams.set("success", "true");
      searchParams.set("message", "Configuración guardada correctamente!");
      redirect(`/configuracion?${searchParams.toString()}`);
    } else {
      console.error("ERROR: ", await req.json());
      const searchParams = new URLSearchParams();
      searchParams.set("success", "false");
      searchParams.set("message", "Hubo un error inesperado!");
      redirect(`/configuracion/new?${searchParams.toString()}`);
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <TextField name="nombre" label="Nombre" required />
      <TextAreaField name="descripcion" label="Descripción" required />
      <SelectField name="tipo" label="Tipo" required>
        {tiposItemConfiguracion.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </SelectField>
      <TextField name="version" label="Versión" type="number" required />
      <TextField name="titular" label="Titular" required />
      <TextAreaField
        name="info_fabricacion"
        label="Información de fabricación"
      />
      <TextField name="localizacion" label="Localización" />
      <TextField name="relacion_items" label="Relación de items" />
      <SubmitButton label="Crear articulo de configuracion" />
    </form>
  );
}

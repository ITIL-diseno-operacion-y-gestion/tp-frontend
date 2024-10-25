import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createIncidente } from "@/api/incidentes";
import { ArticuloConfiguracion } from "@/app/configuracion/models";
import { IncidenteCreate } from "@/app/incidentes/models";
import { User } from "@/models/interfaces";
import {
  CategoriaProblema,
  FormaNotificacion,
  Prioridad,
  categoriasProblema,
  formasNotificacion,
  prioridades,
} from "@/models/types";

import { SelectField } from "../form/select-field";
import { SubmitButton } from "../form/submit-button";
import { TextField } from "../form/text-field";
import { TextAreaField } from "../form/textarea-field";

export function NuevoIncidenteForm({
  usuarios,
  articulos,
}: {
  usuarios: User[];
  articulos: ArticuloConfiguracion[];
}) {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: IncidenteCreate = {
      categoria: formData.get("categoria") as CategoriaProblema,
      forma_de_notificacion: formData.get(
        "forma_de_notificacion",
      ) as FormaNotificacion,
      id_usuario: +formData.get("id_usuario")! as number,
      informacion_adicional: formData.get("informacion_adicional") as string,
      prioridad: formData.get("prioridad") as Prioridad,
      servicios_afectados: formData.get("servicios_afectados") as string,
      usuarios_afectados: formData.get("usuarios_afectados") as string,
    };
    console.log(data);

    let success = false;
    let message = "Hubo un error inesperado!";
    try {
      await createIncidente(data);
      success = true;
      message = "Incidente guardado correctamente!";
    } catch (error) {
      console.error("ERROR: ", error);
    }

    const searchParams = new URLSearchParams();
    searchParams.set("success", success.toString());
    searchParams.set("message", message);

    if (success) {
      revalidatePath("/incidentes");
      redirect(`/incidentes?${searchParams.toString()}`);
    } else {
      redirect(`/incidentes/new?${searchParams.toString()}`);
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <div className="flex flex-wrap gap-x-3 md:flex-nowrap">
        <SelectField name="categoria" label="Categoría" required>
          {categoriasProblema.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </SelectField>
        <SelectField
          name="forma_de_notificacion"
          label="Forma de notificación"
          required
        >
          {formasNotificacion.map((forma) => (
            <option key={forma} value={forma}>
              {forma}
            </option>
          ))}
        </SelectField>
        <SelectField name="id_usuario" label="Usuario" required>
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre} {usuario.apellido}
            </option>
          ))}
        </SelectField>
        <SelectField name="prioridad" label="Prioridad" required>
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </SelectField>
      </div>
      <TextField
        name="servicios_afectados"
        label="Servicios afectados"
        required
      />

      <div className="flex gap-x-3">
        <SelectField
          name="usuarios_afectados"
          label="Usuarios afectados"
          required
          multiple
        >
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nombre} {usuario.apellido}
            </option>
          ))}
        </SelectField>
        <SelectField
          name="id_articulos"
          label="Artículos de configuración afectados"
          required
          multiple
        >
          {articulos.map((articulo) => (
            <option key={articulo.id} value={articulo.id}>
              {articulo.nombre}
            </option>
          ))}
        </SelectField>
      </div>

      <TextAreaField
        name="informacion_adicional"
        label="Información adicional"
      />
      <SubmitButton label="Crear Incidente" />
    </form>
  );
}

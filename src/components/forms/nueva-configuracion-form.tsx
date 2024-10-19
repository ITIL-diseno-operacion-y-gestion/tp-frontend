import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  ItemConfiguracionCreate,
  TipoItemConfiguracion,
  tiposItemConfiguracion,
} from "@/app/configuracion/models";
import { env } from "@/env/client";

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
      <div>
        <label htmlFor="nombre" className="block">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion" className="block">
          Descripción
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="tipo" className="block">
          Tipo
        </label>
        <select
          id="tipo"
          name="tipo"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        >
          {tiposItemConfiguracion.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="version" className="block">
          Versión
        </label>
        <input
          type="text"
          id="version"
          name="version"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="titular" className="block">
          Titular
        </label>
        <input
          type="text"
          id="titular"
          name="titular"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="info_fabricacion" className="block">
          Información de fabricación
        </label>
        <textarea
          id="info_fabricacion"
          name="info_fabricacion"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="localizacion" className="block">
          Localización
        </label>
        <input
          type="text"
          id="localizacion"
          name="localizacion"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="relacion_items" className="block">
          Relación de items
        </label>
        <input
          type="text"
          id="relacion_items"
          name="relacion_items"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full max-w-xs rounded bg-green-500 px-3 py-2 text-white"
      >
        Guardar
      </button>
    </form>
  );
}

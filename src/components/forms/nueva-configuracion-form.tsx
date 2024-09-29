import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ItemConfiguracion } from "@/app/configuracion/models";
import { env } from "@/env/client";

export function NuevaConfiguracionForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: Omit<ItemConfiguracion, "id"> = {
      nombre: formData.get("nombre") as string,
      descripcion: formData.get("descripcion") as string,
      tipo: formData.get("tipo") as string,
      version: +formData.get("version")! as number,
      fecha_de_alta: formData.get("fecha_de_alta") as string,
      esta_activo: formData.get("esta_activo") === "on",
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
      console.error(await req.text());
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
        />
      </div>
      <div>
        <label htmlFor="tipo" className="block">
          Tipo
        </label>
        <input
          type="text"
          id="tipo"
          name="tipo"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
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
        />
      </div>
      <div>
        <label htmlFor="fecha_de_alta" className="block">
          Fecha de alta
        </label>
        <input
          type="date"
          id="fecha_de_alta"
          name="fecha_de_alta"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="esta_activo" className="block">
          Activo
        </label>
        <input
          type="checkbox"
          id="esta_activo"
          name="esta_activo"
          className="rounded border border-gray-300 px-3 py-2"
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

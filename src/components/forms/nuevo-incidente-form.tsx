import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { IncidenteCreate } from "@/app/incidentes/models";
import { env } from "@/env/client";
import { Prioridad, prioridades } from "@/models/types";

export function NuevoIncidenteForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: IncidenteCreate = {
      categoria: formData.get("categoria") as string,
      forma_de_notificacion: formData.get("forma_de_notificacion") as string,
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
      <div>
        <label htmlFor="categoria" className="block">
          Categoría
        </label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="forma_de_notificacion" className="block">
          Forma de notificación
        </label>
        <input
          type="text"
          id="forma_de_notificacion"
          name="forma_de_notificacion"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="id_usuario" className="block">
          ID de usuario
        </label>
        <input
          type="number"
          id="id_usuario"
          name="id_usuario"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="informacion_adicional" className="block">
          Información adicional
        </label>
        <input
          type="text"
          id="informacion_adicional"
          name="informacion_adicional"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="prioridad" className="block">
          Prioridad
        </label>
        <select
          id="prioridad"
          name="prioridad"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        >
          {prioridades.map((prioridad) => (
            <option key={prioridad} value={prioridad}>
              {prioridad}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="reportador" className="block">
          Reportador
        </label>
        <input
          type="text"
          id="reportador"
          name="reportador"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="servicios_afectados" className="block">
          Servicios afectados
        </label>
        <input
          type="text"
          id="servicios_afectados"
          name="servicios_afectados"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="usuarios_afectados" className="block">
          Usuarios afectados
        </label>
        <input
          type="text"
          id="usuarios_afectados"
          name="usuarios_afectados"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-3 py-2 text-white"
      >
        Crear incidente
      </button>
    </form>
  );
}

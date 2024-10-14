import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { ProblemaCreate } from "@/app/problemas/models";
import { env } from "@/env/client";

export function NuevoProblemaForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data: ProblemaCreate = {
      categoria: formData.get("categoria") as string,
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
      console.error(await req.json());
      const searchParams = new URLSearchParams();
      searchParams.set("success", "false");
      searchParams.set("message", "Hubo un error inesperado!");
      redirect(`/problemas/new?${searchParams.toString()}`);
    }
  };

  return (
    <form className="space-y-4" action={handleSubmit}>
      <div>
        <label htmlFor="categoria" className="block">
          Categoría
        </label>
        <select
          name="categoria"
          id="categoria"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        >
          <option value="de seguridad">Seguridad</option>
          <option value="tecnico">Técnico</option>
          <option value="de disponibilidad">Disponibilidad</option>
          <option value="de datos">Datos</option>
          <option value="legal">Legal</option>
        </select>
        <input
          type="text"
          id="categoria"
          name="categoria"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="sintomas" className="block">
          Síntomas
        </label>
        <input
          type="text"
          id="sintomas"
          name="sintomas"
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
        <label htmlFor="prioridad" className="block">
          Prioridad
        </label>
        <select
          name="prioridad"
          id="prioridad"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <div>
        <label htmlFor="estado" className="block">
          Estado
        </label>
        <select
          id="estado"
          name="estado"
          className="w-full rounded border border-gray-300 px-3 py-2"
          required
        >
          <option value="detectado">Detectado</option>
          <option value="analizandose">Analizándose</option>
          <option value="asignado">Asignado</option>
          <option value="resuelto">Resuelto</option>
          <option value="cerrado">Cerrado</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-3 py-2 text-white"
      >
        Crear problema
      </button>
    </form>
  );
}

import Link from "next/link";

import { uppercaseFirst } from "@/lib/utils";

import { Problema } from "../models";

export function TablaProblemas({ problemas }: { problemas: Problema[] }) {
  const detectados = problemas
    .filter((p) => p.estado === "detectado")
    .sort(sortByPrioridad);
  const analizandose = problemas
    .filter((p) => p.estado === "analizandose")
    .sort(sortByPrioridad);
  const asignados = problemas
    .filter((p) => p.estado === "asignado")
    .sort(sortByPrioridad);
  const resueltos = problemas
    .filter((p) => p.estado === "resuelto")
    .sort(sortByPrioridad);
  const cerrados = problemas
    .filter((p) => p.estado === "cerrado")
    .sort(sortByPrioridad);

  return (
    <div className="grid grid-flow-col overflow-x-auto border 2xl:grid-cols-5">
      <SectionEstado problemas={detectados} estado="detectado" />
      <SectionEstado problemas={analizandose} estado="analizandose" />
      <SectionEstado problemas={asignados} estado="asignado" />
      <SectionEstado problemas={resueltos} estado="resuelto" />
      <SectionEstado problemas={cerrados} estado="cerrado" />
    </div>
  );
}

const sortByPrioridad = (a: Problema, b: Problema) => {
  const prioridades = ["alta", "media", "baja"];
  return prioridades.indexOf(a.prioridad) - prioridades.indexOf(b.prioridad);
};

export function ProblemaView({ problema }: { problema: Problema }) {
  const { categoria, sintomas, id_usuario, prioridad, id } = problema;

  return (
    <div className="px-4">
      <div className="h-56 w-full overflow-clip bg-gray-50 px-4 py-3 shadow-lg">
        <h4 className="text-xl font-bold">{categoria}</h4>
        <p className="line-clamp-3">{sintomas}</p>
        <p>{id_usuario}</p>
        <ChipPrioridad prioridad={prioridad} />
        <Link href={`/problemas/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
}

const colorEstado: Record<Problema["estado"], string> = {
  analizandose: "bg-yellow-500",
  asignado: "bg-cyan-500",
  cerrado: "bg-green-500",
  detectado: "bg-red-500",
  resuelto: "bg-purple-500",
};

export function ChipEstado({ estado }: { estado: Problema["estado"] }) {
  return (
    <h3
      className={`min-w-52 px-2 py-1 text-center text-lg font-semibold text-white ${colorEstado[estado]}`}
    >
      {uppercaseFirst(estado)}
    </h3>
  );
}

const bgEstado: Record<Problema["estado"], string> = {
  analizandose: "bg-yellow-200",
  asignado: "bg-cyan-200",
  cerrado: "bg-green-200",
  detectado: "bg-red-200",
  resuelto: "bg-purple-200",
};

export function SectionEstado({
  problemas,
  estado,
}: {
  problemas: Problema[];
  estado: Problema["estado"];
}) {
  return (
    <section className={`${bgEstado[estado]} mb-4 min-w-64 pb-4`}>
      <ChipEstado estado={estado} />
      <ul className="mt-4 space-y-4 pb-10">
        {problemas.map((p) => (
          <ProblemaView problema={p} key={p.id} />
        ))}
      </ul>
    </section>
  );
}

export function ChipPrioridad({
  prioridad,
}: {
  prioridad: Problema["prioridad"];
}) {
  const colorPrioridad: Record<Problema["prioridad"], string> = {
    alta: "bg-red-500",
    baja: "bg-green-500",
    media: "bg-yellow-500",
  };

  return (
    <span
      className={`rounded px-2 py-1 text-white ${colorPrioridad[prioridad]}`}
    >
      {prioridad}
    </span>
  );
}

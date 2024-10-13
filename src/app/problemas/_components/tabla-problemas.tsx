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
    <div className="grid border-collapse grid-cols-5 overflow-x-auto border pb-4 [&>div>ul]:border-r-2 [&>div>ul]:border-dashed [&>div]:space-y-6">
      <div>
        <ChipEstado estado="detectado" />
        <ul>
          {detectados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <ChipEstado estado="analizandose" />
        <ul className="mt-6">
          {analizandose.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <ChipEstado estado="asignado" />
        <ul>
          {asignados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <ChipEstado estado="resuelto" />
        <ul>
          {resueltos.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <ChipEstado estado="cerrado" />
        <ul>
          {cerrados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const sortByPrioridad = (a: Problema, b: Problema) => {
  const prioridades = ["alta", "media", "baja"];
  return prioridades.indexOf(a.prioridad) - prioridades.indexOf(b.prioridad);
};

export function ProblemaView({ problema }: { problema: Problema }) {
  const { categoria, sintomas, id_usuario, prioridad } = problema;
  return (
    <div className="m-2 min-w-max p-4 shadow">
      <h1 className="text-xl font-bold">{categoria}</h1>
      <p>{sintomas}</p>
      <p>{id_usuario}</p>
      <ChipPrioridad prioridad={prioridad} />
    </div>
  );
}

export function ChipEstado({ estado }: { estado: Problema["estado"] }) {
  const colorEstado: Record<Problema["estado"], string> = {
    analizandose: "bg-yellow-500",
    asignado: "bg-cyan-500",
    cerrado: "bg-green-500",
    detectado: "bg-red-500",
    resuelto: "bg-purple-500",
  };

  return (
    <h3
      className={`px-2 py-1 text-center text-lg font-semibold text-white ${colorEstado[estado]}`}
    >
      {uppercaseFirst(estado)}
    </h3>
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

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
    <div className="grid border-collapse grid-flow-col overflow-x-auto border">
      <SectionEstado estado="detectado">
        <ul>
          {detectados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </SectionEstado>
      <SectionEstado estado="analizandose">
        <ul className="mt-6">
          {analizandose.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </SectionEstado>
      <SectionEstado estado="asignado">
        <ul>
          {asignados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </SectionEstado>
      <SectionEstado estado="resuelto">
        <ul>
          {resueltos.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </SectionEstado>
      <SectionEstado estado="cerrado">
        <ul>
          {cerrados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </SectionEstado>
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
    <div className="mx-4 my-2 bg-gray-50 p-4 shadow-lg">
      <h1 className="text-xl font-bold">{categoria}</h1>
      <p>{sintomas}</p>
      <p>{id_usuario}</p>
      <ChipPrioridad prioridad={prioridad} />
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
  estado,
  children,
}: {
  estado: Problema["estado"];
  children: React.ReactNode;
}) {
  return (
    <section className={`${bgEstado[estado]} space-y-6 pb-4`}>
      <ChipEstado estado={estado} />
      {children}
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

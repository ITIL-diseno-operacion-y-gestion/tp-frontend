import { Problema } from "../models";

export function TablaProblemas({ problemas }: { problemas: Problema[] }) {
  // I want to make a kanban board with the problems
  // I want to group the problems by their state

  const detectados = problemas.filter((p) => p.estado === "detectado");
  const analizandose = problemas.filter((p) => p.estado === "analizandose");
  const asignados = problemas.filter((p) => p.estado === "asignado");
  const resueltos = problemas.filter((p) => p.estado === "resuelto");
  const cerrados = problemas.filter((p) => p.estado === "cerrado");

  return (
    <div className="grid border-collapse grid-cols-5 gap-4 overflow-x-auto border">
      <div>
        <h2 className="text-center text-lg font-bold">Detectados</h2>
        <ul>
          {detectados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center text-lg font-bold">Analizandose</h2>
        <ul>
          {analizandose.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center text-lg font-bold">Asignados</h2>
        <ul>
          {asignados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center text-lg font-bold">Resueltos</h2>
        <ul>
          {resueltos.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-center text-lg font-bold">Cerrados</h2>
        <ul>
          {cerrados.map((p) => (
            <ProblemaView problema={p} key={p.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProblemaView({ problema }: { problema: Problema }) {
  const { estado, categoria, sintomas, id_usuario, prioridad } = problema;
  return (
    <div className="m-2 p-4 shadow">
      <h1 className="text-xl font-bold">{categoria}</h1>
      <ChipEstado estado={estado} />
      <p>{sintomas}</p>
      <p>{id_usuario}</p>
      <ChipPrioridad prioridad={prioridad} />
    </div>
  );
}

export function ChipEstado({ estado }: { estado: Problema["estado"] }) {
  const colorEstado: Record<Problema["estado"], string> = {
    analizandose: "bg-yellow-500",
    asignado: "bg-blue-500",
    cerrado: "bg-green-500",
    detectado: "bg-red-500",
    resuelto: "bg-purple-500",
  };

  return (
    <span className={`rounded px-2 py-1 text-white ${colorEstado[estado]}`}>
      {estado}
    </span>
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

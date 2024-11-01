import Link from "next/link";

import { Problema } from "@/models/problemas";

export function ItemProblemaView({ item }: { item: Problema }) {
  const { id, id_usuario, sintomas, prioridad, categoria, estado, incidentes } =
    item;

  return (
    <div className="px-4">
      <p>Id: {id}</p>
      <p>Usuario: {id_usuario}</p>
      <p>Síntomas: {sintomas}</p>
      <p>Prioridad: {prioridad}</p>
      <p>Categoría: {categoria}</p>
      <p>Estado: {estado}</p>
      <p>Incidentes:</p>
      <ul className="mt-4 space-y-4">
        {incidentes.map((incidente) => (
          <li key={incidente.id}>
            <Link
              href={`/incidentes/${incidente.id}`}
              className="text-blue-500"
            >
              {" "}
              {incidente.id}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import IncidenteView from "@/app/incidentes/[id]/_components/incidente-view";

import { Problema } from "../../models";

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
            <IncidenteView key={incidente.id} incidente={incidente} />
          </li>
        ))}
      </ul>
    </div>
  );
}

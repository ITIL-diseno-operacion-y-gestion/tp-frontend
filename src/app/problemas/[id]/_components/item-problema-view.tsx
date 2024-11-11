import Link from "next/link";

import { ChipCategoria } from "@/components/chips/chip-categoria";
import { ChipPrioridad } from "@/components/chips/chip-prioridad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Problema } from "@/models/problemas";

import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Search,
  Shield,
} from "lucide-react";

export function ItemProblemaView({ problema }: { problema: Problema }) {
  const categoriaIcon: Record<Problema["categoria"], React.ReactNode> = {
    "de seguridad": <Shield className="h-4 w-4" />,
    tecnico: <AlertTriangle className="h-4 w-4" />,
    "de disponibilidad": <Clock className="h-4 w-4" />,
    "de datos": <Search className="h-4 w-4" />,
    legal: <Eye className="h-4 w-4" />,
  };

  const estadoIcon: Record<Problema["estado"], React.ReactNode> = {
    detectado: <Eye className="h-4 w-4" />,
    analizandose: <Search className="h-4 w-4" />,
    asignado: <Clock className="h-4 w-4" />,
    resuelto: <CheckCircle className="h-4 w-4" />,
    cerrado: <CheckCircle className="h-4 w-4" />,
  };

  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Problema #{problema.id}</span>
          <ChipPrioridad prioridad={problema.prioridad} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold">Usuario ID</h3>
            <p>{problema.id_usuario}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Categoría</h3>
            <div className="flex items-center space-x-1">
              {categoriaIcon[problema.categoria]}
              <ChipCategoria categoria={problema.categoria} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Estado</h3>
            <div className="flex items-center space-x-1">
              {estadoIcon[problema.estado]}
              <span>{problema.estado}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Síntomas</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {problema.sintomas}
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold">
            Incidentes ({problema.incidentes.length})
          </h3>
          <ul className="mt-4 space-y-4">
            {problema.incidentes.map((incidente) => (
              <li key={incidente.id}>
                <Link
                  href={`/incidentes/${incidente.id}`}
                  className="text-blue-500"
                >
                  {incidente.id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

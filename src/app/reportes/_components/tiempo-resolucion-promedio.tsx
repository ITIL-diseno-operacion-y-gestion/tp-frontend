export const TiempoResolucionPromedio = ({
  tiempo_promedio_resolucion,
}: {
  tiempo_promedio_resolucion: string;
}) => {
  if (!tiempo_promedio_resolucion) return null;

  return (
    <div className="my-auto text-center">
      <h4 className="text-lg font-bold">Tiempo Resolucion Promedio</h4>
      <span className="text-4xl font-bold">{tiempo_promedio_resolucion}</span>
    </div>
  );
};

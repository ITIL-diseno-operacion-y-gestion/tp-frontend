export const ConformidadResolucionPromedio = ({
  conformidad_resolucion_promedio,
}: {
  conformidad_resolucion_promedio: string | number;
}) => {
  if (!conformidad_resolucion_promedio) return null;

  return (
    <div className="my-auto text-center">
      <h4 className="text-lg font-bold">Conformidad Resolucion Promedio</h4>
      <span className="text-4xl font-bold">
        {conformidad_resolucion_promedio}
      </span>
    </div>
  );
};

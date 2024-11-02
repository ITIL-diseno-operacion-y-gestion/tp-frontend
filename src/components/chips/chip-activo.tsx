export const ChipActivo = ({ activo }: { activo: boolean }) => {
  const color = activo ? "bg-green-500" : "bg-red-500";
  return (
    <span className={`rounded-full px-2 py-1 text-white ${color}`}>
      {activo ? "Activo" : "Inactivo"}
    </span>
  );
};

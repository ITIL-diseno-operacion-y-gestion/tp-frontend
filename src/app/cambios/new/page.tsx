import { getArticulosConfiguracion } from "@/api/configuracion";
import { Title } from "@/components/common/title";
import { NuevoCambioForm } from "@/components/forms/nuevo-cambio-form";
import { getSession } from "@/lib/session";

export default async function NuevoCambioPage() {
  const user = await getSession();

  if (!user) throw new Error("No hay usuario logueado");

  const articulos = await getArticulosConfiguracion();

  return (
    <>
      <Title>Nuevo cambio</Title>
      <NuevoCambioForm articulos={articulos} id_titular={user?.user.id} />
    </>
  );
}

import { getArticulosConfiguracion } from "@/api/configuracion";
import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { NuevoCambioForm } from "@/components/forms/nuevo-cambio-form";

export default async function NuevoCambioPage() {
  const usuarios = await getUsers();
  const articulos = await getArticulosConfiguracion();

  return (
    <>
      <Title>Nuevo cambio</Title>
      <NuevoCambioForm usuarios={usuarios} articulos={articulos} />
    </>
  );
}

import { Title } from "@/components/common/title";
import { env } from "@/env/client";
import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="space-y-4">
      <Title>Bienvenido a ITSM Dashboard</Title>
      <h2 className="text-lg font-semibold">Perfil</h2>
      <p>
        Nombre: {session?.user.nombre} {session?.user.apellido}
      </p>
      <p>Email: {session?.user.email}</p>
      {env.NEXT_PUBLIC_API_URL}
    </div>
  );
}

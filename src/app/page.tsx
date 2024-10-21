import { Title } from "@/components/common/title";
import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="space-y-4">
      <Title>Bienvenido</Title>
      <p className="text-center">
        {session?.user.nombre} {session?.user.apellido} {session?.user.email}
      </p>
    </div>
  );
}

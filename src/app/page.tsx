import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";
import { getSession } from "@/lib/session";

export default async function Home() {
  const users = await getUsers();
  const session = await getSession();

  return (
    <div className="space-y-4">
      <Title>Bienvenido a ITSM Dashboard</Title>
      <h2 className="text-lg font-semibold">Perfil</h2>
      <p>
        Nombre: {session?.user.nombre} {session?.user.apellido}
      </p>
      <p>Email: {session?.user.email}</p>
      <h2 className="text-lg font-semibold">Usuarios Registrados</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} {user.apellido} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

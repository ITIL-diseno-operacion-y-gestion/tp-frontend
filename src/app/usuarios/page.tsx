import { getUsers } from "@/api/users";
import { Title } from "@/components/common/title";

import UserView from "./_components/user-view";

export default async function UsuariosPage() {
  const users = await getUsers();

  return (
    <>
      <Title>Usuarios</Title>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => (
          <li key={user.id}>
            <UserView user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}

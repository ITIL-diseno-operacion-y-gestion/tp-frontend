import { User } from "@/models/users";

const UserView = ({ user }: { user: User }) => {
  return (
    <div className="border p-6">
      <p>
        <strong>Nombre:</strong> {user.nombre} {user.apellido}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Rol:</strong> {user.rol}
      </p>
    </div>
  );
};

export default UserView;

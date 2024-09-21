export function LoginForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="mb-4 block w-full rounded-md border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="mb-4 block w-full rounded-md border p-2"
      />
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 p-2 text-white"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

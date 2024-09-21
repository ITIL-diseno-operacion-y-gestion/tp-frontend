import { LoginForm } from "@/components/forms/login-form";

import { signIn } from "./actions";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Iniciar Sesión</h1>
      <LoginForm action={signIn} />
    </>
  );
}

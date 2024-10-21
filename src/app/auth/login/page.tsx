import Link from "next/link";

import { Title } from "@/components/common/title";
import { LoginForm } from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="m-auto mt-6 max-w-md rounded-lg border p-6 shadow-md">
      <Title>Iniciar sesión</Title>
      <LoginForm />
      <p className="mt-4 text-center text-sm">
        No tenés cuenta?{" "}
        <Link href="/auth/register" className="underline">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}

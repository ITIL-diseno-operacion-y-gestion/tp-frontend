import Link from "next/link";

import { Title } from "@/components/common/title";
import { SignupForm } from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <div className="m-auto mt-6 max-w-md rounded-lg border p-6 shadow-md">
      <Title>Registrarse</Title>
      <SignupForm />
      <p className="mt-4 text-center text-sm">
        Ya tenés cuenta?{" "}
        <Link href="/auth/login" className="underline">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}

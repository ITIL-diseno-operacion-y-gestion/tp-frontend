import Link from "next/link";

import { RegisterForm } from "@/components/forms/register-form";

import { signUp } from "./actions";

export default function RegisterPage() {
  return (
    <>
      <h1>Registrarse</h1>
      <RegisterForm action={signUp} />
      <Link href="/">Iniciar sesión</Link>
    </>
  );
}

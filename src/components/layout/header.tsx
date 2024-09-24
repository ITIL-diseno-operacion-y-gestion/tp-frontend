import Link from "next/link";

export default function Header() {
  const loggedIn = true;

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between p-4 sm:flex-row">
        <h1 className="text-xl font-bold">
          <Link href="/">ITSM Dashboard</Link>
        </h1>
        {loggedIn && (
          <nav className="flex flex-col gap-x-4 sm:flex-row">
            <Link href="/" className="hover:text-blue-400">
              Configuración
            </Link>
            <Link href="/" className="hover:text-blue-400">
              Incidentes
            </Link>
            <Link href="/" className="hover:text-blue-400">
              Problemas
            </Link>
            <Link href="/" className="hover:text-blue-400">
              Cambios
            </Link>
          </nav>
        )}
        <div className="flex flex-col flex-wrap space-x-4 text-right sm:flex-row">
          {!loggedIn && (
            <>
              <Link href="/auth/register" className="hover:text-blue-400">
                Registrarse
              </Link>
              <Link href="/auth/login" className="hover:text-blue-400">
                Iniciar Sesión
              </Link>
            </>
          )}
          {loggedIn && (
            <Link href="/auth/login" className="hover:text-blue-400">
              Cerrar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

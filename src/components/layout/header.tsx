"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { deleteSession } from "@/lib/session";
import { cn } from "@/lib/utils";

export default function Header({ loggedIn }: { loggedIn: boolean }) {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between p-4 sm:flex-row">
        <h1 className="text-xl font-bold">
          <Link href="/">ITSM Dashboard</Link>
        </h1>
        {loggedIn && (
          <nav className="flex flex-col gap-x-4 sm:flex-row">
            <NavLink
              href="/configuracion"
              active={pathname.startsWith("/configuracion")}
            >
              Configuración
            </NavLink>
            <NavLink
              href="/incidentes"
              active={pathname.startsWith("/incidentes")}
            >
              Incidentes
            </NavLink>
            <NavLink
              href="/problemas"
              active={pathname.startsWith("/problemas")}
            >
              Problemas
            </NavLink>
            <NavLink
              href="/errores-conocidos"
              active={pathname.startsWith("/errores-conocidos")}
            >
              Errores Conocidos
            </NavLink>
            <NavLink href="/cambios" active={pathname.startsWith("/cambios")}>
              Cambios
            </NavLink>
          </nav>
        )}
        <div className="flex flex-col flex-wrap space-x-4 text-right sm:flex-row">
          {!loggedIn && (
            <>
              <Link href="/auth/login" className="hover:text-blue-400">
                Iniciar Sesión
              </Link>
              <Link href="/auth/register" className="hover:text-blue-400">
                Registrarse
              </Link>
            </>
          )}
          {loggedIn && (
            <form action={deleteSession}>
              <button className="hover:text-blue-400">Cerrar Sesión</button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}

const NavLink = ({
  href,
  active,
  children,
}: {
  href: Route;
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-white hover:text-blue-400",
        active && "rounded bg-slate-50/50 px-2",
      )}
    >
      {children}
    </Link>
  );
};

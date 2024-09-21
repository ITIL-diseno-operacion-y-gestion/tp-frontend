"use client";

import Link from "next/link";
import { useState } from "react";

import { Routes } from "@/lib/types";
import { cn } from "@/lib/utils";

import { LogIn, LogOut, Menu, UserPlus, X } from "lucide-react";

import { Logo } from "./logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your auth system

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <Logo />
          <nav className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">Services</NavLink>
            <NavLink href="/">Contact</NavLink>
          </nav>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Cerrar sesión
              </button>
            ) : (
              <>
                <NavLink href="/login" className="flex items-center">
                  <LogIn className="mr-2 h-5 w-5" />
                  Iniciar sesión
                </NavLink>
                <NavLink href="/register" className="flex items-center">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Registrarse
                </NavLink>
              </>
            )}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <NavLinkMenu href="/">Home</NavLinkMenu>
            <NavLinkMenu href="/">About</NavLinkMenu>
            <NavLinkMenu href="/">Services</NavLinkMenu>
            <NavLinkMenu href="/">Contact</NavLinkMenu>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
              >
                <LogOut className="mr-2 inline-block h-5 w-5" />
                Logout
              </button>
            ) : (
              <>
                <NavLinkMenu href="/login">
                  <LogIn className="mr-2 inline-block h-5 w-5" />
                  Iniciar Sesión
                </NavLinkMenu>
                <NavLinkMenu href="/register">
                  <UserPlus className="mr-2 inline-block h-5 w-5" />
                  Registrarse
                </NavLinkMenu>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export const NavLinkMenu = ({
  href,
  children,
}: {
  href: Routes;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
  >
    {children}
  </Link>
);

export const NavLink = ({
  href,
  className,
  children,
}: {
  href: Routes;
  className?: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={cn(
      "rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600",
      className,
    )}
  >
    {children}
  </Link>
);

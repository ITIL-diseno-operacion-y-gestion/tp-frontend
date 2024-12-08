import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/lib/session";

const PUBLIC_ROUTES = ["/auth/login", "/auth/register"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await getSession();
  console.log("Origin:", req.headers.get("origin"));
  console.log("X-Forwarded-Host:", req.headers.get("x-forwarded-host"));

  // Redirect to login if the user is not authenticated
  if (!PUBLIC_ROUTES.includes(pathname) && !session?.token) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  const esCliente = session?.user.rol === "cliente";

  // Si es cliente, no permitir acceder a rutas que no sean de incidentes
  if (esCliente && !pathname.startsWith("/incidentes")) {
    return NextResponse.redirect(new URL("/incidentes", req.nextUrl));
  }

  if (PUBLIC_ROUTES.includes(pathname) && session?.token) {
    return NextResponse.redirect(new URL("/incidentes", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  // Para q no se aplique a las rutas de la API, ni a los archivos estáticos
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

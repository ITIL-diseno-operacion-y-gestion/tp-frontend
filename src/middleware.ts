import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/lib/session";

const PUBLIC_ROUTES = ["/auth/login", "/auth/register"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await getSession();

  if (!PUBLIC_ROUTES.includes(pathname) && !session?.token) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  } else if (PUBLIC_ROUTES.includes(pathname) && session?.token) {
    return NextResponse.redirect(new URL("/configuracion", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  // Para q no se aplique a las rutas de la API, ni a los archivos estáticos
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

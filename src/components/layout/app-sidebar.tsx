import { Route } from "next";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { metricasPermitidas, rutasPermitidas } from "@/lib/rutas-permitidas";
import { deleteSession } from "@/lib/session";
import { User } from "@/models/users";

import {
  ClipboardList,
  FileWarning,
  LogOut,
  OctagonAlert,
  Radiation,
  RefreshCw,
  Settings,
  TextSearch,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";

type SidebarItem = {
  icon: React.ReactNode;
  title: string;
  href: Route;
};

const aplicacion: SidebarItem[] = [
  {
    href: "/cambios",
    title: "Cambios",
    icon: <RefreshCw />,
  },
  {
    href: "/configuracion",
    title: "Configuracion",
    icon: <Settings />,
  },
  {
    href: "/incidentes",
    title: "Incidentes",
    icon: <OctagonAlert />,
  },
  {
    href: "/problemas",
    title: "Problemas",
    icon: <FileWarning />,
  },
  {
    href: "/errores-conocidos",
    title: "Errores Conocidos",
    icon: <Radiation />,
  },
];

const metricas: SidebarItem[] = [
  {
    href: "/reportes",
    title: "Reportes",
    icon: <ClipboardList />,
  },
  {
    href: "/auditorias",
    title: "Auditorías",
    icon: <TextSearch />,
  },
  {
    href: "/usuarios",
    title: "Usuarios",
    icon: <Users />,
  },
];

const UserHeader = ({ user }: { user: User }) => {
  return (
    <section className="flex gap-x-2 pt-2">
      <Avatar className="size-8 rounded-lg">
        <AvatarFallback>
          {user.nombre[0].toUpperCase()}
          {user.apellido[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid text-sm leading-tight">
        <span className="font-semibold">
          {user.nombre} {user.apellido}
        </span>
        <span className="truncate text-xs">{user.rol?.toUpperCase()}</span>
      </div>
    </section>
  );
};

export function AppSidebar({ user }: { user?: User }) {
  if (!user) return null;

  const rutas = rutasPermitidas[user.rol];
  const metricasUsuario = metricas.filter((item) =>
    metricasPermitidas[user.rol].includes(item.href),
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserHeader user={user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Aplicación */}
        <SidebarGroup>
          <SidebarGroupLabel>Aplicación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aplicacion.map((item) => {
                if (rutas.includes(item.href)) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>
                          {item.icon} <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Métricas */}
        {user.rol !== "cliente" && (
          <SidebarGroup>
            <SidebarGroupLabel>Métricas</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {metricasUsuario.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        {item.icon} <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        {user && (
          <SidebarMenu>
            <SidebarMenuItem>
              <form action={deleteSession}>
                <SidebarMenuButton type="submit">
                  <LogOut />
                  Cerrar Sesión
                </SidebarMenuButton>
              </form>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

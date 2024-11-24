import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { BreadCrumbNav } from "@/components/layout/breadcrumb-nav";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MainContainer } from "@/components/layout/main-container";
import { ToastOperacion } from "@/components/toast-operacion";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { getSession } from "@/lib/session";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSM Dashboard",
  description: "ITSM Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "12rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar user={session?.user} />
          <div className="flex min-h-screen flex-grow flex-col">
            <Header loggedIn={!!session?.token} rol={session?.user.rol} />
            <MainContainer>
              <SidebarTrigger />
              <BreadCrumbNav />
              {children}
            </MainContainer>
            <Suspense>
              <ToastOperacion />
            </Suspense>
            <Toaster richColors />
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { BreadCrumbNav } from "@/components/layout/breadcrumb-nav";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MainContainer } from "@/components/layout/main-container";
import { ToastOperacion } from "@/components/toast-operacion";
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
        <div className="flex min-h-screen flex-col">
          <Header loggedIn={!!session?.token} />
          <MainContainer>
            <BreadCrumbNav />
            {children}
          </MainContainer>
          <Suspense>
            <ToastOperacion />
          </Suspense>
          <Toaster richColors />
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { MainContainer } from "@/components/layout/main-container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSM Dashboard",
  description: "ITSM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col bg-gray-200">
          <Header />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </div>
      </body>
    </html>
  );
}

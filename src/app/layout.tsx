import type { Metadata } from "next";
import {  Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import  AuthProvider from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="es">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex flex-col grainy-light min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            {children}
          </div>
          <Footer />
        </main>
        <Toaster position="bottom-center" />
      </body>
    </html>
    </AuthProvider>
  );
}

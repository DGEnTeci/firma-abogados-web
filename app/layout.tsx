import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valdés & Rueda Abogados | Asesoría Jurídica en Lenguaje Claro en Bogotá",
  description:
    "Firma boutique de abogados en Bogotá, Colombia. Explicamos su situación jurídica en lenguaje claro y le acompañamos en derecho constitucional, laboral, familiar, civil, penal y administrativo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--surface-primary)] text-[var(--text-primary)] selection:bg-[#c24b16]/20 selection:text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}

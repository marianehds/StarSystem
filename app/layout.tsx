import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Star System",
  description: "Sistema de design com componentes reutilizáveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

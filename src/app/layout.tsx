import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pollo Juan – Auténtico Pollo Frito con Alma Asiática",
  description:
    "Bienvenido a Pollo Juan: el mejor pollo frito crujiente, combos irresistibles, hamburguesas y bubble tea. ¡Pide ahora por WhatsApp!",
  keywords: ["pollo frito", "bubble tea", "combos", "hamburguesas", "Pollo Juan"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "José Amilton | Desenvolvedor Front-End",
  description: "Portfólio profissional de José Amilton, desenvolvedor front-end especializado em React, Next.js e interfaces modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

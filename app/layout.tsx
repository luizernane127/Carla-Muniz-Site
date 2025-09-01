import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Carla Muniz Advocacia", description: "Direito do Trabalho e Direito de Família em João Pessoa/PB" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="pt-BR"><body>{children}</body></html>); }

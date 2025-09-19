import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";           // ⬅️ importe aqui
import Analytics from "./Analytics";         // ajuste o caminho se estiver em outro lugar

export const metadata: Metadata = {
  title: "Carla Muniz Advocacia",
  description: "Site institucional do escritório Carla Muniz Advocacia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NL0MY51FXZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NL0MY51FXZ', { debug_mode: true });
          `}
        </Script>
      </head>
      <body>
        {/* ⬇️ Envolva o componente que usa useSearchParams/usePathname */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {children}
      </body>
    </html>
  );
}

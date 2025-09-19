import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Analytics from "./Analytics";

export const metadata: Metadata = {
  title: "Carla Muniz Advocacia",
  description: "Advocacia e Consultoria Jurídica • OAB/PB 21.527",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics base script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-NL0MY51FXZ`} />

        <script
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NL0MY51FXZ', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>
        {/* Suspense para não travar durante navegação */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import { Suspense } from "react";
import Analytics from "./Analytics";

export const metadata = {
  title: "Carla Muniz Advocacia",
  description: "Advocacia e Consultoria Jurídica",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Script oficial do GA4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-NL0MY51FXZ`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NL0MY51FXZ', { debug_mode: true });
            `,
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

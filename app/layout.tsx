import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Carla Muniz Advocacia",
  description: "Direito do Trabalho e Direito de Família em João Pessoa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager (Google Ads) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17524523332"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NL0MY51FXZ');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

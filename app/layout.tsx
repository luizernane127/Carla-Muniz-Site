import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carla Muniz Advocacia",
  description: "Direito do Trabalho e Direito de Família em João Pessoa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17524523332"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17524523332');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rescisão indireta: quando o trabalhador pode sair e manter todos os direitos",
  description: "Entenda em que situações cabe a rescisão indireta e quais verbas podem ser devidas.",
};

export default function Page() {
  return (
    <main className="container py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Rescisão indireta: quando o trabalhador pode sair e manter todos os direitos</h1>

      <p className="mt-4 text-neutral-700">
        A <strong>rescisão indireta</strong> ocorre quando o empregador comete falta grave: atrasos recorrentes de salário,
        assédio, exigência de atividades ilegais, ambiente abusivo, entre outros.
      </p>
      <p className="mt-4 text-neutral-700">
        Nessa hipótese, o empregado rompe o contrato por <strong>justa causa do empregador</strong> e pode ter direito
        a aviso prévio, multa de 40% do FGTS, saque do FGTS e seguro-desemprego (se preenchidos os requisitos).
      </p>
      <p className="mt-4 text-neutral-700">
        É essencial reunir provas e buscar orientação jurídica antes de tomar a decisão, para evitar prejuízos.
      </p>

      <div className="mt-8">
        <a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer" className="btn-primary">Falar no WhatsApp</a>
      </div>
    </main>
  );
}

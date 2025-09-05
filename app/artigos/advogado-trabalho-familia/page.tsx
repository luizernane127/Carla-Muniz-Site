import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "A importância de um advogado especializado em Direito do Trabalho e Família",
  description: "Entenda por que a atuação especializada garante segurança jurídica e resultados melhores.",
};

export default function Page() {
  return (
    <main className="container py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">A importância de um advogado especializado em Direito do Trabalho e Família</h1>
      <p className="mt-4 text-neutral-700">
        Muitos conflitos exigem <strong>orientação técnica especializada</strong>. Questões como rescisão de contrato,
        assédio, adicional de insalubridade, pensão alimentícia, guarda e partilha podem gerar insegurança.
      </p>
      <p className="mt-4 text-neutral-700">
        Um advogado experiente antecipa riscos, conduz acordos e evita litígios longos. No <strong>Direito do Trabalho</strong>,
        atua em verbas rescisórias, horas extras, estabilidade, equiparação. No <strong>Direito de Família</strong>, garante
        que interesses e direitos sejam respeitados com humanidade.
      </p>
      <p className="mt-4 text-neutral-700">
        Cada caso é único. A análise jurídica correta desde o início evita prejuízos e acelera a solução.
      </p>

      <div className="mt-8">
        <a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer" className="btn-primary">Falar no WhatsApp</a>
      </div>
    </main>
  );
}

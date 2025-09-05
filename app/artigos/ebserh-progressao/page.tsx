import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Progressão Vertical na EBSERH: o que mudou e como proteger seus direitos",
  description: "Mudanças nas normas da EBSERH e caminhos jurídicos para proteger a progressão baseada em mérito.",
};

export default function Page() {
  return (
    <main className="container py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Progressão Vertical na EBSERH: o que mudou e como proteger seus direitos</h1>

      <h2 className="mt-8 text-xl md:text-2xl font-semibold">O que é a Progressão Vertical?</h2>
      <p className="mt-3 text-neutral-700">
        A Progressão Vertical valorizava títulos, méritos e produção científica. Cursos, participação em comissões
        e publicações contavam pontos para ascender na carreira.
      </p>

      <h2 className="mt-8 text-xl md:text-2xl font-semibold">O que mudou</h2>
      <p className="mt-3 text-neutral-700">
        Normas recentes passaram a priorizar <strong>tempo de serviço</strong>, reduziram o peso de qualificações e
        condicionaram vagas a limites orçamentários — afetando quem acumulou alta pontuação por mérito.
      </p>

      <h2 className="mt-8 text-xl md:text-2xl font-semibold">Como agir</h2>
      <p className="mt-3 text-neutral-700">
        Em muitos casos é possível buscar judicialmente a <strong>aplicação das regras anteriores</strong> e resguardar
        pontuação obtida. Cada situação deve ser analisada com documentos e histórico de pontuação.
      </p>

      <div className="mt-8">
        <a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer" className="btn-primary">Falar no WhatsApp</a>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import WhatsappButton from "../../components/ui/WhatsappButton";

export const metadata: Metadata = {
  title: "Adicional de Insalubridade na EBSERH: Salário-Mínimo x Salário-Base",
  description:
    "Entenda em quais situações cabe recorrer à Justiça do Trabalho para garantir seus direitos sobre o cálculo do adicional de insalubridade.",
};

export default function Page() {
  return (
    <main className="container py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">
        Adicional de Insalubridade na EBSERH: Salário-Mínimo x Salário-Base
      </h1>

      <p className="mt-4 text-neutral-700">
        Nos últimos meses, um dos temas que mais tem preocupado os empregados da{" "}
        <strong>EBSERH</strong> é a tentativa da empresa de alterar a base de
        cálculo do adicional de insalubridade.
      </p>

      <p className="mt-4 text-neutral-700">
        Tradicionalmente, muitos trabalhadores – especialmente os admitidos
        antes de julho de 2019 – recebiam o cálculo sobre o{" "}
        <strong>salário contratual (salário-base)</strong>. Contudo, a empresa
        anunciou que passará a adotar o <strong>salário mínimo</strong> como
        referência, apoiando-se em determinação do Tribunal de Contas da União
        (TCU). Essa mudança pode reduzir significativamente a remuneração e, por
        isso, precisa ser analisada com cuidado.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Alteração Unilateral: O que diz a lei?
      </h2>
      <p className="mt-4 text-neutral-700">
        O contrato de trabalho não pode ser alterado de forma prejudicial ao
        empregado. O artigo 468 da CLT protege o trabalhador contra mudanças
        unilaterais que reduzam salário ou vantagens.
      </p>

      <p className="mt-4 text-neutral-700">
        Ao longo dos anos, a própria EBSERH consolidou o pagamento sobre o{" "}
        <strong>salário-base</strong>, e essa condição incorporou-se ao
        contrato. Alterar agora, de forma unilateral, configura{" "}
        <strong>violação à legislação trabalhista</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Direito Adquirido: Quem já tem não pode perder
      </h2>
      <p className="mt-4 text-neutral-700">
        Outro ponto essencial é o <strong>direito adquirido</strong>. Os
        empregados admitidos até <strong>31/07/2019</strong> já consolidaram o
        cálculo sobre o salário contratual.
      </p>

      <p className="mt-4 text-neutral-700">
        O STF, em decisão recente, reafirmou a competência da Justiça do
        Trabalho para analisar essas ações. Ou seja: existe espaço jurídico
        sólido para defender a manutenção da regra mais benéfica.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        O que os empregados podem fazer?
      </h2>
      <p className="mt-4 text-neutral-700">
        Diante dessa postura unilateral, sindicatos e assessorias jurídicas já
        se mobilizam em <strong>ações nacionais para impedir a redução</strong>.
      </p>

      <ul className="list-disc list-inside mt-4 text-neutral-700">
        <li>Guardar seus contracheques antigos (para comprovar a forma anterior);</li>
        <li>Consultar advogado(a) trabalhista para avaliar o caso;</li>
        <li>Acompanhar as decisões judiciais que estão em andamento.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Conclusão</h2>
      <p className="mt-4 text-neutral-700">
        A mudança proposta pela EBSERH não é apenas uma questão contábil: trata-se
        da preservação do contrato de trabalho e da segurança jurídica.
      </p>

      <p className="mt-4 text-neutral-700">
        Você não precisa enfrentar essa questão sozinho. Há fundamentos jurídicos
        consistentes para questionar a redução do cálculo do adicional de
        insalubridade.
      </p>

      <div className="border-2 border-green-700 bg-green-50 p-4 rounded-lg mt-6">
        <h3 className="text-green-700 font-semibold">📌 Precisa de orientação?</h3>
        <p className="mt-2 text-neutral-700">
          Caso tenha dúvidas sobre a sua situação, entre em contato com nossa
          equipe para uma avaliação personalizada.
        </p>
      </div>

      {/* Botão WhatsApp com evento GA */}
      <div className="mt-10 flex justify-center">
        <WhatsappButton
          phone="5583996858590"
          text="Olá, quero mais informações sobre meu caso!"
        />
      </div>
    </main>
  );
}

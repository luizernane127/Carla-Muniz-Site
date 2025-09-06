export default function Page() {
  return (
    <section className="container mx-auto px-6 py-12">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold mb-6">
          Progressão Vertical na EBSERH: o que mudou e como garantir seus direitos
        </h1>

        <p>
          Muitos empregados da <strong>EBSERH</strong> foram surpreendidos pelas novas normas de
          progressão. O que antes valorizava cursos, pesquisas e publicações científicas, agora
          se resume quase apenas ao <strong>tempo de serviço</strong>.
        </p>

        <h2 className="mt-8">O que é a Progressão Vertical?</h2>
        <p>
          A Progressão Vertical (PV) era um incentivo claro à qualificação: especializações,
          mestrados, doutorados, congressos e participação em comissões contavam pontos
          importantes na evolução da carreira.
        </p>

        <h2 className="mt-8">O que mudou?</h2>
        <ul>
          <li>O principal critério passou a ser o <strong>tempo de serviço</strong>;</li>
          <li>Qualificações acadêmicas e publicações perderam relevância;</li>
          <li>O número de vagas ficou limitado ao orçamento;</li>
          <li>Empregados com alta pontuação simplesmente perderam a chance de progressão.</li>
        </ul>

        <h2 className="mt-8">Por que isso é prejudicial?</h2>
        <p>
          Essa mudança traz <strong>insegurança jurídica</strong> e afeta diretamente quem investiu
          anos em formação. Ela pode configurar:
        </p>
        <ul>
          <li>Violação do <em>direito adquirido</em> (art. 5º, XXXVI da CF);</li>
          <li>Alteração contratual lesiva (art. 468 da CLT);</li>
          <li>Quebra da confiança legítima (art. 2º da LINDB).</li>
        </ul>

        <h2 className="mt-8">O que fazer?</h2>
        <p>
          É possível recorrer ao Judiciário para assegurar a análise pela regra antiga e proteger
          seu direito adquirido. Cada caso deve ser analisado individualmente, considerando sua
          pontuação, tempo de serviço e documentos.
        </p>

        <h2 className="mt-8">Conclusão</h2>
        <p>
          Se você é empregado da <strong>EBSERH</strong> e foi prejudicado, não deixe passar. 
          A lei garante instrumentos para <strong>defender seu esforço acadêmico e profissional</strong>.
        </p>

        {/* Botão WhatsApp estilizado */}
        <div className="mt-8">
          <a
            href="https://wa.me/5583996858590?text=Ol%C3%A1,%20gostaria%20de%20saber%20se%20tenho%20direito%20%C3%A0%20Progress%C3%A3o%20Vertical"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            📲 Fale agora com nossa equipe no WhatsApp
          </a>
        </div>
      </article>
    </section>
  );
}

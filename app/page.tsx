"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Section = ({ id, className = "", children }: any) => (
  <section id={id} className={`container ${className}`}>{children}</section>
);

export default function Page(){
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Carla Muniz" className="h-10"/>
            <div className="leading-tight">
              <p className="font-semibold">Carla Muniz</p>
              <p className="text-xs text-neutral-500">Advocacia e Consultoria Jurídica • OAB/PB 21.527</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#areas" className="hover:text-neutral-800">Áreas</a>
            <a href="#sobre" className="hover:text-neutral-800">Sobre</a>
            <a href="#artigos" className="hover:text-neutral-800">Artigos</a>
            <a href="#contato" className="hover:text-neutral-800">Contato</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild>
              <a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer">WhatsApp</a>
            </Button>
          </div>
        </Section>
      </header>

      <Section className="pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Defesa trabalhista e familiar<span className="block">com transparência e resultado.</span></h1>
            <p className="mt-4 text-lg text-neutral-600">Atuação especializada em <strong>Direito do Trabalho</strong> e <strong>Direito de Família</strong>. Atendimento presencial e online.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild><a href="https://wa.me/5583996858590?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consultoria" target="_blank" rel="noreferrer">Agendar consultoria</a></Button>
              <Button variant="outline" asChild><a href="tel:+5583996858590">Ligar agora</a></Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="badge">OAB/PB 21.527</span>
              <span className="badge">+10 anos de atuação</span>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl">
              <img src="/office.png" alt="Escritório da Dra. Carla Muniz" className="h-full w-full object-cover" loading="eager"/>
            </div>
          </div>
        </div>
      </Section>

      <Section id="areas" className="py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">Áreas de atuação</h2>
          <p className="mt-3 text-neutral-600">Atuação especializada nas demandas que mais importam para você.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{title:"Direito do Trabalho",desc:"Consultoria, acordos, audiências e litígios trabalhistas."},{title:"Direito de Família",desc:"Divórcio, guarda, alimentos, inventário e planejamento familiar."},{title:"Correspondente",desc:"Audiências, protocolos, distribuição, cartas precatórias e diligências."}].map((a,i)=> (
            <Card key={i}>
              <CardHeader><CardTitle>{a.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{a.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="sobre" className="py-14 md:py-20">
        <div className="grid md:grid-cols-[1.1fr,1fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Sobre a advogada</h2>
            <p className="mt-4 text-neutral-700">Advogada militante (OAB/PB nº 21.527). Membro da Comissão de Direito do Trabalho da OAB/PB. Formada em Direito pela Faculdade IESP/PB. Pós‑graduada em Direito do Trabalho, Previdenciário e Processo Civil.</p>
            <p className="mt-4 text-neutral-700">Atuação em consultoria, assessoria e litígios, com gerenciamento de contingências jurídicas. Serviços de advocacia correspondente para dar agilidade às demandas.</p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl">
            <img src="/carla.png" alt="Dra. Carla Muniz" className="h-full w-full object-cover"/>
          </div>
        </div>
      </Section>

      <Section id="artigos" className="py-14 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">Artigos</h2>
          <p className="mt-3 text-neutral-600">Conteúdo educativo para orientar você.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Card>
            <CardHeader><CardTitle>A importância de um advogado especializado em Trabalho e Família</CardTitle></CardHeader>
            <CardContent className="text-sm text-neutral-700">Questões como rescisão contratual, pensão e guarda exigem orientação técnica. Um advogado experiente antecipa riscos, conduz acordos e evita litígios longos.</CardContent>
          </Card>
          <Card className="opacity-75"><CardHeader><CardTitle>Em breve: artigo 2</CardTitle></CardHeader><CardContent className="text-sm text-neutral-600">Envie o texto que eu publico aqui.</CardContent></Card>
          <Card className="opacity-75"><CardHeader><CardTitle>Em breve: artigo 3</CardTitle></CardHeader><CardContent className="text-sm text-neutral-600">Envie o texto que eu publico aqui.</CardContent></Card>
        </div>
      </Section>

      <Section id="contato" className="py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Contato</h2>
            <div className="max-w-md mt-4"><img src="/card-front.png" alt="Cartão de visita - frente" className="w-full rounded-xl shadow"/></div>
            <div className="mt-6 space-y-3 text-sm">
              <div>📞 <a href="tel:+5583996858590" className="hover:underline">(83) 9.9685-8590</a></div>
              <div>✉️ <a href="mailto:carla.muniz.adv@bol.com.br" className="hover:underline">carla.muniz.adv@bol.com.br</a></div>
              <div>📍 Empresarial Alzir Gomes, Av. Gov. Flávio Ribeiro Coutinho, 16, sala 12, Manaíra, João Pessoa – PB, CEP 58037-000</div>
            </div>
            <div className="mt-4"><Button asChild><a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer">Chamar no WhatsApp</a></Button></div>
          </div>
          <Card>
            <CardHeader><CardTitle>Envie uma mensagem</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Input name="name" placeholder="Seu nome" required />
              <Input name="email" placeholder="Seu e-mail" type="email" required />
              <Input name="phone" placeholder="Telefone/WhatsApp" />
              <Textarea name="message" placeholder="Conte seu caso em poucas linhas" rows={5} required />
              <Button className="w-full" onClick={() => alert('Na Vercel, este formulário enviará e-mail via Resend.')}>Enviar</Button>
              <p className="text-xs text-neutral-500">Ao enviar, você concorda com nossa Política de Privacidade.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t">
        <Section className="py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo Carla Muniz" className="h-8"/>
              <div>
                <div className="font-semibold">Carla Muniz</div>
                <div className="text-neutral-500">OAB/PB 21.527</div>
              </div>
            </div>
            <p className="mt-3 text-neutral-600">Atendimento em João Pessoa/PB e online para todo o Brasil.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-2">Links</div>
              <ul className="space-y-2">
                <li><a href="#areas" className="hover:underline">Áreas</a></li>
                <li><a href="#sobre" className="hover:underline">Sobre</a></li>
                <li><a href="#artigos" className="hover:underline">Artigos</a></li>
                <li><a href="#contato" className="hover:underline">Contato</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Contato</div>
              <ul className="space-y-2">
                <li><a href="mailto:carla.muniz.adv@bol.com.br" className="hover:underline">carla.muniz.adv@bol.com.br</a></li>
                <li><a href="https://wa.me/5583996858590" className="hover:underline">WhatsApp: (83) 9.9685-8590</a></li>
                <li>Empresarial Alzir Gomes, Av. Gov. Flávio Ribeiro Coutinho, 16, sala 12, Manaíra, João Pessoa – PB, CEP 58037-000</li>
              </ul>
            </div>
          </div>
          <div className="md:text-right text-neutral-500">© {new Date().getFullYear()} Carla Muniz Advocacia. Todos os direitos reservados.<p className="mt-2 italic">“Há tempo para todo o propósito debaixo do céu.” Ec. 3.1</p></div>
        </Section>
      </footer>

      <a href="https://wa.me/5583996858590" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 md:bottom-8 md:right-8 rounded-full shadow-lg p-4 bg-green-500 text-white" aria-label="Falar no WhatsApp">WhatsApp</a>
    </div>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Sparkles, Shield, Award, Clock, CheckCircle2 } from "lucide-react"

const ACCENT = "#ff6600"

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
      <span className="text-sm text-neutral-300">{text}</span>
    </li>
  )
}

export function Pricing() {
  return (
    <section id="servicos" className="text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Nossos Serviços
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            O que oferecemos.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
            Arte de alta qualidade e procedimentos seguros. Cada trabalho é único e personalizado.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-6 text-white hover:brightness-110"
              style={{ backgroundColor: ACCENT }}
            >
              <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                Agende uma Consulta
              </a>
            </Button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Tatuagem Autoral */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,102,0,0.15)]">
            <CardHeader className="space-y-3 pb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#ff6600]/10 p-3 w-fit">
                <Sparkles className="h-6 w-6 text-[#ff6600]" />
              </div>
              <div className="text-xl font-bold text-white">Tatuagem Autoral</div>
              <p className="text-sm text-neutral-400">
                Desenhos exclusivos criados especialmente para você
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-3">
                <FeatureItem text="Criação de arte exclusiva e personalizada" />
                <FeatureItem text="Consulta prévia para entender seu conceito" />
                <FeatureItem text="Técnicas variadas: realismo, blackwork, fine line" />
                <FeatureItem text="Tintas de alta qualidade e duradouras" />
                <FeatureItem text="Ambiente esterilizado e seguro" />
                <FeatureItem text="Cuidados pós-tattoo inclusos" />
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full rounded-full"
                  style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
                >
                  <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                    Quero minha Tattoo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Body Piercing */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(255,102,0,0.2)]">
            <div 
              className="absolute top-4 right-4 rounded-full px-2 py-0.5 text-[10px] font-medium"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
            >
              Popular
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#ff6600]/10 p-3 w-fit">
                <Shield className="h-6 w-6 text-[#ff6600]" />
              </div>
              <div className="text-xl font-bold text-white">Body Piercing</div>
              <p className="text-sm text-neutral-400">
                Perfurações profissionais com máxima segurança
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-3">
                <FeatureItem text="Perfuração com agulhas descartáveis" />
                <FeatureItem text="Joias de primeira aplicação inclusas" />
                <FeatureItem text="Técnicas para todas as regiões do corpo" />
                <FeatureItem text="Procedimento rápido e indolor" />
                <FeatureItem text="Materiais 100% esterilizados" />
                <FeatureItem text="Acompanhamento da cicatrização" />
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full rounded-full text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                    Agendar Piercing
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Joias de Titânio */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,102,0,0.15)]">
            <CardHeader className="space-y-3 pb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#ff6600]/10 p-3 w-fit">
                <Award className="h-6 w-6 text-[#ff6600]" />
              </div>
              <div className="text-xl font-bold text-white">Joias de Titânio</div>
              <p className="text-sm text-neutral-400">
                Peças premium para seu conforto e estilo
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-3">
                <FeatureItem text="Titânio implant grade ASTM F136" />
                <FeatureItem text="100% hipoalergênico" />
                <FeatureItem text="Variedade de designs e acabamentos" />
                <FeatureItem text="Opções com pedras e cristais" />
                <FeatureItem text="Ideal para peles sensíveis" />
                <FeatureItem text="Garantia de qualidade" />
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full rounded-full"
                  style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
                >
                  <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                    Ver Catálogo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <div className="mt-12 rounded-2xl liquid-glass p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="inline-flex items-center justify-center rounded-xl bg-[#ff6600]/10 p-4">
              <Clock className="h-8 w-8 text-[#ff6600]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Primeira vez?</h3>
              <p className="mt-1 text-sm text-neutral-400">
                Agende uma consulta gratuita para conversar sobre seu projeto. 
                Sem compromisso, sem pressão. Vamos criar algo incrível juntos.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full px-6"
              style={{ backgroundColor: ACCENT, color: "#fff" }}
            >
              <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                Consulta Grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

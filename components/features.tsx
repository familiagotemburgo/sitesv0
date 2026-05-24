"use client"

import { Star, Shield, Award, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Por que escolher o <span className="text-[#ff6600]">Crânio Tattoo</span>?
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-400">
        Anos de experiência, técnicas avançadas e um compromisso inabalável com a qualidade e segurança.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card de Avaliações */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-[#ff6600]/80">AVALIAÇÕES</p>
            <CardTitle className="mt-1 text-xl text-white">
              Clientes satisfeitos em todo o Brasil. Arte que marca para sempre.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-[#ff6600]">5.0</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ff6600] text-[#ff6600]" />
                ))}
              </div>
            </div>
            <p className="text-sm text-neutral-400">
              {"\"Trabalho impecável, atendimento de primeira. Minha tattoo ficou exatamente como eu sonhava. Super recomendo!\""}
            </p>
            <p className="mt-2 text-xs text-neutral-500">— Cliente verificado</p>
          </CardContent>
        </Card>

        {/* Card de Diferenciais */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-[#ff6600]/80">DIFERENCIAIS</p>
            <CardTitle className="mt-1 text-xl text-white">
              O que nos torna únicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <Shield className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Biossegurança Total</h4>
                  <p className="text-sm text-neutral-400">Ambiente 100% esterilizado e materiais descartáveis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <Sparkles className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Arte Exclusiva</h4>
                  <p className="text-sm text-neutral-400">Cada desenho é criado especialmente para você</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <Award className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Experiência Comprovada</h4>
                  <p className="text-sm text-neutral-400">Anos de prática e centenas de clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

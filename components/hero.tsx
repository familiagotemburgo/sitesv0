import { Button } from "@/components/ui/button"
import { Skull, Sparkles, Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          {/* Logo e Badge */}
          <div className="mb-5 flex items-center gap-2">
            <Skull className="h-8 w-8 text-[#ff6600]" />
            <p className="text-sm uppercase tracking-[0.25em] text-[#ff6600]/80">crânio tattoo</p>
          </div>

          {/* Título Principal */}
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">ARTE AUTORAL &</span>
            <span className="block text-[#ff6600] drop-shadow-[0_0_20px_rgba(255,102,0,0.35)]">PIERCING</span>
            <span className="block text-white">DE ELITE</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-xl text-center text-base text-neutral-400">
            Tatuagens exclusivas, piercings profissionais e joias de titânio. 
            Cada traço conta uma história única.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="rounded-full bg-[#ff6600] px-8 py-3 text-white font-semibold hover:bg-[#ff6600]/90 shadow-[0_0_20px_rgba(255,102,0,0.35)]">
              <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                Agende sua Sessão
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/20 px-8 py-3 text-white hover:bg-white/10">
              <a href="#servicos">
                Ver Serviços
              </a>
            </Button>
          </div>

          {/* Cards de Serviços */}
          <div className="mt-14 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={Sparkles}
              title="Tatuagem Autoral"
              description="Arte exclusiva criada especialmente para você. Desenhos únicos que expressam sua personalidade."
            />
            <ServiceCard
              icon={Shield}
              title="Body Piercing"
              description="Procedimentos seguros com materiais esterilizados e técnicas avançadas de perfuração."
            />
            <ServiceCard
              icon={Award}
              title="Joias de Titânio"
              description="Peças premium hipoalergênicas. Qualidade superior para seu conforto e estilo."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="relative rounded-2xl glass-border bg-[#0a0a0a]/80 p-6 transition-all hover:bg-[#0a0a0a] hover:shadow-[0_0_30px_rgba(255,102,0,0.15)]">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#ff6600]/10 p-3">
        <Icon className="h-6 w-6 text-[#ff6600]" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
    </div>
  )
}

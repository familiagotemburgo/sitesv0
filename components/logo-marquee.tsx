"use client"

import { Skull, Sparkles, Shield, Award, Star, Zap } from "lucide-react"

export function LogoMarquee() {
  const features = [
    { icon: Skull, text: "Arte Autoral" },
    { icon: Sparkles, text: "Designs Exclusivos" },
    { icon: Shield, text: "100% Seguro" },
    { icon: Award, text: "Qualidade Premium" },
    { icon: Star, text: "5 Estrelas" },
    { icon: Zap, text: "Técnicas Avançadas" },
  ]

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Nossos <span className="text-[#ff6600]">diferenciais</span>
          </h2>
          <p className="mt-4 max-w-xl text-neutral-400">
            Combinamos arte, técnica e segurança para entregar trabalhos excepcionais.
          </p>
        </div>

        {/* Feature Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-right whitespace-nowrap"
              style={{ width: "max-content" }}
            >
              {[...features, ...features, ...features].map((feature, index) => (
                <FeatureCard key={`first-${index}`} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-left whitespace-nowrap"
              style={{ width: "max-content" }}
            >
              {[...features.reverse(), ...features, ...features].map((feature, index) => (
                <FeatureCard key={`second-${index}`} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ 
  icon: Icon, 
  text 
}: { 
  icon: React.ComponentType<{ className?: string }>
  text: string 
}) {
  return (
    <div className="flex-shrink-0 mx-3">
      <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0a0a0a]/60 border border-white/10 backdrop-blur-xl">
        <Icon className="h-5 w-5 text-[#ff6600]" />
        <span className="text-sm font-medium text-white whitespace-nowrap">{text}</span>
      </div>
    </div>
  )
}

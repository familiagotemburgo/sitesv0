"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Phone, MapPin, Clock, Skull } from "lucide-react"

export function AppverseFooter() {
  return (
    <section id="contato" className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-[#ff6600] px-6 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(255,102,0,0.35)] hover:bg-[#ff6600]/90"
          >
            <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>

      {/* Info Card */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-[#ff6600]">AGENDE SUA SESSÃO</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Transforme sua ideia em arte permanente
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Entre em contato pelo WhatsApp para agendar sua consulta gratuita. 
                Vamos discutir seu projeto e criar algo único juntos.
              </p>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <Phone className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-neutral-400">Clique para conversar</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <MapPin className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Localização</p>
                  <p className="text-sm text-neutral-400">Atendimento com hora marcada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="rounded-lg bg-[#ff6600]/10 p-2">
                  <Clock className="h-5 w-5 text-[#ff6600]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Horário</p>
                  <p className="text-sm text-neutral-400">Seg-Sáb: 10h às 20h</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Skull className="h-6 w-6 text-[#ff6600]" />
                <span className="text-xl font-bold text-white">Crânio Tattoo</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                Arte autoral e piercing de elite. Transformamos suas ideias em tatuagens únicas e memoráveis.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navegação</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Início", "Serviços", "Portfólio", "Sobre", "FAQ", "Contato"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-[#ff6600]">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Redes Sociais</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff6600]"
                      aria-label="Siga no Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.link/rc25na"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff6600]"
                      aria-label="Contato via WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Crânio Tattoo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-[#ff6600]">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-[#ff6600]">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

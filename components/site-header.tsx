"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Skull, Sparkles, Shield, Award, HelpCircle, Info, Phone } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#sobre", label: "Sobre" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Skull className="h-5 w-5 text-[#ff6600]" />
            <span className="font-bold tracking-wide text-white">Crânio Tattoo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#ff6600] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[#ff6600] text-white font-medium rounded-full px-6 py-2.5
                         hover:bg-[#ff6600]/90 hover:shadow-[0_0_20px_rgba(255,102,0,0.35)]
                         transition-all"
            >
              <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <Skull className="h-6 w-6 text-[#ff6600]" />
                  <span className="font-bold tracking-wide text-white text-lg">Crânio Tattoo</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  <Link
                    href="#servicos"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#ff6600] transition-colors"
                  >
                    <Sparkles className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Serviços</span>
                  </Link>
                  <Link
                    href="#portfolio"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#ff6600] transition-colors"
                  >
                    <Award className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Portfólio</span>
                  </Link>
                  <Link
                    href="#sobre"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#ff6600] transition-colors"
                  >
                    <Info className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Sobre</span>
                  </Link>
                  <Link
                    href="#faq"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#ff6600] transition-colors"
                  >
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">FAQ</span>
                  </Link>
                  <Link
                    href="#contato"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-[#ff6600] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Contato</span>
                  </Link>
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-[#ff6600] text-white font-medium rounded-full px-6 py-2.5
                               hover:bg-[#ff6600]/90 hover:shadow-[0_0_20px_rgba(255,102,0,0.35)]
                               transition-all"
                  >
                    <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
                      Agende sua Sessão
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

import type { Metadata } from "next"
import "@/app/globals.css"
import "./halley.css"

export const metadata: Metadata = {
  title: "Minha Jornada | Halley Show Digital",
  description: "Dashboard do aluno - Academia Halley Show. Acompanhe seu progresso, conquistas e treinos.",
}

export default function HalleyShowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-halley-black">
      {children}
    </div>
  )
}

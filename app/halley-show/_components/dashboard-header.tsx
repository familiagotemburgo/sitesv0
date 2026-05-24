"use client"

import { Flame } from "lucide-react"

interface DashboardHeaderProps {
  userName: string
  streak: number
}

export function DashboardHeader({ userName, streak }: DashboardHeaderProps) {
  return (
    <header className="px-4 pt-6 pb-4">
      {/* Saudação Principal */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[#8A8A8A] text-sm mb-1">Bem-vindo de volta</p>
          <h1 className="text-xl font-bold text-white">
            Bora pra selva, <span className="text-[#D4AF37]">{userName}</span>!
          </h1>
        </div>
        
        {/* Streak Badge */}
        <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#333333] rounded-full px-3 py-1.5">
          <Flame className="w-4 h-4 text-[#FF8C00]" />
          <span className="text-[#FF8C00] font-semibold text-sm">{streak}</span>
        </div>
      </div>

      {/* Avatares Sofia e Prof. Halley */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111] border border-[#333333]">
        {/* Avatar Sofia */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962F] flex items-center justify-center text-black font-bold text-sm">
            S
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111111]" />
        </div>
        
        <div className="flex-1">
          <p className="text-[#E5E5E5] text-sm">
            <span className="text-[#D4AF37] font-medium">Sofia</span> e{" "}
            <span className="text-[#FF8C00] font-medium">Prof. Halley</span> estão te esperando!
          </p>
        </div>

        {/* Avatar Prof. Halley */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8C00] to-[#CC7000] flex items-center justify-center text-black font-bold text-sm">
            H
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111111]" />
        </div>
      </div>
    </header>
  )
}

"use client"

import { Flame } from "lucide-react"

interface DashboardHeaderProps {
  userName: string
  streak: number
}

export function DashboardHeader({ userName, streak }: DashboardHeaderProps) {
  return (
    <header className="px-4 pt-6 pb-2">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-2">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#D4AF37] flex items-center justify-center">
            <span className="text-black font-black text-sm">H</span>
          </div>
          <span className="font-bold text-white text-sm">HALLEY SHOW</span>
        </div>
        
        {/* Streak Badge */}
        <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#333333] rounded-full px-3 py-1.5">
          <Flame className="w-4 h-4 text-[#FF8C00]" />
          <span className="text-[#FF8C00] font-semibold text-sm">{streak}</span>
        </div>
      </div>

      {/* Greeting */}
      <div className="mt-3">
        <p className="text-[#8A8A8A] text-xs mb-0.5">Bem-vindo de volta</p>
        <h1 className="text-lg font-bold text-white">
          Bora pra selva, <span className="text-[#D4AF37]">{userName}</span>!
        </h1>
      </div>
    </header>
  )
}

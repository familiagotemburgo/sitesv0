"use client"

import { Play, ChevronRight } from "lucide-react"

export function TodayWorkoutCTA() {
  return (
    <section className="pt-2">
      <button className="halley-cta w-full py-4 px-6 rounded-2xl flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-lg">ACESSAR TREINO DE HOJE</p>
            <p className="text-white/80 text-sm">Peito e Tríceps - 45min</p>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Secondary Info */}
      <div className="mt-4 flex justify-center gap-6 text-center">
        <div>
          <p className="text-[#D4AF37] font-bold text-lg">+150</p>
          <p className="text-[#8A8A8A] text-xs">XP Hoje</p>
        </div>
        <div className="w-px bg-[#333333]" />
        <div>
          <p className="text-[#FF8C00] font-bold text-lg">8</p>
          <p className="text-[#8A8A8A] text-xs">Exercícios</p>
        </div>
        <div className="w-px bg-[#333333]" />
        <div>
          <p className="text-[#E5E5E5] font-bold text-lg">45</p>
          <p className="text-[#8A8A8A] text-xs">Minutos</p>
        </div>
      </div>
    </section>
  )
}

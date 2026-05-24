"use client"

import { 
  Dumbbell, 
  Target, 
  TrendingUp, 
  Zap,
  Clock,
  Flame,
  ChevronRight,
  BarChart3
} from "lucide-react"
import Image from "next/image"

interface HalleyZoneProps {
  userName: string
  level: number
  levelName: string
  progress: number
  streak: number
}

const todayStats = [
  { icon: Zap, label: "XP Disponível", value: "+150", color: "#D4AF37" },
  { icon: Clock, label: "Duração", value: "45min", color: "#FF8C00" },
  { icon: Dumbbell, label: "Exercícios", value: "8", color: "#FF8C00" },
]

const weeklyGoals = [
  { label: "Treinos", current: 3, target: 5, color: "#D4AF37" },
  { label: "Cardio", current: 1, target: 2, color: "#FF8C00" },
  { label: "Carga Total", current: 2400, target: 3000, unit: "kg", color: "#22C55E" },
]

const recentPRs = [
  { exercise: "Supino Reto", weight: "80kg", date: "Ontem", improvement: "+5kg" },
  { exercise: "Agachamento", weight: "100kg", date: "3 dias", improvement: "+10kg" },
]

export function HalleyZone({ userName, level, levelName, progress, streak }: HalleyZoneProps) {
  return (
    <div className="zone-halley zone-enter space-y-4 pb-6">
      {/* Halley&apos;s Motivation Card */}
      <div className="halley-card rounded-2xl p-4 border-l-4 border-l-[#FF8C00]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#FF8C00]">
            <Image
              src="/images/halley-coach.png"
              alt="Prof. Halley"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-[#FF8C00]">Prof. Halley</span>
              <span className="text-[10px] text-[#8A8A8A]">Coach</span>
            </div>
            <p className="text-[#E5E5E5] text-sm leading-relaxed">
              E aí, <span className="text-[#FF8C00] font-medium">{userName}</span>! 
              {streak >= 7 
                ? ` ${streak} dias sem falhar! Você é uma FERA! Bora manter esse ritmo!`
                : " Bora pra selva hoje? Seu treino está te esperando!"
              }
            </p>
          </div>
        </div>
      </div>

      {/* Today&apos;s Workout Preview */}
      <div className="halley-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#FF8C00]" />
            <h3 className="text-[#E5E5E5] font-semibold">Treino de Hoje</h3>
          </div>
          <span className="text-[#D4AF37] text-xs font-medium bg-[#D4AF37]/10 px-2 py-1 rounded-full">
            Peito + Tríceps
          </span>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {todayStats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card flex flex-col items-center p-3 rounded-xl bg-[#1A1A1A] border border-[#333333]"
            >
              <stat.icon className="w-5 h-5 mb-1" style={{ color: stat.color }} />
              <span className="font-bold text-white">{stat.value}</span>
              <span className="text-[10px] text-[#8A8A8A]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="halley-cta w-full py-3.5 rounded-xl flex items-center justify-center gap-2 group">
          <Dumbbell className="w-5 h-5 text-white" />
          <span className="text-white font-bold">INICIAR TREINO</span>
          <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Weekly Goals */}
      <div className="halley-card rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="text-[#E5E5E5] font-semibold">Metas da Semana</h3>
        </div>

        <div className="space-y-3">
          {weeklyGoals.map((goal, index) => {
            const percentage = Math.min((goal.current / goal.target) * 100, 100)
            return (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-[#E5E5E5]">{goal.label}</span>
                  <span className="text-xs text-[#8A8A8A]">
                    <span style={{ color: goal.color }} className="font-semibold">
                      {goal.current}{goal.unit || ""}
                    </span>
                    /{goal.target}{goal.unit || ""}
                  </span>
                </div>
                <div className="h-2 bg-[#333333] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: goal.color,
                      boxShadow: `0 0 8px ${goal.color}40`
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent PRs */}
      <div className="halley-card rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#22C55E]" />
          <h3 className="text-[#E5E5E5] font-semibold">Recordes Recentes</h3>
          <Flame className="w-4 h-4 text-[#FF8C00] ml-auto" />
        </div>

        <div className="space-y-2">
          {recentPRs.map((pr, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1A] border border-[#333333]"
            >
              <div>
                <p className="text-[#E5E5E5] text-sm font-medium">{pr.exercise}</p>
                <p className="text-[10px] text-[#8A8A8A]">{pr.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[#D4AF37] font-bold">{pr.weight}</p>
                <p className="text-[10px] text-[#22C55E]">{pr.improvement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Level Progress Mini */}
      <div className="halley-card rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 flex-shrink-0">
            <svg width="56" height="56" className="progress-ring">
              <circle cx="28" cy="28" r="22" fill="none" stroke="#333333" strokeWidth="4" />
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="url(#goldGradientMini)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 22}
                strokeDashoffset={2 * Math.PI * 22 * (1 - progress / 100)}
              />
              <defs>
                <linearGradient id="goldGradientMini" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B8962F" />
                  <stop offset="100%" stopColor="#E8C96A" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-[#D4AF37]">{level}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#E5E5E5] font-semibold">{levelName}</p>
            <p className="text-xs text-[#8A8A8A]">{progress}% para o próximo nível</p>
            <div className="h-1.5 bg-[#333333] rounded-full mt-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#B8962F] to-[#E8C96A]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

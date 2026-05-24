"use client"

import { Trophy } from "lucide-react"

interface LevelProgressProps {
  level: number
  levelName: string
  progress: number
  totalWorkouts: number
}

export function LevelProgress({ level, levelName, progress, totalWorkouts }: LevelProgressProps) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <section className="halley-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-[#D4AF37]" />
        <h2 className="text-[#E5E5E5] font-semibold">Nível de Leão</h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Circular Progress */}
        <div className="relative flex-shrink-0">
          <svg width="110" height="110" className="progress-ring">
            {/* Background Circle */}
            <circle
              cx="55"
              cy="55"
              r="45"
              fill="none"
              stroke="#333333"
              strokeWidth="8"
            />
            {/* Progress Circle */}
            <circle
              cx="55"
              cy="55"
              r="45"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="progress-ring-circle"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B8962F" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#E8C96A" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#D4AF37] glow-gold-text">{level}</span>
            <span className="text-xs text-[#8A8A8A]">Nível</span>
          </div>
        </div>

        {/* Level Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{levelName}</h3>
          <p className="text-[#8A8A8A] text-sm mb-3">{progress}% para o próximo nível</p>
          
          {/* Linear Progress Bar */}
          <div className="h-2 bg-[#333333] rounded-full overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#B8962F] via-[#D4AF37] to-[#E8C96A] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-xs text-[#8A8A8A]">
            <span className="text-[#D4AF37] font-semibold">{totalWorkouts}</span> treinos completados
          </p>
        </div>
      </div>
    </section>
  )
}

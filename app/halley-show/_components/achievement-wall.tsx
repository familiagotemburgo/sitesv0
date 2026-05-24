"use client"

import { Sparkles, Flame, Sun, Trophy, Heart, Dumbbell, Medal, Lock } from "lucide-react"

interface Achievement {
  id: number
  name: string
  icon: string
  unlocked: boolean
}

interface AchievementWallProps {
  achievements: Achievement[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  fire: Flame,
  sun: Sun,
  trophy: Trophy,
  heart: Heart,
  dumbbell: Dumbbell,
  medal: Medal,
}

export function AchievementWall({ achievements }: AchievementWallProps) {
  return (
    <section className="halley-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
        <h2 className="text-[#E5E5E5] font-semibold">Mural de Conquistas</h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {achievements.map((achievement) => {
          const IconComponent = iconMap[achievement.icon] || Trophy

          return (
            <div
              key={achievement.id}
              className={`relative flex flex-col items-center p-3 rounded-xl transition-all ${
                achievement.unlocked
                  ? "bg-gradient-to-b from-[#1A1A1A] to-[#111111] border border-[#D4AF37]/30"
                  : "bg-[#0a0a0a] border border-[#333333] opacity-50"
              }`}
            >
              {/* Icon Badge */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  achievement.unlocked
                    ? "achievement-badge"
                    : "bg-[#333333]"
                }`}
              >
                {achievement.unlocked ? (
                  <IconComponent className="w-5 h-5 text-black" />
                ) : (
                  <Lock className="w-4 h-4 text-[#555555]" />
                )}
              </div>

              {/* Name */}
              <span
                className={`text-xs text-center leading-tight ${
                  achievement.unlocked ? "text-[#E5E5E5]" : "text-[#555555]"
                }`}
              >
                {achievement.name}
              </span>

              {/* Shine Effect for Unlocked */}
              {achievement.unlocked && (
                <div className="absolute inset-0 rounded-xl shine-effect pointer-events-none" />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

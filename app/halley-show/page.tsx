"use client"

import { DashboardHeader } from "./_components/dashboard-header"
import { LevelProgress } from "./_components/level-progress"
import { AchievementWall } from "./_components/achievement-wall"
import { WeeklyTracker } from "./_components/weekly-tracker"
import { TodayWorkoutCTA } from "./_components/today-workout-cta"

// Mock data - em produção virá do banco de dados
const mockUser = {
  name: "Lucas",
  level: 4,
  levelName: "Iniciante SRO",
  progress: 40,
  streak: 7,
  totalWorkouts: 28,
}

const mockAchievements = [
  { id: 1, name: "7 Dias Seguidos", icon: "fire", unlocked: true },
  { id: 2, name: "Madrugador", icon: "sun", unlocked: true },
  { id: 3, name: "Primeiro Treino", icon: "trophy", unlocked: true },
  { id: 4, name: "Fera do Cardio", icon: "heart", unlocked: false },
  { id: 5, name: "Monstro da Força", icon: "dumbbell", unlocked: false },
  { id: 6, name: "30 Dias Firme", icon: "medal", unlocked: false },
]

const mockWeekDays = [
  { day: "Seg", completed: true, date: "20" },
  { day: "Ter", completed: true, date: "21" },
  { day: "Qua", completed: true, date: "22" },
  { day: "Qui", completed: false, date: "23", isToday: true },
  { day: "Sex", completed: false, date: "24" },
  { day: "Sáb", completed: false, date: "25" },
  { day: "Dom", completed: false, date: "26" },
]

export default function HalleyShowDashboard() {
  return (
    <main className="min-h-screen bg-halley-black text-white pb-8">
      {/* Header com Saudação e Avatares */}
      <DashboardHeader userName={mockUser.name} streak={mockUser.streak} />

      {/* Conteúdo Principal */}
      <div className="px-4 space-y-6 max-w-lg mx-auto">
        {/* Nível de Leão - Progress Circular */}
        <LevelProgress
          level={mockUser.level}
          levelName={mockUser.levelName}
          progress={mockUser.progress}
          totalWorkouts={mockUser.totalWorkouts}
        />

        {/* Mural de Dopamina - Conquistas */}
        <AchievementWall achievements={mockAchievements} />

        {/* Tracker Semanal */}
        <WeeklyTracker days={mockWeekDays} />

        {/* CTA Principal */}
        <TodayWorkoutCTA />
      </div>
    </main>
  )
}

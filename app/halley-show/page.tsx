"use client"

import { useState } from "react"
import { DashboardHeader } from "./_components/dashboard-header"
import { AgentSelector } from "./_components/agent-selector"
import { SofiaZone } from "./_components/sofia-zone"
import { HalleyZone } from "./_components/halley-zone"
import { LevelProgress } from "./_components/level-progress"
import { AchievementWall } from "./_components/achievement-wall"
import { WeeklyTracker } from "./_components/weekly-tracker"
import { TodayWorkoutCTA } from "./_components/today-workout-cta"

type AgentType = "sofia" | "halley" | null

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
  const [activeAgent, setActiveAgent] = useState<AgentType>(null)

  return (
    <main className="min-h-screen bg-halley-black text-white pb-8">
      {/* Header com Saudação */}
      <DashboardHeader userName={mockUser.name} streak={mockUser.streak} />

      {/* Agent Selector - Dual Agents (Sofia & Halley) */}
      <div className="px-4">
        <AgentSelector 
          activeAgent={activeAgent} 
          onSelectAgent={setActiveAgent}
          streak={mockUser.streak}
        />
      </div>

      {/* Conteúdo Dinâmico baseado no Agente Selecionado */}
      <div className="px-4 max-w-lg mx-auto">
        {/* Zona da Sofia - Suporte e Atendimento */}
        {activeAgent === "sofia" && (
          <SofiaZone userName={mockUser.name} />
        )}

        {/* Zona do Halley - Treino e Performance */}
        {activeAgent === "halley" && (
          <HalleyZone 
            userName={mockUser.name}
            level={mockUser.level}
            levelName={mockUser.levelName}
            progress={mockUser.progress}
            streak={mockUser.streak}
          />
        )}

        {/* Dashboard Padrão - Quando nenhum agente está selecionado */}
        {activeAgent === null && (
          <div className="space-y-6 zone-enter">
            {/* Hint para selecionar agente */}
            <div className="text-center py-2">
              <p className="text-[#8A8A8A] text-xs">
                Toque em <span className="text-[#22C55E]">Sofia</span> ou{" "}
                <span className="text-[#FF8C00]">Halley</span> para interagir
              </p>
            </div>

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
        )}
      </div>
    </main>
  )
}

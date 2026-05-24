"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Dumbbell, Target } from "lucide-react"

type AgentType = "sofia" | "halley" | null

interface AgentSelectorProps {
  activeAgent: AgentType
  onSelectAgent: (agent: AgentType) => void
  streak: number
}

export function AgentSelector({ activeAgent, onSelectAgent, streak }: AgentSelectorProps) {
  const [hoveredAgent, setHoveredAgent] = useState<AgentType>(null)

  const handleAgentClick = (agent: AgentType) => {
    if (activeAgent === agent) {
      onSelectAgent(null) // Toggle off if same agent clicked
    } else {
      onSelectAgent(agent)
    }
  }

  return (
    <div className="flex items-center justify-center gap-6 py-4">
      {/* Sofia Avatar */}
      <button
        onClick={() => handleAgentClick("sofia")}
        onMouseEnter={() => setHoveredAgent("sofia")}
        onMouseLeave={() => setHoveredAgent(null)}
        className={`
          agent-avatar relative flex flex-col items-center gap-2
          ${activeAgent === "sofia" ? "active" : ""}
          ${activeAgent && activeAgent !== "sofia" ? "inactive" : ""}
        `}
        aria-label="Falar com Sofia - Atendimento e Suporte"
      >
        {/* Avatar Ring */}
        <div className={`
          relative w-16 h-16 rounded-full p-0.5
          bg-gradient-to-br from-[#22C55E] to-[#16A34A]
          ${activeAgent === "sofia" ? "glow-sofia avatar-ring-sofia" : ""}
        `}>
          <div className="w-full h-full rounded-full overflow-hidden bg-black">
            <Image
              src="/images/sofia-avatar.png"
              alt="Sofia - Atendente Halley Show"
              width={64}
              height={64}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Online Indicator */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#22C55E] rounded-full border-2 border-black flex items-center justify-center">
            <Heart className="w-2 h-2 text-white fill-white" />
          </div>
        </div>

        {/* Name & Role */}
        <div className="text-center">
          <p className={`font-semibold text-sm transition-colors ${
            activeAgent === "sofia" ? "text-[#22C55E]" : "text-white"
          }`}>
            Sofia
          </p>
          <p className="text-[10px] text-[#8A8A8A]">Suporte</p>
        </div>

        {/* Hover Tooltip */}
        {hoveredAgent === "sofia" && !activeAgent && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#22C55E] text-black text-xs px-2 py-1 rounded-lg font-medium message-bubble">
            <MessageCircle className="w-3 h-3 inline mr-1" />
            Precisa de ajuda?
          </div>
        )}
      </button>

      {/* Center Divider with Streak */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-px h-8 bg-gradient-to-b from-[#22C55E] via-[#333333] to-[#FF8C00]" />
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#333333] rounded-full px-2 py-1">
          <span className="text-[#FF8C00] text-xs font-bold">{streak}</span>
          <span className="text-[8px] text-[#8A8A8A]">dias</span>
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-[#FF8C00] via-[#333333] to-[#22C55E]" />
      </div>

      {/* Halley Avatar */}
      <button
        onClick={() => handleAgentClick("halley")}
        onMouseEnter={() => setHoveredAgent("halley")}
        onMouseLeave={() => setHoveredAgent(null)}
        className={`
          agent-avatar relative flex flex-col items-center gap-2
          ${activeAgent === "halley" ? "active" : ""}
          ${activeAgent && activeAgent !== "halley" ? "inactive" : ""}
        `}
        aria-label="Falar com Prof. Halley - Treino e Performance"
      >
        {/* Avatar Ring */}
        <div className={`
          relative w-16 h-16 rounded-full p-0.5
          bg-gradient-to-br from-[#FF8C00] to-[#CC7000]
          ${activeAgent === "halley" ? "glow-halley-agent avatar-ring-halley" : ""}
        `}>
          <div className="w-full h-full rounded-full overflow-hidden bg-black">
            <Image
              src="/images/halley-coach.png"
              alt="Prof. Halley - Coach Halley Show"
              width={64}
              height={64}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Online Indicator */}
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FF8C00] rounded-full border-2 border-black flex items-center justify-center">
            <Dumbbell className="w-2 h-2 text-white" />
          </div>
        </div>

        {/* Name & Role */}
        <div className="text-center">
          <p className={`font-semibold text-sm transition-colors ${
            activeAgent === "halley" ? "text-[#FF8C00]" : "text-white"
          }`}>
            Halley
          </p>
          <p className="text-[10px] text-[#8A8A8A]">Coach</p>
        </div>

        {/* Hover Tooltip */}
        {hoveredAgent === "halley" && !activeAgent && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FF8C00] text-black text-xs px-2 py-1 rounded-lg font-medium message-bubble">
            <Target className="w-3 h-3 inline mr-1" />
            Bora treinar!
          </div>
        )}
      </button>
    </div>
  )
}

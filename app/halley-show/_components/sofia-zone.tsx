"use client"

import { 
  MessageCircle, 
  Calendar, 
  CreditCard, 
  HelpCircle, 
  Smile,
  Bell,
  FileText,
  Send
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface SofiaZoneProps {
  userName: string
}

const quickActions = [
  { icon: Calendar, label: "Agendar Avaliação", color: "#22C55E" },
  { icon: CreditCard, label: "Financeiro", color: "#22C55E" },
  { icon: FileText, label: "Meu Plano", color: "#22C55E" },
  { icon: HelpCircle, label: "Dúvidas", color: "#22C55E" },
]

const recentMessages = [
  {
    id: 1,
    from: "sofia",
    message: "Oi! Vi que você completou 7 dias seguidos! Parabéns pela dedicação!",
    time: "agora",
  },
  {
    id: 2,
    from: "sofia", 
    message: "Lembrete: Sua mensalidade vence em 5 dias. Está tudo certo?",
    time: "2h atrás",
  },
]

export function SofiaZone({ userName }: SofiaZoneProps) {
  const [inputMessage, setInputMessage] = useState("")

  return (
    <div className="zone-sofia zone-enter space-y-4 pb-6">
      {/* Sofia&apos;s Welcome Card */}
      <div className="halley-card rounded-2xl p-4 border-l-4 border-l-[#22C55E]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#22C55E]">
            <Image
              src="/images/sofia-avatar.png"
              alt="Sofia"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-[#22C55E]">Sofia</span>
              <span className="text-[10px] text-[#8A8A8A]">Atendimento</span>
            </div>
            <p className="text-[#E5E5E5] text-sm leading-relaxed">
              Olá, <span className="text-[#22C55E] font-medium">{userName}</span>! 
              Estou aqui para te ajudar com qualquer dúvida sobre a academia, 
              pagamentos ou agendamentos.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-[#8A8A8A] text-xs font-medium mb-3 px-1">AÇÕES RÁPIDAS</h3>
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="quick-action flex flex-col items-center gap-2 p-3 rounded-xl bg-[#111111] border border-[#333333] hover:border-[#22C55E] hover:bg-[#22C55E]/5"
            >
              <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                <action.icon className="w-5 h-5 text-[#22C55E]" />
              </div>
              <span className="text-[10px] text-[#E5E5E5] text-center leading-tight">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Notifications Card */}
      <div className="halley-card rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="w-4 h-4 text-[#22C55E]" />
          <h3 className="text-[#E5E5E5] font-semibold text-sm">Avisos</h3>
          <span className="ml-auto bg-[#22C55E] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
            2 novos
          </span>
        </div>
        
        <div className="space-y-3">
          {recentMessages.map((msg, index) => (
            <div 
              key={msg.id} 
              className="message-bubble flex gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-[#333333]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/sofia-avatar.png"
                  alt="Sofia"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#E5E5E5] text-sm leading-relaxed">{msg.message}</p>
                <p className="text-[10px] text-[#8A8A8A] mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div className="halley-card rounded-2xl p-3">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-[#22C55E]/10 flex items-center justify-center hover:bg-[#22C55E]/20 transition-colors">
            <Smile className="w-5 h-5 text-[#22C55E]" />
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-[#1A1A1A] border border-[#333333] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#22C55E] transition-colors"
          />
          <button className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center hover:bg-[#22C55E]/90 transition-colors">
            <Send className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

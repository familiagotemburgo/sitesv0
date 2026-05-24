"use client"

import { Calendar, Check } from "lucide-react"

interface WeekDay {
  day: string
  completed: boolean
  date: string
  isToday?: boolean
}

interface WeeklyTrackerProps {
  days: WeekDay[]
}

export function WeeklyTracker({ days }: WeeklyTrackerProps) {
  return (
    <section className="halley-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-[#D4AF37]" />
        <h2 className="text-[#E5E5E5] font-semibold">Treinos da Semana</h2>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-1.5">
            {/* Day Name */}
            <span className="text-[10px] text-[#8A8A8A] uppercase font-medium">
              {day.day}
            </span>

            {/* Day Circle */}
            <div
              className={`day-check w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                day.completed
                  ? "completed border-[#D4AF37]"
                  : day.isToday
                  ? "border-[#FF8C00] bg-[#FF8C00]/10"
                  : "border-[#333333] bg-[#1A1A1A]"
              }`}
            >
              {day.completed ? (
                <Check className="w-4 h-4 text-black" />
              ) : (
                <span
                  className={`text-xs font-medium ${
                    day.isToday ? "text-[#FF8C00]" : "text-[#555555]"
                  }`}
                >
                  {day.date}
                </span>
              )}
            </div>

            {/* Today Indicator */}
            {day.isToday && (
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Week Summary */}
      <div className="mt-4 pt-4 border-t border-[#333333] flex justify-between items-center">
        <span className="text-sm text-[#8A8A8A]">Progresso semanal</span>
        <span className="text-sm font-semibold text-[#D4AF37]">
          {days.filter((d) => d.completed).length}/7 treinos
        </span>
      </div>
    </section>
  )
}

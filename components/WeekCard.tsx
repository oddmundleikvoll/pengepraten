'use client'

import { getWeekAmount, getTotalUpTo } from '@/lib/spareutfordringStore'

interface WeekCardProps {
  week: number
  completed: boolean
  onToggle: (week: number) => void
  isCurrentWeek?: boolean
}

const WEEK_EMOJIS: Record<number, string> = {
  1: '🌱',
  4: '🌿',
  8: '🌾',
  13: '💰',
  26: '🏆',
  39: '⭐',
  52: '🎯',
}

function getEmoji(week: number): string {
  if (WEEK_EMOJIS[week]) return WEEK_EMOJIS[week]
  if (week <= 4) return '🌱'
  if (week <= 13) return '🌿'
  if (week <= 26) return '🌾'
  if (week <= 39) return '💪'
  return '⭐'
}

export default function WeekCard({ week, completed, onToggle, isCurrentWeek }: WeekCardProps) {
  const amount = getWeekAmount(week)
  const total = getTotalUpTo(week)
  const emoji = getEmoji(week)

  return (
    <button
      onClick={() => onToggle(week)}
      className={`
        relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-300
        ${completed
          ? 'bg-amber-50 border-amber-300 scale-95 shadow-sm'
          : 'bg-white border-gray-100 hover:border-green-300 hover:shadow-md hover:scale-102'
        }
        ${isCurrentWeek && !completed ? 'ring-2 ring-green-400 ring-offset-1' : ''}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500
        min-h-[90px] w-full
      `}
      aria-pressed={completed}
      aria-label={`Uke ${week}: ${amount.toLocaleString('nb-NO')} kr${completed ? ' (fullført)' : ''}`}
    >
      {/* Emoji badge */}
      <div className="absolute -top-2 -right-2 text-lg leading-none">{emoji}</div>

      {/* Week number */}
      <div className={`text-xs font-bold mb-1 ${completed ? 'text-amber-700' : 'text-gray-400'}`}>
        Uke {week}
      </div>

      {/* Amount */}
      <div className={`text-base font-extrabold leading-tight ${completed ? 'text-amber-700' : 'text-gray-800'}`}>
        {amount.toLocaleString('nb-NO')} kr
      </div>

      {/* Running total */}
      <div className={`text-xs mt-1 ${completed ? 'text-amber-600' : 'text-gray-400'}`}>
        Total: {total.toLocaleString('nb-NO')} kr
      </div>

      {/* Checkmark overlay */}
      {completed && (
        <div className="absolute top-1 left-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-sm animate-in zoom-in-75">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  )
}

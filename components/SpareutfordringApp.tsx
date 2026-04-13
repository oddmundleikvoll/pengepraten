'use client'

import { useState, useEffect, useCallback } from 'react'
import WeekCard from './WeekCard'
import ProgressTracker from './ProgressTracker'
import {
  getChallengeProgress,
  toggleWeek,
  resetChallenge,
  getTotalSaved,
  TOTAL_CHALLENGE,
} from '@/lib/spareutfordringStore'
import type { ChallengeProgress } from '@/lib/spareutfordringStore'

interface SpareutfordringAppProps {
  embedded?: boolean
}

export default function SpareutfordringApp({ embedded = false }: SpareutfordringAppProps) {
  const [progress, setProgress] = useState<ChallengeProgress | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all')

  useEffect(() => {
    setProgress(getChallengeProgress())
    setLoaded(true)
  }, [])

  const handleToggle = useCallback((week: number) => {
    setProgress(prev => {
      const next = toggleWeek(week)
      return next
    })
  }, [])

  const handleReset = useCallback(() => {
    if (confirm('Er du sikker på at du vil nullstille all fremgang?')) {
      resetChallenge()
      setProgress({ weeksCompleted: [], startedAt: new Date().toISOString() })
    }
  }, [])

  const weeksCompleted = progress?.weeksCompleted ?? []
  const totalSaved = getTotalSaved(weeksCompleted)

  // Next week to complete: first uncompleted week, or 52 if all done
  const currentWeek = weeksCompleted.length === 0
    ? 1
    : weeksCompleted.length >= 52
      ? 52
      : weeksCompleted[weeksCompleted.length - 1] + 1

  const weeks = Array.from({ length: 52 }, (_, i) => i + 1)

  const filteredWeeks = weeks.filter(w => {
    if (filter === 'pending') return !weeksCompleted.includes(w)
    if (filter === 'done') return weeksCompleted.includes(w)
    return true
  })

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-3 border-green-200 border-t-green-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress summary */}
      <ProgressTracker weeksCompleted={weeksCompleted} onReset={handleReset} />

      {/* Controls: filter tabs */}
      {weeksCompleted.length > 0 && (
        <div className="flex gap-2">
          {(['all', 'pending', 'done'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-all
                ${filter === f
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {f === 'all' ? `Alle (${weeks.length})` : f === 'pending' ? `Gjennstår (${52 - weeksCompleted.length})` : `Ferdig (${weeksCompleted.length})`}
            </button>
          ))}
        </div>
      )}

      {/* Grid of weeks */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
        {filteredWeeks.map(week => (
          <WeekCard
            key={week}
            week={week}
            completed={weeksCompleted.includes(week)}
            onToggle={handleToggle}
            isCurrentWeek={week === currentWeek}
          />
        ))}
      </div>

      {/* Empty state for filter */}
      {filteredWeeks.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          {filter === 'done' ? 'Ingen uker fullført ennå — kom i gang! 🎯' : 'Alle uker er fullført! 🎉'}
        </div>
      )}

      {/* Motivational banner when done */}
      {weeksCompleted.length === 52 && (
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-6 text-center text-amber-900">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-black mb-1">Utfordringen er fullført!</h3>
          <p className="text-amber-800 font-medium">
            Du har spart <strong className="text-2xl">{totalSaved.toLocaleString('nb-NO')} kr</strong> på 52 uker.
            Det er {TOTAL_CHALLENGE.toLocaleString('nb-NO')} kr du nå har investert i din fremtid!
          </p>
        </div>
      )}
    </div>
  )
}

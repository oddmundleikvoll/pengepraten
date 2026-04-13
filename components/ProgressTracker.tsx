'use client'

import { getTotalSaved, getTotalUpTo, TOTAL_CHALLENGE } from '@/lib/spareutfordringStore'

interface ChallengeProgressProps {
  weeksCompleted: number[]
  onReset?: () => void
}

export default function ChallengeProgress({ weeksCompleted, onReset }: ChallengeProgressProps) {
  const totalSaved = getTotalSaved(weeksCompleted)
  const percent = Math.round((weeksCompleted.length / 52) * 100)
  const lastCompletedWeek = weeksCompleted.length > 0 ? weeksCompleted[weeksCompleted.length - 1] : 0
  const nextAmount = lastCompletedWeek < 52 ? getTotalUpTo(lastCompletedWeek + 1) - totalSaved : 0

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header stats */}
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-green-600">{weeksCompleted.length}</div>
          <div className="text-xs text-gray-500 font-medium mt-0.5">av 52 uker</div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-green-600">
            {totalSaved.toLocaleString('nb-NO')} kr
          </div>
          <div className="text-xs text-gray-500 font-medium mt-0.5">spart så langt</div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-gray-300">
            {(TOTAL_CHALLENGE - totalSaved).toLocaleString('nb-NO')} kr
          </div>
          <div className="text-xs text-gray-500 font-medium mt-0.5">gjenstår</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">
            {percent}% fullført
          </span>
          <span className="text-xs text-gray-400">
            {weeksCompleted.length}/52 uker
          </span>
        </div>
        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-1.5"
            style={{ width: `${Math.max(percent, 2)}%` }}
          >
            {percent > 5 && (
              <span className="text-white text-[10px] font-bold leading-none">
                {percent}%
              </span>
            )}
          </div>
        </div>

        {/* Motivational message */}
        {weeksCompleted.length === 0 && (
          <p className="mt-3 text-sm text-gray-500 text-center">
            🚀 Start med uke 1 og byggomentum!
          </p>
        )}
        {weeksCompleted.length > 0 && weeksCompleted.length < 52 && (
          <p className="mt-3 text-sm text-gray-500 text-center">
            {nextAmount > 0 && `Neste: ${nextAmount.toLocaleString('nb-NO')} kr → fullfør uke ${lastCompletedWeek + 1}`}
          </p>
        )}
        {weeksCompleted.length === 52 && (
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">
              🎉 Du har fullført hele utfordringen!
            </span>
          </div>
        )}

        {/* Reset */}
        {weeksCompleted.length > 0 && onReset && (
          <div className="mt-3 text-center">
            <button
              onClick={onReset}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors underline"
            >
              Nullstill utfordringen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { getTotalSaved, getWeekAmount, TOTAL_CHALLENGE } from '@/lib/spareutfordringStore'

interface ChallengeProgressProps {
  weeksCompleted: number[]
  onReset?: () => void
}

export default function ChallengeProgress({ weeksCompleted, onReset }: ChallengeProgressProps) {
  const totalSaved = getTotalSaved(weeksCompleted)
  const percent = Math.round((weeksCompleted.length / 52) * 100)
  const nextWeek = Array.from({ length: 52 }, (_, index) => index + 1)
    .find(week => !weeksCompleted.includes(week))
  const nextAmount = nextWeek ? getWeekAmount(nextWeek) : 0

  return (
    <div className="bg-paper-surface rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Header stats */}
      <div className="grid grid-cols-3 divide-x divide-border">
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-forest">{weeksCompleted.length}</div>
          <div className="text-xs text-ink-muted font-medium mt-0.5">av 52 uker</div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-forest">
            {totalSaved.toLocaleString('nb-NO')} kr
          </div>
          <div className="text-xs text-ink-muted font-medium mt-0.5">spart så langt</div>
        </div>
        <div className="px-4 py-4 text-center">
          <div className="text-2xl font-black text-ink-subtle">
            {(TOTAL_CHALLENGE - totalSaved).toLocaleString('nb-NO')} kr
          </div>
          <div className="text-xs text-ink-muted font-medium mt-0.5">gjenstår</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-ink">
            {percent}% fullført
          </span>
          <span className="text-xs text-ink-subtle">
            {weeksCompleted.length}/52 uker
          </span>
        </div>
        <div className="w-full h-4 bg-paper-alt rounded-full overflow-hidden">
          <div
            className="h-full bg-forest rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-1.5"
            style={{ width: `${Math.max(percent, 2)}%` }}
          >
            {percent > 5 && (
              <span className="text-paper text-[10px] font-bold leading-none">
                {percent}%
              </span>
            )}
          </div>
        </div>

        {/* Motivational message */}
        {weeksCompleted.length === 0 && (
          <p className="mt-3 text-sm text-ink-muted text-center">
            Start med uke 1 og bygg momentum!
          </p>
        )}
        {weeksCompleted.length > 0 && weeksCompleted.length < 52 && (
          <p className="mt-3 text-sm text-ink-muted text-center">
            {nextWeek && `Neste: ${nextAmount.toLocaleString('nb-NO')} kr → fullfør uke ${nextWeek}`}
          </p>
        )}
        {weeksCompleted.length === 52 && (
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-warm-soft text-amber-warm rounded-full text-sm font-bold">
              Du har fullført hele utfordringen!
            </span>
          </div>
        )}

        {/* Reset */}
        {weeksCompleted.length > 0 && onReset && (
          <div className="mt-3 text-center">
            <button
              onClick={onReset}
              className="text-xs text-ink-subtle hover:text-amber-warm transition-colors underline"
            >
              Nullstill utfordringen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

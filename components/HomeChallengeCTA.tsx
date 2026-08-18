'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Target } from 'lucide-react'
import { getChallengeProgress, getTotalSaved, TOTAL_CHALLENGE } from '@/lib/spareutfordringStore'

export default function HomeChallengeCTA() {
  const [weeksCompleted, setWeeksCompleted] = useState<number[] | null>(null)

  useEffect(() => {
    setWeeksCompleted(getChallengeProgress()?.weeksCompleted ?? [])
  }, [])

  const completed = weeksCompleted?.length ?? 0
  const saved = weeksCompleted ? getTotalSaved(weeksCompleted) : 0
  const progress = Math.round((completed / 52) * 100)
  const hasStarted = completed > 0

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
      <div className="overflow-hidden rounded-2xl border border-forest/20 bg-forest-soft">
        <div className="grid md:grid-cols-[1.25fr_0.75fr] items-center">
          <div className="p-7 md:p-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-forest mb-3">
              {hasStarted ? <CheckCircle2 className="w-5 h-5" /> : <Target className="w-5 h-5" />}
              {hasStarted ? 'Fremgangen din er lagret' : 'Bygg en sparevane som varer'}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-3">
              {hasStarted ? `Fortsett med uke ${Math.min(completed + 1, 52)}` : 'Start 52-ukersutfordringen'}
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-2xl">
              {hasStarted
                ? `Du har fullført ${completed} uker og registrert ${saved.toLocaleString('nb-NO')} kr. Neste avkrysning er bare ett klikk unna.`
                : `Start med 50 kr og øk litt hver uke. Kryss av underveis, se fremgangen vokse og spar opptil ${TOTAL_CHALLENGE.toLocaleString('nb-NO')} kr på ett år.`}
            </p>
            {hasStarted && (
              <div className="mt-5 max-w-xl">
                <div className="h-2 rounded-full bg-paper overflow-hidden">
                  <div className="h-full bg-forest rounded-full" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-2 text-xs font-medium text-ink-muted">{progress}% fullført</div>
              </div>
            )}
          </div>
          <div className="p-7 md:p-10 md:border-l border-forest/15">
            <Link
              href="/spareutfordring#start"
              data-analytics-event={hasStarted ? 'challenge_resume' : 'challenge_start_click'}
              data-analytics-label="homepage_challenge"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-6 py-4 font-bold text-paper hover:bg-forest-mid transition-colors"
            >
              {hasStarted ? 'Fortsett utfordringen' : 'Start utfordringen gratis'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-ink-muted text-center mt-3">Ingen konto. Fremgangen lagres lokalt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

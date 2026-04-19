'use client'

import { useState, useMemo } from 'react'

type GoalType = 'ferie' | 'bil' | 'nodfond' | 'bolig' | 'pensjon' | 'annet'

const GOAL_LABELS: Record<GoalType, string> = {
  ferie: 'Ferie',
  bil: 'Bil',
  nodfond: 'Nødfond',
  bolig: 'Bolig',
  pensjon: 'Pensjon',
  annet: 'Annet',
}

const GOAL_ICONS: Record<GoalType, string> = {
  ferie: '✈️',
  bil: '🚗',
  nodfond: '🛡️',
  bolig: '🏠',
  pensjon: '🏖️',
  annet: '🎯',
}

const DEFAULT_RATE = 0.052 // 5.2% annual rate

function formatCurrency(n: number) {
  return n.toLocaleString('nb-NO', { maximumFractionDigits: 0 }) + ' kr'
}

function calcFutureValue(pv: number, rate: number, months: number) {
  return pv * Math.pow(1 + rate / 12, months)
}

export default function SparekalkulatorClient() {
  const [goalType, setGoalType] = useState<GoalType>('nodfond')
  const [customGoal, setCustomGoal] = useState('')
  const [targetAmount, setTargetAmount] = useState('100000')
  const [monthlyAmount, setMonthlyAmount] = useState('2000')
  const [years, setYears] = useState('3')
  const [rate, setRate] = useState(DEFAULT_RATE.toString())

  const results = useMemo(() => {
    const target = parseFloat(targetAmount) || 0
    const monthly = parseFloat(monthlyAmount) || 0
    const yrs = parseFloat(years) || 1
    const r = parseFloat(rate) / 100 || DEFAULT_RATE

    const months = yrs * 12

    // Monthly payment needed to reach target with compound interest
    // FV = PMT * ((1+r)^n - 1) / r
    // Solve for PMT: PMT = FV * r / ((1+r)^n - 1)
    let neededMonthly = 0
    if (r > 0 && months > 0) {
      neededMonthly = target * (r / 12) / (Math.pow(1 + r / 12, months) - 1)
    } else if (months > 0) {
      neededMonthly = target / months
    }

    // Actual time to reach goal with given monthly amount
    let actualMonths = 0
    if (monthly > 0 && r > 0) {
      // Solve n in FV = PMT * ((1+r)^n - 1) / r
      // n = log(FV*r/PMT + 1) / log(1+r)
      const ratio = (target * r / 12) / monthly + 1
      if (ratio > 1) {
        actualMonths = Math.log(ratio) / Math.log(1 + r / 12)
      } else {
        actualMonths = months
      }
      actualMonths = Math.min(actualMonths, 600) // cap at 50 years
    }

    // Total saved without interest
    const totalSavedNoInterest = actualMonths > 0 ? monthly * actualMonths : 0
    // Future value with given monthly
    const futureValue = monthly > 0 && r > 0 && actualMonths > 0
      ? monthly * ((Math.pow(1 + r / 12, actualMonths) - 1) / (r / 12))
      : 0
    // Interest earned
    const interestEarned = Math.max(0, futureValue - totalSavedNoInterest)

    // Project savings over time (for chart)
    const projectionPoints: { month: number; amount: number }[] = []
    let runningTotal = 0
    const maxProjection = Math.max(Math.min(months, actualMonths + 6), 12)
    for (let m = 0; m <= maxProjection; m++) {
      if (r > 0 && m > 0) {
        runningTotal = monthly * ((Math.pow(1 + r / 12, m) - 1) / (r / 12))
      } else {
        runningTotal = monthly * m
      }
      projectionPoints.push({ month: m, amount: Math.min(runningTotal, target * 1.5) })
    }

    return {
      target,
      monthly,
      neededMonthly: Math.max(0, neededMonthly),
      actualMonths: Math.max(0, actualMonths),
      futureValue: Math.min(futureValue, target * 1.5),
      interestEarned,
      totalSaved: totalSavedNoInterest,
      projectionPoints,
      months,
      reachedOnTime: actualMonths <= months,
    }
  }, [targetAmount, monthlyAmount, years, rate])

  const goalLabel = goalType === 'annet' && customGoal ? customGoal : GOAL_LABELS[goalType]

  // Progress bar for the projection chart (simple ASCII-style div bar)
  const progressPct = Math.min(100, (results.futureValue / results.target) * 100)
  const timeProgress = Math.min(100, (results.actualMonths / results.months) * 100)

  return (
    <div className="space-y-8">
      {/* Input section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
          <span>🧮</span> Sparekalkulator med mål
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: inputs */}
          <div className="space-y-5">

            {/* Goal type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hva sparer du til?</label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(GOAL_LABELS) as GoalType[]).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoalType(g)}
                    className={`
                      flex flex-col items-center gap-1 px-3 py-3 rounded-xl border text-sm font-medium transition-all
                      ${goalType === g
                        ? 'bg-green-600 text-white border-green-600 shadow-sm'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }
                    `}
                  >
                    <span className="text-lg">{GOAL_ICONS[g]}</span>
                    <span>{GOAL_LABELS[g]}</span>
                  </button>
                ))}
              </div>
              {goalType === 'annet' && (
                <input
                  type="text"
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="Skriv inn ditt mål..."
                  className="mt-2 w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              )}
            </div>

            {/* Target amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ønsket beløp</label>
              <div className="relative">
                <input
                  type="number"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  min="1000"
                  step="1000"
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">kr</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Hvor mye du trenger for {goalLabel.toLowerCase()}</p>
            </div>

            {/* Monthly amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Månedlig sparebeløp</label>
              <div className="relative">
                <input
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  min="100"
                  step="100"
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">kr</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Hvor mye du kan sette av hver måned</p>
            </div>

            {/* Time horizon */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tidshorisont (år)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                min="0.5"
                max="50"
                step="0.5"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Når trenger du pengene?</p>
            </div>

            {/* Interest rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Forventet årlig rente</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  min="0"
                  max="20"
                  step="0.1"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <span className="text-xl font-black text-green-600">%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Høyrentekontoer gir i dag ~5,2% (Sbanken)</p>
            </div>
          </div>

          {/* Right column: results */}
          <div className="space-y-4">
            {/* Goal badge */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
              <div className="text-sm text-green-200 font-medium mb-1">Ditt sparemål</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{GOAL_ICONS[goalType]}</span>
                <div className="text-2xl font-black">{goalLabel}</div>
              </div>
              <div className="text-4xl font-black">{formatCurrency(results.target)}</div>
            </div>

            {/* Key results */}
            {results.monthly > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
                {/* Time result */}
                <div className={`rounded-xl p-4 ${results.reachedOnTime ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
                  <div className="text-xs text-gray-500 mb-1">
                    {results.reachedOnTime ? '✅ Du når målet!' : '⚠️ Du når ikke målet på tiden'}
                  </div>
                  <div className="flex items-end gap-2">
                    <span className={`text-3xl font-black ${results.reachedOnTime ? 'text-green-600' : 'text-amber-600'}`}>
                      {results.actualMonths > 0 ? Math.ceil(results.actualMonths) : '—'}
                    </span>
                    <span className="text-lg text-gray-500 mb-1">måneder</span>
                  </div>
                  {results.actualMonths > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                      Det tar ~{Math.floor(results.actualMonths / 12)} år og {Math.round(results.actualMonths % 12)} måneder å nå målet
                    </div>
                  )}
                </div>

                {/* Interest earned */}
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <div>
                    <div className="text-sm font-medium text-gray-600">Renteinntekt på høyrentekonto</div>
                    <div className="text-xs text-gray-400">Årlig rente {parseFloat(rate || '5.2').toFixed(1)}%</div>
                  </div>
                  <div className="text-xl font-black text-green-600">
                    +{formatCurrency(results.interestEarned)}
                  </div>
                </div>

                {/* Total saved */}
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-600">Total sparing</div>
                  <div className="text-xl font-bold text-gray-900">{formatCurrency(results.totalSaved)}</div>
                </div>

                {/* Monthly needed */}
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-600">Nødvendig per måned</div>
                  <div className="text-xl font-black text-gray-900">{formatCurrency(results.neededMonthly)}</div>
                </div>

                {results.neededMonthly > results.monthly && (
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <p className="text-sm text-red-700">
                      <strong>Tips:</strong> Øk månedlig sparing med {formatCurrency(results.neededMonthly - results.monthly)} for å nå målet i tide.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Visual progress */}
            {results.projectionPoints.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Progresjon</div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, progressPct)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0 kr</span>
                  <span className="text-green-600 font-semibold">{Math.round(progressPct)}% av mål</span>
                  <span>{formatCurrency(results.target)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Projection chart — simple bar visualization */}
      {results.projectionPoints.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📈</span> Slik vokser sparingen din
          </h3>
          <div className="flex items-end gap-1 h-48 mb-3">
            {results.projectionPoints.filter((_, i) => i % Math.max(1, Math.floor(results.projectionPoints.length / 20)) === 0 || i === results.projectionPoints.length - 1).map((pt, i) => {
              const pct = (pt.amount / results.target) * 100
              const isTarget = pt.amount >= results.target
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-sm min-h-[4px]" style={{ height: `${Math.min(100, pct)}%` }} />
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Start</span>
            <span className="text-green-600 font-semibold">
              {formatCurrency(results.futureValue)} etter {Math.ceil(results.actualMonths)} md
            </span>
            <span>{Math.ceil(results.months)} md</span>
          </div>
          {/* Legend */}
          <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-t from-green-500 to-emerald-400 rounded-sm" />
              <span>Sparing + renter</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="w-3 h-3 bg-gray-200 rounded-sm" />
              <span>Mål: {formatCurrency(results.target)}</span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4" />
        <div className="relative">
          <h3 className="text-2xl font-black mb-2">Klar til å nå {goalLabel.toLowerCase()}?</h3>
          <p className="text-green-100 mb-6 max-w-lg mx-auto leading-relaxed">
            Sammenlign de beste høyrentekontoene og finn den som gir deg høyest rente på sparingen din.
          </p>
          <a
            href="/sparing/hoyrentekonto"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-green-50 transition-all hover:scale-105"
          >
            <span>📊</span> Se beste høyrentekontoer
          </a>
        </div>
      </div>
    </div>
  )
}
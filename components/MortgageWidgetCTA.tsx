'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getMortgageData } from '@/lib/mortgageStore'
import { getMarketRates, calculateMortgageComparison } from '@/lib/marketRates'
import MortgageOnboardingModal from './MortgageOnboardingModal'
import type { MortgageUser } from '@/lib/mortgageTypes'

interface Props {
  variant?: 'sidebar' | 'inline'
}

export default function MortgageWidgetCTA({ variant = 'sidebar' }: Props) {
  const [hasData, setHasData] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [mortgageData, setMortgageData] = useState<MortgageUser | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const data = getMortgageData()
    setHasData(!!data)
    setMortgageData(data)
  }, [])

  function handleSuccess(data: MortgageUser) {
    setHasData(true)
    setMortgageData(data)
  }

  if (!mounted) return null

  const marketRates = getMarketRates()

  if (hasData && mortgageData) {
    const calc = calculateMortgageComparison(
      mortgageData.loanAmount,
      mortgageData.interestRate,
      marketRates.averageNominalRate
    )
    const statusColor = calc.isAboveAverage ? 'text-orange-600' : 'text-primary-600'
    const statusBg = calc.isAboveAverage ? 'bg-orange-50' : 'bg-primary-50'
    const statusDot = calc.isAboveAverage ? 'bg-orange-500' : 'bg-primary-500'
    const differenceLabel = calc.isAboveAverage
      ? `+${calc.difference.toFixed(2)}% over snitt`
      : `${calc.difference.toFixed(2)}% under snitt`

    if (variant === 'inline') {
      return (
        <>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg ${statusBg} flex items-center justify-center flex-shrink-0`}>
                <svg className={`w-4 h-4 ${calc.isAboveAverage ? 'text-orange-600' : 'text-primary-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-norsk-dark text-sm">Din boliglånsrente</p>
                <p className="text-xs text-gray-500">Markedsgjennomsnitt: {marketRates.averageNominalRate}%</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className={`text-2xl font-black ${statusColor}`}>{mortgageData.interestRate}%</span>
              <span className="text-sm text-gray-500">{differenceLabel}</span>
            </div>
            {calc.isAboveAverage && (
              <p className="text-xs text-gray-600 mb-3">
                Du betaler ca. <strong>{calc.yearlyCostDifference.toLocaleString('nb-NO')} kr/år</strong> mer enn gjennomsnittet.
              </p>
            )}
            <Link
              href="/min-boliglån"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Se full oversikt
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </>
      )
    }

    // Sidebar variant
    return (
      <>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className={`${statusBg} p-4`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Din boliglånsrente</span>
              <span className={`inline-flex items-center gap-1 text-xs font-medium ${statusColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
                {calc.isAboveAverage ? 'Over snitt' : 'Under snitt'}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className={`text-2xl font-black ${statusColor}`}>{mortgageData.interestRate}%</span>
              <span className="text-xs text-gray-500">vs {marketRates.averageNominalRate}% marked</span>
            </div>
            <p className="text-xs text-gray-500">{differenceLabel}</p>
          </div>
          <div className="p-4">
            {calc.isAboveAverage && (
              <p className="text-xs text-gray-600 mb-3">
                💸 Du betaler <strong>{calc.yearlyCostDifference.toLocaleString('nb-NO')} kr/år</strong> for mye
              </p>
            )}
            <Link
              href="/min-boliglån"
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors w-full"
            >
              Se full oversikt
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </>
    )
  }

  // Not registered yet — show CTA
  const content = (
    <div className="bg-gradient-to-br from-primary-600 to-accent-700 rounded-xl p-5 text-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="font-bold text-sm">Følg din boliglånsrente</h3>
      </div>
      <p className="text-primary-100 text-xs leading-relaxed mb-4">
        Er din rente over eller under gjennomsnittet? Sjekk i dag og se hvor mye du kan spare.
      </p>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-primary-100">
          <svg className="w-3.5 h-3.5 text-primary-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Sammenlign mot markedet
        </div>
        <div className="flex items-center gap-2 text-xs text-primary-100">
          <svg className="w-3.5 h-3.5 text-primary-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Se sparpotensial i kr/år
        </div>
        <div className="flex items-center gap-2 text-xs text-primary-100">
          <svg className="w-3.5 h-3.5 text-primary-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Ingen pålogging — data lagres lokalt
        </div>
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 w-full bg-white text-primary-700 font-semibold py-2.5 px-4 rounded-lg hover:bg-primary-50 transition-colors text-sm shadow-lg flex items-center justify-center gap-2"
      >
        Sjekk min rente
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  )

  if (variant === 'inline') {
    return (
      <>
        {content}
        <MortgageOnboardingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={handleSuccess}
        />
      </>
    )
  }

  return (
    <>
      {content}
      <MortgageOnboardingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  )
}

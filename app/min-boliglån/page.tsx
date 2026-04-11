'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getMortgageData, updateMortgageData, clearMortgageData } from '@/lib/mortgageStore'
import { getMarketRates, calculateMortgageComparison } from '@/lib/marketRates'
import MortgageOnboardingModal from '@/components/MortgageOnboardingModal'
import type { Metadata } from 'next'
import type { MortgageUser } from '@/lib/mortgageTypes'

function formatNumber(n: number) {
  return n.toLocaleString('nb-NO')
}

export default function MinBoliglanPage() {
  const [data, setData] = useState<MortgageUser | null>(null)
  const [mounted, setMounted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  useEffect(() => {
    setMounted(true)
    setData(getMortgageData())
  }, [])

  function handleSuccess(saved: MortgageUser) {
    setData(saved)
  }

  function handleEdit() {
    setModalOpen(true)
  }

  function handleDelete() {
    clearMortgageData()
    setData(null)
    setDeleteConfirm(false)
  }

  if (!mounted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2" />
          <div className="h-32 bg-gray-100 rounded-xl" />
          <div className="h-48 bg-gray-100 rounded-xl" />
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <>
        <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <nav className="text-primary-200 text-sm mb-4">
              <Link href="/" className="hover:text-white">Hjem</Link>
              <span className="mx-2">/</span>
              <span>Min boliglånsrente</span>
            </nav>
            <h1 className="text-3xl font-black mb-2">Min boliglånsrente</h1>
            <p className="text-primary-100">Du har ikke registrert ditt boliglån enda.</p>
          </div>
        </section>
        <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-norsk-dark mb-2">Ingen data registrert</h2>
            <p className="text-gray-500 mb-6">
              Registrer ditt boliglån for å se hvordan din rente ligger an i forhold til markedet.
            </p>
            <MortgageOnboardingModal
              isOpen={true}
              onClose={() => window.location.href = '/boliglan'}
              onSuccess={(saved) => { setData(saved) }}
            />
          </div>
        </section>
      </>
    )
  }

  const marketRates = getMarketRates()
  const calc = calculateMortgageComparison(
    data.loanAmount,
    data.interestRate,
    marketRates.averageNominalRate
  )

  const isAbove = calc.isAboveAverage
  const diffColor = isAbove ? 'text-orange-600' : 'text-primary-600'
  const diffBg = isAbove ? 'bg-orange-50' : 'bg-primary-50'
  const diffDot = isAbove ? 'bg-orange-500' : 'bg-primary-500'
  const diffLabel = isAbove ? 'over gjennomsnittet' : 'under gjennomsnittet'

  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Min boliglånsrente</span>
          </nav>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-black mb-2">Min boliglånsrente</h1>
              <p className="text-primary-100 text-sm">
                Registrert {new Date(data.createdAt).toLocaleDateString('nb-NO')}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Rediger
              </button>
              {!deleteConfirm ? (
                <button
                  onClick={() => setDeleteConfirm(true)}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Slett
                </button>
              ) : (
                <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 rounded-lg p-1.5">
                  <span className="text-red-200 text-xs px-1">Slett?</span>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1 px-2 rounded transition-colors"
                  >
                    Ja
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(false)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-1 px-2 rounded transition-colors"
                  >
                    Nei
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Rate comparison card */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className={`${diffBg} p-6`}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Din rente</p>
                <p className={`text-3xl font-black ${diffColor}`}>{data.interestRate}%</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-px w-full bg-gray-200" />
                <div className="px-3 py-1 bg-white rounded-full border border-gray-200 text-xs font-medium text-gray-500">
                  vs
                </div>
                <div className="h-px w-full bg-gray-200" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Markedssnitt</p>
                <p className="text-3xl font-black text-gray-700">{marketRates.averageNominalRate}%</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${diffColor}`}>
                <span className={`w-2 h-2 rounded-full ${diffDot}`} />
                +{calc.difference.toFixed(2)}% {diffLabel}
              </span>
            </div>
          </div>

          {/* Cost breakdown */}
          {isAbove && (
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-norsk-dark mb-3">Kostnad av forskjellen</h3>
              <div className="bg-orange-50 rounded-xl p-4 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-orange-600">
                    +{calc.yearlyCostDifference.toLocaleString('nb-NO')} kr/år
                  </span>
                  <span className="text-sm text-orange-500">
                    (ca +{Math.round(calc.monthlyCostDifference).toLocaleString('nb-NO')} kr/mnd)
                  </span>
                </div>
                <p className="text-sm text-orange-700 mt-1">
                  Så mye mer betaler du sammenlignet med gjennomsnittet per {data.remainingYears} års gjenværende løpetid.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-orange-100 p-4 space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Hvis renten synker...</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Til 4,5% kan du spare</span>
                  <span className="font-semibold text-orange-600">
                    {calc.potentialSavingsAt4_5 > 0
                      ? `~${Math.round(calc.potentialSavingsAt4_5).toLocaleString('nb-NO')} kr/år`
                      : '–'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Til 4,0% kan du spare</span>
                  <span className="font-semibold text-orange-600">
                    {calc.potentialSavingsAt4_0 > 0
                      ? `~${Math.round(calc.potentialSavingsAt4_0).toLocaleString('nb-NO')} kr/år`
                      : '–'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {!isAbove && (
            <div className="p-6 border-t border-gray-100">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <span className="text-3xl mb-2 block">🎉</span>
                <p className="font-semibold text-primary-700">God rente!</p>
                <p className="text-sm text-primary-600 mt-1">
                  Din rente er {Math.abs(calc.difference).toFixed(2)}% under gjennomsnittet. Fortsett å forhandle med banken din!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Loan details */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-norsk-dark mb-4">Lånedetaljer</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Lånebeløp</p>
              <p className="font-semibold text-norsk-dark">{formatNumber(data.loanAmount)} kr</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Gjenstående løpetid</p>
              <p className="font-semibold text-norsk-dark">{data.remainingYears} år</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Din rente</p>
              <p className="font-semibold text-norsk-dark">{data.interestRate}% nominell</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Markedsgjennomsnitt</p>
              <p className="font-semibold text-norsk-dark">{marketRates.averageNominalRate}% nominell</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Markedsrente sist oppdatert: {new Date(marketRates.lastUpdated).toLocaleDateString('nb-NO')} · Kilde: {marketRates.source}
          </p>
        </div>

        {/* Email alerts */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-norsk-dark mb-1">📧 E-postvarsler</h3>
          {data.email ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 font-medium">{data.email}</p>
                <p className="text-xs text-primary-600 flex items-center gap-1 mt-0.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aktiv
                </p>
              </div>
              <button
                onClick={() => {
                  updateMortgageData({ alertEnabled: false })
                  setData(getMortgageData())
                }}
                className="text-xs text-gray-500 hover:text-gray-700 font-medium"
              >
                Slå av
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 mb-3">
                Skru på e-postvarsler for å få beskjed når rentene endrer seg og refinansiering kan lønne seg.
              </p>
              <button
                onClick={handleEdit}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
              >
                Legg til e-post
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          )}
          <p className="text-xs text-gray-400 mt-3">
            Vi varsler deg bare når det faktisk kan lønne seg — ikke for hver renteendring.
          </p>
        </div>

        {/* CTA to article */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
          <h3 className="font-semibold text-norsk-dark mb-1">Vil du refinansiere?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Les vår guide til refinansiering og se hvordan du kan flytte boliglånet til en bedre rente.
          </p>
          <Link
            href="/lan/refinansiering-spar-paa-gjelden"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Les om refinansiering
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <MortgageOnboardingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  )
}

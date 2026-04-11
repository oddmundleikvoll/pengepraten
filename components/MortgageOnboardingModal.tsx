'use client'

import { useState, useEffect } from 'react'
import { getMortgageData, saveMortgageData } from '@/lib/mortgageStore'
import type { MortgageUser } from '@/lib/mortgageTypes'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSuccess: (data: MortgageUser) => void
}

export default function MortgageOnboardingModal({ isOpen, onClose, onSuccess }: Props) {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [remainingYears, setRemainingYears] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const existing = getMortgageData()
      if (existing) {
        setLoanAmount(existing.loanAmount.toString())
        setInterestRate(existing.interestRate.toString())
        setRemainingYears(existing.remainingYears.toString())
        setEmail(existing.email ?? '')
      } else {
        setLoanAmount('')
        setInterestRate('')
        setRemainingYears('')
        setEmail('')
      }
      setErrors({})
    }
  }, [isOpen])

  function validate() {
    const errs: Record<string, string> = {}
    const amt = parseFloat(loanAmount)
    const rate = parseFloat(interestRate)
    const years = parseInt(remainingYears)

    if (!loanAmount || isNaN(amt) || amt <= 0) {
      errs.loanAmount = 'Oppgi et gyldig lånebeløp'
    }
    if (!interestRate || isNaN(rate) || rate <= 0 || rate > 30) {
      errs.interestRate = 'Oppgi en gyldig rente mellom 0 og 30%'
    }
    if (!remainingYears || isNaN(years) || years <= 0 || years > 50) {
      errs.remainingYears = 'Oppgi gjenstående løpetid i hele år'
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Oppgi en gyldig e-postadresse'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      const saved = saveMortgageData({
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        remainingYears: parseInt(remainingYears),
        email: email || undefined,
        alertEnabled: !!email,
      })
      onSuccess(saved)
      onClose()
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-600 to-accent-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className="text-primary-100 text-xs font-medium">Min boliglånsrente</span>
                <h2 className="font-bold text-lg leading-tight">Din boliglånsrente</h2>
              </div>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-primary-100 text-sm mt-3 leading-relaxed">
            Registrer ditt lån og få vite om du betaler over eller under gjennomsnittet.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Lånebeløp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lånebeløp <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="2 500 000"
                min="1"
                step="1000"
                className={`w-full px-4 py-3 pr-12 rounded-xl border ${errors.loanAmount ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-200'} focus:outline-none focus:ring-2 transition-colors`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kr</span>
            </div>
            {errors.loanAmount && <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>}
          </div>

          {/* Rente */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Din rente (% nominell) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="5,2"
                min="0.1"
                max="30"
                step="0.1"
                className={`w-full px-4 py-3 pr-10 rounded-xl border ${errors.interestRate ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-200'} focus:outline-none focus:ring-2 transition-colors`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
            </div>
            {errors.interestRate && <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>}
          </div>

          {/* Løpetid */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gjenstående løpetid <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={remainingYears}
                onChange={(e) => setRemainingYears(e.target.value)}
                placeholder="22"
                min="1"
                max="50"
                className={`w-full px-4 py-3 pr-12 rounded-xl border ${errors.remainingYears ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-200'} focus:outline-none focus:ring-2 transition-colors`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">år</span>
            </div>
            {errors.remainingYears && <p className="text-red-500 text-xs mt-1">{errors.remainingYears}</p>}
          </div>

          {/* E-post */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-post for varsler{' '}
              <span className="text-gray-400 font-normal">(valgfritt)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ola@normann.no"
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-primary-200'} focus:outline-none focus:ring-2 transition-colors`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            <p className="text-gray-400 text-xs mt-1">
              Vi varsler deg hvis rentene endrer seg slik at refinansiering kan lønne seg.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Lagrer...
              </>
            ) : (
              <>
                Sjekk min rente
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Vi lagrer dataene dine lokalt i din browser. Ingen pålogging kreves.
          </p>
        </form>
      </div>
    </div>
  )
}

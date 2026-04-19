'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'inline' | 'card'
  title?: string
  description?: string
}

export default function EmailCapture({
  variant = 'card',
  title,
  description,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Noe gikk galt. Prøv igjen.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setError('Noe gikk galt. Prøv igjen.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-center text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Sjekk innboksen din!</h3>
        <p className="text-green-100">
          Du er påmeldt! Vi sender deg ukentlige renteoppdateringer rett i innboksen.
        </p>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">{title || 'Få e-postvarsel når rentene endres'}</h4>
            <p className="text-gray-600 text-sm">{description || 'Få ukentlig renteoppdatering rett inboksen din. Helt gratis.'}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto shrink-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.no"
              required
              className="flex-1 sm:w-56 px-4 py-2.5 rounded-lg border border-green-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white placeholder-gray-400"
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60 shrink-0"
            >
              {loading ? 'Sender...' : 'Meld på'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Card variant
  return (
    <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-green-200 text-sm font-medium">Ukentlig oppdatering</span>
            <h3 className="text-xl font-bold">{title || 'Få e-postvarsel når rentene endres'}</h3>
          </div>
        </div>
        <p className="text-green-100 mb-6 leading-relaxed">
          {description || 'Få ukentlig renteoppdatering rett i innboksen din. Vi sender deg en e-post hver gang rentene endrer seg — slik at du alltid har det beste tilbudet.'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e-postadresse"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/40 text-base"
          />
          {error && (
            <p className="text-red-200 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-green-700 font-bold py-3.5 px-6 rounded-xl hover:bg-green-50 transition-colors shadow-lg text-base disabled:opacity-60"
          >
            {loading ? 'Sender...' : 'Ja, varsle meg om renteendringer →'}
          </button>
          <p className="text-xs text-green-200 text-center">
            Ingen spam. Du kan melde deg av når som helst.
          </p>
        </form>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'

export default function LeadMagnet() {
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
      <div className="invert-block rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-paper/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Sjekk innboksen din!</h3>
        <p className="text-paper/80">
          Vi har sendt deg en lenke til budsjettmalen. Ha den klar før du setter i gang!
        </p>
      </div>
    )
  }

  return (
    <div className="invert-block rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-paper/20 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <span className="text-paper/80 text-sm font-medium">Gratis nedlasting</span>
          <h3 className="text-xl font-bold">Gratis budsjettmal</h3>
        </div>
      </div>
      <p className="text-paper/80 mb-6 leading-relaxed">
        Få vår populære budsjettmal for Google Sheets — brukt av over 2.000 nordmenn.
        Kategorisert, ferdigformatert, og klar til bruk med en gang.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Din e-postadresse"
          required
          className="w-full px-4 py-3 rounded-xl bg-paper/10 border border-paper/30 text-paper placeholder-paper/60 focus:outline-none focus:ring-2 focus:ring-paper/50 lead-magnet-input"
        />
        {error && (
          <p className="text-amber-warm text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-paper text-forest font-semibold py-3 px-6 rounded-xl hover:bg-paper-alt transition-colors shadow-lg disabled:opacity-60"
        >
          {loading ? 'Sender...' : 'Last ned gratis budsjettmal →'}
        </button>
        <p className="text-xs text-paper/70 text-center">
          Ingen spam. Avslutt når som helst.
        </p>
      </form>
    </div>
  )
}

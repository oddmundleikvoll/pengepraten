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
      <div className="bg-teal-800 rounded-2xl p-8 text-center text-white shadow-soft-lg reveal">
        <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 tracking-tight">Sjekk innboksen din!</h3>
        <p className="text-teal-200 text-sm leading-relaxed">
          Vi har sendt deg en lenke til budsjettmalen. Ha den klar før du setter i gang!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-teal-800 rounded-2xl p-7 md:p-8 text-white shadow-soft-lg reveal">
      <div className="flex items-center gap-3.5 mb-5">
        <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <span className="text-teal-200 text-xs font-medium uppercase tracking-wider">Gratis nedlasting</span>
          <h3 className="text-lg font-semibold tracking-tight">Gratis budsjettmal</h3>
        </div>
      </div>
      <p className="text-teal-100/80 mb-6 leading-relaxed text-[15px]">
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
          className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-teal-300/50 focus:outline-none focus:ring-2 focus:ring-white/30 lead-magnet-input text-[15px]"
        />
        {error && (
          <p className="text-red-200 text-sm text-center">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-teal-800 font-semibold py-3 px-6 rounded-xl hover:bg-stone-50 transition-colors shadow-soft btn-press disabled:opacity-60 text-[15px]"
        >
          {loading ? 'Sender...' : 'Last ned gratis budsjettmal →'}
        </button>
        <p className="text-xs text-teal-300/60 text-center">
          Ingen spam. Avslutt når som helst.
        </p>
      </form>
    </div>
  )
}

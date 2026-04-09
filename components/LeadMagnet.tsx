'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl p-8 text-center text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Sjekk innboksen din!</h3>
        <p className="text-primary-100">
          Vi har sendt deg en lenke til budsjettmalen. Ha den klar før du setter i gang!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <span className="text-primary-100 text-sm font-medium">Gratis nedlasting</span>
          <h3 className="text-xl font-bold">Gratis budsjettmal</h3>
        </div>
      </div>
      <p className="text-primary-100 mb-6 leading-relaxed">
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
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 lead-magnet-input"
        />
        <button
          type="submit"
          className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
        >
          Last ned gratis budsjettmal →
        </button>
        <p className="text-xs text-primary-200 text-center">
          Ingen spam. Avslutt når som helst.
        </p>
      </form>
    </div>
  )
}

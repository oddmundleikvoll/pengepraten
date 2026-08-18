'use client'

import { useState } from 'react'

export default function UnsubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (!response.ok) throw new Error(data.error || 'Noe gikk galt')
      setStatus('success')
      setMessage('Vi har sendt deg en e-post. Klikk på lenken der for å bekrefte avmeldingen.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Noe gikk galt. Prøv igjen.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="block text-sm font-semibold text-ink mb-2">E-postadressen du meldte på</span>
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
          placeholder="din@epost.no"
          className="w-full px-4 py-3 rounded-lg border border-border bg-paper-surface focus:outline-none focus:ring-2 focus:ring-forest"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-forest text-paper font-semibold py-3 px-6 rounded-lg hover:bg-forest-mid transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sender bekreftelse...' : 'Send avmeldingslenke'}
      </button>
      {message && (
        <p role="status" className={`text-sm ${status === 'error' ? 'text-amber-warm' : 'text-forest'}`}>
          {message}
        </p>
      )}
    </form>
  )
}

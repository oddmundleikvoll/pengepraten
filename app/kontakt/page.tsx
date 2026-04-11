'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Metadata } from 'next'

export default function KontaktPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setMessage('')

    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const messageText = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: messageText }),
      })

      const data = await res.json()

      if (res.ok) {
        setFormState('success')
        setMessage('Melding sendt! Vi svarer vanligvis innen 24-48 timer.')
        form.reset()
      } else {
        setFormState('error')
        setMessage(data.error || 'Noe gikk galt. Prøv igjen.')
      }
    } catch {
      setFormState('error')
      setMessage('Noe gikk galt. Prøv igjen.')
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Kontakt</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300">
            Har du spørsmål eller tilbakemeldinger? Vi vil gjerne høre fra deg.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Kontaktinformasjon</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark">E-post</h3>
                  <p className="text-gray-600">kontakt@pengepraten.no</p>
                  <p className="text-sm text-gray-500 mt-1">Vi svarer vanligvis innen 24-48 timer.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-norsk-dark">Ofte stilte spørsmål</h3>
                  <p className="text-gray-600">
                    Før du kontakter oss, sjekk om svaret finnes i våre artikler 
                    eller verktøy. Det sparer tid for begge parter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Send oss en melding</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Hva kan vi hjelpe deg med?"
                />
              </div>
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {formState === 'loading' ? 'Sender...' : 'Send melding'}
              </button>
            </form>

            {message && (
              <p className={`text-sm mt-4 ${formState === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

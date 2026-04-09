import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt — Ta kontakt med Pengepraten',
  description: 'Har du spørsmål eller tilbakemeldinger? Ta kontakt med oss på kontakt@pengepraten.no.',
}

export default function KontaktPage() {
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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Hva kan vi hjelpe deg med?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Send melding
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Skjemaet er foreløpig ikke koblet til backend. Send e-post direkte 
              til kontakt@pengepraten.no for å nå oss.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

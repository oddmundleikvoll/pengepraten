import type { Metadata } from 'next'
import SparekalkulatorClient from './SparekalkulatorClient'

export const metadata: Metadata = {
  title: 'Sparekalkulator med mål | Pengepraten',
  description: 'Beregn hvor lenge det tar å nå sparemålet ditt med en høyrentekonto. Sett inn sparemål (ferie, bil, nødfond), ønsket beløp, tidshorisont og månedlig sparebeløp.',
  keywords: ['sparekalkulator', 'spare til mål', 'spareplan kalkulator', 'hvor mye bør jeg spare', 'sparekalkulator mål sparing'],
}

export default function SparekalkulatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-6">
            <a href="/">Hjem</a>
            <span className="mx-2">/</span>
            <a href="/sparing">Sparing</a>
            <span className="mx-2">/</span>
            <span className="text-white">Sparekalkulator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Sparekalkulator med{' '}
            <span className="text-amber-300">mål</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl leading-relaxed">
            Hvor lang tid tar det egentlig å nå sparemålet ditt? Beregn nøyaktig hvor lenge du må spare — og hvor mye renteinntekt du kan tjene på en høyrentekonto.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <SparekalkulatorClient />
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-20">
        <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Ofte stilte spørsmål</h2>
        <div className="space-y-4">
          {[
            { q: 'Hvorfor bør jeg bruke en høyrentekonto?', a: 'Med dagens rentenivå kan du få over 5% på en høyrentekonto. Det betyr at pengene dine vokser raskere enn inflasjonen — reell avkastning uten risiko.' },
            { q: 'Kan jeg ta ut pengene når som helst?', a: 'Ja, de fleste høyrentekontoer har ingen bindingstid. Pengene er tilgjengelige i løpet av 1-2 dager.' },
            { q: 'Hvor mye bør jeg ha som nødfond?', a: 'Et nødfond bør være 3-6 måneders forbruk. For de fleste nordmenn betyr det 60.000–150.000 kroner.' },
            { q: 'Påvirkes rentene av inflasjon?', a: 'Norges Bank setter styringsrenten basert på inflasjon. Når rentene stiger, øker også renten på høyrentekontoer — og omvendt.' },
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-bold text-gray-800 hover:text-green-600 transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
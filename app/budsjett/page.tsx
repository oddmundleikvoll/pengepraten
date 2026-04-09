import Link from 'next/link'
import LeadMagnet from '@/components/LeadMagnet'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budsjett — Gratis maler og verktøy for personlig økonomi',
  description: 'Last ned vår gratis budsjettmal for Google Sheets. Ferdig formatert med norske kategorier og automatiske beregninger.',
}

export default function BudsjettPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-amber-100 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Budsjett</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Budsjett</h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Ta kontroll over økonomien med våre gratis budsjettmaler og verktøy.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-norsk-dark mb-4">
              Hvorfor budsjettere?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Et budsjett er ikke en stram økonomisk tvangstrøye — det er et verktøy 
              for å sikre at pengene dine går til det som faktisk betyr noe for deg. 
              Med et godt budsjett kan du:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Se nøyaktig hvor pengene dine går',
                'Finne områder hvor du kan spare',
                'Planlegge for store utgifter',
                'Bygge opp en solid buffer',
                'Nå dine sparemål raskere',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-norsk-dark mb-4">
              Hva får du?
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Ferdig oppsatt budsjettmal i Google Sheets',
                  'Norske kategorier tilpasset norske forhold',
                  'Automatiske summer og prosentberegninger',
                  'Oversikt over inntekter og utgifter',
                  'Sparing- og buffer-tracking',
                  'Ingen binding — bruk så mye du vil',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-2">Hvordan fungerer det?</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                <li>Fyll inn e-postadressen din i skjemaet</li>
                <li>Vi sender deg en lenke til Google Sheets-malen</li>
                <li>Kopier malen til din egen Google Drive</li>
                <li>Fyll inn dine tall og se budsjettet oppdatere seg automatisk</li>
              </ol>
            </div>
          </div>

          <div>
            <LeadMagnet />
          </div>
        </div>
      </section>
    </>
  )
}

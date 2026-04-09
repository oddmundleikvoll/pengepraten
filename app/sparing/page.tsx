import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sparing — Beste sparekonto og sparetips 2026',
  description: 'Finn den beste sparekontoen i Norge. Sammenlign renter, gebyrer og betingelser. Lær om BSU, IPS og høyrentekonto.',
}

export default function SparingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-green-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Sparing</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Sparing</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Finn den beste sparekontoen og få tips om BSU, IPS og smart sparing.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hvorfor spare?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Med dagens inflasjon spiser prisveksten av sparepengene dine hvis de 
                står på en vanlig brukskonto. Å velge riktig sparekonto kan bety 
                forskjellen mellom å tape kjøpekraft og å få pengene til å vokse.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pengepraten hjelper deg å finne de beste sparekontoene og gir deg 
                tips om BSU, IPS og andre spareformer.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om sparing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/sparing/beste-sparekonto-2026" className="group">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200 overflow-hidden">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                      Sparing
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-norsk-dark group-hover:text-green-600 transition-colors mb-2">
                      Beste sparekonto i Norge 2026
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Med inflasjonen som spiser av sparepengene dine, er det viktigere enn noensinne å plassere pengene der de faktisk vokser.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                      <span>Les mer</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
              <Link href="/sparing/spareplan-guide" className="group">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200 overflow-hidden">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                      Sparing
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-norsk-dark group-hover:text-green-600 transition-colors mb-2">
                      Slik setter du opp en spareplan som faktisk fungerer
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Lær hvordan du bygger en spareplan som holder seg over tid. Vi guider deg gjennom målsetting, automatisk sparing og de beste sparekontoene.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                      <span>Les mer</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Sparingsformer</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Sparekonto', desc: 'Fleksibel sparing med rente' },
                  { label: 'BSU', desc: 'Boligsparing for unge' },
                  { label: 'IPS', desc: 'Pensjonssparing med skattefradrag' },
                  { label: 'Høyrentekonto', desc: 'Høyere rente, bindingstid' },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col">
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <span className="text-gray-500 text-xs">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Beste rente nå</span>
                  <span className="font-medium">3,5-4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Innskuddsrente</span>
                  <span className="font-medium">0,5-1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">BSU-rente</span>
                  <span className="font-medium">3-5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skattefradrag BSU</span>
                  <span className="font-medium">10% (max 2.500 kr/år)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

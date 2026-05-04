import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sparing — Beste sparekonto og sparetips 2026',
  description: 'Finn den beste sparekontoen i Norge. Sammenlign renter, gebyrer og betingelser. Lær om BSU, IPS og høyrentekonto.',
}

export default function SparingPage() {
  return (
    <>
      <section className="bg-stone-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <nav className="text-stone-400 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors focus-ring rounded">Hjem</Link>
            <span className="mx-2 text-stone-600">/</span>
            <span className="text-stone-300">Sparing</span>
          </nav>
          <h1 className="font-display text-display mb-4 text-balance">Sparing</h1>
          <p className="text-lg text-stone-400 max-w-xl leading-relaxed text-balance">
            Finn den beste sparekontoen og få tips om BSU, IPS og smart sparing.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-stone-200/60 p-8 mb-10 shadow-soft">
              <h2 className="font-display text-display-sm mb-5 text-balance">Hvorfor spare?</h2>
              <p className="text-stone-600 leading-[1.75] mb-5 text-[17px]">
                Med dagens inflasjon spiser prisveksten av sparepengene dine hvis de
                står på en vanlig brukskonto. Å velge riktig sparekonto kan bety
                forskjellen mellom å tape kjøpekraft og å få pengene til å vokse.
              </p>
              <p className="text-stone-600 leading-[1.75] text-[17px]">
                Pengepraten hjelper deg å finne de beste sparekontoene og gir deg
                tips om BSU, IPS og andre spareformer.
              </p>
            </div>

            <h2 className="font-display text-display-sm mb-6 text-balance">Artikler om sparing</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Link href="/sparing/beste-sparekonto-2026" className="group block focus-ring rounded-2xl">
                <article className="bg-white rounded-2xl border border-stone-200/60 shadow-soft hover:shadow-soft-lg hover:border-teal-200/60 transition-all duration-300 overflow-hidden card-hover">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-md tracking-tight">
                      Sparing
                    </span>
                  </div>
                  <div className="p-5 pt-4">
                    <h3 className="font-semibold text-stone-900 group-hover:text-teal-800 transition-colors mb-2 leading-snug">
                      Beste sparekonto i Norge 2026
                    </h3>
                    <p className="text-sm text-stone-500 line-clamp-3 leading-relaxed">
                      Med inflasjonen som spiser av sparepengene dine, er det viktigere enn noensinne å plassere pengene der de faktisk vokser.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-teal-700 font-medium">
                      <span>Les mer</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
              <Link href="/sparing/spareplan-guide" className="group block focus-ring rounded-2xl">
                <article className="bg-white rounded-2xl border border-stone-200/60 shadow-soft hover:shadow-soft-lg hover:border-teal-200/60 transition-all duration-300 overflow-hidden card-hover">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-md tracking-tight">
                      Sparing
                    </span>
                  </div>
                  <div className="p-5 pt-4">
                    <h3 className="font-semibold text-stone-900 group-hover:text-teal-800 transition-colors mb-2 leading-snug">
                      Slik setter du opp en spareplan som faktisk fungerer
                    </h3>
                    <p className="text-sm text-stone-500 line-clamp-3 leading-relaxed">
                      Lær hvordan du bygger en spareplan som holder seg over tid. Vi guider deg gjennom målsetting, automatisk sparing og de beste sparekontoene.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-teal-700 font-medium">
                      <span>Les mer</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Sparingsformer</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Sparekonto', desc: 'Fleksibel sparing med rente' },
                  { label: 'BSU', desc: 'Boligsparing for unge' },
                  { label: 'IPS', desc: 'Pensjonssparing med skattefradrag' },
                  { label: 'Høyrentekonto', desc: 'Høyere rente, bindingstid' },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col">
                    <span className="font-medium text-stone-800">{item.label}</span>
                    <span className="text-stone-500 text-xs">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-soft">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Beste rente nå</span>
                  <span className="font-medium text-stone-900">3,5-4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Innskuddsrente</span>
                  <span className="font-medium text-stone-900">0,5-1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">BSU-rente</span>
                  <span className="font-medium text-stone-900">3-5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Skattefradrag BSU</span>
                  <span className="font-medium text-stone-900">10% (max 2.500 kr/år)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

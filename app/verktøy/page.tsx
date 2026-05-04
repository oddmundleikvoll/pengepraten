import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verktøy — Gratis kalkulatorer og maler',
  description: 'Gratis verktøy for personlig økonomi. Lånekalkulator, budsjettmal og mer. Helt gratis og uten registrering.',
}

const tools = [
  {
    href: '/verktøy/boliglånskalkulator',
    title: 'Boliglånskalkulator',
    description: 'Beregn månedlig kostnad, total lånekostnad og effektiv rente for boliglån. Oppdatert med dagens renter fra norske banker.',
    icon: '🏠',
  },
  {
    href: '/verktøy/lånekalkulator',
    title: 'Forbrukslånskalkulator',
    description: 'Beregn månedlig kostnad, total rente og effektiv rente for forbrukslån.',
    icon: '🧮',
  },
  {
    href: '/budsjett',
    title: 'Budsjettmal',
    description: 'Last ned vår gratis budsjettmal for Google Sheets eller Excel.',
    icon: '📊',
  },
]

export default function VerktoyPage() {
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
            <span className="text-stone-300">Verktøy</span>
          </nav>
          <h1 className="font-display text-display-sm mb-4 text-balance">Verktøy</h1>
          <p className="text-lg text-stone-400 max-w-xl leading-relaxed text-balance">
            Gratis verktøy for å ta bedre økonomiske beslutninger. Ingen registrering,
            ingen spam — bare nyttige verktøy.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white rounded-2xl border border-stone-200/60 shadow-soft hover:shadow-soft-lg hover:border-teal-200/60 transition-all duration-300 p-7 card-hover focus-ring"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-stone-100">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-stone-900 group-hover:text-teal-800 transition-colors mb-2 tracking-tight">
                    {tool.title}
                  </h2>
                  <p className="text-stone-500 text-[15px] leading-relaxed">{tool.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-teal-700">
                    <span>Prøv verktøyet</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-stone-50 rounded-2xl p-8 text-center border border-stone-100">
          <h2 className="font-display text-display-sm mb-3 text-balance">Forslag til nye verktøy?</h2>
          <p className="text-stone-500 mb-4 max-w-md mx-auto text-[15px] leading-relaxed">
            Vi jobber stadig med å utvide vårt verktøysett. Har du forslag til kalkulatorer
            eller verktøy som ville vært nyttige?
          </p>
          <p className="text-sm text-stone-400">
            Send oss en e-post på <a href="mailto:kontakt@pengepraten.no" className="text-teal-700 hover:text-teal-900 underline underline-offset-2">kontakt@pengepraten.no</a>
          </p>
        </div>
      </section>
    </>
  )
}

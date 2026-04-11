import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verktøy — Gratis kalkulatorer og maler',
  description: 'Gratis verktøy for personlig økonomi. Forbrukslånskalkulator, boliglånskalkulator, budsjettmal og mer. Helt gratis og uten registrering.',
}

const tools = [
  {
    href: '/verktøy/boliglånskalkulator',
    title: 'Boliglånskalkulator',
    description: 'Beregn månedlig kostnad, total lånekostnad og effektiv rente for boliglån. Oppdatert med dagens renter fra norske banker.',
    icon: '🏠',
    color: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    href: '/verktøy/lånekalkulator',
    title: 'Forbrukslånskalkulator',
    description: 'Beregn månedlig kostnad, total rente og effektiv rente for forbrukslån.',
    icon: '🧮',
    color: 'bg-primary-50',
    textColor: 'text-primary-600',
  },
  {
    href: '/budsjett',
    title: 'Budsjettmal',
    description: 'Last ned vår gratis budsjettmal for Google Sheets eller Excel.',
    icon: '📊',
    color: 'bg-accent-50',
    textColor: 'text-accent-600',
  },
]

export default function VerktoyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Verktøy</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Verktøy</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Gratis verktøy for å ta bedre økonomiske beslutninger. Ingen registrering, 
            ingen spam — bare nyttige verktøy.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${tool.textColor} group-hover:text-primary-700 transition-colors mb-2`}>
                    {tool.title}
                  </h2>
                  <p className="text-gray-600">{tool.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary-600">
                    <span>Prøv verktøyet</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-norsk-dark mb-4">Forslag til nye verktøy?</h2>
          <p className="text-gray-600 mb-4">
            Vi jobber stadig med å utvide vårt verktøysett. Har du forslag til kalkulatorer 
            eller verktøy som ville vært nyttige?
          </p>
          <p className="text-sm text-gray-500">
            Send oss en e-post på kontakt@pengepraten.no
          </p>
        </div>
      </section>
    </>
  )
}

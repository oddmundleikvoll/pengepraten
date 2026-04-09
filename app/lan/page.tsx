import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lån — Sammenlign forbrukslån og refinansiering 2026',
  description: 'Finn det billigste forbrukslånet i Norge. Sammenlign renter, gebyrer og betingelser. Lær om refinansiering og hvordan du kan spare penger på gjelden din.',
}

export default function LanPage() {
  const articles = getArticlesByPillar('lan')

  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Lån</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Lån</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Sammenlign forbrukslån og lær hvordan refinansiering kan spare deg for tusenvis av kroner.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hva er et forbrukslån?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et forbrukslån er et lån uten sikkerhet som du kan bruke til det du vil — 
                ferie, oppussing, bil, eller å betale ned annen gjeld. Fordi banken ikke 
                har sikkerhet i eiendeler, er rentene høyere enn på boliglån.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pengepraten hjelper deg å finne det billigste lånet og forstå hvordan 
                refinansiering kan spare deg penger.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om lån</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              <Link href="/lan/hvor-mye-boliglan-kan-jeg-fa" className="group">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 overflow-hidden">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
                      Lån
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-norsk-dark group-hover:text-primary-600 transition-colors mb-2">
                      Hvor mye boliglån kan jeg få?
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Lær hvor mye boliglån du kan få basert på inntekt, gjeld og egenkapital. Vi forklarer finanstilsynets regler og gir deg en enkel formel.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary-600 font-medium">
                      <span>Les mer</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
              <Link href="/lan/nar-lonner-refinansiering" className="group">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 overflow-hidden">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
                      Lån
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-norsk-dark group-hover:text-primary-600 transition-colors mb-2">
                      Når lønner det seg å refinansiere?
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Lær når refinansiering er lønnsomt og når det ikke er det. Vi forklarer regnestykket og viser deg hvor mye du kan spare på å samle gjelden.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary-600 font-medium">
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
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Prøv vår kalkulator</h3>
              <p className="text-sm text-gray-600 mb-4">
                Se nøyaktig hvor mye et lån vil koste deg med vår lånekalkulator.
              </p>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Åpne lånekalkulator
              </Link>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nominell rente</span>
                  <span className="font-medium">7-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effektiv rente</span>
                  <span className="font-medium">8-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Løpetid</span>
                  <span className="font-medium">1-15 år</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lånebeløp</span>
                  <span className="font-medium">10.000 - 500.000 kr</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

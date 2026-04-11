import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import MortgageWidgetCTA from '@/components/MortgageWidgetCTA'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forbrukslån — Sammenlign og finn det billigste lånet 2026',
  description: 'Finn det billigste forbrukslånet i Norge. Sammenlign renter, gebyrer og betingelser. Lær om refinansiering og hvordan du kan spare penger på gjelden din.',
}

export default function LanPage() {
  const articles = getArticlesByPillar('lan')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Forbrukslån</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Forbrukslån</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Sammenlign forbrukslån og lær hvordan du kan spare tusenvis av kroner med riktig lånevalg — eller gjennom refinansiering.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hva er et forbrukslån?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et forbrukslån er et lån uten sikkerhet som du kan bruke til det du vil — 
                ferie, oppussing, bil, eller å betale ned dyr gjeld. Fordi banken ikke 
                har sikkerhet i eiendeler, er rentene høyere enn på boliglån.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pengepraten hjelper deg å finne det billigste lånet og forstå hvordan 
                refinansiering kan spare deg penger.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om forbrukslån</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {/* Mortgage CTA */}
            <div className="mt-10">
              <MortgageWidgetCTA variant="inline" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Prøv vår kalkulator</h3>
              <p className="text-sm text-gray-600 mb-4">
                Se nøyaktig hvor mye et forbrukslån vil koste deg — med alle renter og gebyrer.
              </p>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Forbrukslånskalkulator
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

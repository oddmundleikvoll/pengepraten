import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import MortgageWidgetCTA from '@/components/MortgageWidgetCTA'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boliglån — Alt du trenger å vite om boligfinansiering 2026',
  description: 'Lær alt om boliglån i Norge. Sammenlign boliglånsrenter, forstå forskjellen mellom boliglån og forbrukslån, og finn ut hvor mye boliglån du kan få.',
}

export default function BoliglanPage() {
  const articles = getArticlesByPillar('lan')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-primary-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Boliglån</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Boliglån</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Boliglån er markedets billigste lån — men hva er forskjellen på nominell og effektiv rente? Og hvor mye kan du låne? Vi forklarer alt du trenger.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Boliglån vs. forbrukslån</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et boliglån er et lån der banken har pant i boligen din som sikkerhet. 
                Det betyr lavere rente — typisk 3-6% nominelt — fordi banken kan tvangsselge 
                eiendommen hvis du ikke betaler.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et <Link href="/lan" className="text-primary-600 hover:underline font-medium">forbrukslån</Link> derimot, 
                har ingen sikkerhet. Rentene er derfor høyere — gjerne 7-20% — fordi banken 
                tar større risiko.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Konsekvensen:</strong> Med samme lånebeløp kan du spare titusenvis av 
                  kroner i rentekostnader ved å velge boliglån fremfor forbrukslån. Et boliglån 
                  på 2 millioner kroner med 5% rente over 20 år koster dramatisk mindre enn 
                  tilsvarende forbrukslån.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hvordan få boliglån?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For å få boliglån må du som hovedregel ha minst 15% egenkapital. 
                Det betyr at hvis du skal kjøpe en bolig til 3 millioner, må du ha 
                minst 450.000 kroner egenkapital (plus omkostninger).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bankene vurderer inntekt, gjeld og kredittscore. Flere banker konkurrerer 
                om boliglånskundene — det lønner seg å sammenligne tilbud fra flere banker.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Rentene på boliglån</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Boliglånsrenten består av en nominell rente + gebyrer = effektiv rente. 
                Den nominelle renten er det banken oppgir først, men den effektive renten 
                inkluderer alle kostnader og gir et mer realistisk bilde.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Per 2026 ligger boliglånsrentene typisk på 3-6% nominelt. Bankene har 
                konkurranse, så det kan lønne seg å forhandle — spesielt hvis du har 
                god inntekt og lav gjeld.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om lån</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.slice(0, 4).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Prøv vår kalkulator</h3>
              <p className="text-sm text-gray-600 mb-4">
                Beregn hvor mye boliglån du kan få og hva det vil koste deg per måned.
              </p>
              <Link
                href="/verktøy/boliglånskalkulator"
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Boliglånskalkulator
              </Link>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nominell rente</span>
                  <span className="font-medium">3-6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effektiv rente</span>
                  <span className="font-medium">3,5-7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Løpetid</span>
                  <span className="font-medium">10-30 år</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lånebeløp</span>
                  <span className="font-medium">Opptil 85% av boligverdi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sikkerhet</span>
                  <span className="font-medium">Pant i bolig</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Egenkapital</span>
                  <span className="font-medium">Minst 15%</span>
                </div>
              </div>
            </div>

            <MortgageWidgetCTA />

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Les også</h3>
              <Link
                href="/lan/hvor-mye-boliglan-kan-jeg-fa"
                className="text-sm text-primary-600 hover:underline font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Hvor mye boliglån kan jeg få?
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

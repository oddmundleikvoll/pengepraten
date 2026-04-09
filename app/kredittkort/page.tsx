import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { getArticlesByPillar } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kredittkort — Sammenlign beste kort i Norge 2026',
  description: 'Sammenligning av alle populære kredittkort i Norge. Finn kortet med best cashback, reiseforsikring og lavest rente. Oppdatert for 2026.',
}

export default function KredittkortPage() {
  const articles = getArticlesByPillar('kredittkort')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-accent-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Kredittkort</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Kredittkort</h1>
          <p className="text-xl text-accent-100 max-w-2xl">
            Sammenlign de beste kredittkortene i Norge. Finn kortet som passer din økonomi — 
            med eller uten årsavgift.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-norsk-dark mb-4">Hva er et kredittkort?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Et kredittkort gir deg mulighet til å handle nå og betale senere. 
                De fleste kredittkort i Norge gir deg inntil 45 dager rentefri periode, 
                samt fordeler som cashback, reiseforsikring og kjøpsforsikring.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pengepraten hjelper deg å finne det beste kredittkortet for dine behov. 
                Vi sammenligner alle de populære kortene og forklarer hva du bør se etter.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-norsk-dark mb-6">Artikler om kredittkort</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
              <Link href="/kredittkort/beste-kredittkort-norge-2026" className="group">
                <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all duration-200 overflow-hidden">
                  <div className="px-5 pt-5 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-50 text-accent-700 rounded-full">
                      Kredittkort
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-norsk-dark group-hover:text-accent-600 transition-colors mb-2">
                      Beste kredittkort for norske forbrukere i 2026
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Vi har testet og sammenlignet de beste kredittkortene i Norge. Se hvilket kort som passer deg best — med cashback, reiseforsikring og uten årsavgift.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-accent-600 font-medium">
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

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Populære kredittkort</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Bank Norwegian kredittkort',
                  'Komplett Bank Mastercard',
                  'SAS EuroBonus Premium',
                  'Trumf Visa',
                ].map((card) => (
                  <li key={card} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {card}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent-50 rounded-xl p-6">
              <h3 className="font-bold text-norsk-dark mb-4">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Rentefri periode</span>
                  <span className="font-medium">Opptil 45 dager</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Årsavgift</span>
                  <span className="font-medium">0-2.000 kr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nominell rente</span>
                  <span className="font-medium">15-25%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

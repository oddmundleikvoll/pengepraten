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
            <span className="text-stone-300">Kredittkort</span>
          </nav>
          <h1 className="font-display text-display mb-4 text-balance">Kredittkort</h1>
          <p className="text-lg text-stone-400 max-w-xl leading-relaxed text-balance">
            Sammenlign de beste kredittkortene i Norge. Finn kortet som passer din økonomi —
            med eller uten årsavgift.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-stone-200/60 p-8 mb-10 shadow-soft">
              <h2 className="font-display text-display-sm mb-5 text-balance">Hva er et kredittkort?</h2>
              <p className="text-stone-600 leading-[1.75] mb-5 text-[17px]">
                Et kredittkort gir deg mulighet til å handle nå og betale senere.
                De fleste kredittkort i Norge gir deg inntil 45 dager rentefri periode,
                samt fordeler som cashback, reiseforsikring og kjøpsforsikring.
              </p>
              <p className="text-stone-600 leading-[1.75] text-[17px]">
                Pengepraten hjelper deg å finne det beste kredittkortet for dine behov.
                Vi sammenligner alle de populære kortene og forklarer hva du bør se etter.
              </p>
            </div>

            <h2 className="font-display text-display-sm mb-6 text-balance">Artikler om kredittkort</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Populære kredittkort</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Bank Norwegian kredittkort',
                  'Komplett Bank Mastercard',
                  'SAS EuroBonus Premium',
                  'Trumf Visa',
                ].map((card) => (
                  <li key={card} className="flex items-center gap-2.5 text-stone-600">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0" />
                    {card}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-soft">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Rentefri periode</span>
                  <span className="font-medium text-stone-900">Opptil 45 dager</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Årsavgift</span>
                  <span className="font-medium text-stone-900">0-2.000 kr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Nominell rente</span>
                  <span className="font-medium text-stone-900">15-25%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

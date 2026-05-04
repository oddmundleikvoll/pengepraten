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
            <span className="text-stone-300">Lån</span>
          </nav>
          <h1 className="font-display text-display mb-4 text-balance">Lån</h1>
          <p className="text-lg text-stone-400 max-w-xl leading-relaxed text-balance">
            Sammenlign forbrukslån og lær hvordan refinansiering kan spare deg for tusenvis av kroner.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-stone-200/60 p-8 mb-10 shadow-soft">
              <h2 className="font-display text-display-sm mb-5 text-balance">Hva er et forbrukslån?</h2>
              <p className="text-stone-600 leading-[1.75] mb-5 text-[17px]">
                Et forbrukslån er et lån uten sikkerhet som du kan bruke til det du vil —
                ferie, oppussing, bil, eller å betale ned annen gjeld. Fordi banken ikke
                har sikkerhet i eiendeler, er rentene høyere enn på boliglån.
              </p>
              <p className="text-stone-600 leading-[1.75] text-[17px]">
                Pengepraten hjelper deg å finne det billigste lånet og forstå hvordan
                refinansiering kan spare deg penger.
              </p>
            </div>

            <h2 className="font-display text-display-sm mb-6 text-balance">Artikler om lån</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Prøv vår kalkulator</h3>
              <p className="text-sm text-stone-500 mb-5 leading-relaxed">
                Se nøyaktig hvor mye et lån vil koste deg med vår lånekalkulator.
              </p>
              <Link
                href="/verktøy/lånekalkulator"
                className="inline-flex items-center gap-2 bg-teal-800 text-white font-medium py-2.5 px-5 rounded-xl hover:bg-teal-900 transition-colors shadow-soft btn-press text-sm focus-ring"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Åpne lånekalkulator
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-soft">
              <h3 className="font-semibold text-stone-900 mb-4 text-sm tracking-tight">Rask fakta</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Nominell rente</span>
                  <span className="font-medium text-stone-900">7-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Effektiv rente</span>
                  <span className="font-medium text-stone-900">8-25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Løpetid</span>
                  <span className="font-medium text-stone-900">1-15 år</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Lånebeløp</span>
                  <span className="font-medium text-stone-900">10.000 - 500.000 kr</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

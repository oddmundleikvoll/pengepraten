import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Artikler om personlig økonomi',
  description: 'Se de nyeste guidene og analysene fra Pengepraten om sparing, budsjett, lån, bank, bolig og kredittkort.',
}

const categoryOrder = ['Sparing', 'Budsjett', 'Boliglån', 'Bank', 'Kredittkort', 'Lån']

export default function ArtiklerPage() {
  const publishedArticles = articles
    .filter(article => article.slug !== '/kredittkort/beste-kredittkort-norge-2026')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <section className="bg-paper border-b border-border py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest">Hjem</Link>
            <span className="mx-2">/</span>
            <span>Artikler</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">Artikler og guider</h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            Praktiske forklaringer, oppdaterte sammenligninger og konkrete grep for en bedre privatøkonomi.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10" aria-label="Artikkelkategorier">
          {categoryOrder.map(category => (
            <a key={category} href={`#${category.toLowerCase()}`} className="px-4 py-2 rounded-full border border-border bg-paper-surface text-sm font-semibold text-ink hover:border-forest hover:text-forest">
              {category}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {categoryOrder.map(category => {
            const categoryArticles = publishedArticles.filter(article => article.category === category)
            if (!categoryArticles.length) return null
            return (
              <section key={category} id={category.toLowerCase()} className="scroll-mt-24">
                <div className="flex items-end justify-between gap-4 mb-6">
                  <h2 className="font-display text-3xl font-medium text-ink">{category}</h2>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">{categoryArticles.length} guider</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.map(article => <ArticleCard key={article.slug} article={article} />)}
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </>
  )
}

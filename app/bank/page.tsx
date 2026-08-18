import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Bank — sammenlign banker og få bedre vilkår',
  description: 'Guider til bankbytte, gebyrer, sparekonto og valg av bank i Norge.',
}

export default function BankPage() {
  const bankArticles = articles.filter(article => article.category === 'Bank')

  return (
    <>
      <section className="bg-paper border-b border-border py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-6">
            <Link href="/" className="hover:text-forest">Hjem</Link>
            <span className="mx-2">/</span><span>Bank</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">Bank</h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            Sammenlign vilkår, se hva bankene faktisk koster og finn ut når det lønner seg å bytte.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankArticles.map(article => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </>
  )
}

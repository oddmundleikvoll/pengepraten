import Link from 'next/link'
import { Article } from '@/lib/types'
import { Wrench, ArrowRight, FileText } from 'lucide-react'

interface RelatedContentProps {
  tools?: { title: string; href: string; description: string }[]
  articles?: Article[]
}

export default function RelatedContent({ tools, articles }: RelatedContentProps) {
  if ((!tools || tools.length === 0) && (!articles || articles.length === 0)) {
    return null
  }

  return (
    <section className="space-y-8">
      {/* Related Tools */}
      {tools && tools.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-forest" />
            Relaterte verktøy
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block bg-paper-surface rounded-xl border border-border p-5 hover:shadow-md hover:border-forest/30 transition-all"
              >
                <h4 className="font-semibold text-ink group-hover:text-forest transition-colors mb-1">
                  {tool.title}
                </h4>
                <p className="text-sm text-ink-muted">{tool.description}</p>
                <div className="mt-3 flex items-center text-sm text-forest font-medium">
                  <span>Prøv verktøyet</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles */}
      {articles && articles.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-forest" />
            Relaterte artikler
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group block bg-paper-surface rounded-xl border border-border p-5 hover:shadow-md hover:border-forest/30 transition-all"
              >
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-forest-soft text-forest rounded-full mb-2">
                  {article.category}
                </span>
                <h4 className="font-semibold text-ink group-hover:text-forest transition-colors mb-1">
                  {article.title}
                </h4>
                <p className="text-sm text-ink-muted line-clamp-2">{article.excerpt}</p>
                <div className="mt-3 flex items-center text-sm text-forest font-medium">
                  <span>Les mer</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

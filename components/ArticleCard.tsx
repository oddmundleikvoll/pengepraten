import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
}

/**
 * Nordic Clarity article card.
 *
 * Surface (white), 12px radius, subtle shadow. On hover: 4px lift with
 * deeper shadow. Tag in editorial mono style, Fraunces title, DM Sans
 * excerpt, mono "Les mer" link with arrow.
 */
export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={article.slug} className="group block">
      <article
        className="h-full flex flex-col rounded-card overflow-hidden transition-all duration-200 ease-editorial group-hover:-translate-y-1"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}
      >
        {/* Category tag */}
        <div className="px-6 pt-6 pb-0">
          <span
            className="inline-block px-2.5 py-1 rounded font-mono text-[11px] uppercase tracking-[0.10em] font-medium"
            style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
            }}
          >
            {article.category}
          </span>
        </div>

        <div className="px-6 py-5 flex-1 flex flex-col">
          {/* Date stamp */}
          {article.date && (
            <div
              className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3"
              style={{ color: 'var(--fg-muted)' }}
            >
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('nb-NO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {article.readTime && (
                <>
                  <span style={{ opacity: 0.5 }}> · </span>
                  <span>{article.readTime} lesing</span>
                </>
              )}
            </div>
          )}

          <h3
            className="font-display text-[22px] leading-[1.18] mb-3"
            style={{ color: 'var(--fg)', letterSpacing: '-0.005em' }}
          >
            {article.title}
          </h3>
          <p
            className="text-[15px] leading-[1.6] flex-1"
            style={{ color: 'var(--fg-muted)' }}
          >
            {article.excerpt}
          </p>

          <div
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            <span>Les mer</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
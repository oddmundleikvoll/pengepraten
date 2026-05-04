import Link from 'next/link'
import { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={article.slug} className="group block focus-ring rounded-2xl">
      <article className="bg-white rounded-2xl border border-stone-200/60 shadow-soft hover:shadow-soft-lg hover:border-teal-200/60 transition-all duration-300 overflow-hidden card-hover">
        {/* Category tag */}
        <div className="px-5 pt-5 pb-0">
          <span className="inline-block px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-md tracking-tight">
            {article.category}
          </span>
        </div>

        <div className="p-5 pt-4">
          <h3 className="font-semibold text-stone-900 group-hover:text-teal-800 transition-colors mb-2 line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <p className="text-sm text-stone-500 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center text-sm text-teal-700 font-medium">
            <span>Les mer</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

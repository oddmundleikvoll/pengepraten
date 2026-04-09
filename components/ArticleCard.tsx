import Link from 'next/link'
import { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={article.slug} className="group block">
      <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 overflow-hidden">
        {/* Category tag */}
        <div className="px-5 pt-5 pb-0">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
            {article.category}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-norsk-dark group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center text-sm text-primary-600 font-medium">
            <span>Les mer</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

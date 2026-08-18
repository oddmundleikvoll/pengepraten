import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

const baseUrl = 'https://pengepraten.no'

const coreRoutes = [
  '/',
  '/artikler',
  '/kredittkort',
  '/lan',
  '/boliglan',
  '/sparing',
  '/spareutfordring',
  '/budsjett',
  '/bank',
  '/verktoy',
  '/verktoy/boliglanskalkulator',
  '/verktoy/lanekalkulator',
  '/verktoy/sparekalkulator',
  '/min-boliglan',
  '/boliglan/boliglan-rente-2026',
  '/sparing/hoyrentekonto-sammenligning',
  '/om-oss',
  '/kontakt',
  '/personvern',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const articleDates = new Map(articles.map(article => [article.slug, article.date]))
  const routes = Array.from(new Set([
    ...coreRoutes,
    ...articles
      .map(article => article.slug)
      .filter(slug => slug !== '/kredittkort/beste-kredittkort-norge-2026'),
  ]))

  return routes.map(route => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: articleDates.get(route)
      ? new Date(`${articleDates.get(route)}T12:00:00+02:00`)
      : new Date('2026-08-18T12:00:00+02:00'),
    changeFrequency: route === '/' || route === '/artikler' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('/verktoy') || route === '/spareutfordring' ? 0.9 : 0.7,
  }))
}

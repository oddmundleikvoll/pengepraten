export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content?: string
  pillar?: string
  relatedTools?: { title: string; href: string; description: string }[]
  relatedArticles?: string[]
}

export interface Tool {
  slug: string
  title: string
  description: string
  href: string
}

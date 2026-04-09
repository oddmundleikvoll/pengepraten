export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content?: string
  pillar?: string
}

export interface Tool {
  slug: string
  title: string
  description: string
  href: string
}

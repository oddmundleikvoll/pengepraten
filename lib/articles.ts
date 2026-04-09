import { Article } from './types'

export const articles: Article[] = [
  {
    slug: '/kredittkort/beste-kredittkort-2026',
    title: 'Beste kredittkort i Norge 2026 — vår komplette guide',
    excerpt: 'Vi har testet og sammenlignet alle de mest populære kredittkortene i Norge. Oppdag hvilket kort som passer best for deg, med cashback, reiseforsikring og null årsavgift.',
    category: 'Kredittkort',
    date: '2026-01-15',
    readTime: '8 min',
    pillar: 'kredittkort',
  },
  {
    slug: '/kredittkort/kredittkort-uten-arsavgift',
    title: 'Kredittkort uten årsavgift — er det like bra som det høres ut?',
    excerpt: 'Mange tror kredittkort uten årsavgift er for godt til å være sant. Vi forklarer hva du faktisk får, og hvilke fallgruber du bør unngå.',
    category: 'Kredittkort',
    date: '2026-01-20',
    readTime: '6 min',
    pillar: 'kredittkort',
  },
  {
    slug: '/lan/beste-forbrukslan-2026',
    title: 'Beste forbrukslån 2026 — slik finner du det billigste lånet',
    excerpt: 'Forbrukslån kan koste deg tusenvis av kroner mer avhengig av hvem du låner fra. Vi viser deg hvordan du sikrer deg den beste renten.',
    category: 'Lån',
    date: '2026-02-01',
    readTime: '10 min',
    pillar: 'lan',
  },
  {
    slug: '/lan/refinansiering-spar-paa-gjelden',
    title: 'Refinansiering: Slik sparer du tusenvis på gjelden din',
    excerpt: 'Med dagens rentebetingelser kan refinansiering av eksisterende gjeld gi deg lavere månedlige kostnader. Her er alt du trenger å vite.',
    category: 'Lån',
    date: '2026-02-10',
    readTime: '7 min',
    pillar: 'lan',
  },
  {
    slug: '/sparing/beste-sparekonto-2026',
    title: 'Beste sparekonto i Norge 2026 — de beste rentene nå',
    excerpt: 'Med inflasjonen som spiser av sparepengene dine, er det viktigere enn noensinne å plassere pengene der de faktisk vokser. Her er vår oppdaterte oversikt.',
    category: 'Sparing',
    date: '2026-03-01',
    readTime: '5 min',
    pillar: 'sparing',
  },
]

export const latestArticles = articles.slice(0, 4)

export function getArticlesByPillar(pillar: string): Article[] {
  return articles.filter(a => a.pillar === pillar)
}

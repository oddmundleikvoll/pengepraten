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
    slug: '/kredittkort/beste-kredittkort-norge-2026',
    title: 'Beste kredittkort for norske forbrukere i 2026 — komplett guide',
    excerpt: 'Vi har testet og sammenlignet de beste kredittkortene i Norge. Se hvilket kort som passer deg best — med cashback, reiseforsikring og uten årsavgift.',
    category: 'Kredittkort',
    date: '2026-04-09',
    readTime: '12 min',
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
    slug: '/lan/hvor-mye-boliglan-kan-jeg-fa',
    title: 'Hvor mye boliglån kan jeg få? Sånn regner du ut det i 2026',
    excerpt: 'Lær hvor mye boliglån du kan få basert på inntekt, gjeld og egenkapital. Vi forklarer finanstilsynets regler og gir deg en enkel formel for å regne ut ditt maksimale lånebeløp.',
    category: 'Lån',
    date: '2026-04-09',
    readTime: '10 min',
    pillar: 'lan',
  },
  {
    slug: '/lan/nar-lonner-refinansiering',
    title: 'Når lønner det seg å refinansiere? Komplett guide 2026',
    excerpt: 'Lær når refinansiering er lønnsomt og når det ikke er det. Vi forklarer regnestykket og viser deg hvor mye du kan spare på å samle gjelden.',
    category: 'Lån',
    date: '2026-04-09',
    readTime: '11 min',
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
  {
    slug: '/sparing/spareplan-guide',
    title: 'Slik setter du opp en spareplan som faktisk fungerer i 2026',
    excerpt: 'Lær hvordan du bygger en spareplan som holder seg over tid. Vi guider deg gjennom målsetting, automatisk sparing og de beste sparekontoene.',
    category: 'Sparing',
    date: '2026-04-09',
    readTime: '12 min',
    pillar: 'sparing',
  },
  {
    slug: '/budsjett/kom-i-gang-med-budsjett',
    title: 'Kom i gang med budsjett: En komplett guide for nordmenn 2026',
    excerpt: 'Lær hvordan du lager et budsjett som fungerer. Vi guider deg gjennom 50/30/20-regelen, faste vs variable utgifter, og gir deg en gratis mal å starte med.',
    category: 'Budsjett',
    date: '2026-04-09',
    readTime: '13 min',
    pillar: 'budsjett',
  },
]

export const latestArticles = articles.slice(0, 4)

export function getArticlesByPillar(pillar: string): Article[] {
  return articles.filter(a => a.pillar === pillar)
}

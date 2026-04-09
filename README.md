# Pengepraten.no

Norges beste nettside for personlig økonomi. Bygget med Next.js 14, Tailwind CSS og TypeScript.

## 🚀 Kom i gang

### Forutsetninger
- Node.js 18+
- npm eller yarn

### Installasjon

```bash
# Installer avhengigheter
npm install

# Kjør utviklingsserver
npm run dev

# Bygg for produksjon
npm run build
```

## 📁 Prosjektstruktur

```
app/
├── page.tsx                    # Hjemmeside
├── layout.tsx                  # Root layout med metadata
├── globals.css                 # Globale stiler
├── kredittkort/                # Kredittkort-seksjon
│   ├── page.tsx
│   ├── beste-kredittkort-2026/
│   └── kredittkort-uten-arsavgift/
├── lan/                        # Lån-seksjon
│   ├── page.tsx
│   ├── beste-forbrukslan-2026/
│   └── refinansiering-spar-paa-gjelden/
├── sparing/                    # Sparing-seksjon
│   ├── page.tsx
│   └── beste-sparekonto-2026/
├── budsjett/                   # Budsjett-seksjon
├── verktøy/                    # Verktøy
│   ├── page.tsx
│   └── lånekalkulator/
├── om-oss/                     # Om oss
├── kontakt/                    # Kontakt
└── personvern/                 # Personvern

components/
├── Header.tsx                  # Navigasjon
├── Footer.tsx                  # Footer
├── ArticleCard.tsx             # Artikkelkort
├── LeadMagnet.tsx              # E-post påmelding
└── ...

lib/
├── types.ts                    # TypeScript typer
└── articles.ts                 # Artikkeldatabase

public/
├── robots.txt
└── sitemap.xml
```

## 📝 Innholdsredigering (for Clio/Walt)

### Legge til nye artikler

1. **Opprett en ny mappe** under riktig seksjon (f.eks. `app/kredittkort/min-nye-artikkel/`)

2. **Lag page.tsx** med følgende mal:

```tsx
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Din artikkeltittel | Pengepraten',
  description: 'Beskrivelse som vises i Google (maks 160 tegn)',
}

export default function MinArtikkel() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-accent-200 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/kredittkort" className="hover:text-white">Kredittkort</Link>
            <span className="mx-2">/</span>
            <span>Din artikkel</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Din artikkeltittel
          </h1>
          <p className="text-accent-100 text-lg">
            Undertittel/beskrivelse
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 article-content">
        {/* Artikkelinnhold her */}
        <h2>Overskrift nivå 2</h2>
        <p>Avsnitt med tekst...</p>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
        </ul>
      </article>
    </>
  )
}
```

3. **Legg til i artikkeldatabasen** (`lib/articles.ts`):

```typescript
{
  slug: '/kredittkort/min-nye-artikkel',
  title: 'Din artikkeltittel',
  excerpt: 'Kort beskrivelse som vises i kortene',
  category: 'Kredittkort',
  date: '2026-04-09',
  readTime: '5 min',
  pillar: 'kredittkort',
}
```

4. **Oppdater sitemap.xml** med ny URL

### Farger for ulike seksjoner

- **Kredittkort**: `accent-600` (blå)
- **Lån**: `primary-600` (grønn)
- **Sparing**: `green-600` (grønn)
- **Budsjett**: `amber-500` (oransje)

### SEO-sjekkliste

- [ ] Unik tittel (60-70 tegn)
- [ ] Beskrivelse (150-160 tegn)
- [ ] H1 med hovednøkkelord
- [ ] H2 for underseksjoner
- [ ] Interne lenker til relaterte artikler
- [ ] Oppdatert sitemap.xml

## 🎨 Design

### Tailwind-farger

- **Primærfarge**: `primary-500` til `primary-700` (grønn)
- **Aksentfarge**: `accent-500` til `accent-700` (blå)
- **Mørk tekst**: `norsk-dark` (#1a1a2e)
- **Grå tekst**: `gray-600`

### Komponenter

- **Header**: Sticky navigasjon
- **Footer**: Fire-kolonne layout
- **ArticleCard**: Artikkelkort med kategori-tag
- **LeadMagnet**: E-post påmelding med gradient

## 🛠️ Teknisk

### Byggekommandoer

```bash
npm run dev      # Utvikling
npm run build    # Produksjonsbygg
npm run start    # Start produksjonsserver
```

### Deploy

Nettsiden deployes automatisk til Vercel ved push til main-branch.

## 📧 Kontakt

For spørsmål om teknisk oppsett, kontakt Neo.
For innholdsspørsmål, kontakt Clio.

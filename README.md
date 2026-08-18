# Pengepraten.no

Norsk nettsted for personlig økonomi, bygget med Next.js 16, TypeScript og Tailwind CSS. Siden kombinerer redaksjonelle guider, kalkulatorer, 52-ukers spareutfordring og e-postpåmeldinger.

Produksjon: [pengepraten.no](https://pengepraten.no)<br>
Kode: [github.com/oddmundleikvoll/pengepraten](https://github.com/oddmundleikvoll/pengepraten)

## Kom i gang

Bruk Node.js 20.9 eller nyere og npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Åpne `http://localhost:3000`. Hemmeligheter skal bare ligge i `.env.local` lokalt og i Vercel; de skal aldri committes.

## Nyttige kommandoer

```bash
npm run dev       # lokal utviklingsserver
npm run lint      # Next.js/ESLint-kontroll
npm run build     # produksjonsbygg og TypeScript-kontroll
npm run start     # kjør siste produksjonsbygg lokalt
```

Prosjektet har foreløpig ingen separat automatisert testpakke. `lint` og `build`, etterfulgt av manuell nettleserkontroll av endrede flyter, er minimum før deploy.

## Hvordan prosjektet henger sammen

```text
app/                  Sider, metadata, sitemap og API-ruter
components/           Delte React-komponenter og interaktive klientflyter
lib/articles.ts       Register for artikkelkort, relasjoner og sitemap
lib/                  Analyse, ikoner og lokal state for verktøy
emails/               HTML-mal for budsjett-e-post
public/               Bilder, favicon, robots.txt og nedlastbare filer
docs/                 Aktiv vedlikeholds- og driftsdokumentasjon
RESEARCH/             Daterte research-notater; ikke teknisk fasit
CONTENT/              Produksjonsmateriell for innhold og sosiale flater
PRODUCTS/             Produktfiler og kompatibilitetsnotater
```

Nye offentlige URL-er bruker bare ASCII, for eksempel `/verktoy/boliglanskalkulator`. Eldre URL-er med `ø` og `å` har permanente redirects i `next.config.js`.

## Vanlige oppgaver

- Legge til eller oppdatere en artikkel: [docs/CONTENT_MAINTENANCE.md](docs/CONTENT_MAINTENANCE.md)
- Forstå sider, dataflyt, SEO, e-post og analyse: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Deploy, produksjonsgren og rollback: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- Se hva som faktisk er implementert nå: [STATUS.md](STATUS.md)
- Finne aktiv og historisk dokumentasjon: [docs/README.md](docs/README.md)

## Deploy i korte trekk

Vercel-prosjektet `pengepraten` deployer `main` til produksjon. Andre grener får preview-deployer. Se [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) før du publiserer eller ruller tilbake.

## Vedlikeholdsprinsipper

- `main` er eneste produksjonsgren og skal alltid kunne bygges.
- `lib/articles.ts` er artikkelregisteret; en ny artikkelside skal registreres der.
- `app/sitemap.ts` genererer sitemap. Ikke opprett en manuell `public/sitemap.xml`.
- Bruk primærkilder og oppgi kontrollert dato på rente-, pris- og regelverksinnhold.
- Oppdater dokumentasjonen i samme commit som en endring som påvirker arkitektur, miljøvariabler eller deploy.

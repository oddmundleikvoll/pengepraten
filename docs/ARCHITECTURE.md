# Teknisk arkitektur

**Sist gjennomgått:** 18. august 2026

## Plattform

- Next.js 16 med App Router, React 19 og TypeScript
- Tailwind CSS for styling
- Vercel for bygg, serverfunksjoner og produksjon
- Ingen database eller CMS

Sider og artikler ligger som TSX i `app/`. De fleste sider bygges statisk. API-rutene i `app/api/` kjører på serveren når de blir kalt.

## Ansvar per område

| Område | Kilde | Ansvar |
|---|---|---|
| Globale metadata og analyse-script | `app/layout.tsx` | Metadata-base, tittelmal, Open Graph, favicon og GA4 |
| Navigasjon og felles layout | `components/Header.tsx`, `components/Footer.tsx` | Menyer, innganger og footer |
| Artikler | `app/**/page.tsx` | Selve innholdet og sidespesifikk metadata/schema |
| Artikkelregister | `lib/articles.ts` | Kort, sortering, relaterte artikler og sitemap |
| Sitemap | `app/sitemap.ts` | Genererer `/sitemap.xml` fra kjerneruter og artikkelregister |
| Canonical | `proxy.ts` | Selv-refererende HTTP `Link`-header på offentlige HTML-sider |
| Redirects | `next.config.js` | Permanente flyttinger, inkludert URL-er med norske tegn |
| E-post | `app/api/subscribe`, `app/api/unsubscribe` | Resend-kontakter, velkomstmelding og avmelding |
| Nedlastinger | `app/api/download`, `app/api/challenge-plan` | Budsjettfil og utskriftsvennlig ukeplan |
| Analyse | `components/AnalyticsEvents.tsx`, `lib/analytics.ts` | Samtykke og egne GA4-hendelser |
| Lokal brukerstate | `lib/mortgageStore.ts`, `lib/spareutfordringStore.ts` | Lagring i brukerens nettleser |

## Innholdsmodell

`lib/articles.ts` er et manuelt register, ikke et CMS. En artikkel består derfor av to deler:

1. En offentlig rute med innhold, metadata og eventuelt strukturert data.
2. En post i `articles` med slug, tittel, ingress, kategori, dato, lesetid og relasjoner.

Forsiden, artikkelarkivet og sitemap bruker registeret. En artikkel som bare finnes som `page.tsx`, blir ikke automatisk synlig i disse flatene.

## SEO og URL-er

- Rotlayouten setter `metadataBase`, men ikke én global canonical.
- Next.js-proxyen setter canonical til den faktiske stien, uten query-parametere.
- Sidespesifikke `metadata`-objekter skal ha unik tittel og beskrivelse. Tittelmalen legger til `| Pengepraten`.
- `app/sitemap.ts` er eneste sitemap-kilde.
- Nye URL-er skal være små bokstaver, ASCII og bindestrekseparerte.
- En flyttet offentlig URL skal få permanent redirect i `next.config.js`, og alle interne lenker skal oppdateres.

## E-postflyt

`POST /api/subscribe` godtar `email` og en av følgende `kind`-verdier:

| `kind` | Formål | Audience-variabel |
|---|---|---|
| `budget` | Gratis budsjettmal | `RESEND_AUDIENCE_ID_PENGEPRATEN` |
| `rates` | Renteoppdateringer | `RESEND_AUDIENCE_ID_RATE_ALERTS` |
| `challenge` | 52-ukers ukeplan | `RESEND_AUDIENCE_ID_CHALLENGE` |

Separate audience-ID-er er valgfrie; `rates` og `challenge` faller tilbake til hovedlisten. Velkomstmeldinger får signert avmeldingslenke. `GET /api/unsubscribe` validerer lenken og melder kontakten av alle konfigurerte lister. `POST /api/unsubscribe` sender en bekreftelseslenke til den oppgitte adressen.

Se `.env.example` for full variabelliste. API-nøkler skal aldri brukes i klientkomponenter.

## Analyse og personvern

GA4 lastes med analyse- og annonselagring avslått. Brukerens valg lagres lokalt under `pengepraten_analytics_consent`. Etter samtykke spores blant annet verktøystart, nedlastinger, påmeldinger, spareutfordring og utgående lenker.

Nye interaksjoner kan spores med `trackEvent(...)` eller attributtene `data-analytics-event` og `data-analytics-label`. Ikke send e-post, lånebeløp eller annen personidentifiserbar informasjon til analyse.

## Bevisste begrensninger

- Økonomiske satser og artikkeldata oppdateres manuelt.
- Boliglånswidget og spareutfordring bruker lokal nettleserlagring; data synkroniseres ikke mellom enheter.
- E-postflyten bruker Resend direkte og har ingen lokal kopi av abonnentdata.
- Det finnes ingen egen testpakke utover ESLint, produksjonsbygg og manuell flytkontroll.

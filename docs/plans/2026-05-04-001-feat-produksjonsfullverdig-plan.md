---
title: Pengepraten.no — Produksjonsfullverdig omstrukturering
type: feat
status: active
date: 2026-05-04
completed: 2026-05-05
---

# Pengepraten.no — Fra MVP til produksjonsfullverdig

## Status: DELVIS FULLFØRT (U1–U4 ✅, U5–U7 gjenstår)

**Sist oppdatert:** 2026-05-05
**Deployed:** https://pengepraten.no ✅

---

## Oppsummering av gjennomført arbeid

### ✅ U1: Emoji-sanering UI-komponenter (FERDIG)
- `app/page.tsx` — Kategori-kort: emojis → lucide-react ikoner
- `components/Header.tsx` — 🎯 fjernet fra dropdown
- `app/verktøy/page.tsx` — Verktøy-ikoner erstattet
- **0 emojis** gjenstår i UI

### ✅ U2: Emoji-sanering artikkelsider (FERDIG)
- `app/sparing/hoyrentekonto/page.tsx` — 22 emojis fjernet
- `app/sparing/ips-individuell-pensjonssparing/page.tsx` — 7 emojis fjernet
- `app/sparing/bsu-guide/page.tsx` — 12 emojis fjernet
- `app/sparing/indeksfond-nybegynnere/page.tsx` — 10 emojis fjernet
- `app/budsjett/budsjett-app/page.tsx` — 5 emojis fjernet
- `app/kredittkort/cashback-kredittkort/page.tsx` — 20 emojis fjernet
- `app/lan/samle-lan-spar-tusenvis/page.tsx` — 13 emojis fjernet
- `app/bank/bytte-bank/page.tsx` — 7 emojis fjernet
- `components/WeekCard.tsx`, `SpareutfordringApp.tsx`, `ProgressTracker.tsx`, `ChallengeDownload.tsx`
- **Totalt: 100+ emojis fjernet fra 35 filer**

### ✅ U3: Ikon-system (FERDIG)
- `lib/icons.ts` — Sentral ikon-mapping for kategorier, verktøy, artikler
- `components/CategoryIcon.tsx` — Gjenbrukbar komponent
- `lucide-react` installert

### ✅ U4: Krysslenking (FERDIG)
- `lib/types.ts` — Utvidet `Article` med `relatedTools` og `relatedArticles`
- `lib/articles.ts` — Lagt til relasjoner for 3 artikler (høyrentekonto, boliglån, budsjett)
- `components/RelatedContent.tsx` — Viser relaterte verktøy + artikler
- Integrert på `app/sparing/hoyrentekonto/page.tsx`

---

## GJENSTÅENDE ARBEID (U5–U7)

### ⏳ U5: Standardisering av kategori-sider
**Status:** Ikke startet

**Hva som må gjøres:**
- Alle 5 kategori-sider (`/kredittkort`, `/sparing`, `/lan`, `/budsjett`, `/bank`) bruker ulike layout-mønstre
- `kredittkort/page.tsx` — har sidebar, bruker `ArticleCard` ✅
- `sparing/page.tsx` — har hardkodede kort, ikke `ArticleCard` ❌
- `lan/page.tsx` — sjekk om den er standardisert
- `budsjett/page.tsx` — sjekk om den er standardisert  
- `bank/page.tsx` — sjekk om den er standardisert

**Løsning:**
1. Lag `components/CategoryLayout.tsx` med: hero → intro → artikkelliste (2-kolonne `ArticleCard`-grid) → sidebar med verktøy/fakta
2. Refaktorer `sparing/page.tsx` (verst)
3. Sjekk og juster `lan`, `budsjett`, `bank`

---

### ⏳ U6: Forside-forbedringer
**Status:** Ikke startet

**Hva som må gjøres:**
- LeadMagnet er god, men kan fremheves mer (spesielt på mobil)
- Legg til verktøy-highlight-seksjon (kalkulatorer er populære i analytics)
- «Siste artikler» — sørg for at de lenker til korrekte kategori-sider
- Eventuelt: Pop-up eller sticky CTA for e-postregistrering

**Data å vurdere:**
- Lead magnet: 0,9% konvertering (1 av 111 visninger)
- Forsiden: 42 av 111 visninger siste 7 dager
- Verktøy-siden: 5 visninger

---

### ⏳ U7: Polish og produksjonsfølelse
**Status:** Ikke startet

**Hva som må gjøres:**
- `globals.css` — sjekk for MVP-hacks, konsistent spacing
- `Footer.tsx` — sjekk profesjonalitet
- `kontakt/page.tsx` — sjekk for eventuelle gjenværende emojis
- `om-oss/page.tsx` — sjekk for eventuelle gjenværende emojis
- Breadcrumbs — sjekk at alle sider har konsistente breadcrumbs
- `EmailCapture` — vurder å legge til på flere sider
- Kontrast/synlighet på CTA-knapper
- Mobilvisning — test at alt er tilgjengelig

---

## Tekniske merknader

- **Bygg:** ✅ `npm run build` går gjennom
- **Deploy:** ✅ Vercel produksjon
- **URL:** https://pengepraten.no
- **Avhengigheter:** `lucide-react` lagt til i package.json

---

## Neste steg (anbefalt prioritet)

1. **U5 først** — Standardiserte kategori-sider gir størst visuell effekt
2. **U6** — Forside-forbedringer for å øke konvertering
3. **U7** — Polish til slutt for å runde av

**Alternativt:** Hopp til U6 først hvis konvertering er viktigst akkurat nå.

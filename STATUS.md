# Pengepraten.no — Prosjektstatus

**Opprettet:** 2026-04-08
**Sist oppdatert:** 2026-05-07
**Mål:** 50.000–100.000 kr/år innen 18 mnd

---

## Statusrapport 2026-05-07

### ✅ Fullført i dag (Norges Bank renteheving)

| Del | Status | Dato |
|-----|--------|------|
| **Renteheving 4,00% → 4,25%** | ✅ Oppdatert | 2026-05-07 |
| Boliglånskalkulator (mai 2026) | ✅ Oppdatert | 2026-05-07 |
| Boliglånsrente-artikkel (9 banker) | ✅ Oppdatert | 2026-05-07 |
| **Ny artikkel: Rentehevingen** | ✅ Live | 2026-05-07 |
| Emoji-sanering + ikon-system | ✅ Bevart | 2026-05-07 |
| Ryddet parallelle repos | ✅ Ferdig | 2026-05-07 |

**Ny artikkel (7. mai):**
- `/artikler/norges-bank-hever-renten-mai-2026` — Hva betyr rentehevingen for deg?

**Oppdaterte renter (mai 2026):**
- Flytende: 4,80–5,40% (ned fra 5,10–5,70%)
- Bundet 3 år: 4,65–5,05% (ned fra 4,95–5,35%)
- Bundet 5 år: 4,50–4,90% (ned fra 4,80–5,20%)

**Teknisk rydding:**
- Arkivert utdatert repo: `walt/pengepraten-UTDATERT-20260507`
- Aktivt repo: `projects/pengepraten` (tidligere `norsk-penger`)
- `main` branch er nå master med alle endringer

---

## Statusrapport 2026-04-15

### ✅ Fullført (siden forrige oppdatering)

| Del | Status | Dato |
|-----|--------|------|
| **52-ukers Spareutfordring** | ✅ Live | 2026-04-13 |
| Min boliglånsrente-widget | ✅ Live | 2026-04-11 |
| Sitemap oppdatert (29 sider) | ✅ | 2026-04-14 |
| 10 nye SEO-artikler | ✅ | 2026-04-09–15 |
| 5 nye SEO-artikler (Walt) | ✅ | 2026-04-15 |
| SSL/www.vurdert | ⚠️ Se under | — |

**Nye artikler (15. april):**
- /sparing/hoyrentekonto — Høyrentekonto 5,2% med rentetabell
- /budsjett/budsjett-app — Beste budsjettapper i Norge
- /sparing/indeksfond-nybegynnere — Indeksfond forklart enkelt
- /bank/bytte-bank — Steg-for-steg bankbytte-guide
- /sparing/ips-individuell-pensjonssparing — IPS med skattefradrag-tabell

**Totalt:** 34 sider (20 artikler + verktøy + spareutfordring + verktøy)

### 📊 Trafikk (per 2026-04-15, 7 dager)

| Metrikk | Verdi |
|--------|-------|
| Sesjoner | 60 |
| Unike brukere | 30 |
| Sidevisninger | 218 |
| Organisk Google | 8 (13%) |

**Topp sider:**
| Side | Sesjoner |
|------|----------|
| / (forside) | 47 |
| /spareutfordring | 10 |
| /verktøy/boliglånskalkulator | 7 |
| /verktøy | 6 |
| /min-boliglån | 4 |

### 📋 Gjenstår

- [ ] **Affiliate:** Søke Adtraction-programmer (Bank Norwegian, Arcadia Finans, Axo Finans)
- [ ] **SSL:** Legge til `www.pengepraten.no` i SAN
- [ ] Flere artikler (mål: 30+ totalt, vi har 20)
- [ ] Flere digitale maler (Gjeldsbrems, Spareplan)
- [ ] Widget fase 2: E-postvarsler + scraping av markedsrenter

---

## Nettstedstruktur (35 sider)

```
FORTSIDE (hero m/ bilde + 3 CTA-knapper)
├── /artikler
│   └── /artikler/norges-bank-hever-renten-mai-2026  ← NY (7. mai)
├── /kredittkort
│   ├── /kredittkort/beste-kredittkort-2026
│   ├── /kredittkort/beste-kredittkort-norge-2026
│   ├── /kredittkort/cashback-kredittkort
│   ├── /kredittkort/kredittkort-uten-arsavgift
│   └── /kredittkort/slik-fungerer-kredittscore-norge
├── /lan (Forbrukslån)
│   ├── /lan/beste-forbrukslan-2026
│   ├── /lan/hvor-mye-boliglan-kan-jeg-fa
│   ├── /lan/nar-lonner-refinansiering
│   ├── /lan/nar-lonner-refinansiering-seg
│   └── /lan/refinansiering-spar-paa-gjelden
├── /boliglan (Boliglån)
│   └── /boliglan/boliglan-rente-2026          ← OPPDATERT (mai 2026)
├── /sparing
│   ├── /sparing/beste-sparekonto-2026
│   ├── /sparing/bsu-guide
│   ├── /sparing/hoyrentekonto
│   ├── /sparing/hoyrentekonto-sammenligning
│   ├── /sparing/hoyrente-vs-aksjesparing       ← NY (5. mai)
│   ├── /sparing/indeksfond-nybegynnere
│   ├── /sparing/ips-individuell-pensjonssparing
│   ├── /sparing/slik-bygger-du-spareseddel
│   └── /sparing/spareplan-guide
├── /spareutfordring
├── /budsjett
│   ├── /budsjett/budsjett-app
│   └── /budsjett/kom-i-gang-med-budsjett
├── /bank
│   └── /bank/bytte-bank
├── /verktøy
│   ├── /verktøy/boliglånskalkulator            ← OPPDATERT (mai 2026)
│   ├── /verktøy/lånekalkulator
│   └── /verktøy/sparekalkulator
├── /min-boliglån (widget)
├── /om-oss
├── /kontakt
└── /personvern
```

---

## Strategi (oppdatert 2026-04-13)

**Kjernekonsept:** "Forstå din egen økonomi" — ikke bare sammenligne produkter

**Fase 1 (nå):**
- Få trafikk via SEO + sosiale medier
- Bygge verktøy som folk faktisk bruker (spareutfordring, widget)
- Søke affiliate-avtaler

**Fase 2 (måned 2-3):**
- E-postvarsler for boliglånswidget
- Flere interaktive verktøy
- Automatiserte markedsrenter

**Fase 3 (måned 4+):**
- Passive inntekter fra affiliate
- Digitale produkter (maler, kurs)

---

## Teknisk info

- **Hosting:** Vercel (auto-deploy fra GitHub)
- **Repo:** github.com/oddmundleikvoll/pengepraten
- **Lokal mappe:** `/home/o/.openclaw/workspace/projects/pengepraten` (tidligere `norsk-penger`)
- **Branch:** `main` (tidligere `master`)
- **GA4:** Property 532272471 (Måle-ID: G-RHXXSHTYRH)
- **E-post:** Resend API (kontaktskjema → wntviral@gmail.com)
- **DNS:** Cloudflare (Email Routing)
- **Arkivert repo:** `walt/pengepraten-UTDATERT-20260507` ( beholdes for historikk )

---

## Commit-historikk (siste)

```
6308df6 merge: Norges Bank renteheving 4,25% + emoji-sanering + ikon-system
7e6b662 feat: ny artikkel hoyrente-vs-aksjesparing + sitemap
94add2e feat: emoji-sanering + ikon-system U1-U4 (plan 2026-05-04)
285fc6e Fjern 'Oppdatert januar 2026' fra forsiden
bb22543 feat: forbedre høyrentekonto + BSU-guide, ny refinansieringsartikkel
ad566bf fix SEO: correct 10% tax deduction on BSU page, expand bank tables to 20+ banks
```

---

## Neste steg

1. **Kort sikt:** Søk Adtraction affiliate-avtaler
2. **Kort sikt:** Fiks SSL www.pengepraten.no i SAN
3. **Kort sikt:** Sett opp sitemap i Google Search Console (full retry)
4. **Kort sikt:** Automatisk scraping av Norges Bank styringsrente (cron)
5. **Middels sikt:** Automatisk scraping av bankrenter (live data)
6. **Middels sikt:** Flere artikler + bygge lenker
7. **Middels sikt:** Flere interaktive verktøy

### 🚨 Viktig: Unngå parallelle repos
**Lærdom 7. mai 2026:** Vi hadde to versjoner (`walt/pengepraten` og `projects/norsk-penger`) som divergerte. Dette førte til at emoji-sanering og ikon-system ble overskrevet.

**Regel fremover:**
- **Ett aktivt repo:** `projects/pengepraten`
- **Branch:** `main` (master)
- **Deploy:** Vercel fra GitHub `main` branch
- **ALDRI** arbeid i `walt/pengepraten` uten å synce tilbake til `projects/pengepraten`

# Pengepraten.no — Prosjektstatus

**Opprettet:** 2026-04-08
**Sist oppdatert:** 2026-04-15
**Mål:** 50.000–100.000 kr/år innen 18 mnd

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

## Nettstedstruktur (34 sider)

```
FORTSIDE (hero m/ bilde + 3 CTA-knapper)
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
├── /sparing
│   ├── /sparing/beste-sparekonto-2026
│   ├── /sparing/bsu-guide
│   ├── /sparing/hoyrentekonto          ← NY
│   ├── /sparing/indeksfond-nybegynnere  ← NY
│   ├── /sparing/ips-individuell-pensjonssparing ← NY
│   ├── /sparing/slik-bygger-du-spareseddel
│   └── /sparing/spareplan-guide
├── /spareutfordring                    ← NY
├── /budsjett
│   ├── /budsjett/budsjett-app           ← NY
│   └── /budsjett/kom-i-gang-med-budsjett
├── /bank
│   └── /bank/bytte-bank                 ← NY
├── /verktøy
│   ├── /verktøy/lånekalkulator
│   └── /verktøy/boliglånskalkulator
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
- **GA4:** Property 532272471 (Måle-ID: G-RHXXSHTYRH)
- **E-post:** Resend API (kontaktskjema → wntviral@gmail.com)
- **DNS:** Cloudflare (Email Routing)

---

## Commit-historikk (siste)

```
0cc36c8 Add 5 new SEO articles (Walt)
3490767 fix: oppdatert sitemap med alle 29 sider
d2ea9f2 fix: juster beløp til 50kr/uke (max 2600kr, total 68900kr)
d2a89d7 feat: 52-ukers Spareutfordring + komponenter
d8fc9df feat: BSU-guide og cashback-kredittkort artikler
```

---

## Neste steg

1. **Kort sikt:** Søk Adtraction affiliate-avtaler
2. **Kort sikt:** Fiks SSL www.pengepraten.no i SAN
3. **Kort sikt:** Sett opp sitemap i Google Search Console (full retry)
4. **Middels sikt:** Flere artikler + bygge lenker
5. **Middels sikt:** Flere interaktive verktøy

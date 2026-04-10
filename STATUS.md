# Pengepraten.no — Prosjektstatus

**Opprettet:** 2026-04-08
**Sist oppdatert:** 2026-04-10
**Mål:** 50.000–100.000 kr/år innen 18 mnd

---

## Statusrapport 2026-04-10

### ✅ Fullført

| Del | Status | Merknad |
|-----|--------|---------|
| Domene + hosting | ✅ | pengepraten.no på Vercel |
| Nettside (Next.js) | ✅ | Live, responsiv, mobilmeny |
| E-postliste | ✅ | Resend + LeadMagnet |
| GA4-tracking | ✅ | Property ID 532272471 |
| Forbrukslånskalkulator | ✅ | /verktøy/lånekalkulator |
| Boliglånskalkulator | ✅ | /verktøy/boliglånskalkulator med effektiv rente + nedbetalingsplan |
| SEO-artikler (5 stk) | ✅ | 1500–1700 ord hver, E-E-A-T |
| UX-rydding | ✅ | Duplikater, sortering, navn |
| Mobilmeny | ✅ | Hamburger-meny fungerer |
| Budsjettmal (.xlsx) | ✅ | Gratis nedlasting |
| Google Search Console | ✅ | Indeksert www.pengepraten.no (2026-04-10) |
| **Hero-bilde** | ✅ | Walt-generert bilde i hero-seksjon |
| **Ny logo** | ✅ | Transparent PNG med growth-ikon (2026-04-10) |
| **Navigasjon dropdown** | ✅ | "Lån" → Forbrukslån/Boliglån, "Verktøy" → begge kalkulatorer |
| **Boliglån-side** | ✅ | /boliglan egen landing-side |
| **Kontaktskjema** | ✅ | Sender til wntviral@gmail.com via Resend (2026-04-10) |
| **Forside CTA** | ✅ | Begge kalkulatorer + budsjettmal-knapper i hero |
| **Footer-opprydding** | ✅ | Forbrukslånskalkulator/Boliglånskalkulator navngitt riktig |
| **Sitemap** | ✅ | /boliglan lagt til |

### 📊 Trafikk (per 2026-04-10)

| Metrikk | Verdi |
|--------|-------|
| Sidevisninger (2 dager) | 131 |
| Sesjoner | 26 |
| Unike brukere | 11 |

Topp sider: / (86), /lan (11), /verktøy/lånekalkulator (7), /verktøy (6)

### 📋 Gjenstår

- [ ] Søk om affiliate-programmer (Bank Norwegian, Arcadia Finans, Axo Finans via Adtraction)
- [ ] Flere digitale maler (Gjeldsbrems, Spareplan)
- [ ] Flere SEO-artikler (mål: 30+)
- [ ] Fiks SSL-sertifikat: legg til `www.pengepraten.no` i SAN (Subject Alternative Name)

---

## Nettstedstruktur

```
FORTSIDE (hero m/ bild + 3 CTA-knapper)
├── /kredittkort
│   ├── /kredittkort/beste-kredittkort-norge-2026
│   └── ...
├── /lan (Forbrukslån)
│   ├── /lan/beste-forbrukslan-2026
│   ├── /lan/hvor-mye-boliglan-kan-jeg-fa
│   ├── /lan/nar-lonner-refinansiering
│   └── /lan/refinansiering-spar-paa-gjelden
├── /boliglan (Boliglån)
├── /sparing
│   ├── /sparing/beste-sparekonto-2026
│   └── /sparing/spareplan-guide
├── /budsjett
│   └── /budsjett/kom-i-gang-med-budsjett
├── /verktøy
│   ├── /verktøy/lånekalkulator (Forbrukslånskalkulator)
│   └── /verktøy/boliglånskalkulator
├── /om-oss
├── /kontakt (fungerer → wntviral@gmail.com)
└── /personvern
```

---

## Teknisk info

- **Hosting:** Vercel (auto-deploy fra GitHub)
- **Repo:** github.com/oddmundleikvoll/pengepraten
- **GA4:** Property 532272471 (Måle-ID: G-RHXXSHTYRH)
- **E-post:** Resend API
- **DNS:** Cloudflare (Email Routing til wntviral@gmail.com)
- **Logo:** `/public/logo.png` (transparent PNG, lys blå)

---

## Neste steg

1. **Kort sikt:** Søk affiliate-avtaler via Adtraction (tar 1-4 uker)
2. **Kort sikt:** Fiks SSL www.pengepraten.no i SAN
3. **Middels sikt:** 25+ flere artikler (lang tail SEO)
4. **Middels sikt:** Flere digitale maler (Gjeldsbrems, Spareplan)

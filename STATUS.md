# Pengepraten.no — Prosjektstatus

**Opprettet:** 2026-04-08
**Sist oppdatert:** 2026-04-09
**Mål:** 50.000–100.000 kr/år innen 18 mnd

---

## Statusrapport 2026-04-09

### ✅ Fullført

| Del | Status | Merknad |
|-----|--------|---------|
| Domene + hosting | ✅ | pengepraten.no på Vercel |
| Nettside (Next.js) | ✅ | Live, responsiv, mobilmeny |
| E-postliste | ✅ | Resend + LeadMagnet |
| GA4-tracking | ✅ | Property ID 532272471 |
| Forbrukslånskalkulator | ✅ | Verktøy-side |
| **Boliglånskalkulator** | ✅ | Med effektiv rente + nedbetalingsplan |
| SEO-artikler (5 stk) | ✅ | 1500–1700 ord hver, E-E-A-T |
| UX-rydding | ✅ | Duplikater, sortering, navn |
| Mobilmeny | ✅ | Hamburger-meny fungerer |
| Budsjettmal (.xlsx) | ✅ | Gratis nedlasting |
| **Google Search Console** | ✅ | Indeksert www.pengepraten.no (2026-04-10) |

### 📋 Gjenstår

- [ ] Søk om affiliate-programmer (Bank Norwegian, Arcadia Finans, Axo Finans via Adtraction)
- [ ] Flere digitale maler (Gjeldsbrems, Spareplan)
- [ ] Flere SEO-artikler (mål: 30+)
- [ ] Fiks SSL-sertifikat: legg til `www.pengepraten.no` i SAN (Subject Alternative Name)

---

## Nettstedstruktur

```
FORTSIDE
├── /verktøy
│   ├── /verktøy/lånekalkulator        (forbrukslån)
│   └── /verktøy/boliglånskalkulator   (boliglån) ←Ny
├── /kredittkort
│   └── /kredittkort/beste-kredittkort-norge-2026  ←Ny
├── /lan
│   ├── /lan/hvor-mye-boliglan-kan-jeg-fa          ←Ny
│   └── /lan/nar-lonner-refinansiering             ←Ny
├── /sparing
│   └── /sparing/spareplan-guide                   ←Ny
└── /budsjett
    └── /budsjett/kom-i-gang-med-budsjett           ←Ny
```

---

## Teknisk info

- **Hosting:** Vercel (auto-deploy fra GitHub)
- **Repo:** github.com/oddmundleikvoll/pengepraten
- **GA4:** Property 532272471 (G-RHXXSHTYRH)
- **E-post:** Resend API (audience: a10229b8-660a-44da-8080-ece3e973d3ff)

---

## Neste steg

1. **Kort sikt:** Koble Google Search Console → starte SEO-crawling
2. **Kort sikt:** Søk affiliate-avtaler via Adtraction (tar 1-4 uker)
3. **Middels sikt:** 25+ flere artikler (lang tail SEO)
4. **Middels sikt:** Flere digitale maler (Gjeldsbrems, Spareplan)

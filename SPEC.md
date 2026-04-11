# SPEC.md — Min Boliglånsrente-widget

**Versjon:** 1.0  
**Dato:** 2026-04-11  
**Ansvarlig:** Neo (Tech Agent)  
**Prosjekt:** Pengepraten.no  
**Mål:** Gjenbesøk + personlig verdi gjennom personalisert boliglånsoversikt + varsler

---

## 1. Funksjonell beskrivelse

### Hva widgeten gjør

Widgeten lar brukeren registrere sitt boliglån én gang, og deretter få:
1. **Umiddelbar oversikt** — Er renten min over eller under gjennomsnittet?
2. **Løpende varsler** — E-post når markedsrentene endrer seg og det kan lønne seg å vurdere refinansiering
3. **Spar-potensial** — Hvor mye kan jeg spare hvis renten synker X prosentpoeng?

### Brukerflyt

```
[Bruker kommer til Pengepraten.no]
    │
    ├─── Ser CTA-widget (f.eks. i sidebar eller etter artikler)
    │       "Følg din boliglånsrente — få varsel når det kan lønne seg"
    │
    └─── Klikker "Kom i gang"
            │
            ├─── Modal åpner seg (eller navigerer til /min-boliglån)
            │       Felt 1: Lånebeløp (NOK)
            │       Felt 2: Rente (%)
            │       Felt 3: Gjenstående løpetid (år)
            │       Felt 4: E-postadresse (valgfritt, for varsler)
            │
            ├─── BrukerSubmitter → lagres i localStorage (MVP)
            │       Visning: "Din rente: 5,2% | Markedsgjennomsnitt: 4,8% | Du betaler ~2.400 kr mer/år"
            │
            └─── (Fremtidig) Supabase-backend med e-postvarsel via cron
```

### Konkurrent-avstand

- **Renteradar.no**: BankID/Vipps, sammenligner tilbud, hjelper med pruting/flytting
- **Pengepraten (denne widgeten)**: Ingen BankID, ingen flytting — bare oversikt og varsler
- **Differensiering**: Lett, personlig, spamfri. Én gangs registrering, deretter passiv verdi.

### Brukerbehov som adresseres

| Spørsmål | Hvordan løst |
|---|---|
| "Er min rente god eller dårlig?" | Sammenligning mot markedsgjennomsnitt lagret i widget-state |
| "Hvordan påvirker renteendringer meg?" | Viser effekt i kr/år ved rateendring (reaktif beregning) |
| "Hvor mye kan jeg spare?" | Belønningsvisning når bruker registrerer seg + framtidig e-postvarsel |

---

## 2. Datamodell

### Brukerdata (localStorage-nøkkel: `pengepraten_mortgage`)

```typescript
interface MortgageUser {
  // Påkrevd ved registrering
  loanAmount: number        // NOK, f.eks. 2500000
  interestRate: number      // Prosent, f.eks. 5.2
  remainingYears: number     // Heltall, f.eks. 22

  // Valgfritt
  email?: string            // For e-postvarsler

  // Systemfelt
  createdAt: string         // ISO timestamp
  updatedAt: string         // ISO timestamp
  lastRateCheck: string     // ISO timestamp
}
```

### Markedsrentedata (API / state)

```typescript
interface MarketRates {
  averageRate: number       // Nominell gjennomsnitts-rente for norske boliglån
  source: string            // F.eks. "SSB / Finansportalen"
  scrapedAt: string         // ISO timestamp
  history: RateSnapshot[]   // For trendvisning
}

interface RateSnapshot {
  date: string
  averageRate: number
}
```

### Storage-anbefaling: **localStorage for MVP**

**Hvorfor localStorage fremfor Supabase:**
1. Ingen backend-infrastruktur kreves for MVP
2. Brukeren trenger ikke å opprette konto — data lagres i deres egen browser
3. Raskere å bygge og shippe
4. Privacy-fordel: ingen sensitiv data på server

**Når Supabase bør vurderes (fase 2):**
- Når e-postvarsler blir viktig og vi trenger en backend for cron-jobs
- Når vi vil tilby "logg inn fra hvilken som helst enhet"
- Når vi trenger aggregering og analyse av brukerdata

**Supabase-skisse (fase 2):**
```
Tabeller:
- mortgage_users: id, email, loan_amount, interest_rate, remaining_years, created_at
- market_rates: id, average_rate, source, scraped_at
- email_subscriptions: id, email, active, subscribed_at
```

---

## 3. UI-komponenter og plassering

### Oversikt over nye komponenter

| Komponent | Formål | Plassering |
|---|---|---|
| `MortgageWidgetCTA` | Oppfordrer bruker til å registrere seg | Sidebar på bloggartikler + boliglånsside |
| `MortgageOnboardingModal` | Registreringsskjema | Modal (overlay) trigges av CTA |
| `MortgageDashboard` | Viser brukerens data + sammenligning | Egen route: `/min-boliglån` |
| `MortgageRateBadge` | Kort visning av brukerens status | Kan stå i header/sidebar etter innlogging |
| `MarketRateIndicator` | Viser gjeldende markedsgjennomsnitt | Inne i Dashboard og evt. CTA |
| `EmailAlertToggle` | Slår e-postvarsler av/på | Inne i Dashboard |

### Plasseringsstrategi

**Fase 1 (MVP) — two entry points:**

1. **Fra bloggartikler (f.eks. `/boliglan`):** Sidebar-widget med tittel "Følg din boliglånsrente" + CTA-knapp "Sjekk min rente"
2. **Egen dedikert side `/min-boliglån`:** Fullstendig dashboard etter at brukeren har registrert seg. Denne siden bookmarkes / lenkes direkte.

**Fase 2 — expansion:**
- Footer-lenke "Min boliglånsrente"
- Popup/modal etter 60 sekunder på relevante sider (ikke på første besøk)
- Kanskje en enkel banner på forsiden

### Skisse: MortgageOnboardingModal

```
┌──────────────────────────────────────────┐
│  🎯 Din boliglånsrente                  │
│                                          │
│  Registrer ditt lån og få vite om        │
│  du betaler over eller under gjennomsnitt │
│                                          │
│  Lånebeløp                               │
│  ┌──────────────────────────────────┐   │
│  │ 2 500 000 kr                     │   │
│  └──────────────────────────────────┘   │
│                                          │
│  Din rente (% nominell)                  │
│  ┌──────────────────────────────────┐   │
│  │ 5,2                              │   │
│  └──────────────────────────────────┘   │
│                                          │
│  Gjenstående løpetid                     │
│  ┌──────────────────────────────────┐   │
│  │ 22 år                            │   │
│  └──────────────────────────────────┘   │
│                                          │
│  E-post for varsler (valgfritt)          │
│  ┌──────────────────────────────────┐   │
│  │ ola@normann.no                    │   │
│  └──────────────────────────────────┘   │
│                                          │
│  [ Sjekk min rente → ]                   │
│                                          │
│  Vi sparrer dataene dine lokalt.         │
│  Ingen pålogging kreves.                  │
└──────────────────────────────────────────┘
```

### Skisse: MortgageDashboard (renderes på `/min-boliglån`)

```
┌─────────────────────────────────────────────────────────┐
│  Din boliglånsrente                    [Rediger] [Slett]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│  DIN RENTE          MARKEDSGJENNOMSNITT   DIFFERANSE    │
│  5,2%               4,8%                  +0,4%          │
│  ▲ Over gjennomsnittet                             🟠    │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  Kostnad av forskjellen:                               │
│  +2 400 kr/år  (ca +200 kr/mnd)                        │
│                                                         │
│  Hvis renten synker til 4,5% → du sparer ~5 200 kr/år   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  📧 E-postvarsler                                       │
│  ola@normann.no ✅ Aktiv                               │
│  [Slå av]                                               │
│                                                         │
│  Vi varsler deg når rentene endrer seg slik at         │
│  refinansiering kan lønne seg.                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. E-postvarsling

### Hvordan det fungerer

1. Brukeren har registrert e-post + sitt lån i widgeten
2. En **cron-jobb** (kjører f.eks. 1 gang per uke) henter siste markedsrente
3. Hvis gjennomsnittsrenten har sunket med ≥0,2 prosentpoeng siden siste gang brukeren ble varslet → send e-post
4. E-posten inneholder: brukerens nåværende rente, markedsgjennomsnitt nå, anbefaling

### Teknisk flyt

```
[Markedsrente endres] 
       │
       ▼
[Cron-jobb kjører ukentlig]
       │
       ├─── Hent siste market_rates fra localStorage/API
       │
       ├─── Sammenlign med siste kjente rate
       │
       ├─── Hvis endring ≥ 0,2 pp:
       │       For alle brukere med email + alert enabled:
       │           → Send varsel via Resend
       │
       └─── Oppdater last_check timestamp
```

### Resend-integrasjon

```
E-postmal (rate-alert):
Subject: "Din boliglånsrente kan være høyere enn gjennomsnittet nå"

Hei [navn eller "du"],

Markedsgjennomsnittet for boliglån har sunket fra [gammel]% til [ny]%.
Din rente: [brukerens rate]%

Basert på ditt lån på [beløp] kr kan du potensielt spare 
[forskjell i kr/år] ved å refinansiere.

→ Sjekk din fullstendige oversikt på Pengepraten.no/min-boliglån

— Pengepraten
```

### Hvilke data trengs for e-postsystemet

| Felt | Kilde | Kommentar |
|---|---|---|
| `email` | Bruker input (onboarding modal) | Kun hvis brukeren ønsker varsel |
| `loanAmount` | Bruker input | For å beregne sparpotensial i kr |
| `interestRate` | Bruker input | For å vite om brukeren er over/under |
| `alertEnabled` | Toggle i dashboard | Default: true hvis e-post er oppgitt |

### Cron-jobb / Agent-arkitektur

**Alternativ A: OpenClaw cron-jobb** (enklest for MVP)
- Opprett en agent-task med cron-utløser (f.eks. hver mandag kl 09:00)
- Tasken leser alle `pengepraten_mortgage`-abonnenter fra en enkel JSON-fil (eller Supabase)
- Sjekker siste markedsrente
- Sender e-post via Resend ved endring

**Alternativ B: Next.js API route + ekstern cron**
- `/api/check-rates` — sjekker markedsdata og sender e-post
- Kalles av ekstern cron-tjeneste (f.eks. cron-job.org, UptimeRobot, eller en enkel Node-script på server)

**Anbefaling for MVP:** Alternativ A (OpenClaw agent-cron). Ingen ekstra infrastruktur.

---

## 5. Markedsrentedata

### Kilder for norske boliglånsrenter

| Kilde | Type | Oppdateringsfrekvens | Pålitelighet |
|---|---|---|---|
| **SSB (Statistisk sentralbyrå)** | Offisiell statistikk | Månedlig | ⭐⭐⭐⭐⭐ |
| **Finansportalen.no** | Sammenligning av banker | Ukentlig | ⭐⭐⭐⭐ |
| **DNB / Nordea / SBank** | Individuelle banker | Kontinuerlig | ⭐⭐⭐ |
| **Euribor (3m)** | Referanserente | Daglig | ⭐⭐⭐ (indirekte) |

### Implementasjonsstrategi

**MVP (fase 1) — manuell oppdatering:**
- Hardcode en `AVERAGE_RATE = 4.8` (per april 2026)
- Oppdateres manuelt når vi husker / får tips fra brukere
- Gir ingen verdi egentlig — fortsett til neste

**Fase 2 — scraping:**
- Scraping av SSB's statistikkside eller Finansportalen
- Kjør ukentlig (mandag morgen) som del av cron-jobb
- Eksempel scraping-target: `https://www.ssb.no/statbank/list/bilra`

**Fase 3 — API:**
- Hvis Finansportalen eller lignende tilbyr API → bruk det
- Alternativt: prøv å finne en enkel RSS eller JSON-feed med norske renter

### Datastruktur for markedsrenter

```typescript
// /lib/marketRates.ts
interface MarketRateData {
  averageNominalRate: number;    // f.eks. 4.8
  effectiveRate: number;         // f.eks. 5.1 (inkluderer gebyrer)
  source: string;
  lastUpdated: string;
  nextUpdate: string;
}
```

### Rate history (for trend-visning)

```typescript
const RATE_HISTORY = [
  { month: '2026-04', rate: 4.8 },
  { month: '2026-03', rate: 4.7 },
  { month: '2026-02', rate: 4.6 },
  { month: '2026-01', rate: 4.5 },
  { month: '2025-12', rate: 4.4 },
];
```

---

## 6. Teknisk implementasjonsplan

### Steg 1: Fundament — localStorage + types

```
Opprett: lib/mortgageStore.ts
- getMortgageData(): MortgageUser | null
- saveMortgageData(data: MortgageUser): void
- clearMortgageData(): void

Opprett: lib/marketRates.ts
- getMarketRates(): MarketRateData
- hardcoded initial data (fase 1)
```

### Steg 2: Onboarding Modal

```
Opprett: components/MortgageOnboardingModal.tsx
- Props: isOpen, onClose, onSuccess
- State: loanAmount, interestRate, remainingYears, email
- Validation: alle felt positive tall, e-postformat
- On submit: saveMortgageData() → onSuccess
```

### Steg 3: CTA-widget (sidebar)

```
Opprett: components/MortgageWidgetCTA.tsx
- Vises i sidebar på relevante sider
- Sjekker om bruker allerede har registrert: vis "Min boliglånsrente"-lenke
- Hvis ikke: vis CTA med CTA-knapp som åpner modal
```

### Steg 4: Dashboard-side

```
Opprett: app/min-boliglån/page.tsx
- Leser data fra localStorage
- Beregner differanse mot markedsgjennomsnitt
- Viser sparpotensial
- Email alert toggle
- Rediger/Slett-funksjonalitet
```

### Steg 5: E-postvarsel-infrastruktur

```
Opprett: app/api/send-rate-alert/route.ts
- Trigger: cron-jobb (OpenClaw)
- Input: brukerdata fra localStorage via API
- Output: Resend e-post

Opprett: emails/RateAlertEmail.tsx (React Email mal)
```

### Steg 6: Markedsrente-oppdatering (scraping)

```
Opprett: scripts/scrapeRates.ts
- Kjøres ukentlig via cron
- Henter data fra SSB/Finansportalen
- Lagrer til marketRates state

Opprett: lib/rateAlertChecker.ts
- Sammenligner siste rate med forrige
- Returnerer liste over brukere som skal varsles
```

---

## 7. Prioritering — bygge-rekkefølge

### MVP (Uke 1-2) — Kjerneverdi, ingen e-post enda

| # | Oppgave | Komponent | Kompleksitet |
|---|---|---|---|
| 1 | localStorage-hjelpere | `lib/mortgageStore.ts` | 🟢 Lav |
| 2 | Types / interfaces | `lib/mortgageTypes.ts` | 🟢 Lav |
| 3 | Markedsrente-data | `lib/marketRates.ts` | 🟢 Lav |
| 4 | Onboarding modal | `components/MortgageOnboardingModal.tsx` | 🟡 Medium |
| 5 | Dashboard-side | `app/min-boliglån/page.tsx` | 🟡 Medium |
| 6 | CTA-widget | `components/MortgageWidgetCTA.tsx` | 🟡 Medium |
| 7 | Integrasjon på eksisterende sider | Sidebar på `/boliglan` + forsiden | 🟡 Medium |

**MVP sluttprodukt:** Bruker kan registrere lånet sitt, se at renten er over/under gjennomsnittet, og se sparpotensialet i kr/år. Ingen e-post enda.

### Fase 2 (Uke 3-4) — E-postvarsler

| # | Oppgave | Komponent | Kompleksitet |
|---|---|---|---|
| 8 | Resend-oppsett + API-nøkkel | `.env` | 🟢 Lav |
| 9 | Rate alert e-postmal | `emails/RateAlertEmail.tsx` | 🟡 Medium |
| 10 | Alert API route | `app/api/send-rate-alert/route.ts` | 🟡 Medium |
| 11 | Cron-jobb for ukentlig rate-sjekk | OpenClaw cron | 🟡 Medium |
| 12 | Alert toggle i dashboard | `app/min-boliglån/page.tsx` | 🟢 Lav |

### Fase 3 (Uke 5-6) — Markedsrente-automatisering

| # | Oppgave | Komponent | Kompleksitet |
|---|---|---|---|
| 13 | Scraping-script | `scripts/scrapeRates.ts` | 🔴 Høy |
| 14 | Rate history + trend-graf | Dashboard | 🟡 Medium |
| 15 | Oppdateringsfrekvens i UI | Vis "Sist oppdatert" | 🟢 Lav |

### Fase 4 (Fremtidig) — Supabase hvis nødvendig

| # | Oppgave | Komponent | Kompleksitet |
|---|---|---|---|
| 16 | Supabase-prosjekt + tabeller | Backend | 🟡 Medium |
| 17 | Brukerautentisering | NextAuth / magic link | 🔴 Høy |
| 18 | Cross-device sync | localStorage → Supabase | 🔴 Høy |

---

## 8. Tekniske notater

### Avhengigheter som må installeres

```bash
npm install resend           # For e-postutsending
# React Email (hvis vi lager egne maler):
npm install @react-email/components
```

### Miljøvariabler (`.env.local`)

```env
RESEND_API_KEY=re_xxxxx     # Resend API-nøkkel
MARKET_RATE_SOURCE=manual    # "manual" | "ssb" | "finansportalen"
```

### Eksisterende komponenter vi kan gjenbruke

- `ArticleCard` → bygge på samme stil for MortgageCard
- `LeadMagnet` → likhet med MortgageWidgetCTA (begge ber om input)
- `globals.css` → Tailwind variabler på plass (colors, spacing)

### Mulige problemer / edge cases

| Problem | Løsning |
|---|---|
| Bruker har allerede registrert seg | Sjekk localStorage før visning av CTA, vis heller "Min boliglånsrente"-lenke |
| Markedsrente er outdated | Vis "Sist oppdatert: [dato]" og en "Oppdater manuell rente"-knapp for admin |
| Bruker vil endre data | "Rediger"-knapp på dashboard som åpner modal igjen med pre-filled data |
| localStorage er fullt (svært usannsynlig) | Graceful error: vis melding om at data ikke kunne lagres |
| Ingen e-post registrert | Vis "Skru på e-postvarsler for å få beskjed når rentene endrer seg" i dashboard |

---

## 9. Suksesskriterier

- [ ] Bruker kan registrere boliglån i <2 minutter
- [ ] Bruker ser umiddelbart om renten er over/under gjennomsnittet
- [ ] Dashboard viser sparpotensial i kroner (ikke bare prosent)
- [ ] E-postvarsel fungerer (for fase 2)
- [ ] Markedsrente-data oppdateres automatisk (for fase 3)
- [ ] Ingen personlig informasjon lagres på server (MVP — alt i browser)
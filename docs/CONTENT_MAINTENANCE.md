# Innhold og løpende vedlikehold

**Sist gjennomgått:** 18. august 2026

## Ny artikkel

1. Velg en eksisterende kategori eller bruk `app/artikler/<slug>/page.tsx` for dagsaktuelle saker.
2. Kontroller alle tidsfølsomme fakta mot primærkilder samme dag. For norske nøkkeltall betyr det normalt SSB, Norges Bank, Skatteetaten, Finanstilsynet eller aktuell forskrift.
3. Opprett `page.tsx` med unik `metadata`, én H1, en tydelig ingress, kildehenvisninger og internlenker.
4. Legg artikkelen øverst i `lib/articles.ts`. Dato skal være ISO-format `YYYY-MM-DD`, og `slug` skal være identisk med ruten.
5. Legg til relevante `relatedArticles` og `relatedTools`; lenk også tilbake fra eldre, nærliggende innhold når det er naturlig.
6. Kontroller forsiden, `/artikler`, artikkelsiden og `/sitemap.xml` lokalt.

Sitemap skal ikke redigeres manuelt. Artikkelregisteret og `app/sitemap.ts` er kildene.

## Krav til dagsaktuelt økonomiinnhold

- Oppgi hvilken periode tallet gjelder, ikke bare publiseringsdato.
- Skill mellom prosent og prosentpoeng.
- Forklar hva tallet betyr for en vanlig husholdning med et etterprøvbart regneeksempel.
- Lenke direkte til primærkilden nær påstanden.
- Unngå å presentere prognoser som fakta.
- Søk gjennom siden etter gamle månedsnavn, årstall, renter, beløpsgrenser og produkttilbud før publisering.
- Legg inn dato for siste kontroll i synlig innhold når leseren trenger å vurdere aktualiteten.

## Oppdatere satser eller regelverk

Tall kan være duplisert i artikkeltekst, kalkulatorstandarder, `lib/marketRates.ts` og artikkelregisteret. Finn alle forekomster før endring:

```bash
rg -n "4[,.]25|styringsrente|oppdatert|2026" app components lib
```

Tilpass søket til tallet eller regelen som endres. Dokumenter kilde og kontrolldato i samme commit. Hvis en tittel, ingress eller dato endres, oppdater også posten i `lib/articles.ts`.

## Nye sider og URL-endringer

- Legg en ny viktig side til `coreRoutes` i `app/sitemap.ts` hvis den ikke ligger i artikkelregisteret.
- Bruk ASCII i nye slugs: `/verktoy`, `/boliglanskalkulator`, `/min-boliglan`.
- Ved flytting: legg til permanent redirect i `next.config.js`, oppdater alle interne lenker, og fjern den gamle URL-en fra sitemap/register.
- Kontroller redirect med både gammel kodet URL og ny måladresse.

## E-post og konverteringspunkter

Påmeldingskomponentene sender `budget`, `rates` eller `challenge` til `/api/subscribe`. Hvis en ny type skal innføres, må union-typen, audience-valg, e-postinnhold, avmelding, `.env.example` og denne dokumentasjonen oppdateres samlet.

Test aldri produksjonsutsendelser til tilfeldige adresser. Bruk en kontrollert testadresse og kontroller både påmelding, mottatt melding, `List-Unsubscribe` og avmelding.

## Analysehendelser

Bruk etablerte navn der de passer:

- `generate_lead`
- `tool_start`
- `file_download`
- `challenge_week_completed`
- `challenge_reset`
- `outbound_click`

Hendelsesparametere skal beskrive innhold eller verktøy, ikke brukeren. Nye hendelser bør dokumenteres i `docs/ARCHITECTURE.md` hvis de etablerer en ny hovedflyt.

## Før publisering

```bash
git diff --check
npm run lint
npm run build
```

Kontroller deretter på mobil og desktop:

- navigasjon, interne lenker og redirects
- artikkelkort, dato og kategori
- kalkulatorer eller skjemaer som ble berørt
- samtykkebanner og relevante analysehendelser
- metadata, canonical, favicon, sitemap og fravær av konsollfeil

Etter deploy skal den faktiske produksjons-URL-en åpnes og de viktigste flytene kontrolleres på nytt.

## Fast vedlikeholdsrytme

| Frekvens | Kontroll |
|---|---|
| Ved hver publisering | Bygg, lenker, metadata, sitemap og produksjonsverifisering |
| Månedlig | Renter, sammenligningstabeller, utdaterte datoer og brutte eksterne kilder |
| Kvartalsvis | Regelverk, skattesatser, personvernside, toppinnhold og Core Web Vitals |
| Ved integrasjonsendring | `.env.example`, arkitektur- og deploydokumentasjon |

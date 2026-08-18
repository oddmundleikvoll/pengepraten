# Pengepraten.no — nåstatus

**Sist oppdatert:** 18. august 2026<br>
**Produksjon:** [pengepraten.no](https://pengepraten.no) via Vercel<br>
**Produksjonsgren:** `main`

Dette dokumentet beskriver dagens løsning. Daterte trafikktall, tidlige prosjektplaner og gjennomføringsrapporter ligger som historikk; se [`docs/README.md`](docs/README.md).

## Levert løsning

- Next.js 16-nettsted med guider innen sparing, lån, boliglån, kredittkort, bank og budsjett.
- Artikkelarkiv og artikkelregister som driver siste-saker, relasjoner og sitemap.
- Tre kalkulatorer under ASCII-ruten `/verktoy`.
- Interaktiv 52-ukers spareutfordring med lokal fremdrift og utskriftsvennlig ukeplan.
- Boliglånswidget med lokal lagring i nettleseren.
- E-postpåmelding for budsjettmal, renteoppdateringer og spareutfordring via Resend.
- Signert avmeldingsflyt og offentlig avmeldingsside.
- GA4 med samtykke som standard avslått, samt hendelser for leads, verktøy, nedlastinger og utgående klikk.
- Dynamisk sitemap, selv-refererende canonical og permanente redirects fra eldre URL-er med norske tegn.
- Responsivt Nordic Clarity-design, konsistent navigasjon og SVG-favicon.

## Siste innholdsleveranse

`/artikler/prisvekst-juli-2026-hostbudsjett` ble publisert 18. august 2026. Artikkelen forklarer SSBs KPI-tall for juli 2026 og gir konkrete grep for høstbudsjettet. Den er registrert som nyeste sak og vises på forsiden, i artikkelarkivet og i sitemap.

## Integrasjoner

| Integrasjon | Bruk | Konfigurasjon |
|---|---|---|
| Vercel | Bygg, serverruter og hosting | Prosjektinnstillinger og GitHub-integrasjon |
| Resend | Kontakter, velkomstmeldinger og avmelding | Miljøvariabler i `.env.example` |
| GA4 | Trafikk og egendefinerte hendelser | Måle-ID `G-RHXXSHTYRH` i rotlayout |

## Kjente begrensninger

- Det finnes ingen database eller CMS; artikler og satser vedlikeholdes i kode.
- Flere eldre artikler inneholder tidsfølsomme renter og sammenligninger som må kontrolleres manuelt hver måned.
- Det finnes ingen automatisert testpakke utover lint og produksjonsbygg.
- Lokal fremdrift for verktøy synkroniseres ikke mellom nettlesere eller enheter.
- Analyse- og e-postflyter avhenger av korrekt produksjonskonfigurasjon i GA4, Resend og Vercel.

## Neste vedlikeholdsprioriteringer

1. Gjennomgå eldre rente- og produktsammenligninger mot primærkilder og merk tydelig kontrolldato.
2. Legg til automatiserte tester for API-validering, artikkelregister og kritiske kalkulatorberegninger.
3. Etabler månedlig rapportering fra Search Console og GA4 basert på faktiske data, ikke estimater.
4. Samle gjentatt metadata og strukturert data i delte hjelpere for å redusere avvik mellom artikler.
5. Vurder en kontrollert innholdsmodell eller CMS først når manuelt TSX-vedlikehold blir en reell flaskehals.

## Kvalitetsnivå før deploy

Minimumskravet er ren `git diff --check`, bestått `npm run lint`, bestått `npm run build` og manuell kontroll av berørte flyter på mobil og desktop. Se [`docs/CONTENT_MAINTENANCE.md`](docs/CONTENT_MAINTENANCE.md) og [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

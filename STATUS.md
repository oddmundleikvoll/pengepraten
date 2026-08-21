# Pengepraten.no — nåstatus

**Sist oppdatert:** 21. august 2026<br>
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

`/artikler/studentbudsjett-2026-lanekassen` ble publisert som nyeste sak 21. august 2026. Den forklarer studiestøtten for 2026/2027, viser to konkrete studentbudsjett og skiller mellom frikortgrensen og Lånekassens inntektsgrense. Satser og frister er kontrollert mot Lånekassen, Skatteetaten, SIFO og SSB.

Artikkelen er registrert i `lib/articles.ts`, vises automatisk på forsiden og i artikkelarkivet, og tas med i sitemap. Den er internlenket fra skolestartguiden og den generelle budsjettguiden. Forsiden og `/artikler` bruker nå datoen til nyeste artikkel som `lastModified` i sitemap.

## Integrasjoner

| Integrasjon | Bruk | Konfigurasjon |
|---|---|---|
| Vercel | Bygg, serverruter og hosting | Prosjektinnstillinger og GitHub-integrasjon |
| Resend | Kontakter, velkomstmeldinger og avmelding | Miljøvariabler i `.env.example` |
| GA4 | Trafikk og egendefinerte hendelser | Måle-ID `G-RHXXSHTYRH` i rotlayout |

## Kjente begrensninger

- Det finnes ingen database eller CMS; artikler og satser vedlikeholdes i kode.
- Flere eldre artikler inneholder tidsfølsomme renter og sammenligninger som må kontrolleres manuelt hver måned.
- Flere eldre, indekserbare guider har fortsatt synlige `[VIZ]`-plassholdere, og boliglånsinnholdet bruker flere steder 15 prosent egenkapital. Disse sidene må faktakontrolleres og ryddes samlet før de promoteres videre.
- Det finnes ingen automatisert testpakke utover lint og produksjonsbygg.
- Lokal fremdrift for verktøy synkroniseres ikke mellom nettlesere eller enheter.
- Analyse- og e-postflyter avhenger av korrekt produksjonskonfigurasjon i GA4, Resend og Vercel.

## Neste vedlikeholdsprioriteringer

1. Etter deploy: be om indeksering av den nye studentartikkelen i Search Console og følg søkeord, klikkrate og leads i 14 dager.
2. Rydd alle synlige `[VIZ]`-plassholdere og faktakontroller egenkapitalreglene på tvers av boliglånssider og kalkulator.
3. Gjenbruk studentartikkelens to regneeksempler i korte innlegg til TikTok/Reels og Reddit uten salgspreg.
4. Bygg studentklyngen videre med én ny søkeintensjon, fortrinnsvis «kredittkort for studenter», og lenk begge veier.
5. Gjennomgå eldre rente- og produktsammenligninger mot primærkilder og merk tydelig kontrolldato.
6. Legg til automatiserte tester for API-validering, artikkelregister og kritiske kalkulatorberegninger.
7. Etabler månedlig rapportering fra Search Console og GA4 basert på faktiske data, ikke estimater.
8. Samle gjentatt metadata og strukturert data i delte hjelpere for å redusere avvik mellom artikler.

## Kvalitetsnivå før deploy

Minimumskravet er ren `git diff --check`, bestått `npm run lint`, bestått `npm run build` og manuell kontroll av berørte flyter på mobil og desktop. Se [`docs/CONTENT_MAINTENANCE.md`](docs/CONTENT_MAINTENANCE.md) og [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

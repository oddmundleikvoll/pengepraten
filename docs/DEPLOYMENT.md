# Deploy og produksjonsdrift

**Sist gjennomgått:** 18. august 2026

## Produksjonsoppsett

| Felt | Verdi |
|---|---|
| GitHub-repo | `oddmundleikvoll/pengepraten` |
| Produksjonsgren | `main` |
| Vercel-prosjekt | `pengepraten` i teamet `oddmunds-projects` |
| Produksjonsdomene | `https://pengepraten.no` |
| Ekstra aliaser | `pengepraten.vercel.app`, `pengepraten-oddmunds-projects.vercel.app` |
| Vercel-runtime | Node.js 24.x |

Vercel lager preview for andre grener og produksjonsdeploy når en commit når `main`. Den lokale `.vercel/`-mappen knytter arbeidsmappen til riktig prosjekt, men er ignorert av Git og skal ikke committes.

## Anbefalt publiseringsflyt

1. Oppdater fra `main` og lag en kortlivet `codex/<beskrivelse>`-gren.
2. Kontroller avgrensningen med `git status`, `git diff` og `git diff --check`.
3. Kjør `npm run lint` og `npm run build`.
4. Push grenen og kontroller Vercel-preview ved visuelle eller interaktive endringer.
5. Slå sammen en grønn PR til `main`.
6. Vent til produksjonsdeployen er `Ready`.
7. Kontroller `https://pengepraten.no` og berørte URL-er, ikke bare preview-adressen.

En direkte produksjonsdeploy med Vercel CLI kan brukes ved behov:

```bash
vercel --prod
```

Den bør ikke erstatte commit og push; produksjonskoden skal også finnes i `main`.

## Nyttige kontroller

```bash
vercel whoami
vercel project inspect pengepraten
vercel inspect pengepraten.no
curl -I https://pengepraten.no
curl -I https://pengepraten.no/sitemap.xml
```

For en innholdsleveranse bør du i tillegg kontrollere at den nye URL-en gir `200`, at den vises i sitemap, og at canonical peker på seg selv.

## Miljøvariabler

Variabelnavn og fallback-regler er dokumentert i `.env.example`. Verdiene administreres i Vercel per miljø. Endringer i produksjonsvariabler krever ny deploy før serverfunksjonene bruker dem.

Minimum for e-postflyten er:

- `RESEND_API_KEY`
- `RESEND_AUDIENCE_ID_PENGEPRATEN`
- `FROM_EMAIL`

`UNSUBSCRIBE_SECRET` anbefales slik at avmeldingssignaturer ikke er bundet til API-nøkkelen.

## Feilsøking og rollback

1. Finn først om feilen kommer fra bygg, runtime, miljøvariabler eller domene/DNS.
2. Bruk Vercel-loggene for den konkrete deploymenten; ikke endre DNS for en applikasjonsfeil.
3. Rull tilbake til en tidligere fungerende Vercel-deployment ved akutt feil.
4. Reverter den feilende Git-commiten og push reverteringen til `main`, slik at Git igjen samsvarer med produksjon.

Ikke force-push produksjonsgrenen og ikke slett deployhistorikk som del av rollback.

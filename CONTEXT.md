# Pengepraten — prosjektkontekst

**Sist oppdatert:** 21. august 2026

## Produkt og målgruppe

Pengepraten er en uavhengig norsk tjeneste for praktisk personlig økonomi. Målgruppen er vanlige nordmenn som vil forstå økonomien sin uten bankspråk. Innholdet skal føre leseren fra et konkret spørsmål til et trygt, gjennomførbart grep.

Kjerneverdien er kombinasjonen av:

- lett forståelige guider med etterprøvbare kilder
- gratis kalkulatorer, budsjettmal og spareutfordring
- tydelig internlenking fra aktuell sak til relevant verktøy
- ingen skjulte banktilknytninger eller udokumenterte produktpåstander

## Redaksjonell retning

- Skriv kort, konkret og på norsk bokmål.
- Bruk primærkilder for satser, regler, renter og statistikk.
- Oppgi dato og periode for alle tidsfølsomme tall.
- Skill tydelig mellom fakta, eksempel, prognose og generelle råd.
- Prioriter innhold som løser et reelt problem og har en naturlig vei til et eksisterende verktøy.
- Unngå å lage flere sider som svarer på nøyaktig samme søk; bygg heller tydelige temaklynger med internlenker.

## Trafikkmodell

Den ønskede reisen er:

`aktuelt eller søkbart spørsmål → nyttig artikkel → budsjett/verktøy → e-post eller gjenbesøk`

Artikkelregisteret i `lib/articles.ts` styrer siste saker, artikkelarkiv, relasjoner og sitemap. Dagsaktuelle artikler ligger under `/artikler`, mens varige hovedguider ligger i sin fagkategori.

## Nåværende innholdsfokus

Studentøkonomi er den aktive sesongklyngen i august 2026. Hovedsiden er `/artikler/studentbudsjett-2026-lanekassen`, støttet av skolestartguiden og den generelle budsjettguiden. Videre innhold i klyngen må tilføre en ny søkeintensjon, for eksempel kredittkort for studenter eller jobb ved siden av studiene, og lenke tilbake til hovedsiden.

Rente, prisvekst og høstbudsjett er den andre aktive klyngen. Tidsfølsomme tall skal kontrolleres på nytt før de gjenbrukes.

## Måling og distribusjon

- Search Console er fasit for visninger, søkeord, indeksering og klikkrate.
- GA4 brukes for lesing, verktøystart, nedlasting og leads etter samtykke.
- Ingen trafikktall eller konverteringspåstander skal publiseres uten dokumentasjon.
- Hver ny hovedartikkel bør gjenbrukes som ett kort sosialt manus og ett nyttig innlegg i relevant kanal. Del verdi og regneeksempel, ikke bare lenken.

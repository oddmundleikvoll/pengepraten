# Dokumentasjon

**Sist gjennomgått:** 18. august 2026

Dette er dokumentasjonskartet for Pengepraten. Start med de aktive dokumentene. Resten er daterte beslutnings-, research- eller produksjonsnotater og skal ikke behandles som beskrivelse av dagens løsning.

## Aktiv dokumentasjon

| Dokument | Formål | Oppdateres når |
|---|---|---|
| [`../README.md`](../README.md) | Oppstart og inngang til repoet | Kommandoer, struktur eller hovedflyt endres |
| [`../STATUS.md`](../STATUS.md) | Nåtilstand, kjente begrensninger og neste prioriteringer | En større leveranse går i produksjon |
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Teknisk arkitektur og dataflyt | Ruter, integrasjoner eller tekniske grenser endres |
| [`CONTENT_MAINTENANCE.md`](CONTENT_MAINTENANCE.md) | Innholdsarbeid og løpende kvalitetskontroll | Redaksjonell flyt eller SEO-praksis endres |
| [`DEPLOYMENT.md`](DEPLOYMENT.md) | Vercel/GitHub-flyt, verifisering og rollback | Deployoppsettet endres |
| [`../.env.example`](../.env.example) | Navn og hensikt for miljøvariabler | En miljøvariabel legges til, endres eller fjernes |

## Historikk og referansemateriale

| Område | Status |
|---|---|
| `PROJECT_PLAN.md` | Opprinnelig forretnings- og prosjektplan. Deler av teknologivalgene er erstattet. |
| `SPEC.md` | Opprinnelig spesifikasjon for boliglånswidgeten. Implementasjonen er enklere og nettleserbasert. |
| `TECH_REPORT.md` | Punktbilde av en leveranse i april 2026. |
| `RENTEDATA-MAI-2026.md` og `RESEARCH/` | Daterte kilde- og strateginotater. Tall må kontrolleres på nytt før publisering. |
| `docs/plans/` | Gjennomføringsplaner fra tidligere leveranser. |
| `CONTENT/` | Manus, bilder og produksjonsmateriell; ikke systemdokumentasjon. |
| `PRODUCTS/` | Dokumentasjon for nedlastbare produkter. |
| `reddit/` | Separat kanalstrategi, utenfor nettstedets tekniske vedlikeholdsflyt. |

## Dokumentasjonsregler

1. Beskriv dagens løsning i aktiv dokumentasjon, ikke i en ny datert rapport.
2. Sett dato og kildelenke på økonomiske tall som kan endre seg.
3. Flytt gammel kunnskap til historikk eller merk den tydelig; ikke la to dokumenter være konkurrerende fasit.
4. Bruk relative lenker mellom dokumenter, og kontroller dem før commit.
5. Legg aldri API-nøkler, kontaktlister eller andre hemmeligheter i Markdown-filer.

# Rentescraping mai 2026 — Kilder og oppsummering

> **Historisk research.** Tallene er et datert kildegrunnlag og må verifiseres mot primærkildene før de gjenbrukes. Aktiv vedlikeholdsflyt er beskrevet i [`docs/CONTENT_MAINTENANCE.md`](docs/CONTENT_MAINTENANCE.md).

## Norges Bank styringsrente
- **Kilde:** https://www.norges-bank.no/tema/pengepolitikk/styringsrenten/
- **Styringsrente:** 4,25% (hevet fra 4,00%)
- **Dato:** Publisert 07.05.2026
- **Neste rentemøte:** 18. juni 2026
- **Komité:** 5 medlemmer, 8 møter per år

## Banker — scraped data

### Sbanken
- **Kilde:** https://sbanken.no/lane/boliglan
- 50% belåningsgrad: Nominell 4,79% / Effektiv 4,90%
- 60% belåningsgrad: Nominell 4,84% / Effektiv 4,95%
- 75% belåningsgrad: Nominell 4,89% / Effektiv 5,00%
- 90% belåningsgrad: Nominell 5,08% / Effektiv 5,20%
- Ingen gebyrer

### OBOS
- **Kilde:** https://www.obos.no/bank/lan
- Beste nominell rente: 4,71% (fleksibilitet + god sikkerhet)
- OBOS-medlemmer: Fra 4,87%
- Energieffektiv bolig: 4,73%
- Ingen etableringsgebyr ved flytting for medlemmer

### BN Bank
- **Kilde:** https://www.bnbank.no/priser
- 50% belåningsgrad, >4M: Nominell 5,04% / Effektiv 5,19%
- 50% belåningsgrad, <4M: Nominell 5,34% / Effektiv 5,53%
- 75% belåningsgrad, >4M: Nominell 5,30% / Effektiv 5,46%
- 75% belåningsgrad, <4M: Nominell 5,45% / Effektiv 5,64%
- Etableringsgebyr: 2.950 kr, termingebyr: 45 kr

### Andre banker (estimater basert på markedsutvikling)
- DNB: ~4,95-5,35% (flytende)
- Nordea: ~5,00-5,40% (flytende)
- SpareBank 1: ~4,85-5,25% (flytende)
- Handelsbanken: ~4,90-5,30% (flytende)
- Storebrand: ~4,95-5,35% (flytende)

## Renteradar.no
- **Kilde:** https://renteradar.no/
- Tjeneste for sammenligning av boliglånsrenter
- 340.000+ nordmenn har testet
- 4 av 5 kan få lavere boliglånsrente
- Snitt sparing: 10.000 kr/år

## Oppdaterte filer

1. `/app/boliglan/boliglan-rente-2026/page.tsx` — Oppdatert rentetabell med mai 2026-data
2. `/app/verktøy/boliglånskalkulator/BoliglanskalkulatorClient.tsx` — Oppdaterte default-rates og kommentarer
3. `/app/artikler/norges-bank-hever-renten-mai-2026/page.tsx` — NY artikkel om rentehevingen

## Byggstatus
✅ Next.js bygg vellykket — alle sider generert uten feil

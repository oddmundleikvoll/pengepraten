import type { Metadata } from 'next'
import BoliglanskalkulatorClient from './BoliglanskalkulatorClient'

export const metadata: Metadata = {
  title: 'Boliglånskalkulator juli 2026 — Beregn månedlig kostnad for boliglån',
  description: 'Gratis boliglånskalkulator med nedbetalingsplan. Beregn månedlig kostnad, total lånekostnad og effektiv rente for boliglån. Oppdatert med dagens boliglånsrenter fra norske banker.',
}

export default function BoliglanskalkulatorPage() {
  return <BoliglanskalkulatorClient />
}

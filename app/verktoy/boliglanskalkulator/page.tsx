import type { Metadata } from 'next'
import BoliglanskalkulatorClient from './BoliglanskalkulatorClient'

export const metadata: Metadata = {
  title: 'Boliglånskalkulator — Beregn månedlig kostnad for boliglån (2026)',
  description: 'Gratis boliglånskalkulator med nedbetalingsplan. Beregn månedlig kostnad, total lånekostnad og effektiv rente for boliglån. Oppdatert med dagens boliglånsrenter fra norske banker.',
}

export default function BoliglanskalkulatorPage() {
  return <BoliglanskalkulatorClient />
}

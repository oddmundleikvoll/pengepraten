'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

/*
 * SOURCES — Boliglånsrenter (april 2026):
 * - DNB: Flytende ~5,15-5,75%, 3-års binding ~5,05-5,35%, 5-års binding ~4,90-5,25%
 * - Nordea: Flytende ~5,25-5,65%, 3-års binding ~5,10-5,40%, 5-års binding ~4,95-5,25%
 * - SpareBank1: Flytende ~5,10-5,70%, 3-års binding ~4,95-5,30%, 5-års binding ~4,80-5,15%
 * - OBOS: Flytende ~5,20-5,80%, 3-års binding ~5,00-5,35%, 5-års binding ~4,85-5,20%
 * - Storebrand: Flytende ~5,15-5,75%, 3-års binding ~5,00-5,30%, 5-års binding ~4,85-5,15%
 * - Handelsbanken: Flytende ~5,00-5,60%, 3-års binding ~4,90-5,20%, 5-års binding ~4,75-5,05%
 *
 * Typisk boliglånsrente i Norge april 2026:
 * - Flytende rente: 5,10-5,70% (nominell)
 * - Bundet 3 år: 4,95-5,35%
 * - Bundet 5 år: 4,80-5,20%
 *
 * Obligatorisk egenkapital i Norge: 15% (bankene krever dette)
 * Etableringsgebyr: typisk 2.000-6.000 kr
 * Termingebyr: typisk 20-75 kr/mnd
 */

interface MonthlyPayment {
  month: number
  principal: number
  interest: number
  balance: number
  totalPaid: number
}

interface CalculationResult {
  monthlyPayment: number
  totalCost: number
  totalInterest: number
  effectiveRate: number
  kokoPass: string
  schedule: MonthlyPayment[]
  loanAmount: number
}

const RENTING_TYPES = {
  flytende: { label: 'Flytende rente', defaultRate: 5.40, minRate: 4.00, maxRate: 8.00 },
  bundet3: { label: 'Bundet 3 år', defaultRate: 5.15, minRate: 3.50, maxRate: 7.50 },
  bundet5: { label: 'Bundet 5 år', defaultRate: 5.00, minRate: 3.00, maxRate: 7.00 },
}

const REPAYMENT_YEARS = [10, 15, 20, 25, 30]

function calculateEffectiveRate(
  principal: number,
  monthlyPayment: number,
  termMonths: number,
  establishmentFee: number,
  termFee: number
): number {
  // Norwegian effective interest rate using secant method
  // Cash flows: +principal - establishmentFee at t=0, then -(monthlyPayment + termFee) for each month t
  // Solves NPV = principal - establishmentFee - sum(payment/(1+r)^t) = 0 for monthly rate r, then annualises
  if (principal <= 0 || termMonths <= 0 || monthlyPayment <= 0) return 0

  const netReceived = principal - establishmentFee
  if (netReceived <= 0) return 0

  // Clamp extreme values to prevent overflow
  const maxPayment = netReceived * 0.99
  const clampedPayment = Math.min(monthlyPayment + termFee, maxPayment)

  // Annualised fee-adjusted rate as initial guess
  const totalAnnualCost = clampedPayment * 12
  const effectiveAnnualRate = totalAnnualCost / netReceived
  let r = Math.max(0.0001, Math.min((effectiveAnnualRate - 1) / 12, 0.3))

  for (let iter = 0; iter < 150; iter++) {
    // NPV of all future cash flows (fees + payment) at rate r
    const pow = Math.pow(1 + r, termMonths)
    if (!isFinite(pow)) break

    const pvPayments = (clampedPayment * (pow - 1)) / (r * pow)
    const npv = netReceived - pvPayments

    // NPV' (derivative) for Newton-Raphson
    const numerator = r * pow - (pow - 1)
    const denom = r * r * pow
    if (Math.abs(denom) < 1e-20 || !isFinite(numerator / denom)) break

    const dnpv = -(numerator * clampedPayment) / denom

    if (Math.abs(dnpv) < 1e-15) break

    const delta = npv / dnpv
    r = r - delta
    r = Math.max(0.0001 / 12, Math.min(r, 0.5))

    if (Math.abs(delta) < 1e-15) break
  }

  const annualRate = r * 12 * 100
  return Math.max(0, Math.min(annualRate, 100)) // clamp to sane range
}

function generateAmortizationSchedule(
  loanAmount: number,
  annualRate: number,
  monthlyPayment: number,
  termMonths: number
): MonthlyPayment[] {
  const schedule: MonthlyPayment[] = []
  const monthlyRate = annualRate / 100 / 12
  let balance = loanAmount
  let totalPaid = 0

  for (let m = 1; m <= termMonths; m++) {
    const interest = balance * monthlyRate
    const principal = monthlyPayment - interest
    balance = Math.max(0, balance - principal)
    totalPaid += monthlyPayment

    schedule.push({
      month: m,
      principal,
      interest,
      balance,
      totalPaid,
    })
  }

  return schedule
}

function getKokoPassFeedback(
  loanAmount: number,
  monthlyPayment: number,
  effectiveRate: number,
  years: number
): string {
  const annualPayment = monthlyPayment * 12
  const annualIncome = annualPayment / 0.30 // Approximate:房贷 shouldn't exceed 30% of gross income
  const income = annualIncome

  if (effectiveRate > 6.5) {
    return `Med en effektiv rente på ${effectiveRate.toFixed(2)}% bør du vurdere å sammenligne tilbud fra flere banker. Det kan være store forskjeller i renten — spesielt medflytende rente. Prøv også å forhandle med nåværende bank.`
  }
  if (effectiveRate > 5.5) {
    return `Din effektive rente på ${effectiveRate.toFixed(2)}% er moderat. Det kan være verdt å sjekke markedet og se om du kan få et bedre tilbud, spesielt hvis du har god kredittscore og stabil inntekt.`
  }
  if (effectiveRate > 4.8) {
    return `Bra! Du har en konkurransedyktig rente på ${effectiveRate.toFixed(2)}%. Fortsett å sjekke markedet én gang i året — spesielt når bindingstiden utløper — for å sikre at du alltid har det beste tilbudet.`
  }
  return `Utmerket! Med en effektiv rente på ${effectiveRate.toFixed(2)}% har du et veldig godt boliglånsbetingelser. Sørg for å reforhandle vilkårene når bindingstiden utløper for å opprettholde denne fordelen.`
}

export default function BoliglanskalkulatorClient() {
  const [housePrice, setHousePrice] = useState<number>(3000000)
  const [equityPercent, setEquityPercent] = useState<number>(15)
  const [repaymentYears, setRepaymentYears] = useState<number>(25)
  const [rateType, setRateType] = useState<'flytende' | 'bundet3' | 'bundet5'>('flytende')
  const [customRate, setCustomRate] = useState<number>(RENTING_TYPES.flytende.defaultRate)
  const [establishmentFee, setEstablishmentFee] = useState<number>(3000)
  const [termFee, setTermFee] = useState<number>(50)
  const [showFeeSection, setShowFeeSection] = useState<boolean>(false)

  const loanAmount = Math.max(0, housePrice * (1 - equityPercent / 100))
  const termMonths = repaymentYears * 12
  const monthlyRate = customRate / 100 / 12

  const doCalculation = useCallback((): CalculationResult => {
    // Annuitetslån formula: M = P * (r*(1+r)^n) / ((1+r)^n - 1)
    let monthlyPayment = 0
    if (monthlyRate > 0 && termMonths > 0) {
      monthlyPayment =
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
          (Math.pow(1 + monthlyRate, termMonths) - 1))
    }

    const totalCost = monthlyPayment * termMonths
    const totalInterest = totalCost - loanAmount

    const effectiveRate = calculateEffectiveRate(
      loanAmount,
      monthlyPayment,
      termMonths,
      establishmentFee,
      termFee
    )

    const schedule = generateAmortizationSchedule(
      loanAmount,
      customRate,
      monthlyPayment,
      termMonths
    )

    const kokoPass = getKokoPassFeedback(loanAmount, monthlyPayment, effectiveRate, repaymentYears)

    return {
      monthlyPayment,
      totalCost,
      totalInterest,
      effectiveRate,
      kokoPass,
      schedule,
      loanAmount,
    }
  }, [loanAmount, monthlyRate, termMonths, customRate, repaymentYears, establishmentFee, termFee])

  const [result, setResult] = useState<CalculationResult | null>(null)

  useEffect(() => {
    const res = doCalculation()
    setResult(res)
  }, [doCalculation])

  // Sync rate when type changes
  useEffect(() => {
    setCustomRate(RENTING_TYPES[rateType].defaultRate)
  }, [rateType])

  const formatKr = (val: number) =>
    new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(val)

  const formatKrDec = (val: number) =>
    new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 2 }).format(val)

  const handleRateTypeChange = (type: 'flytende' | 'bundet3' | 'bundet5') => {
    setRateType(type)
    setCustomRate(RENTING_TYPES[type].defaultRate)
  }

  const firstYear = result?.schedule.slice(0, 12) ?? []
  const lastMonth = result?.schedule[result.schedule.length - 1]

  return (
    <>
      {/* Hero + SEO Section */}
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/verktøy" className="hover:text-white">Verktøy</Link>
            <span className="mx-2">/</span>
            <span>Boliglånskalkulator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Boliglånskalkulator — Boliglån i Norge
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Beregn nøyaktig månedlig kostnad, total lånekostnad og effektiv rente for ditt
            boliglån. Oppdatert med dagens boliglånsrenter fra norske banker.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-norsk-dark mb-6">Lånedetaljer</h2>
            <div className="space-y-6">

              {/* Boligens pris */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-gray-700">Pris på bolig</label>
                  <span className="text-xl font-bold text-norsk-dark">{formatKr(housePrice)}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={50000}
                  value={housePrice}
                  onChange={(e) => setHousePrice(Number(e.target.value))}
                  className="w-full accent-primary-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>500.000 kr</span>
                  <span>10.000.000 kr</span>
                </div>
              </div>

              {/* Egenkapital */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-gray-700">Egenkapital</label>
                  <span className="text-xl font-bold text-primary-600">{formatKr(housePrice * equityPercent / 100)} <span className="text-sm font-normal text-gray-500">({equityPercent}%)</span></span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={equityPercent}
                  onChange={(e) => setEquityPercent(Number(e.target.value))}
                  className="w-full accent-primary-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="text-primary-600 font-medium">Min. 15% i Norge</span>
                  <span>50%</span>
                </div>
                {equityPercent < 15 && (
                  <div className="mt-2 bg-amber-50 border-l-4 border-amber-400 rounded-r p-3">
                    <p className="text-xs text-amber-800">
                      ⚠️ Bankene krever minimum 15% egenkapital i Norge. Du må ha egenkapital på{' '}
                      <strong>{formatKr(housePrice * 0.15)}</strong> for å kunne få boliglån.
                    </p>
                  </div>
                )}
              </div>

              {/* Lånebeløp (calculated) */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Lånebeløp (beregnet)</span>
                  <span className="text-2xl font-black text-norsk-dark">{formatKr(loanAmount)}</span>
                </div>
              </div>

              {/* Nedbetalingstid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nedbetalingsdyring</label>
                <div className="grid grid-cols-5 gap-2">
                  {REPAYMENT_YEARS.map((y) => (
                    <button
                      key={y}
                      onClick={() => setRepaymentYears(y)}
                      className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                        repaymentYears === y
                          ? 'bg-primary-600 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {y} år
                    </button>
                  ))}
                </div>
              </div>

              {/* Rentetype */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Rentetype</label>
                <div className="space-y-2">
                  {(['flytende', 'bundet3', 'bundet5'] as const).map((type) => (
                    <label
                      key={type}
                      className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                        rateType === type
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="rateType"
                          value={type}
                          checked={rateType === type}
                          onChange={() => handleRateTypeChange(type)}
                          className="w-4 h-4 text-primary-600 accent-primary-600"
                        />
                        <div>
                          <div className="text-sm font-semibold text-norsk-dark">{RENTING_TYPES[type].label}</div>
                          <div className="text-xs text-gray-500">Startrate: {RENTING_TYPES[type].defaultRate.toFixed(2)}%</div>
                        </div>
                      </div>
                      {rateType === type && (
                        <span className="text-xs text-primary-600 font-medium bg-primary-100 px-2 py-1 rounded">
                          Valgt
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Rentesats */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-sm font-medium text-gray-700">Nominell rentesats</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={customRate}
                      onChange={(e) => setCustomRate(Number(e.target.value))}
                      min={RENTING_TYPES[rateType].minRate}
                      max={RENTING_TYPES[rateType].maxRate}
                      step={0.05}
                      className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-right font-bold text-norsk-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-gray-500 font-medium">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={RENTING_TYPES[rateType].minRate}
                  max={RENTING_TYPES[rateType].maxRate}
                  step={0.05}
                  value={customRate}
                  onChange={(e) => setCustomRate(Number(e.target.value))}
                  className="w-full accent-primary-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{RENTING_TYPES[rateType].minRate}%</span>
                  <span>{RENTING_TYPES[rateType].maxRate}%</span>
                </div>
              </div>

              {/* Gebyrer (expandable) */}
              <div>
                <button
                  onClick={() => setShowFeeSection(!showFeeSection)}
                  className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <span>⚙️ Gebyrer (valgfritt — påvirker effektiv rente)</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${showFeeSection ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showFeeSection && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Etableringsgebyr (engangs)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={establishmentFee}
                          onChange={(e) => setEstablishmentFee(Number(e.target.value))}
                          min={0}
                          max={20000}
                          step={100}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <span className="text-gray-500 text-sm">kr</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Typisk: 2.000–6.000 kr. Sett til 0 for å ekskludere.</p>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Termingebyr (per måned)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={termFee}
                          onChange={(e) => setTermFee(Number(e.target.value))}
                          min={0}
                          max={500}
                          step={5}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <span className="text-gray-500 text-sm">kr</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Typisk: 20–75 kr/mnd. Sett til 0 for å ekskludere.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main result card */}
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 rounded-xl p-6 text-white">
              <h2 className="text-lg font-bold mb-4">Resultat</h2>
              {result && (
                <div className="space-y-3">
                  <div className="bg-white/15 rounded-xl p-4 text-center">
                    <div className="text-xs text-primary-200 mb-1 uppercase tracking-wide">Månedlig kostnad</div>
                    <div className="text-3xl font-black">{formatKr(result.monthlyPayment)}</div>
                    <div className="text-xs text-primary-200 mt-1">inkl. avdrag + renter</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-xs text-primary-200 mb-1">Total lånekostnad</div>
                      <div className="text-base font-bold">{formatKr(result.totalCost)}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-xs text-primary-200 mb-1">Total rentekostnad</div>
                      <div className="text-base font-bold">{formatKr(result.totalInterest)}</div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-xs text-primary-200 mb-1">Effektiv rente (inkl. gebyrer)</div>
                    <div className="text-xl font-black">{result.effectiveRate.toFixed(2)}%</div>
                    {(establishmentFee > 0 || termFee > 0) && (
                      <div className="text-xs text-primary-200 mt-1">
                        Ekskl. gebyrer: {customRate.toFixed(2)}%
                      </div>
                    )}
                  </div>

                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-xs text-primary-200 mb-1">Lånebeløp</div>
                    <div className="text-base font-bold">{formatKr(result.loanAmount)}</div>
                  </div>
                </div>
              )}
            </div>

            {/* KOko Pass */}
            {result && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">💡</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-green-800 mb-2">Vår vurdering</h3>
                    <p className="text-xs text-green-700 leading-relaxed">{result.kokoPass}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Rate type info */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Rentehistorikk (april 2026)</h3>
              <div className="space-y-2">
                {[
                  { type: 'Flytende', range: '5,10–5,70%', banks: 'DNB, Nordea, SpareBank1, OBOS, Storebrand' },
                  { type: 'Bundet 3 år', range: '4,95–5,35%', banks: 'DNB, Nordea, SpareBank1, OBOS, Storebrand' },
                  { type: 'Bundet 5 år', range: '4,80–5,20%', banks: 'DNB, Nordea, SpareBank1, OBOS, Storebrand' },
                ].map((r) => (
                  <div key={r.type} className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">{r.type}</span>
                    <div className="text-right">
                      <span className="font-bold text-norsk-dark">{r.range}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">Kilder: Bankenes nettsider, Finansportalen. Renter kan variere etter kredittscore og belåningsgrad.</p>
            </div>
          </div>
        </div>

        {/* Amortization Schedule */}
        {result && result.schedule.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-norsk-dark to-norsk-blue px-6 py-4">
                <h2 className="text-xl font-bold text-white">Nedbetalingsplan</h2>
                <p className="text-gray-300 text-sm mt-1">
                  De første 12 månedene + siste måned ({repaymentYears} år = {termMonths} måneder)
                </p>
              </div>

              {/* Summary row */}
              <div className="bg-gray-50 px-6 py-4 grid grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Lånebeløp</div>
                  <div className="font-bold text-norsk-dark">{formatKr(loanAmount)}</div>
                </div>
                <div>
                  <div className="text-gray-500">Nominell rente</div>
                  <div className="font-bold text-norsk-dark">{customRate.toFixed(2)}%</div>
                </div>
                <div>
                  <div className="text-gray-500">Månedlig kostnad</div>
                  <div className="font-bold text-norsk-dark">{formatKr(result.monthlyPayment)}</div>
                </div>
                <div>
                  <div className="text-gray-500">Effektiv rente</div>
                  <div className="font-bold text-primary-600">{result.effectiveRate.toFixed(2)}%</div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Måned</th>
                      <th className="text-right px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Avdrag</th>
                      <th className="text-right px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Renter</th>
                      <th className="text-right px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">Gjenstående saldo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {firstYear.map((row) => (
                      <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-3 text-gray-600">{row.month}</td>
                        <td className="px-6 py-3 text-right font-medium text-norsk-dark">{formatKr(row.principal)}</td>
                        <td className="px-6 py-3 text-right font-medium text-red-500">{formatKr(row.interest)}</td>
                        <td className="px-6 py-3 text-right font-bold text-norsk-dark">{formatKr(row.balance)}</td>
                      </tr>
                    ))}

                    {/* Ellipsis */}
                    {termMonths > 13 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-3 text-center text-xs text-gray-400">
                          ... {termMonths - 13} flere måneder ...
                        </td>
                      </tr>
                    )}

                    {/* Last month */}
                    {lastMonth && (
                      <tr className="bg-primary-50 hover:bg-primary-50">
                        <td className="px-6 py-3 font-bold text-primary-700">{lastMonth.month}</td>
                        <td className="px-6 py-3 text-right font-bold text-primary-700">{formatKr(lastMonth.principal)}</td>
                        <td className="px-6 py-3 text-right font-bold text-red-400">{formatKr(lastMonth.interest)}</td>
                        <td className="px-6 py-3 text-right font-bold text-primary-700">{formatKr(lastMonth.balance)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig å vite</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Denne kalkulatoren gir et estimat basert på nominell rente og standard
            annuitetsavdrag. Den faktiske effektive renten kan variere avhengig av
            etableringsgebyr, termingebyr og andre kostnader. Alle banker er pålagt å
            oppgi effektiv rente. Sjekk alltid den effektive renten hos banken før du signerer
            låneavtalen. Boliglån i Norge er regulert av finansavtaleloven, og du har rett til
            angrerett. Koeffekten påvirker den effektive renten betydelig — spesielt små lånebeløp
            med høye gebyrer.
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Nøyaktig beregning',
              desc: 'Kalkulatoren bruker standard norsk annuitetsformel og korrekt effektiv rente-beregning.',
              color: 'bg-primary-50',
              iconColor: 'text-primary-600',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: '100% anonym',
              desc: 'Ingen registrering, ingen lagring. Beregningene skjer lokalt i nettleseren din.',
              color: 'bg-accent-50',
              iconColor: 'text-accent-600',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Oppdatert 2026',
              desc: 'Rentene er oppdatert april 2026 basert på reelle tilbud fra norske banker.',
              color: 'bg-green-50',
              iconColor: 'text-green-600',
            },
          ].map((item) => (
            <div key={item.title} className={`${item.color} rounded-xl p-6`}>
              <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 ${item.iconColor}`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-norsk-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

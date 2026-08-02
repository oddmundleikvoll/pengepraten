import type { MarketRates } from './mortgageTypes'

export const MARKET_RATES: MarketRates = {
  averageNominalRate: 5.0,
  effectiveRate: 5.25,
  source: 'SSB / Finansportalen (august 2026)',
  lastUpdated: '2026-08-02',
  nextUpdate: '2026-09-01',
  history: [
    { month: '2026-08', rate: 5.0 },
    { month: '2026-07', rate: 4.95 },
    { month: '2026-06', rate: 4.9 },
    { month: '2026-05', rate: 4.85 },
    { month: '2026-04', rate: 4.8 },
    { month: '2026-03', rate: 4.7 },
    { month: '2026-02', rate: 4.6 },
    { month: '2026-01', rate: 4.5 },
  ],
}

export function getMarketRates(): MarketRates {
  return MARKET_RATES
}

export function calculateMortgageComparison(
  loanAmount: number,
  userRate: number,
  marketRate: number
) {
  const yearlyInterestUser = (loanAmount * userRate) / 100
  const yearlyInterestMarket = (loanAmount * marketRate) / 100
  const yearlyCostDifference = yearlyInterestUser - yearlyInterestMarket
  const monthlyCostDifference = yearlyCostDifference / 12

  const rateAt4_5 = marketRate - 0.3
  const rateAt4_0 = marketRate - 0.8
  const yearlyAt4_5 = (loanAmount * rateAt4_5) / 100
  const yearlyAt4_0 = (loanAmount * rateAt4_0) / 100
  const potentialSavingsAt4_5 = yearlyInterestUser - yearlyAt4_5
  const potentialSavingsAt4_0 = yearlyInterestUser - yearlyAt4_0

  return {
    userRate,
    marketRate,
    difference: userRate - marketRate,
    yearlyCostDifference,
    monthlyCostDifference: Math.abs(monthlyCostDifference),
    isAboveAverage: userRate > marketRate,
    potentialSavingsAt4_5,
    potentialSavingsAt4_0,
  }
}

import type { MarketRates } from './mortgageTypes'

export const MARKET_RATES: MarketRates = {
  averageNominalRate: 4.8,
  effectiveRate: 5.1,
  source: 'SSB / Finansportalen (april 2026)',
  lastUpdated: '2026-04-01',
  nextUpdate: '2026-05-01',
  history: [
    { month: '2026-04', rate: 4.8 },
    { month: '2026-03', rate: 4.7 },
    { month: '2026-02', rate: 4.6 },
    { month: '2026-01', rate: 4.5 },
    { month: '2025-12', rate: 4.4 },
    { month: '2025-11', rate: 4.3 },
    { month: '2025-10', rate: 4.4 },
    { month: '2025-09', rate: 4.5 },
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

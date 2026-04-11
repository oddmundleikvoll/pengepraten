export interface MortgageUser {
  loanAmount: number
  interestRate: number
  remainingYears: number
  email?: string
  createdAt: string
  updatedAt: string
  lastRateCheck: string
  alertEnabled: boolean
}

export interface RateSnapshot {
  month: string
  rate: number
}

export interface MarketRates {
  averageNominalRate: number
  effectiveRate: number
  source: string
  lastUpdated: string
  nextUpdate: string
  history: RateSnapshot[]
}

export interface MortgageCalculation {
  userRate: number
  marketRate: number
  difference: number
  yearlyCostDifference: number
  monthlyCostDifference: number
  isAboveAverage: boolean
  potentialSavingsAt4_5: number
  potentialSavingsAt4_0: number
}

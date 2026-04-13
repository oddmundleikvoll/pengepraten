export interface ChallengeProgressData {
  weeksCompleted: number[]
  startedAt: string
}

export type ChallengeProgress = ChallengeProgressData

const STORAGE_KEY = 'pengepraten_spareutfordring'

// Week amounts: classic escalating — week n = 100*n kr
// Week 1: 100 kr, Week 52: 5,200 kr → Total: ~137,800 kr
export function getWeekAmount(week: number): number {
  return week * 100
}

// Total for a given week (cumulative)
export function getTotalUpTo(week: number): number {
  return Array.from({ length: week }, (_, i) => getWeekAmount(i + 1)).reduce((a, b) => a + b, 0)
}

// Total for all 52 weeks
export const TOTAL_CHALLENGE = getTotalUpTo(52) // 137,800 kr

export function getChallengeProgress(): ChallengeProgressData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ChallengeProgress
  } catch {
    return null
  }
}

export function saveChallengeProgress(progress: ChallengeProgress): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function toggleWeek(week: number): ChallengeProgressData {
  const current = getChallengeProgress() ?? { weeksCompleted: [], startedAt: new Date().toISOString() }
  const idx = current.weeksCompleted.indexOf(week)
  if (idx >= 0) {
    current.weeksCompleted = current.weeksCompleted.filter(w => w !== week)
  } else {
    current.weeksCompleted = [...current.weeksCompleted, week].sort((a, b) => a - b)
  }
  saveChallengeProgress(current)
  return current
}

export function getTotalSaved(weeksCompleted: number[]): number {
  return weeksCompleted.reduce((sum, w) => sum + getWeekAmount(w), 0)
}

export function resetChallenge(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

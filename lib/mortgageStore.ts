import type { MortgageUser } from './mortgageTypes'

const STORAGE_KEY = 'pengepraten_mortgage'

export function getMortgageData(): MortgageUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as MortgageUser
  } catch {
    return null
  }
}

export function saveMortgageData(data: Omit<MortgageUser, 'createdAt' | 'updatedAt' | 'lastRateCheck'>): MortgageUser {
  const now = new Date().toISOString()
  const existing = getMortgageData()
  const payload: MortgageUser = {
    ...data,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    lastRateCheck: now,
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }
  return payload
}

export function updateMortgageData(data: Partial<MortgageUser>): MortgageUser | null {
  const existing = getMortgageData()
  if (!existing) return null
  const updated: MortgageUser = {
    ...existing,
    ...data,
    updatedAt: new Date().toISOString(),
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }
  return updated
}

export function clearMortgageData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}

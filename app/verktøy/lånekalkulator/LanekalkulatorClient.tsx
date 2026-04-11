'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LanekalkulatorClient() {
  const [belop, setBelop] = useState<number>(150000)
  const [rente, setRente] = useState<number>(12)
  const [ar, setAr] = useState<number>(5)
  const [resultat, setResultat] = useState<{
    manedligKostnad: number
    totalKostnad: number
    totalRente: number
    effektivRente: number
  } | null>(null)

  useEffect(() => {
    beregnLan()
  }, [belop, rente, ar])

  const beregnLan = () => {
    const maneder = ar * 12
    const manedligRente = rente / 100 / 12
    
    // Annuitetslån formel
    const manedligKostnad = belop * (manedligRente * Math.pow(1 + manedligRente, maneder)) / 
      (Math.pow(1 + manedligRente, maneder) - 1)
    
    const totalKostnad = manedligKostnad * maneder
    const totalRente = totalKostnad - belop
    
    // Effektiv rente (forenklet - uten gebyrer)
    const effektivRente = rente

    setResultat({
      manedligKostnad,
      totalKostnad,
      totalRente,
      effektivRente,
    })
  }

  const formatKr = (verdi: number) => {
    return new Intl.NumberFormat('nb-NO', {
      style: 'currency',
      currency: 'NOK',
      maximumFractionDigits: 0,
    }).format(verdi)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-norsk-dark via-norsk-blue to-accent-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Hjem</Link>
            <span className="mx-2">/</span>
            <Link href="/verktøy" className="hover:text-white">Verktøy</Link>
            <span className="mx-2">/</span>
            <span>Forbrukslånskalkulator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Forbrukslånskalkulator
          </h1>
          <p className="text-gray-300 text-lg">
            Beregn nøyaktig hvor mye et lån vil koste deg. Se månedlig kostnad, 
            total rente og effektiv rente.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-norsk-dark mb-6">Lånedetaljer</h2>
            
            <div className="space-y-6">
              {/* Lånebeløp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lånebeløp
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={belop}
                    onChange={(e) => setBelop(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="10000"
                    max="5000000"
                    step="10000"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">kr</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={belop}
                  onChange={(e) => setBelop(Number(e.target.value))}
                  className="w-full mt-2 accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10.000 kr</span>
                  <span>500.000 kr</span>
                </div>
              </div>

              {/* Rente */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nominell rente
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={rente}
                    onChange={(e) => setRente(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="1"
                    max="30"
                    step="0.1"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={rente}
                  onChange={(e) => setRente(Number(e.target.value))}
                  className="w-full mt-2 accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Nedbetalingstid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nedbetalingstid
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={ar}
                    onChange={(e) => setAr(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="1"
                    max="15"
                    step="1"
                  />
                  <span className="absolute right-4 top-3 text-gray-500">år</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={ar}
                  onChange={(e) => setAr(Number(e.target.value))}
                  className="w-full mt-2 accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 år</span>
                  <span>15 år</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result section */}
          <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-6">Resultat</h2>
            
            {resultat && (
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-primary-100 mb-1">Månedlig kostnad</div>
                  <div className="text-3xl font-black">{formatKr(resultat.manedligKostnad)}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-xs text-primary-100 mb-1">Total kostnad</div>
                    <div className="text-lg font-bold">{formatKr(resultat.totalKostnad)}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-xs text-primary-100 mb-1">Total rente</div>
                    <div className="text-lg font-bold">{formatKr(resultat.totalRente)}</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-xs text-primary-100 mb-1">Effektiv rente</div>
                  <div className="text-lg font-bold">{resultat.effektivRente.toFixed(2)}%</div>
                  <p className="text-xs text-primary-200 mt-1">
                    * Uten etableringsgebyr og termingebyr
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-xs text-primary-100 mb-1">Renteandel</div>
                  <div className="text-lg font-bold">
                    {((resultat.totalRente / resultat.totalKostnad) * 100).toFixed(1)}%
                  </div>
                  <p className="text-xs text-primary-200 mt-1">
                    av total kostnad er renter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-norsk-dark mb-2">Nøyaktig beregning</h3>
            <p className="text-sm text-gray-600">
              Kalkulatoren bruker standard annuitetsformel for nøyaktige resultater.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-norsk-dark mb-2">100% anonym</h3>
            <p className="text-sm text-gray-600">
              Ingen registrering, ingen lagring. Beregningene skjer lokalt i nettleseren din.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-norsk-dark mb-2">Sammenlign før du låner</h3>
            <p className="text-sm text-gray-600">
              Test ulike rentesatser for å se hvor mye du kan spare på å shoppe rundt.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
          <h3 className="font-bold text-norsk-dark mb-2">Viktig å vite</h3>
          <p className="text-sm text-gray-700">
            Denne kalkulatoren gir et estimat basert på nominell rente. Den faktiske 
            effektive renten kan variere avhengig av etableringsgebyr, termingebyr og 
            andre kostnader. Alltid sjekk den effektive renten hos banken før du signerer 
            låneavtalen. Kalkulatoren tar ikke hensyn til gebyrer.
          </p>
        </div>
      </section>
    </>
  )
}

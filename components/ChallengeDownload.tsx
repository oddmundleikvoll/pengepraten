'use client'

import { useState } from 'react'
import { getWeekAmount, getTotalUpTo } from '@/lib/spareutfordringStore'

function generatePDFHtml(): string {
  const rows = Array.from({ length: 52 }, (_, i) => {
    const week = i + 1
    const amount = getWeekAmount(week)
    const total = getTotalUpTo(week)
    return `
      <tr style="${week % 2 === 0 ? 'background:#f0fdf4' : 'background:#ffffff'}">
        <td style="padding:8px 12px;border:1px solid #e5e7eb;text-align:center;font-weight:600;">Uke ${week}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;text-align:right;font-weight:700;color:#15803d;">${amount.toLocaleString('nb-NO')} kr</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;text-align:right;font-weight:700;">${total.toLocaleString('nb-NO')} kr</td>
      </tr>
    `
  }).join('')

  return `
<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="UTF-8">
  <title>52-ukers Spareutfordring — Pengepraten</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; color: #1a1a2e; }
    h1 { color: #15803d; font-size: 28px; margin-bottom: 4px; }
    .subtitle { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
    .summary { background: #f0fdf4; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
    .summary p { margin: 4px 0; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th { background: #15803d; color: white; padding: 10px 12px; text-align: center; }
    th:last-child, td:last-child { text-align: right; }
    .footer { margin-top: 24px; text-align: center; font-size: 12px; color: #9ca3af; }
    @media print { body { margin: 20px; } }
  </style>
</head>
<body>
  <h1>💚 52-ukers Spareutfordring</h1>
  <p class="subtitle">Pengepraten.no — Spar 137 800 kr på 52 uker</p>

  <div class="summary">
    <p><strong>Slik fungerer det:</strong> Hver uke setter du av et beløp som øker med 100 kr.</p>
    <p>Uke 1 = 100 kr → Uke 52 = 5 200 kr → <strong>Total: 137 800 kr</strong></p>
    <p style="color:#15803d;font-weight:700;margin-top:8px;">🎯 Etter 52 uker har du spart over 137 000 kr — uten å tømme lommeboken!</p>
  </div>

  <table>
    <thead>
      <tr>
        <th>Uke</th>
        <th>Beløp å spare</th>
        <th>Akkumulert total</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>

  <div class="footer">
    Generert av Pengepraten.no — Lykke til med spareutfordringen! 🍀
  </div>
</body>
</html>
  `
}

function downloadPdf() {
  const html = generatePDFHtml()
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = '52-ukers-spareutfordring-pengepraten.html'
  a.click()
  URL.revokeObjectURL(url)
}

function downloadCsv() {
  const header = 'Uke;Beløp (kr);Akkumulert total (kr)\n'
  const rows = Array.from({ length: 52 }, (_, i) => {
    const week = i + 1
    const amount = getWeekAmount(week)
    const total = getTotalUpTo(week)
    return `${week};${amount};${total}`
  }).join('\n')

  const csv = '\ufeff' + header + rows
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = '52-ukers-spareutfordring-pengepraten.csv'
  a.click()
  URL.revokeObjectURL(url)
}

interface ChallengeDownloadProps {
  onEmailSubmit?: (email: string) => Promise<void>
}

export default function ChallengeDownload({ onEmailSubmit }: ChallengeDownloadProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Skriv inn en gyldig e-postadresse')
      return
    }
    setError('')
    setLoading(true)
    try {
      if (onEmailSubmit) {
        await onEmailSubmit(email)
      }
      setSubmitted(true)
    } catch {
      setError('Noe gikk galt. Prøv igjen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Download buttons */}
      <div className="grid sm:grid-cols-2 gap-4">
        <button
          onClick={downloadPdf}
          className="flex items-center gap-3 px-5 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg shrink-0 group-hover:bg-green-200 transition-colors">
            📄
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-800 text-sm">Last ned HTML</div>
            <div className="text-xs text-gray-500">Kan skrives ut som PDF</div>
          </div>
        </button>

        <button
          onClick={downloadCsv}
          className="flex items-center gap-3 px-5 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg shrink-0 group-hover:bg-green-200 transition-colors">
            📊
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-800 text-sm">Last ned CSV</div>
            <div className="text-xs text-gray-500">For Excel / Google Sheets</div>
          </div>
        </button>
      </div>

      {/* Email capture */}
      {!submitted ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Få PDF tilsendt på e-post</h3>
              <p className="text-sm text-gray-500 mt-0.5">Vi sender deg en pen PDF med hele 52-ukers oversikten.</p>
            </div>
          </div>
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="din@epost.no"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send meg PDF-en
                </>
              )}
            </button>
            <p className="text-xs text-gray-400 text-center">
              Ingen spam. Bare nyttig innhold fra Pengepraten.
            </p>
          </form>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-green-800 text-lg mb-1">Sjekk innboksen din! 📬</h3>
          <p className="text-sm text-green-700">PDF-en med 52-ukers oversikten er på vei.</p>
        </div>
      )}
    </div>
  )
}

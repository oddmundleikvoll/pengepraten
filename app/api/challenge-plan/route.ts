import { getTotalUpTo, getWeekAmount, TOTAL_CHALLENGE } from '@/lib/spareutfordringStore'
import { NextResponse } from 'next/server'

export async function GET() {
  const rows = Array.from({ length: 52 }, (_, index) => {
    const week = index + 1
    return `<tr>
      <td>Uke ${week}</td>
      <td class="number">${getWeekAmount(week).toLocaleString('nb-NO')} kr</td>
      <td class="number">${getTotalUpTo(week).toLocaleString('nb-NO')} kr</td>
      <td class="check">□</td>
    </tr>`
  }).join('')

  const html = `<!doctype html>
<html lang="nb">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>52-ukers spareutfordring - Pengepraten</title>
    <style>
      body{font-family:Arial,sans-serif;color:#1a1916;margin:32px;line-height:1.45}
      header{border-bottom:3px solid #31551f;margin-bottom:20px;padding-bottom:14px}
      h1{font-size:28px;margin:0 0 6px;color:#31551f}
      p{margin:0;color:#625f58}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th{background:#31551f;color:white;text-align:left;padding:8px}
      td{border-bottom:1px solid #ded8ce;padding:7px 8px}
      tr:nth-child(even){background:#f4f1eb}
      .number{text-align:right}.check{text-align:center;font-size:18px}
      footer{margin-top:18px;color:#7a766e;font-size:11px;text-align:center}
      @media print{body{margin:12mm} header{break-after:avoid} tr{break-inside:avoid}}
    </style>
  </head>
  <body>
    <header>
      <h1>52-ukers spareutfordring</h1>
      <p>Start med 50 kr og øk med 50 kr hver uke. Totalt: <strong>${TOTAL_CHALLENGE.toLocaleString('nb-NO')} kr</strong>.</p>
    </header>
    <table>
      <thead><tr><th>Uke</th><th class="number">Beløp</th><th class="number">Akkumulert</th><th class="check">Ferdig</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <footer>Pengepraten.no - gratis verktøy for bedre privatøkonomi</footer>
  </body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="52-ukers-spareutfordring-pengepraten.html"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}

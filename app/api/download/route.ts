import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'budsjettmal.xlsx')
    const file = await readFile(filePath)
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="pengepraten-budsjettmal.xlsx"',
        'Content-Length': file.length.toString(),
      },
    })
  } catch (err) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}

import { NextRequest, NextResponse } from 'next/server'

/**
 * Every public HTML page gets a self-referencing canonical URL in the HTTP
 * Link header. Keeping this here avoids a single inherited canonical pointing
 * every App Router page back to the homepage.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const canonical = new URL(request.nextUrl.pathname, 'https://pengepraten.no')

  response.headers.set('Link', `<${canonical.toString()}>; rel="canonical"`)
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}

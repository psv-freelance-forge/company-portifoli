import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('hq_auth_token')?.value;

  const isAdminRoute = request.nextUrl.pathname.startsWith('/hq-admin');
  const isSupportRoute = request.nextUrl.pathname.startsWith('/hq-support');

  if (isAdminRoute || isSupportRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Note: For advanced role-based routing natively in middleware, 
  // you'd typically decode the JWT here using 'jose', but since we 
  // use 'jsonwebtoken' which doesn't run on Edge, we will enforce 
  // strictly inside the Server Component / API layers for role separation.
  // The middleware simply ensures a session cookie is present for the walled garden.

  return NextResponse.next();
}

export const config = {
  matcher: ['/hq-admin/:path*', '/hq-support/:path*'],
};

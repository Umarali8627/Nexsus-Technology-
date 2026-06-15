// Gates the admin dashboard behind the password cookie. Unauthenticated visits
// to /admin/* (except the login page) are redirected to the login screen.
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, getSessionToken } from '@/lib/adminAuth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login page itself must stay public.
  if (pathname === '/admin/login') return NextResponse.next();

  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  if (cookie && cookie === getSessionToken()) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = '/admin/login';
  loginUrl.searchParams.set('from', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*'],
};

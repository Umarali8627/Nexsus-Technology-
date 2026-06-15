// Verifies the admin password and sets an httpOnly session cookie.
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, getSessionToken } from '@/lib/adminAuth';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const { password } = (await request.json().catch(() => ({}))) as {
    password?: string;
  };

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD is not configured on the server.' },
      { status: 500 }
    );
  }

  if (!password || password !== expected) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, getSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}

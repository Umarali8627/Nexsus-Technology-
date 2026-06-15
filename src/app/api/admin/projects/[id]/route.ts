// Admin-only: delete a single project from Firestore.
import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { ADMIN_COOKIE, getSessionToken } from '@/lib/adminAuth';

export const runtime = 'nodejs';

function requireAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  return Boolean(cookie && cookie === getSessionToken());
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const db = getAdminDb();
    await db.collection('projects').doc(params.id).delete();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Delete project error:', err);
    return NextResponse.json({ error: 'Failed to delete project.' }, { status: 500 });
  }
}

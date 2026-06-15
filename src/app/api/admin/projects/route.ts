// Admin-only: list and create portfolio projects in Firestore via the Admin SDK.
import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { ADMIN_COOKIE, getSessionToken } from '@/lib/adminAuth';
import { slugify } from '@/lib/slug';
import type { Project } from '@/types';

export const runtime = 'nodejs';

function requireAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_COOKIE)?.value;
  return Boolean(cookie && cookie === getSessionToken());
}

const VALID_CATEGORIES = ['web', 'app', 'ai'];

// GET — list all projects (used by the admin dashboard).
export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const db = getAdminDb();
    const snap = await db.collection('projects').orderBy('createdAt', 'desc').get();
    const projects = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return NextResponse.json({ projects });
  } catch (err) {
    console.error('List projects error:', err);
    return NextResponse.json({ error: 'Failed to load projects.' }, { status: 500 });
  }
}

// POST — create a new project.
export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await request.json()) as Partial<Project>;

    const title = (body.title || '').trim();
    if (!title) {
      return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
    }

    const category = VALID_CATEGORIES.includes(body.category || '')
      ? body.category
      : 'web';

    const technologies = Array.isArray(body.technologies)
      ? body.technologies.map((t) => String(t).trim()).filter(Boolean)
      : [];

    const results = Array.isArray(body.results)
      ? body.results.map((r) => String(r).trim()).filter(Boolean)
      : [];

    // Drop undefined values — Firestore rejects them.
    const doc: Record<string, unknown> = {
      slug: slugify(title) || `project-${Date.now()}`,
      title,
      category,
      description: (body.description || '').trim(),
      thumbnail: (body.thumbnail || '').trim(),
      technologies,
      results,
      liveUrl: (body.liveUrl || '').trim(),
      behanceUrl: (body.behanceUrl || '').trim(),
      client: (body.client || '').trim(),
      industry: (body.industry || '').trim(),
      duration: (body.duration || '').trim(),
      challenge: (body.challenge || '').trim(),
      solution: (body.solution || '').trim(),
      featured: Boolean(body.featured),
      createdAt: Date.now(),
    };

    const db = getAdminDb();
    const ref = await db.collection('projects').add(doc);
    return NextResponse.json({ id: ref.id, ...doc }, { status: 201 });
  } catch (err) {
    console.error('Create project error:', err);
    const message =
      err instanceof Error && err.message.includes('FIREBASE_SERVICE_ACCOUNT')
        ? 'Firebase Admin is not configured. See FIREBASE_SETUP.md.'
        : 'Failed to save project.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

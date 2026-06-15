// Shared helpers for combining the hardcoded portfolio with Firestore projects.
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { projects as staticProjects } from '@/lib/data';
import type { Project } from '@/types';

export { slugify } from '@/lib/slug';

// Maps a raw Firestore document into the Project shape used across the site.
export function mapDocToProject(id: string, data: Record<string, unknown>): Project {
  return {
    id,
    source: 'firebase',
    slug: (data.slug as string) || id,
    title: (data.title as string) || 'Untitled',
    category: ((data.category as string) || 'web') as Project['category'],
    description: (data.description as string) || '',
    thumbnail: (data.thumbnail as string) || '',
    technologies: Array.isArray(data.technologies) ? (data.technologies as string[]) : [],
    client: data.client as string | undefined,
    industry: data.industry as string | undefined,
    duration: data.duration as string | undefined,
    challenge: data.challenge as string | undefined,
    solution: data.solution as string | undefined,
    results: Array.isArray(data.results) ? (data.results as string[]) : undefined,
    liveUrl: data.liveUrl as string | undefined,
    behanceUrl: data.behanceUrl as string | undefined,
    featured: Boolean(data.featured),
    createdAt: (data.createdAt as number) || 0,
  };
}

// Fetches Firestore projects on the client. Returns [] if Firebase isn't set up
// or the read fails, so the site always degrades gracefully to static data.
export async function fetchFirebaseProjects(): Promise<Project[]> {
  if (!isFirebaseConfigured) return [];
  try {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => mapDocToProject(d.id, d.data()));
  } catch (err) {
    console.error('Failed to load Firebase projects:', err);
    return [];
  }
}

// Firebase projects first (newest work up top), then the original case studies.
export async function getAllProjects(): Promise<Project[]> {
  const firebaseProjects = await fetchFirebaseProjects();
  const staticWithSource: Project[] = staticProjects.map((p) => ({
    ...p,
    source: 'static' as const,
  }));
  return [...firebaseProjects, ...staticWithSource];
}

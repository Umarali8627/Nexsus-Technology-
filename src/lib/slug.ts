// URL-safe slug from arbitrary text. Kept separate so server code can use it
// without pulling in the client Firestore SDK.
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

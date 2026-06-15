// Shared constants + helpers for the simple password-based admin gate.
export const ADMIN_COOKIE = 'nexus_admin';

// The cookie holds this fixed token once the correct password is entered.
// Middleware and API routes compare the cookie value against it.
export function getSessionToken(): string {
  const pw = process.env.ADMIN_PASSWORD || '';
  // Derive a stable, non-reversible-ish token from the password so the raw
  // password is never stored in the browser cookie.
  let hash = 0;
  const salted = `nexus::${pw}::admin`;
  for (let i = 0; i < salted.length; i++) {
    hash = (hash << 5) - hash + salted.charCodeAt(i);
    hash |= 0;
  }
  return `tok_${Math.abs(hash).toString(36)}_${salted.length}`;
}

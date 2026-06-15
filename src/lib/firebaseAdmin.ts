// Firebase Admin SDK — server-only. Used by the protected admin API routes to
// write/delete projects. It bypasses Firestore security rules, so the public
// read-only rules can stay locked down. NEVER import this in a client component.
import {
  initializeApp,
  getApps,
  getApp,
  cert,
  type App,
} from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

// The service account is supplied as a single base64-encoded JSON string so it
// survives multi-line private keys cleanly across .env files and hosts.
function loadServiceAccount() {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  if (!b64) {
    throw new Error(
      'FIREBASE_SERVICE_ACCOUNT_BASE64 is not set. See FIREBASE_SETUP.md.'
    );
  }
  const json = Buffer.from(b64, 'base64').toString('utf-8');
  return JSON.parse(json) as {
    project_id: string;
    client_email: string;
    private_key: string;
  };
}

let cachedDb: Firestore | null = null;

export function getAdminDb(): Firestore {
  if (cachedDb) return cachedDb;

  const serviceAccount = loadServiceAccount();
  const app: App = getApps().length
    ? getApp()
    : initializeApp({
        credential: cert({
          projectId: serviceAccount.project_id,
          clientEmail: serviceAccount.client_email,
          privateKey: serviceAccount.private_key,
        }),
      });

  cachedDb = getFirestore(app);
  return cachedDb;
}

# Admin Panel & Firebase Setup

This site has an admin panel at **`/admin`** where you add portfolio projects by
pasting a **website URL** or a **Behance link**. The app auto-fetches the title,
description, and preview image, you tweak anything you want, and it saves to
**Firebase Firestore**. Projects then appear on the public `/portfolio` page
alongside the original case studies.

---

## 1. Create a Firebase project

1. Go to <https://console.firebase.google.com/> and click **Add project**.
2. Once created, open **Build → Firestore Database → Create database**.
   - Start in **production mode** (we lock writes below).
   - Pick a location near you.

## 2. Get the public web config

1. In the console: **Project settings (gear icon) → General**.
2. Under **Your apps**, click the **Web** icon (`</>`) and register an app.
3. Copy the `firebaseConfig` values into your `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

## 3. Get the Admin service account (for secure writes)

Writes go through the server, never the browser, so they need a service account.

1. **Project settings → Service accounts → Generate new private key**.
   This downloads a JSON file.
2. Base64-encode the entire file into a single line:

   **macOS / Linux:**
   ```bash
   base64 -i serviceAccount.json | tr -d '\n'
   ```

   **Windows (PowerShell):**
   ```powershell
   [Convert]::ToBase64String([IO.File]::ReadAllBytes("serviceAccount.json"))
   ```

3. Paste the result into `.env.local`:
   ```
   FIREBASE_SERVICE_ACCOUNT_BASE64=eyJ0eXAi...
   ```

> Keep this secret. Never commit the JSON file or this value.

## 4. Set the admin password

```
ADMIN_PASSWORD=your-strong-password
```

This is what you type at `/admin/login`.

## 5. Lock down Firestore rules

In **Firestore → Rules**, paste this so the public can only *read*; all writes
happen server-side through the Admin SDK (which bypasses these rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{doc} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

Click **Publish**.

---

## Using it

1. Run the site: `npm run dev`
2. Go to <http://localhost:3000/admin> → log in with `ADMIN_PASSWORD`.
3. Paste a website or Behance URL, click **Fetch**, edit the fields, **Add Project**.
4. Visit `/portfolio` — your new project shows up at the top.

## Notes

- If Firebase isn't configured yet, the site still works and just shows the
  original hardcoded projects.
- Images are loaded directly from their source URLs (the Next.js config already
  allows any HTTPS host).
- The admin gate is a single shared password stored server-side in a cookie. For
  multi-user accounts later, swap it for Firebase Authentication.

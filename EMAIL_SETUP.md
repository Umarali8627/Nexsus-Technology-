# Email Setup Instructions

## Quick Setup (Resend)

### Step 1: Create API route manually
Since the `src/app/api/contact` directory doesn't exist yet, you need to:

1. Create the folder structure:
   - Right-click in `src/app` → New Folder → `api`
   - Inside `api`, create another folder → `contact`

2. Copy the content from `src/app/api-contact-route.ts` and create a new file:
   - Right-click in `src/app/api/contact` → New File → `route.ts`
   - Paste the code from `api-contact-route.ts` into this new file

3. Delete `src/app/api-contact-route.ts` (the temporary file)

### Step 2: Install Resend
```bash
npm install resend
```

### Step 3: Get Resend API Key
1. Go to https://resend.com
2. Sign up for a free account
3. Go to API Keys in your dashboard
4. Copy your API key

### Step 4: Add Environment Variables
1. Create a `.env.local` file in your project root (copy from `.env.example`)
2. Add your Resend API key:
   ```
   RESEND_API_KEY=your_api_key_here
   COMPANY_EMAIL=info.nexustech26@gmail.com
   ```

### Step 5: Configure Resend Domain (Production)
For production use:
1. Verify your domain in Resend dashboard
2. Update the `from` field in `src/app/api/contact/route.ts` from `onboarding@resend.dev` to your domain (e.g., `noreply@yourcompany.com`)

### Step 6: Restart Your Dev Server
```bash
npm run dev
```

## Testing
1. Go to http://localhost:3000/contact
2. Fill out the form and submit
3. Check your email at `info.nexustech26@gmail.com` for the submission

## Troubleshooting
- **API returns 400**: Missing required fields (name, email, service, message)
- **API returns 500**: Check RESEND_API_KEY is correctly set
- **Email not received**: Check spam folder, or verify domain setup in Resend
- **Error on dev server**: Make sure to run `npm install resend` before `npm run dev`

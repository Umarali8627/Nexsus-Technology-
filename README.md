# Nexus Technology — Corporate Website

Premium corporate website for Nexus Technology built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Typography:** SF Pro Display + EB Garamond + JetBrains Mono
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod (ready for integration)
- **Language:** TypeScript (strict mode)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd nexus-technology

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── portfolio/page.tsx  # Portfolio grid
│   ├── portfolio/[slug]/   # Dynamic case study pages
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page with form
│   ├── not-found.tsx       # Custom 404
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── portfolio/          # Portfolio components
│   └── ui/                 # Reusable UI components
├── lib/
│   └── data.ts             # All site content & data
└── types/
    └── index.ts            # TypeScript interfaces
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, stats, tech stack, process, why us, CTA |
| Services | `/services` | Detailed service breakdowns |
| Portfolio | `/portfolio` | Filterable project grid |
| Case Study | `/portfolio/[slug]` | Individual project case study |
| About | `/about` | Mission, timeline, team |
| Contact | `/contact` | Contact form + info cards |
| 404 | `*` | Custom not-found page |

## Customization

### Content
All content is centralized in `src/lib/data.ts`. Update:
- `siteConfig` — Company info, contact details, social links
- `stats` — Counter numbers
- `services` — Service descriptions and features
- `projects` — Portfolio projects and case studies
- `team` — Team member profiles
- `processSteps` — How We Deliver steps

### Colors
Tailwind config (`tailwind.config.js`) defines the full color system under `colors.nexus`. Primary colors:
- Blue: `#2563EB`
- Navy: `#0F172A`
- Cyan: `#06B6D4`

### Typography
- Headings: SF Pro Display (system font fallback)
- Serif accent: EB Garamond (Google Fonts)
- Monospace: JetBrains Mono (Google Fonts)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## TODO — Before Launch

- [ ] Replace placeholder images with real screenshots
- [ ] Update team member photos and bios
- [ ] Add real contact details
- [ ] Finalize company tagline
- [ ] Set up contact form backend (EmailJS / NodeMailer)
- [ ] Connect Google Analytics
- [ ] Set up admin panel (Phase 2)
- [ ] Add sitemap.xml and robots.txt
- [ ] SSL certificate and domain configuration

## License

Confidential — Internal Use Only

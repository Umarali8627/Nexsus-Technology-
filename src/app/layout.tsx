import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nexus Technology — Building Tomorrow\'s Technology, Today',
    template: '%s — Nexus Technology',
  },
  description: 'Premium software development company specializing in web applications, mobile apps, and AI/LLM solutions. We build scalable, beautiful products.',
  keywords: ['software development', 'web development', 'mobile app development', 'AI solutions', 'LLM', 'Next.js', 'React', 'Flutter'],
  openGraph: {
    title: 'Nexus Technology — Building Tomorrow\'s Technology, Today',
    description: 'Premium software development company specializing in web, mobile, and AI solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nexus Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Technology',
    description: 'Premium software development company.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const t = localStorage.getItem('theme'); const d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', d); document.documentElement.style.colorScheme = d ? 'dark' : 'light'; } catch {} })();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

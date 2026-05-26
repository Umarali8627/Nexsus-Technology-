import Link from 'next/link';
import { siteConfig, navLinks, services } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="text-gray-900 transition-colors bg-nexus-surface/60 dark:bg-white/[0.02]">

      <div className="max-content section-padding-sm">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-[18px] font-semibold"
            >
              Nexus<span className="text-nexus-blue">.</span>
            </Link>

            <p className="mt-4 text-[14px] text-gray-600 dark:text-slate-400 max-w-[280px]">
              {siteConfig.description}
            </p>

            <div className="flex gap-4 mt-6">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  className="text-gray-500 transition dark:text-slate-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest text-gray-500 mb-5">
              Navigation
            </h4>

            <ul className="space-y-3">
              {[...navLinks, { label: 'Contact', href: '/contact' }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest text-gray-500 mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-[14px] text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-widest text-gray-500 mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-[14px] text-gray-600 dark:text-slate-400">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-white/[0.06] flex flex-col sm:flex-row justify-between gap-4">

          <p className="text-[13px] text-gray-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Nexus Technology
          </p>

          <div className="flex gap-6 text-[13px] text-gray-500 dark:text-slate-500">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

/* Social Icon (unchanged) */
function SocialIcon({ platform }: { platform: string }) {
  const size = 18;

  switch (platform) {
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.2-3.35-1.2-.45-1.1-1.1-1.4-1.1-1.4-.9-.6.07-.6.07-.6 1 .07 1.5 1 1.5 1 .9 1.5 2.4 1 3 .8.1-.7.4-1 .7-1.2-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7 3.5 3.5 0 0 1 .1-2.7s.8-.2 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1a3.5 3.5 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.5 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}
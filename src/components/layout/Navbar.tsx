'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-white/80 dark:bg-nexus-dark/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
    : isHome
      ? 'bg-transparent'
      : 'bg-white/80 dark:bg-nexus-dark/70 backdrop-blur-xl';

  const textColor =
    !scrolled && isHome
      ? 'text-gray-900 dark:text-white'
      : 'text-gray-900 dark:text-slate-100';

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-content flex items-center justify-between h-16 md:h-[72px] px-6 md:px-12 lg:px-20">

          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-[17px] font-semibold tracking-heading ${textColor} transition-colors`}
          >
            Nexus<span className="text-nexus-blue">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="items-center hidden gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-medium rounded-lg transition-colors
                    ${isActive
                      ? 'text-nexus-blue'
                      : `${textColor} hover:text-nexus-blue`
                    }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-nexus-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="ml-2">
              <ThemeToggle />
            </div>

            <Link
              href="/contact"
              className="ml-3 px-5 py-2 text-[14px] font-medium rounded-lg bg-nexus-blue text-white
              hover:bg-nexus-blue-dark hover:-translate-y-[1px]
              hover:shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-900 rounded-lg dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-nexus-dark"
          >
            <div className="flex items-center justify-between px-6 pt-5">
              <Link
                href="/"
                className="font-display text-[17px] font-semibold text-gray-900 dark:text-white"
              >
                Nexus<span className="text-nexus-blue">.</span>
              </Link>

              <ThemeToggle />
            </div>

            <div className="flex flex-col items-start justify-center h-full gap-2 px-8 pt-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-[32px] font-display font-medium py-2
                        ${isActive
                          ? 'text-nexus-blue'
                          : 'text-gray-900 dark:text-white'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 px-8 py-3 bg-nexus-blue text-white rounded-lg text-[16px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
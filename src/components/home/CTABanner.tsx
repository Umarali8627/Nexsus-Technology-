'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden transition-colors duration-300 md:py-32 bg-gray-50 dark:bg-nexus-navy">

      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[300px] rounded-full
        bg-blue-200/40 dark:bg-nexus-blue/[0.08]
        blur-[120px]" />
      </div>

      <div className="relative px-6 text-center max-content md:px-12 lg:px-20">

        <ScrollReveal>

          {/* Tagline */}
          <p className="font-serif italic text-[15px]
          text-gray-600 dark:text-nexus-cyan/80 mb-4">

            Let&apos;s build something remarkable

          </p>

          {/* Heading */}
          <h2 className="font-display text-[32px] md:text-[44px]
          font-semibold text-gray-900 dark:text-white
          tracking-display leading-tight max-w-[600px] mx-auto">

            Ready to build something great?

          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[16px]
          text-gray-600 dark:text-slate-400
          max-w-[440px] mx-auto leading-relaxed">

            Tell us about your project. We&apos;ll get back to you within 24 hours with a plan.

          </p>

          {/* Button */}
          <div className="mt-8">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5
              bg-nexus-blue text-white text-[15px] font-medium rounded-lg

              hover:-translate-y-[1px]
              hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]

              transition-all duration-200 overflow-hidden"
            >

              <span className="absolute inset-0 transition opacity-0 bg-white/10 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>

            </Link>

          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}
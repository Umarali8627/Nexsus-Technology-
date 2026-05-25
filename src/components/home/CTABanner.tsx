'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-nexus-navy relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-nexus-blue/[0.08] blur-[120px]" />
      </div>

      <div className="relative max-content px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal>
          <p className="font-serif italic text-[15px] text-nexus-cyan/80 mb-4">
            Let&apos;s build something remarkable
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] font-semibold text-white tracking-display leading-tight max-w-[600px] mx-auto">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-[16px] text-slate-400 max-w-[440px] mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll get back to you within 24 hours with a plan.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-nexus-blue text-white text-[15px] font-medium rounded-lg
                hover:bg-nexus-blue-dark hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.3)]
                transition-all duration-200"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

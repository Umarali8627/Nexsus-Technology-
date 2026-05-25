'use client';

import Link from 'next/link';
import { Globe, Smartphone, Brain, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} strokeWidth={1.5} />,
  Smartphone: <Smartphone size={22} strokeWidth={1.5} />,
  Brain: <Brain size={22} strokeWidth={1.5} />,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-content">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            What We Do
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
            Services built for scale
          </h2>
          <p className="mt-3 text-[15px] text-nexus-text-secondary leading-relaxed max-w-[520px]">
            From concept to deployment, we build products that move the needle for startups and enterprises alike.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <Link href="/services" className="group block h-full">
                <div className="relative h-full p-7 rounded-xl border border-black/[0.04] bg-nexus-surface/50
                  hover:border-nexus-blue/[0.12] hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)]
                  hover:-translate-y-1 transition-all duration-300">

                  <div className="w-11 h-11 rounded-lg bg-nexus-blue/[0.06] flex items-center justify-center text-nexus-blue
                    group-hover:bg-nexus-blue group-hover:text-white transition-all duration-300">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="mt-5 font-display text-[17px] font-semibold text-nexus-navy tracking-tight-sm">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[14px] text-nexus-text-secondary leading-relaxed">
                    {service.description.slice(0, 120)}...
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-nexus-blue
                    opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

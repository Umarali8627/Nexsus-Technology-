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
    <section className="relative overflow-hidden bg-white section-padding dark:bg-nexus-dark">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-nexus-blue/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="max-content">
        <ScrollReveal>
          
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            What We Do
          </p>

          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy dark:text-slate-100 tracking-heading leading-tight">
            Services built for scale
          </h2>

          <p className="mt-3 text-[15px] text-nexus-text-secondary dark:text-slate-400 leading-relaxed max-w-[520px]">
            From concept to deployment, we build products that move the needle for startups and enterprises alike.
          </p>
        </ScrollReveal>

        {/* Divider */}
        <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

        <div className="grid grid-cols-1 gap-6 mt-14 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <Link href="/services" className="block h-full group">

                <div className="relative h-full p-7 rounded-xl border border-black/[0.05] dark:border-white/[0.08]
                  bg-nexus-surface/60 dark:bg-white/[0.03]
                  hover:bg-white dark:hover:bg-white/[0.05]
                  hover:-translate-y-1 transition-all duration-300
                  hover:shadow-[0_12px_45px_rgba(0,0,0,0.06)] overflow-hidden">

                  {/* Gradient Hover Border */}
                  <div className="absolute inset-0 rounded-xl p-[1px] opacity-0 group-hover:opacity-100 transition">
                    <div className="w-full h-full rounded-xl bg-gradient-to-r from-nexus-blue/20 via-purple-500/20 to-transparent" />
                  </div>

                  {/* Top glow line */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-nexus-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center
                    bg-gradient-to-br from-nexus-blue/10 to-purple-500/10
                    text-nexus-blue
                    shadow-[0_0_20px_rgba(59,130,246,0.15)]
                    group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                    group-hover:scale-110 group-hover:rotate-[-6deg]
                    transition-all duration-300">

                    {iconMap[service.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-[18px] font-semibold text-nexus-navy dark:text-slate-100 tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[14px] text-nexus-text-secondary dark:text-slate-400 leading-[1.6]">
                    {service.description.slice(0, 120)}...
                  </p>

                  {/* CTA */}
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
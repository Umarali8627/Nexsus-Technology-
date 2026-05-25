'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-nexus-navy relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-nexus-blue/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] rounded-full bg-nexus-cyan/10 blur-[80px]" />
      </div>

      <div className="relative max-content px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="font-display text-[40px] md:text-[48px] font-semibold text-white tracking-display leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-[13px] font-medium text-slate-400 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

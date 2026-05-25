'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden transition-colors duration-300 md:py-24 bg-gray-50 dark:bg-nexus-navy">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-200/40 dark:bg-nexus-blue/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] rounded-full bg-cyan-200/40 dark:bg-nexus-cyan/10 blur-[80px]" />
      </div>

      <div className="relative px-6 max-content md:px-12 lg:px-20">

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">

          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>

              <div className="text-center lg:text-left">

                {/* Number */}
                <div className="font-display text-[40px] md:text-[48px]
                font-semibold text-gray-900 dark:text-white tracking-display leading-none">

                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                </div>

                {/* Label */}
                <p className="mt-2 text-[13px] font-medium uppercase tracking-wide
                text-gray-600 dark:text-slate-400">

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
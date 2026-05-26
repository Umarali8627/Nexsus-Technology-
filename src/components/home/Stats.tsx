'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden transition-colors duration-300 md:py-24 bg-nexus-surface/60 dark:bg-white/[0.02]"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 opacity-40">

        {/* Glow 1 */}
        <div
          className="
          absolute top-0 left-1/4
          w-[300px] h-[300px]
          rounded-full
          bg-blue-200/40
          dark:bg-blue-500/5
          blur-[100px]
        "
        />

        {/* Glow 2 */}
        <div
          className="
          absolute bottom-0 right-1/4
          w-[200px] h-[200px]
          rounded-full
          bg-cyan-200/40
          dark:bg-cyan-400/5
          blur-[80px]
        "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative px-6 max-content md:px-12 lg:px-20">

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">

          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.08}
            >
              <div className="text-center lg:text-left">

                {/* Number */}
                <div
                  className="
                  font-display
                  text-[40px] md:text-[48px]
                  font-semibold
                  tracking-display
                  leading-none
                  text-gray-900 dark:text-white
                "
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <p
                  className="
                  mt-2
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-wide
                  text-gray-600 dark:text-slate-400
                "
                >
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
'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import { processSteps } from '@/lib/data';

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-content">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            Process
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
            How we deliver
          </h2>
          <p className="mt-3 text-[15px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
            A proven, transparent process designed to keep every project on track and every stakeholder aligned.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="group relative">
                {/* Step number */}
                <span className="font-mono text-[48px] font-medium text-nexus-blue/[0.08] leading-none
                  group-hover:text-nexus-blue/[0.15] transition-colors duration-300">
                  {step.number}
                </span>

                <h3 className="mt-1 font-display text-[16px] font-semibold text-nexus-navy tracking-tight-sm">
                  {step.title}
                </h3>

                <p className="mt-2 text-[14px] text-nexus-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

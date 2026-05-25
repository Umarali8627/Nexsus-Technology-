'use client';

import { Users, Zap, Layers, Handshake, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { whyChooseUs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={20} strokeWidth={1.5} />,
  Zap: <Zap size={20} strokeWidth={1.5} />,
  Layers: <Layers size={20} strokeWidth={1.5} />,
  Handshake: <Handshake size={20} strokeWidth={1.5} />,
  TrendingUp: <TrendingUp size={20} strokeWidth={1.5} />,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-nexus-surface/60">
      <div className="max-content">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            Why Nexus
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
            Built different
          </h2>
          <p className="mt-3 text-[15px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
            What sets us apart in a crowded market of development agencies.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group p-6 rounded-xl bg-white border border-black/[0.04]
                hover:border-nexus-blue/[0.1] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-nexus-blue/[0.06] flex items-center justify-center text-nexus-blue
                  group-hover:bg-nexus-blue group-hover:text-white transition-all duration-300">
                  {iconMap[item.icon]}
                </div>
                <h3 className="mt-4 font-display text-[15px] font-semibold text-nexus-navy tracking-tight-sm">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] text-nexus-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

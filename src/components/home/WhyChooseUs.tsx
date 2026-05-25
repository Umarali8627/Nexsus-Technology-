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
    <section className="section-padding bg-nexus-surface/60 dark:bg-white/[0.02]">
      <div className="max-content">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            Why Nexus
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy dark:text-slate-100 tracking-heading leading-tight">
            Built different
          </h2>
          <p className="mt-3 text-[15px] text-nexus-text-secondary dark:text-slate-400 leading-relaxed max-w-[480px]">
            What sets us apart in a crowded market of development agencies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
             <div className="group relative p-6 rounded-xl border border-black/[0.04] dark:border-white/[0.08]
  bg-white dark:bg-nexus-dark-surface
  hover:bg-nexus-surface/40 dark:hover:bg-white/[0.05]
  hover:-translate-y-1 transition-all duration-300
  hover:shadow-[0_12px_45px_rgba(0,0,0,0.06)]
  overflow-hidden">

  {/* Gradient hover border (like Services) */}
  <div className="absolute inset-0 rounded-xl p-[1px] opacity-0 group-hover:opacity-100 transition">
    <div className="w-full h-full rounded-xl bg-gradient-to-r from-nexus-blue/20 via-purple-500/20 to-transparent" />
  </div>

  {/* Top glow line */}
  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-nexus-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

  {/* Icon */}
  <div className="w-10 h-10 rounded-lg bg-nexus-blue/[0.06] flex items-center justify-center
    text-nexus-blue
    group-hover:bg-nexus-blue group-hover:text-white
    group-hover:scale-110 group-hover:rotate-[-6deg]
    transition-all duration-300">

    {iconMap[item.icon]}
  </div>

  {/* Title */}
  <h3 className="mt-4 font-display text-[15px] font-semibold text-nexus-navy dark:text-slate-100 tracking-tight-sm">
    {item.title}
  </h3>

  {/* Description */}
  <p className="mt-2 text-[14px] text-nexus-text-secondary dark:text-slate-400 leading-relaxed">
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

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Smartphone, Brain, ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} strokeWidth={1.5} />,
  Smartphone: <Smartphone size={28} strokeWidth={1.5} />,
  Brain: <Brain size={28} strokeWidth={1.5} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="max-content px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Services
            </p>
            <h1 className="font-display text-[36px] md:text-[48px] font-semibold text-nexus-navy tracking-display leading-tight max-w-[600px]">
              Solutions engineered for impact
            </h1>
            <p className="mt-4 text-[16px] text-nexus-text-secondary leading-relaxed max-w-[520px]">
              We specialize in three core domains, each backed by deep expertise and a track record of delivering production-grade systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, idx) => (
        <section
          key={service.slug}
          className={`section-padding ${idx % 2 === 0 ? 'bg-nexus-surface/50' : 'bg-white'}`}
        >
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Info */}
              <ScrollReveal>
                <div className="w-14 h-14 rounded-xl bg-nexus-blue/[0.06] flex items-center justify-center text-nexus-blue">
                  {iconMap[service.icon]}
                </div>

                <h2 className="mt-6 font-display text-[28px] md:text-[32px] font-semibold text-nexus-navy tracking-heading leading-tight">
                  {service.title}
                </h2>

                <p className="mt-4 text-[15px] text-nexus-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Tech stack tags */}
                <div className="mt-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-nexus-text-tertiary mb-3">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[12px] font-mono font-medium text-nexus-navy/60 bg-white
                          border border-black/[0.06] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Features */}
              <ScrollReveal delay={0.15}>
                <div className="p-8 rounded-2xl bg-white border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <p className="text-[13px] font-medium text-nexus-navy tracking-tight-sm mb-6">
                    Key capabilities
                  </p>
                  <div className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-nexus-blue/[0.08] flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-nexus-blue" strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] text-nexus-text-secondary leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 bg-nexus-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-nexus-blue/[0.06] blur-[100px]" />
        </div>
        <div className="relative max-content px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-[15px] text-nexus-cyan/80 mb-4">
              Not sure where to start?
            </p>
            <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-white tracking-heading leading-tight max-w-[500px] mx-auto">
              Let&apos;s figure it out together
            </h2>
            <p className="mt-3 text-[15px] text-slate-400 max-w-[400px] mx-auto">
              Book a free consultation and we&apos;ll help identify the right solution for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-7 py-3 bg-nexus-blue text-white text-[15px] font-medium rounded-lg
                hover:bg-nexus-blue-dark hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.3)]
                transition-all duration-200"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

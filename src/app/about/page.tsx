'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { team } from '@/lib/data';

const milestones = [
  { year: '2022', title: 'Founded', description: 'Nexus Technology was born from a shared vision to build software that matters.' },
  { year: '2023', title: 'First 10 Projects', description: 'Delivered 10 production-grade projects across web and mobile platforms.' },
  { year: '2024', title: 'AI Division Launched', description: 'Expanded into AI and LLM solutions, building custom models for enterprise clients.' },
  { year: '2025', title: '50+ Projects Milestone', description: 'Crossed 50 delivered projects with clients across 5 countries.' },
];

export default function AboutPage() {
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
              About
            </p>
            <h1 className="font-display text-[36px] md:text-[48px] font-semibold text-nexus-navy tracking-display leading-tight max-w-[600px]">
              About Nexus Technology
            </h1>
            <p className="mt-4 text-[16px] text-nexus-text-secondary leading-relaxed max-w-[560px]">
              We&apos;re a team of engineers, designers, and strategists building software that solves real problems for growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-nexus-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-nexus-blue/[0.06] blur-[100px]" />
        </div>

        <div className="relative max-content px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-cyan mb-4">
              Our Mission
            </p>
            <blockquote className="font-serif text-[24px] md:text-[32px] lg:text-[36px] text-white leading-[1.4] tracking-tight max-w-[720px] italic">
              &ldquo;To empower businesses with technology that doesn&apos;t just work — it transforms how they operate, compete, and grow.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding Story Timeline */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <ScrollReveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Our Journey
            </p>
            <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
              The story so far
            </h2>
          </ScrollReveal>

          <div className="mt-14 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-black/[0.06]" />

            <div className="space-y-10">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <div className="flex-shrink-0 md:w-[120px] md:text-right">
                      <span className="font-mono text-[14px] font-medium text-nexus-blue">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex items-center justify-center flex-shrink-0 -ml-[5px]">
                      <div className="w-2.5 h-2.5 rounded-full bg-nexus-blue ring-4 ring-white" />
                    </div>

                    <div className="flex-1 pb-2">
                      <h3 className="font-display text-[16px] font-semibold text-nexus-navy tracking-tight-sm">
                        {milestone.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-nexus-surface/50">
        <div className="max-content">
          <ScrollReveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Team
            </p>
            <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
              The people behind Nexus
            </h2>
            <p className="mt-3 text-[15px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
              A small, focused team that delivers outsized impact.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group p-6 rounded-xl bg-white border border-black/[0.04]
                  hover:border-nexus-blue/[0.1] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all duration-300">

                  {/* Photo placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nexus-surface to-nexus-surface-alt
                    flex items-center justify-center mb-5 overflow-hidden">
                    <span className="font-display text-[20px] font-semibold text-nexus-blue/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <h3 className="font-display text-[16px] font-semibold text-nexus-navy tracking-tight-sm">
                    {member.name}
                  </h3>
                  <p className="text-[13px] font-medium text-nexus-blue mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[13px] text-nexus-text-secondary leading-relaxed">
                    {member.bio}
                  </p>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-[12px] font-medium text-nexus-text-tertiary
                        hover:text-nexus-blue transition-colors"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-nexus-navy">
        <div className="max-content px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-white tracking-heading">
              Interested in working with us?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-6 px-7 py-3 bg-nexus-blue text-white text-[15px] font-medium rounded-lg
                hover:bg-nexus-blue-dark transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

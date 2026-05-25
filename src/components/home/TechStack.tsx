'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = ['Web', 'Mobile', 'AI & ML'] as const;

const techData: Record<string, { name: string; abbr: string }[]> = {
  Web: [
    { name: 'React', abbr: 'Re' },
    { name: 'Next.js', abbr: 'Nx' },
    { name: 'TypeScript', abbr: 'TS' },
    { name: 'Node.js', abbr: 'No' },
    { name: 'Express', abbr: 'Ex' },
    { name: 'MongoDB', abbr: 'Mg' },
    { name: 'PostgreSQL', abbr: 'Pg' },
    { name: 'Redis', abbr: 'Rd' },
    { name: 'AWS', abbr: 'Aw' },
    { name: 'Docker', abbr: 'Dk' },
    { name: 'Vercel', abbr: 'Vc' },
    { name: 'Tailwind', abbr: 'Tw' },
  ],
  Mobile: [
    { name: 'Flutter', abbr: 'Fl' },
    { name: 'React Native', abbr: 'RN' },
    { name: 'Swift', abbr: 'Sw' },
    { name: 'Kotlin', abbr: 'Kt' },
    { name: 'Firebase', abbr: 'Fb' },
    { name: 'Supabase', abbr: 'Sb' },
    { name: 'GraphQL', abbr: 'Gq' },
    { name: 'REST APIs', abbr: 'Rs' },
  ],
  'AI & ML': [
    { name: 'Python', abbr: 'Py' },
    { name: 'TensorFlow', abbr: 'TF' },
    { name: 'PyTorch', abbr: 'PT' },
    { name: 'OpenAI', abbr: 'OA' },
    { name: 'LangChain', abbr: 'LC' },
    { name: 'HuggingFace', abbr: 'HF' },
    { name: 'FastAPI', abbr: 'FA' },
    { name: 'Pinecone', abbr: 'Pc' },
    { name: 'SageMaker', abbr: 'SM' },
  ],
};

export default function TechStackSection() {
  const [active, setActive] = useState<string>('Web');

  return (
    <section className="section-padding bg-nexus-surface/60">
      <div className="max-content">
        <ScrollReveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
            Technology
          </p>
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy tracking-heading leading-tight">
            Our technology stack
          </h2>
          <p className="mt-3 text-[15px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
            We use production-ready, cutting-edge tools to build solutions that scale.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex items-center gap-1 p-1 bg-white rounded-lg border border-black/[0.04] w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 text-[13px] font-medium rounded-md transition-all duration-200
                  ${active === cat ? 'text-nexus-navy' : 'text-nexus-text-secondary hover:text-nexus-navy'}`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="techTab"
                    className="absolute inset-0 bg-nexus-surface border border-black/[0.04] rounded-md shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
            >
              {techData[active].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-black/[0.04]
                    hover:border-nexus-blue/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]
                    hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-nexus-navy/[0.04] flex items-center justify-center
                    text-[13px] font-mono font-medium text-nexus-navy/70 group-hover:bg-nexus-blue/[0.08]
                    group-hover:text-nexus-blue transition-all duration-200">
                    {tech.abbr}
                  </div>
                  <span className="text-[12px] font-medium text-nexus-text-secondary text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

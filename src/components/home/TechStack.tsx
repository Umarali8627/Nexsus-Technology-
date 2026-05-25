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
    { name: 'Kubernetes', abbr: 'Kb' },
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
    { name: 'n8n', abbr: 'n8n' },
    { name: 'LangChain', abbr: 'LC' },
    { name: 'HuggingFace', abbr: 'HF' },
    { name: 'FastAPI', abbr: 'FA' },
    { name: 'crewAi', abbr: 'CI' },
    { name: 'SQL', abbr: 'SQL' },
  ],
};

function TechLogo({ name, abbr }: { name: string; abbr: string }) {
  const common = 'w-10 h-10';
  const mono = (
    <div className={`${common} rounded-lg bg-nexus-navy/[0.04] dark:bg-white/[0.06] flex items-center justify-center
      text-[13px] font-mono font-medium text-nexus-navy/70 dark:text-slate-300`}>
      {abbr}
    </div>
  );
 

  const icon: Record<string, string> = {
  React: 'react',
  'Next.js': 'nextdotjs',
  TypeScript: 'typescript',
  'Node.js': 'nodedotjs',
  Express: 'express',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Redis: 'redis',

  // FIXED
  Kubernetes: 'kubernetes',

  Docker: 'docker',
  Vercel: 'vercel',
  Tailwind: 'tailwindcss',

  Flutter: 'flutter',
  'React Native': 'react',
  Swift: 'swift',
  Kotlin: 'kotlin',
  Firebase: 'firebase',
  Supabase: 'supabase',
  GraphQL: 'graphql',

  Python: 'python',
  TensorFlow: 'tensorflow',
  PyTorch: 'pytorch',

  // FIXED
  n8n: 'n8n',
  LangChain: 'langchain',
  HuggingFace: 'huggingface',
  FastAPI: 'fastapi',

  // FIXED
  crewAi: 'crewai',
  SQL: 'mysql',
 

  // REST APIs
  'REST APIs': 'fastapi',
};
  const slug = icon[name];
  if (!slug) return mono;

  const url = `https://cdn.simpleicons.org/${slug}`;

  // Some logos (e.g. Next.js/Vercel) are black by default; show a white variant in dark mode.
  if (slug === 'nextdotjs' || slug === 'vercel' || slug === 'express') {
    const lightUrl = `https://cdn.simpleicons.org/${slug}/000`;
    const darkUrl = `https://cdn.simpleicons.org/${slug}/fff`;
    return (
      <>
        <img src={lightUrl} alt={`${name} logo`} width={40} height={40} className={`${common} dark:hidden`} loading="lazy" />
        <img src={darkUrl} alt={`${name} logo`} width={40} height={40} className={`${common} hidden dark:block`} loading="lazy" />
      </>
    );
  }

  return <img src={url} alt={`${name} logo`} width={40} height={40} className={common} loading="lazy" />;
}

export default function TechStackSection() {
  const [active, setActive] = useState<string>('Web');

  return (
    <section className="section-padding bg-nexus-surface/60 dark:bg-white/[0.02]">
      <div className="max-content">
        <ScrollReveal>

  {/* Moving Tech Stack */}
  <div className="relative mb-10 overflow-hidden">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-nexus-surface dark:from-[#0B0F19] to-transparent" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-nexus-surface dark:from-[#0B0F19] to-transparent" />

    <motion.div
      className="flex gap-4 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
      }}
    >
      {[
        ...Object.values(techData).flat(),
        ...Object.values(techData).flat(),
      ].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full
          bg-white dark:bg-nexus-dark-surface
          border border-black/[0.05] dark:border-white/[0.08]
          shadow-sm"
        >
          <TechLogo name={tech.name} abbr={tech.abbr} />

          <span className="text-[13px] font-medium whitespace-nowrap text-nexus-text-secondary dark:text-slate-300">
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>

  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
    Technology
  </p>

  <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-nexus-navy dark:text-slate-100 tracking-heading leading-tight">
    Our technology stack
  </h2>

  <p className="mt-3 text-[15px] text-nexus-text-secondary dark:text-slate-400 leading-relaxed max-w-[480px]">
    We use production-ready, cutting-edge tools to build solutions that scale.
  </p>

</ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex items-center gap-1 p-1 bg-white dark:bg-nexus-dark-surface rounded-lg border border-black/[0.04] dark:border-white/[0.08] w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 text-[13px] font-medium rounded-md transition-all duration-200
                  ${active === cat ? 'text-nexus-navy dark:text-slate-100' : 'text-nexus-text-secondary dark:text-slate-400 hover:text-nexus-navy dark:hover:text-slate-100'}`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="techTab"
                    className="absolute inset-0 bg-nexus-surface dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.10] rounded-md shadow-sm"
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
              className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
            >
              {techData[active].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white dark:bg-nexus-dark-surface border border-black/[0.04] dark:border-white/[0.08]
                    hover:border-nexus-blue/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]
                    hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <div className="group-hover:scale-[1.03] transition-transform duration-200">
                    <TechLogo name={tech.name} abbr={tech.abbr} />
                  </div>
                  <span className="text-[12px] font-medium text-nexus-text-secondary dark:text-slate-400 text-center">
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

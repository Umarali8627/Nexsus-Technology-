'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/lib/data';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Web Development', value: 'web' },
  { label: 'App Development', value: 'app' },
  { label: 'AI & LLM', value: 'ai' },
] as const;

const categoryColors: Record<string, string> = {
  web: 'bg-nexus-blue/[0.08] text-nexus-blue',
  app: 'bg-emerald-500/[0.08] text-emerald-600',
  ai: 'bg-purple-500/[0.08] text-purple-600',
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-nexus-surface/60 dark:bg-white/[0.02]">
        <div className="px-6 max-content md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Portfolio
            </p>
            <h1 className="font-display text-[36px] md:text-[48px] font-semibold text-nexus-navy tracking-display leading-tight dark:text-slate-100">
              Our Work
            </h1>
            <p className="mt-3 text-[16px] text-nexus-text-secondary leading-relaxed max-w-[480px]">
              Projects delivered across web, mobile, and AI — each one a partnership built on trust and technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pt-8 bg-nexus-surface/60 dark:bg-white/[0.02]">
        <div className="max-content">
          {/* Filter tabs */}
          <ScrollReveal>
            <div className="flex items-center gap-1 p-1 bg-nexus-surface/60 dark:bg-white/[0.02] rounded-md w-max mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`relative px-5 py-2 text-[13px] font-medium rounded-md transition-all duration-200
                    ${filter === cat.value ? 'text-nexus-navy' : 'text-nexus-text-secondary hover:text-nexus-navy dark:hover:text-slate-100'}`}
                >
                  {filter === cat.value && (
                    <motion.div
                      layoutId="portfolioFilter"
                      className="absolute inset-0 bg-white border border-black/[0.04] rounded-md shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/portfolio/${project.slug}`} className="block group">
                    <div className="rounded-xl border border-black/[0.04] overflow-hidden
                      hover:border-nexus-blue/[0.1] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]
                      hover:-translate-y-1 transition-all duration-300">

                      {/* Thumbnail placeholder */}
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-nexus-surface to-nexus-surface-alt overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-[13px] text-nexus-text-tertiary">
                            {project.title}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-nexus-navy/60 group-hover:opacity-100">
                          <span className="flex items-center gap-1.5 text-[13px] font-medium text-white">
                            View Case Study
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>

                      {/* Card content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md uppercase tracking-wide ${categoryColors[project.category]}`}>
                            {project.category === 'ai' ? 'AI' : project.category}
                          </span>
                        </div>

                        <h3 className="font-display text-[16px] font-semibold text-nexus-navy tracking-tight-sm">
                          {project.title}
                        </h3>

                        <p className="mt-1.5 text-[13px] text-nexus-text-secondary leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[11px] font-mono bg-nexus-surface/60 dark:bg-white/[0.02]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-[11px] font-mono text-nexus-text-tertiary">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

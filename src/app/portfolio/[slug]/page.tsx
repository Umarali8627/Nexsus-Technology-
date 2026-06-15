'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Check, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects as staticProjects } from '@/lib/data';
import { getAllProjects } from '@/lib/projects';
import type { Project } from '@/types';

const categoryLabels: Record<string, string> = {
  web: 'Web Development',
  app: 'App Development',
  ai: 'AI & LLM',
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Start with the static projects, then merge in Firebase ones on the client.
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllProjects().then((all) => {
      setProjects(all);
      setLoaded(true);
    });
  }, []);

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    // A Firebase slug may not be present until the client fetch resolves.
    if (!loaded) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="animate-spin text-nexus-text-tertiary" size={24} />
        </div>
      );
    }
    return notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Back link */}
      <div className="pt-24 md:pt-28 bg-white">
        <div className="max-content px-6 md:px-12 lg:px-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-nexus-text-secondary hover:text-nexus-navy transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 md:pb-20 bg-white">
        <div className="max-content px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 text-[11px] font-medium rounded-md uppercase tracking-wide bg-nexus-blue/[0.08] text-nexus-blue mb-4">
              {categoryLabels[project.category]}
            </span>

            <h1 className="font-display text-[36px] md:text-[48px] font-semibold text-nexus-navy tracking-display leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-[16px] text-nexus-text-secondary leading-relaxed max-w-[600px]">
              {project.description}
            </p>

            {/* External links */}
            {(project.liveUrl || project.behanceUrl) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-nexus-blue px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-nexus-blue-dark"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                )}
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-black/[0.08] px-5 py-2.5 text-[14px] font-medium text-nexus-navy transition-colors hover:border-nexus-blue/40"
                  >
                    View on Behance <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Project meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Client', value: project.client || 'Confidential' },
              { label: 'Industry', value: project.industry || 'Technology' },
              { label: 'Duration', value: project.duration || 'N/A' },
              { label: 'Category', value: categoryLabels[project.category] },
            ].map((meta) => (
              <div key={meta.label}>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-nexus-text-tertiary mb-1">
                  {meta.label}
                </p>
                <p className="text-[14px] font-medium text-nexus-navy">
                  {meta.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project screenshot placeholder */}
      <section className="bg-nexus-surface/50">
        <div className="max-content px-6 md:px-12 lg:px-20 py-16">
          <ScrollReveal>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-nexus-navy/[0.03] to-nexus-blue/[0.03] border border-black/[0.04] flex items-center justify-center">
              {project.thumbnail && /^https?:\/\//.test(project.thumbnail) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-mono text-[14px] text-nexus-text-tertiary">
                  Project Screenshot — {project.title}
                </span>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <section className="section-padding bg-white">
          <div className="max-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {project.challenge && (
                <ScrollReveal>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
                    The Challenge
                  </p>
                  <h2 className="font-display text-[24px] md:text-[28px] font-semibold text-nexus-navy tracking-heading leading-tight">
                    What we were solving
                  </h2>
                  <p className="mt-4 text-[15px] text-nexus-text-secondary leading-[1.7]">
                    {project.challenge}
                  </p>
                </ScrollReveal>
              )}

              {project.solution && (
                <ScrollReveal delay={0.1}>
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-cyan mb-3">
                    Our Approach
                  </p>
                  <h2 className="font-display text-[24px] md:text-[28px] font-semibold text-nexus-navy tracking-heading leading-tight">
                    How we solved it
                  </h2>
                  <p className="mt-4 text-[15px] text-nexus-text-secondary leading-[1.7]">
                    {project.solution}
                  </p>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="section-padding bg-nexus-navy">
          <div className="max-content">
            <ScrollReveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-cyan mb-3">
                Results
              </p>
              <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-white tracking-heading leading-tight">
                Impact delivered
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.results.map((result, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-nexus-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-nexus-cyan" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] text-slate-300 leading-relaxed">
                      {result}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <ScrollReveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-nexus-blue mb-3">
              Technology
            </p>
            <h2 className="font-display text-[24px] md:text-[28px] font-semibold text-nexus-navy tracking-heading">
              Built with
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-[13px] font-mono font-medium text-nexus-navy/70 bg-nexus-surface
                    border border-black/[0.04] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next navigation */}
      <section className="py-12 bg-nexus-surface/50 border-t border-black/[0.04]">
        <div className="max-content px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group flex items-center gap-3 text-nexus-text-secondary hover:text-nexus-navy transition-colors"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-nexus-text-tertiary">Previous</p>
                  <p className="text-[14px] font-medium">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-3 text-right text-nexus-text-secondary hover:text-nexus-navy transition-colors"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-nexus-text-tertiary">Next</p>
                  <p className="text-[14px] font-medium">{nextProject.title}</p>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-nexus-navy">
        <div className="max-content px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-white tracking-heading">
              Have a similar project in mind?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-6 px-7 py-3 bg-nexus-blue text-white text-[15px] font-medium rounded-lg
                hover:bg-nexus-blue-dark transition-all duration-200"
            >
              Let&apos;s Talk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

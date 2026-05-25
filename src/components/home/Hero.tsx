'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexus-dark">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 dark-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-nexus-blue/[0.07] blur-[100px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-nexus-cyan/[0.05] blur-[100px]"
        />
        <motion.div
          animate={{ y: [10, -15, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-nexus-blue-dark/[0.06] blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-content px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-[13px] text-slate-400 font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-nexus-cyan animate-pulse" />
            Software Development Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold text-white tracking-display leading-[1.05] max-w-[900px] mx-auto"
        >
          Building Tomorrow&apos;s
          <br />
          <span className="relative">
            Technology
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-nexus-blue/40" viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M0 6 Q75 0, 150 6 T300 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
          , Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-[16px] md:text-[18px] text-slate-400 leading-relaxed max-w-[540px] mx-auto font-light"
        >
          We design and engineer web applications, mobile experiences, and
          AI solutions that scale with your ambition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="group flex items-center gap-2 px-7 py-3 bg-nexus-blue text-white text-[15px] font-medium rounded-lg
              hover:bg-nexus-blue-dark hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.3)]
              transition-all duration-200"
          >
            Explore Our Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 px-7 py-3 text-slate-300 text-[15px] font-medium rounded-lg
              border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04]
              transition-all duration-200"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

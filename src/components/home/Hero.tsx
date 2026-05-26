'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
     className="relative flex items-center justify-center min-h-screen overflow-hidden transition-colors duration-300 bg-white dark:bg-black"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        
        {/* Gradient Mesh */}
        <div
          className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]
          dark:dark-gradient-mesh
        "
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-100 grid-pattern" />

        {/* Floating Orb 1 */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="
          absolute top-1/4 left-1/4
          w-[420px] h-[420px] rounded-full
          bg-blue-500/[0.10]
          dark:bg-nexus-blue/[0.07]
          blur-[120px]
        "
        />

        {/* Floating Orb 2 */}
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="
          absolute bottom-1/4 right-1/4
          w-[360px] h-[360px] rounded-full
          bg-cyan-400/[0.08]
          dark:bg-nexus-cyan/[0.05]
          blur-[120px]
        "
        />

        {/* Floating Orb 3 */}
        <motion.div
          animate={{ y: [10, -15, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[520px] h-[520px] rounded-full
          bg-blue-600/[0.06]
          dark:bg-nexus-blue-dark/[0.06]
          blur-[140px]
        "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 text-center max-content md:px-12 lg:px-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
          font-display
          text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px]
          font-semibold
          text-slate-900 dark:text-white
          tracking-display
          leading-[1.05]
          max-w-[900px]
          mx-auto
        "
        >
          Building Tomorrow&apos;s
          <br />

          <span className="relative inline-block">
            Technology

            {/* underline wave */}
            <svg
              className="absolute left-0 w-full h-3 -bottom-2 text-blue-500/40 dark:text-nexus-blue/40"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q75 0, 150 6 T300 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </span>

          , Today
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="
          mt-6
          text-[16px] md:text-[18px]
          text-slate-600 dark:text-slate-400
          leading-relaxed
          max-w-[560px]
          mx-auto
          font-light
        "
        >
          We design and engineer scalable web applications, mobile
          experiences, and AI-powered systems that help ambitious
          companies grow faster.
        </motion.p>

        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row"
        >
          {/* Primary Button */}
          <Link
            href="/services"
            className="
            group relative flex items-center gap-2
            px-7 py-3
            bg-nexus-blue
            text-white
            text-[15px]
            font-medium
            rounded-lg
            hover:-translate-y-[1px]
            hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]
            transition-all duration-200
            overflow-hidden
          "
          >
            {/* hover overlay */}
            <span
              className="absolute inset-0 transition opacity-0 bg-white/10 group-hover:opacity-100"
            />

            <span className="relative flex items-center gap-2">
              Explore Services

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Secondary Button */}
          <Link
            href="/portfolio"
            className="
            group relative flex items-center gap-2
            px-7 py-3
            text-slate-700 dark:text-slate-300
            text-[15px]
            font-medium
            rounded-lg
            border border-slate-300 dark:border-white/[0.1]
            hover:border-slate-400 dark:hover:border-white/[0.2]
            hover:bg-black/[0.03] dark:hover:bg-white/[0.04]
            hover:-translate-y-[1px]
            transition-all duration-200
          "
          >
            View Work
          </Link>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown
            size={20}
            className="text-slate-400 dark:text-slate-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
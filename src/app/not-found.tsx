'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[80px] md:text-[120px] font-semibold text-nexus-blue/[0.08] leading-none block">
            404
          </span>
          <h1 className="font-display text-[24px] md:text-[32px] font-semibold text-nexus-navy tracking-heading mt-2">
            Page not found
          </h1>
          <p className="mt-3 text-[15px] text-nexus-text-secondary max-w-[360px] mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-nexus-blue text-white text-[14px] font-medium rounded-lg
              hover:bg-nexus-blue-dark transition-all duration-200"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

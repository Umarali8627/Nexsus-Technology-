'use client';

import { motion } from 'framer-motion';
import { techData } from '@/lib/techData';
import { TechLogo } from '@/components/ui/TechLogo';

export default function HeroTechOrbit() {
  const orbits = [
    { radius: 120, duration: 16, techs: techData['Web'].slice(0, 4) },
    { radius: 200, duration: 24, techs: techData['Mobile'].slice(0, 5) },
    { radius: 280, duration: 34, techs: techData['AI & ML'].slice(0, 6) },
  ];

  return (
    <div className="relative w-[640px] h-[640px] flex items-center justify-center">

      {/* center Nexus */}
      <div className="absolute w-20 h-20 rounded-full z-10 flex items-center justify-center
        bg-white dark:bg-nexus-dark-surface
        border border-black/[0.08] dark:border-white/[0.10]
        shadow-[0_0_40px_rgba(37,99,235,0.15)] dark:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
        <span className="font-display font-semibold text-[15px] text-nexus-navy dark:text-slate-100 tracking-tight">
          Nexus.
        </span>
      </div>

      {/* orbit rings */}
      {orbits.map((orbit, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-black/[0.07] dark:border-white/[0.08]"
          style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
        />
      ))}

      {/* revolving logos */}
      {orbits.map((orbit, oi) => (
        <motion.div
          key={oi}
          className="absolute"
          style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: orbit.duration, ease: 'linear' }}
        >
          {orbit.techs.map((tech, i) => {
            const angle = (i / orbit.techs.length) * 2 * Math.PI;
            const x = orbit.radius + orbit.radius * Math.cos(angle) - 24;
            const y = orbit.radius + orbit.radius * Math.sin(angle) - 24;

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{ left: x, top: y }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: orbit.duration, ease: 'linear' }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full
                  bg-white dark:bg-nexus-dark-surface
                  border border-black/[0.08] dark:border-white/[0.10]
                  shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                  <TechLogo name={tech.name} abbr={tech.abbr} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ))}

    </div>
  );
}
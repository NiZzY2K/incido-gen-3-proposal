import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightSurfaceProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * ReactBits-inspired cursor-tracking spotlight surface that creates a restrained,
 * studio-grade illumination follow effect on hover without garish glow.
 */
export const SpotlightSurface: React.FC<SpotlightSurfaceProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(8, 102, 255, 0.14)',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'between';
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'between',
  badge,
}) => {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="font-mono text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded bg-[#0D1B3B] border border-[#0866FF]/30 text-[#3B82F6]">
          SEC // {index}
        </span>
        <span className="h-px w-6 bg-[#B4C2DE]/25" />
        <span className="font-mono text-xs tracking-[0.16em] uppercase text-[#B4C2DE]">
          {eyebrow}
        </span>
        {badge && (
          <span className="ml-auto font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#0866FF]/15 text-[#60A5FA] border border-[#0866FF]/30">
            {badge}
          </span>
        )}
      </div>

      <div
        className={
          align === 'between' && description
            ? 'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end'
            : 'max-w-3xl'
        }
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`${
            align === 'between' && description ? 'lg:col-span-7' : ''
          } text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.08]`}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`${
              align === 'between' ? 'lg:col-span-5' : 'mt-4'
            } text-base sm:text-lg text-[#B4C2DE] leading-relaxed`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
};


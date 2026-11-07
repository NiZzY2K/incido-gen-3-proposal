import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Layers3 } from 'lucide-react';
import { INCIDO_LEGACY } from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

export const LegacyTimelineSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <section
      id="legacy"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-gradient-to-b from-[#071126] via-[#0D1B3B]/40 to-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="Previous INCIDO Projects & Evolution"
          badge="3 Editions of Creative Progression"
          title={
            <>
              THE <span className="text-[#0866FF]">INCIDO LEGACY</span>: FROM FOUNDATION TO
              FLAGSHIP.
            </>
          }
          description="The SLTC Media Unit introduced INCIDO as an initiative to encourage students to explore their creative interests and develop their abilities in different media-related fields. The first two editions, INCIDO GEN 1.0 and INCIDO GEN 2.0, helped establish a foundation for the initiative and paved the way for its third edition."
        />

        {/* Interactive Edition Selector Stepper */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INCIDO_LEGACY.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const isCurrent = idx === 2;

              return (
                <button
                  key={item.edition}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#0D1B3B] border-[#0866FF] shadow-[0_0_25px_rgba(8,102,255,0.2)]'
                      : 'bg-[#0D1B3B]/40 border-[#B4C2DE]/15 hover:border-[#B4C2DE]/35'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#071126] text-[#60A5FA] border border-[#0866FF]/30">
                      {item.yearLabel}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0866FF] text-white font-bold">
                        <Sparkles className="w-2.5 h-2.5" /> Active Edition
                      </span>
                    )}
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {item.edition}
                  </div>
                  <div className="text-xs text-[#B4C2DE] mt-1">{item.title}</div>

                  {/* Progress Indicator Bar */}
                  <div className="mt-4 h-1 w-full rounded-full bg-[#071126] overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        isSelected ? 'w-full bg-[#0866FF]' : 'w-1/3 bg-[#B4C2DE]/25'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full Three-Column Progressive Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {INCIDO_LEGACY.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const isGen3 = idx === 2;

            return (
              <motion.div
                key={item.edition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveIndex(idx)}
                className="cursor-pointer h-full"
              >
                <SpotlightSurface
                  className={`h-full rounded-2xl p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                    isGen3
                      ? 'bg-gradient-to-b from-[#0D1B3B] to-[#071126] border-[#0866FF]/60 shadow-[0_10px_35px_rgba(8,102,255,0.18)]'
                      : isSelected
                      ? 'bg-[#0D1B3B]/80 border-[#3B82F6]/50'
                      : 'bg-[#0D1B3B]/45 border-[#B4C2DE]/15 hover:border-[#B4C2DE]/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12">
                      <span className="font-mono text-xs text-[#B4C2DE]">
                        CHAPTER 0{idx + 1}
                      </span>
                      <span
                        className={`font-mono text-[11px] uppercase px-2.5 py-0.5 rounded ${
                          isGen3
                            ? 'bg-[#0866FF] text-white font-bold'
                            : 'bg-[#071126] text-[#B4C2DE] border border-[#B4C2DE]/15'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2">
                      <Layers3
                        className={`w-5 h-5 ${isGen3 ? 'text-[#0866FF]' : 'text-[#3B82F6]'}`}
                      />
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {item.edition}
                      </h3>
                    </div>

                    <h4 className="text-sm font-bold text-[#60A5FA] mb-4">{item.title}</h4>

                    <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#B4C2DE]/12 space-y-2.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white block mb-2">
                      Edition Milestones:
                    </span>
                    {item.keyFocus.map((focusPoint) => (
                      <div
                        key={focusPoint}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B4C2DE]"
                      >
                        <Check className="w-4 h-4 text-[#0866FF] shrink-0 mt-0.5" />
                        <span>{focusPoint}</span>
                      </div>
                    ))}

                    {isGen3 && (
                      <div className="pt-4">
                        <a
                          href="#experience"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] hover:text-white transition-colors"
                        >
                          <span>Explore INCIDO GEN 3.0 Structure</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </SpotlightSurface>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Film,
  Layers,
  Mic2,
  Target,
  Award,
  Users,
  Info,
  CheckCircle2,
} from 'lucide-react';
import {
  COMPETITION_FIELDS,
  EVENT_OBJECTIVES,
  PLANNED_ACTIVITIES,
} from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

const FIELD_ICON_MAP = {
  Camera,
  Film,
  Layers,
  Mic2,
};

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          eyebrow="Experience INCIDO GEN 3.0"
          badge="Open to All SLTC Undergraduates"
          title={
            <>
              FOUR CREATIVE <span className="text-[#0866FF]">COMPETITION FIELDS</span>. ONE
              UNIVERSITY-WIDE ARENA.
            </>
          }
          description="The SLTC Media Unit proudly presents INCIDO GEN 3.0, the third edition of its flagship initiative, aimed at discovering, showcasing and developing the creative talents of the SLTC community."
        />

        {/* Explicit Distinction Callout: 4 Competition Categories vs. 6 Organizing Committees */}
        <div className="mb-12 rounded-xl bg-[#0D1B3B]/80 border border-[#0866FF]/35 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-[#B4C2DE]">
              <strong className="text-white">Structural Distinction:</strong> While the SLTC Media
              Unit operates through <span className="text-white font-semibold">six organizing committees</span>{' '}
              (including Editorial and Event Management), the{' '}
              <span className="text-[#60A5FA] font-semibold">INCIDO GEN 3.0 competition</span> focuses
              specifically on <span className="text-white font-semibold">four creative fields</span>{' '}
              open to all SLTC undergraduates.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#071126] text-[#60A5FA] border border-[#0866FF]/30">
              Most Talented
            </span>
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#071126] text-[#60A5FA] border border-[#0866FF]/30">
              Most Popular
            </span>
          </div>
        </div>

        {/* 4 Competition Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {COMPETITION_FIELDS.map((field, idx) => {
            const Icon = FIELD_ICON_MAP[field.iconName];

            return (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <SpotlightSurface className="h-full rounded-2xl bg-gradient-to-br from-[#0D1B3B]/90 to-[#071126] border border-[#B4C2DE]/15 hover:border-[#0866FF]/55 p-6 sm:p-8 transition-all viewfinder-frame flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12 font-mono text-xs">
                      <span className="text-[#3B82F6] font-bold">{field.code}</span>
                      <span className="text-[#B4C2DE]/80">{field.aspectSpec}</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3.5 rounded-xl bg-[#0866FF]/15 border border-[#0866FF]/40 text-[#3B82F6] shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {field.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#60A5FA] mt-0.5">
                          {field.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed mb-6">
                      {field.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#B4C2DE]/12 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE]">
                      Award Tracks:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {field.recognitionTracks.map((track) => (
                        <span
                          key={track}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-[#071126] border border-[#B4C2DE]/15 text-white"
                        >
                          <Award className="w-3.5 h-3.5 text-[#0866FF]" />
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightSurface>
              </motion.div>
            );
          })}
        </div>

        {/* Three Main Objectives (Section 3.2 of PDF) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-5 h-5 text-[#0866FF]" />
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              3.2 Core Objectives of INCIDO GEN 3.0
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EVENT_OBJECTIVES.map((obj, idx) => (
              <motion.div
                key={obj.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#0D1B3B]/60 border border-[#B4C2DE]/15 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-black text-[#0866FF]">
                      {obj.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4C2DE]">
                      OBJECTIVE // {obj.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{obj.title}</h4>
                  <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B4C2DE]/10 flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
                  <CheckCircle2 className="w-4 h-4 text-[#0866FF]" />
                  <span>SLTC Undergraduate Creative Development</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Planned Event Structure & Activities (Section 3.3 of PDF) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <Users className="w-5 h-5 text-[#0866FF]" />
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  3.3 Planned Programme Structure & Activities
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#B4C2DE]">
                INCIDO GEN 3.0 is planned as a progressive series of activities taking participants
                from initial awareness to the final competition and award ceremony.
              </p>
            </div>
            <span className="font-mono text-xs uppercase px-3 py-1.5 rounded-lg bg-[#0D1B3B] border border-[#0866FF]/30 text-[#60A5FA] shrink-0">
              6 Programme Stages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLANNED_ACTIVITIES.map((act, idx) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-xl bg-[#0D1B3B]/45 hover:bg-[#0D1B3B]/80 border border-[#B4C2DE]/15 hover:border-[#3B82F6]/40 p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#3B82F6]">{act.step}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#071126] text-[#B4C2DE] border border-[#B4C2DE]/15">
                      {act.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{act.title}</h4>
                  <p className="text-sm text-[#B4C2DE] leading-relaxed">{act.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


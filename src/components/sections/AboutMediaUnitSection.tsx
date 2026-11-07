import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Video,
  Mic,
  PenTool,
  FileText,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Award,
  History,
} from 'lucide-react';
import {
  SLTC_MEDIA_UNIT_INFO,
  SIX_COMMITTEES,
  EVENT_METADATA,
  CommitteeItem,
} from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

const ICON_MAP = {
  Camera,
  Video,
  Mic,
  PenTool,
  FileText,
  CalendarCheck,
};

export const AboutMediaUnitSection: React.FC = () => {
  const [selectedCommittee, setSelectedCommittee] = useState<CommitteeItem>(SIX_COMMITTEES[0]);

  return (
    <section
      id="about-media-unit"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          eyebrow="About the Organizing Body"
          badge="Est. 2016 • Oldest Student Organization at SLTC"
          title={
            <>
              THE <span className="text-[#0866FF]">SLTC MEDIA UNIT</span> & ITS SIX SPECIALIZED
              COMMITTEES.
            </>
          }
          description={SLTC_MEDIA_UNIT_INFO.overview}
        />

        {/* Top Editorial Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-4 rounded-2xl bg-[#0D1B3B]/75 border border-[#B4C2DE]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#3B82F6] mb-4">
                <History className="w-4 h-4" />
                <span>Institutional Heritage</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                {EVENT_METADATA.foundedYear}
              </div>
              <p className="text-sm font-semibold text-[#60A5FA] mb-4">
                Founded by {EVENT_METADATA.founder} ({EVENT_METADATA.founderTitle})
              </p>
              <p className="text-sm text-[#B4C2DE] leading-relaxed">
                {SLTC_MEDIA_UNIT_INFO.mission}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#B4C2DE]/12 flex items-center justify-between text-xs font-mono text-[#B4C2DE]">
              <span>SRI LANKA TECHNOLOGY CAMPUS</span>
              <span className="text-white font-semibold">PADUKKA</span>
            </div>
          </div>

          <div className="lg:col-span-8 rounded-2xl bg-gradient-to-br from-[#0D1B3B]/90 to-[#071126] border border-[#B4C2DE]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0866FF]" />
                  <span>Practical Media Skill Development</span>
                </h3>
                <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed">
                  {SLTC_MEDIA_UNIT_INFO.skillDevelopment}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                  <span>Six-Committee Operational Model</span>
                </h3>
                <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed">
                  {SLTC_MEDIA_UNIT_INFO.structureSummary}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#B4C2DE]/12 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B4C2DE]">
                  Core Capabilities:
                </span>
                {[
                  'Event Media Coverage',
                  'Visual Branding',
                  'Live Hosting',
                  'Editorial Documentation',
                  'Programme Logistics',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#071126] border border-[#B4C2DE]/15 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Architectural Index for the 6 Committees */}
        <div className="rounded-2xl bg-[#0D1B3B]/45 border border-[#B4C2DE]/15 overflow-hidden">
          <div className="px-6 py-4 bg-[#0D1B3B] border-b border-[#B4C2DE]/12 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0866FF]" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white font-semibold">
                1.2 THE SIX COMMITTEES OF THE SLTC MEDIA UNIT — INTERACTIVE DIRECTORY
              </span>
            </div>
            <span className="font-mono text-xs text-[#B4C2DE]">
              Select any committee to inspect its role & mandate
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Architectural Index List */}
            <div className="lg:col-span-5 divide-y divide-[#B4C2DE]/10 border-b lg:border-b-0 lg:border-r border-[#B4C2DE]/15">
              {SIX_COMMITTEES.map((committee) => {
                const Icon = ICON_MAP[committee.iconName];
                const isSelected = selectedCommittee.id === committee.id;

                return (
                  <button
                    key={committee.id}
                    type="button"
                    onClick={() => setSelectedCommittee(committee)}
                    onMouseEnter={() => setSelectedCommittee(committee)}
                    className={`w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 transition-all ${
                      isSelected
                        ? 'bg-[#0866FF]/15 border-l-4 border-l-[#0866FF]'
                        : 'hover:bg-white/[0.03] border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? 'text-[#3B82F6]' : 'text-[#B4C2DE]/60'
                        }`}
                      >
                        {committee.number}
                      </span>
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-[#0866FF] text-white'
                            : 'bg-[#071126] text-[#B4C2DE] border border-[#B4C2DE]/15'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div
                          className={`text-sm sm:text-base font-bold truncate ${
                            isSelected ? 'text-white' : 'text-[#B4C2DE]'
                          }`}
                        >
                          {committee.name}
                        </div>
                        <div className="font-mono text-[10px] tracking-wider text-[#B4C2DE]/70 uppercase">
                          {committee.technicalSpec}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-[#0866FF] translate-x-1' : 'text-[#B4C2DE]/40'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Active Committee Detail Stage */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-[#071126]/60">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCommittee.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#B4C2DE]/12">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#0866FF]/20 text-[#60A5FA] border border-[#0866FF]/35">
                          COMMITTEE {selectedCommittee.number} / 06
                        </span>
                        <span className="font-mono text-xs text-[#B4C2DE]">
                          {selectedCommittee.technicalSpec}
                        </span>
                      </div>
                    </div>

                    <SpotlightSurface className="rounded-xl bg-[#0D1B3B]/80 border border-[#B4C2DE]/15 p-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        {(() => {
                          const ActiveIcon = ICON_MAP[selectedCommittee.iconName];
                          return (
                            <div className="p-3.5 rounded-xl bg-[#0866FF] text-white shadow-[0_0_25px_rgba(8,102,255,0.4)]">
                              <ActiveIcon className="w-6 h-6" />
                            </div>
                          );
                        })()}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            {selectedCommittee.name}
                          </h3>
                          <p className="font-mono text-xs text-[#60A5FA] mt-1">
                            SLTC Media Unit Specialized Division
                          </p>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-[#B4C2DE] leading-relaxed mb-6">
                        {selectedCommittee.description}
                      </p>

                      <div className="space-y-2.5 pt-5 border-t border-[#B4C2DE]/12">
                        <span className="font-mono text-xs uppercase tracking-wider text-white block mb-3">
                          Key Operational Responsibilities:
                        </span>
                        {selectedCommittee.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm text-[#B4C2DE]">
                            <CheckCircle2 className="w-4 h-4 text-[#0866FF] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </SpotlightSurface>
                  </div>

                  <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono text-[#B4C2DE]/70">
                    <span>COLLABORATIVE CAMPUS MEDIA ECOSYSTEM</span>
                    <span>SLTC MEDIA UNIT</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { PROPOSED_TIMELINE, EVENT_METADATA } from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

interface TimelineSectionProps {
  onOpenAuditModal: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenAuditModal }) => {
  const [selectedId, setSelectedId] = useState<string>(PROPOSED_TIMELINE[4].id);

  return (
    <section
      id="timeline"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-gradient-to-b from-[#071126] via-[#0D1B3B]/35 to-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          eyebrow="Event Journey & Proposed Schedule"
          badge="All Dates Proposed • Nov – Dec 2026"
          title={
            <>
              THE ROAD TO THE <span className="text-[#0866FF]">GRAND FINALE</span>.
            </>
          }
          description="From the opening of undergraduate registrations on 17 November 2026 to the Grand Finale on 19 December 2026 at the SLTC Padukka premises, every milestone provides touchpoints for partner engagement."
        />

        {/* Interactive 5-Milestone Timeline Grid */}
        <div className="relative mb-12">
          {/* Desktop Horizontal Connecting Rail */}
          <div className="hidden lg:block absolute top-14 left-8 right-8 h-0.5 bg-gradient-to-r from-[#0866FF]/30 via-[#3B82F6]/60 to-[#0866FF]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {PROPOSED_TIMELINE.map((milestone, idx) => {
              const isSelected = selectedId === milestone.id;
              const isFinale = Boolean(milestone.isFinale);

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  onClick={() => setSelectedId(milestone.id)}
                  className="cursor-pointer h-full"
                >
                  <SpotlightSurface
                    className={`h-full rounded-2xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                      isFinale
                        ? 'bg-gradient-to-b from-[#0866FF]/20 via-[#0D1B3B] to-[#071126] border-[#0866FF] shadow-[0_0_30px_rgba(8,102,255,0.22)]'
                        : isSelected
                        ? 'bg-[#0D1B3B] border-[#3B82F6]'
                        : 'bg-[#0D1B3B]/55 border-[#B4C2DE]/15 hover:border-[#3B82F6]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-[11px] font-bold text-[#60A5FA]">
                          {milestone.phase}
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded ${
                            isFinale
                              ? 'bg-[#0866FF] text-white font-bold'
                              : 'bg-[#071126] text-[#B4C2DE] border border-[#B4C2DE]/15'
                          }`}
                        >
                          {milestone.statusLabel}
                        </span>
                      </div>

                      {/* Node Indicator */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 ${
                            isFinale || isSelected
                              ? 'bg-[#0866FF] border-white shadow-[0_0_12px_#0866FF]'
                              : 'bg-[#071126] border-[#3B82F6]'
                          }`}
                        />
                        <span className="font-mono text-xs text-[#B4C2DE]">
                          {milestone.proposedDate}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-white tracking-tight mb-2">
                        {milestone.activity}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#B4C2DE] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#B4C2DE]/12 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#60A5FA]">{milestone.proposedDate}</span>
                      {isFinale && (
                        <span className="inline-flex items-center gap-1 text-white font-bold">
                          <Sparkles className="w-3 h-3 text-[#0866FF]" /> Finale
                        </span>
                      )}
                    </div>
                  </SpotlightSurface>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dedicated Grand Finale Spotlight Banner inside Timeline Section */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0D1B3B] via-[#132652]/80 to-[#0D1B3B] border border-[#0866FF]/45 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#60A5FA]">
              <Calendar className="w-4 h-4 text-[#0866FF]" />
              <span>Culminating Event Highlight • Proposed Date: {EVENT_METADATA.finaleDate}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Grand Finale at {EVENT_METADATA.venue}
            </h3>
            <p className="text-sm sm:text-base text-[#B4C2DE]">
              Bringing together finalists, judges, industry representatives, guests, and the SLTC
              community from <span className="text-white font-semibold">8.30 AM to 4.30 PM</span> for
              parallel sessions, an industry-focused plenary session, judges’ review, and the Grand
              Award Ceremony.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="px-4 py-3 rounded-xl bg-[#071126]/90 border border-[#B4C2DE]/15 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0866FF]" />
              <div>
                <div className="font-mono text-[10px] uppercase text-[#B4C2DE]">Location</div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {EVENT_METADATA.venue}
                </div>
              </div>
            </div>

            <a
              href="#grand-finale"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0866FF] hover:bg-[#3B82F6] text-white font-bold text-xs sm:text-sm transition-colors"
            >
              <Clock className="w-4 h-4" />
              <span>View Full Finale Schedule</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Organizer Schedule Transparency Note */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#071126]/80 border border-[#B4C2DE]/12 text-xs text-[#B4C2DE]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#3B82F6] shrink-0" />
            <span>
              <strong className="text-white">Schedule Note:</strong> Dates are listed as proposed in
              Section 3.3 of the official proposal. Explicit submission and voting closing cutoffs
              will be confirmed by the organizing committee.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="font-mono text-xs text-[#60A5FA] hover:text-white underline underline-offset-4"
          >
            Inspect Organizer Review Notes
          </button>
        </div>
      </div>
    </section>
  );
};


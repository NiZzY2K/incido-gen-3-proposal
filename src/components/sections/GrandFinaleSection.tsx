import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Users,
  Mic,
  Eye,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { GRAND_FINALE_PROGRAMME, EVENT_METADATA } from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

export const GrandFinaleSection: React.FC = () => {
  return (
    <section
      id="grand-finale"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-gradient-to-b from-[#071126] via-[#0D1B3B]/55 to-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="08"
          eyebrow="3.4 Grand Finale Spotlight"
          badge="19 December 2026 • SLTC Padukka Premises"
          title={
            <>
              THE <span className="text-[#0866FF]">GRAND FINALE</span> & AWARD CEREMONY.
            </>
          }
          description="The grand finale of INCIDO GEN 3.0 is scheduled to take place on 19 December 2026 at the SLTC Padukka premises. It will bring together participants, judges, industry representatives, guests and members of the SLTC community to celebrate the achievements of the competition."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Event Pillars & Recognition Categories */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightSurface className="rounded-2xl bg-gradient-to-b from-[#0D1B3B] to-[#071126] border border-[#0866FF]/45 p-6 sm:p-8 viewfinder-frame">
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12 font-mono text-xs">
                <span className="text-[#60A5FA] font-bold">CULMINATING EVENT</span>
                <span className="px-2 py-0.5 rounded bg-[#0866FF] text-white font-bold">
                  PROPOSED SCHEDULE
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0866FF]/15 border border-[#0866FF]/35 text-[#3B82F6]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase text-[#B4C2DE]">Date</div>
                    <div className="text-lg font-black text-white">{EVENT_METADATA.finaleDate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0866FF]/15 border border-[#0866FF]/35 text-[#3B82F6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase text-[#B4C2DE]">Venue</div>
                    <div className="text-lg font-black text-white">{EVENT_METADATA.venue}</div>
                  </div>
                </div>
              </div>

              {/* Four Core Finale Programme Highlights from Page 11 Prose */}
              <div className="space-y-3 pt-5 border-t border-[#B4C2DE]/12">
                <span className="font-mono text-xs uppercase tracking-wider text-white block mb-2">
                  Core Finale Components:
                </span>

                {[
                  {
                    icon: Sparkles,
                    title: 'Final Competition Activities',
                    desc: 'Live competition finals and parallel sessions on campus.',
                  },
                  {
                    icon: Mic,
                    title: 'Industry-Focused Plenary Session',
                    desc: 'Expert panel discussion connecting undergraduates with media professionals.',
                  },
                  {
                    icon: Eye,
                    title: "Judges' Review",
                    desc: "Formal judges' evaluation of the photography and videography entries.",
                  },
                  {
                    icon: Trophy,
                    title: 'Grand Award Ceremony',
                    desc: 'Celebration of winners across Most Talented and Most Popular categories.',
                  },
                ].map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#071126]/80 border border-[#B4C2DE]/10"
                    >
                      <IconComp className="w-4 h-4 text-[#0866FF] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">{item.title}</div>
                        <div className="text-xs text-[#B4C2DE] mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SpotlightSurface>

            {/* Dual Award Categories Card */}
            <div className="rounded-2xl bg-[#0D1B3B]/60 border border-[#B4C2DE]/15 p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#60A5FA] mb-3">
                <Trophy className="w-4 h-4 text-[#0866FF]" />
                <span>Dual Award Recognition Tracks</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#071126]/80 border border-[#0866FF]/30">
                  <div className="text-sm font-black text-white mb-1">Most Talented</div>
                  <p className="text-xs text-[#B4C2DE] leading-relaxed">
                    Recognizes creative excellence and technical mastery evaluated by the judging
                    panel.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#071126]/80 border border-[#3B82F6]/30">
                  <div className="text-sm font-black text-white mb-1">Most Popular</div>
                  <p className="text-xs text-[#B4C2DE] leading-relaxed">
                    Celebrates audience appreciation determined by the university community voting
                    round.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Proposed Programme Schedule Table (Page 11 of PDF) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0D1B3B]/65 border border-[#B4C2DE]/15 overflow-hidden">
              <div className="p-6 sm:p-8 bg-[#0D1B3B] border-b border-[#B4C2DE]/15 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#60A5FA] block mb-1">
                    PROPOSED RUN OF SHOW // 19 DEC 2026
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Grand Finale Programme Schedule
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg bg-[#071126] text-[#B4C2DE] border border-[#B4C2DE]/15">
                  <Clock className="w-3.5 h-3.5 text-[#0866FF]" />
                  <span>8.30 AM – 4.30 PM</span>
                </span>
              </div>

              <div className="divide-y divide-[#B4C2DE]/12">
                {GRAND_FINALE_PROGRAMME.map((slot, idx) => (
                  <motion.div
                    key={slot.time}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-6 sm:p-7 hover:bg-white/[0.02] transition-colors flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                  >
                    <div className="sm:w-48 shrink-0">
                      <span className="inline-block font-mono text-xs sm:text-sm font-bold text-[#60A5FA] px-3 py-1.5 rounded-lg bg-[#071126] border border-[#0866FF]/30">
                        {slot.time}
                      </span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-[#B4C2DE]/70 mt-2">
                        SLOT 0{idx + 1} // {slot.tag}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2">
                        {slot.programme}
                      </h4>
                      <p className="text-sm text-[#B4C2DE] leading-relaxed">{slot.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-[#071126]/90 border-t border-[#B4C2DE]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-[#B4C2DE]">
                  <Users className="w-4 h-4 text-[#0866FF] shrink-0" />
                  <span>
                    Attendees: Participants, judges, industry representatives, guests & SLTC
                    community.
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] hover:text-white shrink-0"
                >
                  <span>Reserve Ceremony Presence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


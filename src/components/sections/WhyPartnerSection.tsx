import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Eye,
  Compass,
  Users,
  HeartHandshake,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import {
  WHY_PARTNER_INTRO,
  WHY_PARTNER_PILLARS,
  ADVANTAGES_TO_SPONSORS_LIST,
} from '../../data/sponsorshipData';
import { PARTICIPANT_ADVANTAGES } from '../../data/eventData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

const PILLAR_ICONS = {
  Sparkles,
  Eye,
  Compass,
  Users,
  HeartHandshake,
  Award,
};

export const WhyPartnerSection: React.FC = () => {
  return (
    <section
      id="why-partner"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Strategic Value Proposition"
          badge="6 Core Sponsorship Pillars"
          title={
            <>
              WHY PARTNER WITH <span className="text-[#0866FF]">INCIDO GEN 3.0</span>?
            </>
          }
          description={WHY_PARTNER_INTRO.lead}
        />

        {/* Editorial Lead Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-[#0D1B3B] to-[#071126] border border-[#0866FF]/30 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <p className="text-base sm:text-lg text-[#B4C2DE] max-w-3xl leading-relaxed">
            {WHY_PARTNER_INTRO.sublead}
          </p>
          <a
            href="#sponsorship-packages"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0866FF] hover:bg-[#3B82F6] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors"
          >
            <span>Compare Sponsorship Tiers</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Sponsorship Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_PARTNER_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[pillar.iconName];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <SpotlightSurface className="h-full rounded-2xl bg-[#0D1B3B]/65 hover:bg-[#0D1B3B]/90 border border-[#B4C2DE]/15 hover:border-[#0866FF]/50 p-6 sm:p-8 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12">
                      <span className="font-mono text-xs font-bold text-[#0866FF]">
                        VALUE // {pillar.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#071126] text-[#60A5FA] border border-[#0866FF]/30">
                        {pillar.highlightTag}
                      </span>
                    </div>

                    <div className="inline-flex p-3 rounded-xl bg-[#0866FF]/15 border border-[#0866FF]/30 text-[#3B82F6] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-black text-white tracking-tight mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#B4C2DE] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#B4C2DE]/10 font-mono text-[10px] uppercase tracking-wider text-[#B4C2DE]/65">
                    {pillar.pdfHeading}
                  </div>
                </SpotlightSurface>
              </motion.div>
            );
          })}
        </div>

        {/* Dual-Column Section 5 of PDF: Advantages to Sponsors (5.2) & Advantages to Participants (5.1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 5.2 Advantages to Sponsors */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#0D1B3B] to-[#071126] border border-[#0866FF]/45 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#60A5FA]">
                  SECTION 5.2 // SPONSOR DELIVERABLES
                </span>
                <Briefcase className="w-5 h-5 text-[#0866FF]" />
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                Direct Advantages to Sponsors
              </h3>
              <p className="text-sm text-[#B4C2DE] mb-6">
                Sponsors will receive recognition and promotional opportunities based on their
                selected partnership package:
              </p>

              <ul className="space-y-3.5">
                {ADVANTAGES_TO_SPONSORS_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#071126]/70 border border-[#B4C2DE]/10 text-sm text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0866FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 pt-4 border-t border-[#B4C2DE]/12 text-xs text-[#B4C2DE] leading-relaxed">
              Through these opportunities, sponsors can introduce their brands to the SLTC community
              while supporting an initiative that encourages creativity and the development of young
              talent.
            </p>
          </div>

          {/* 5.1 Advantages to Participants */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0D1B3B]/50 border border-[#B4C2DE]/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B4C2DE]">
                  SECTION 5.1 // CAMPUS IMPACT
                </span>
                <GraduationCap className="w-5 h-5 text-[#3B82F6]" />
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                Advantages to SLTC Participants
              </h3>
              <p className="text-sm text-[#B4C2DE] mb-6">
                INCIDO GEN 3.0 provides participants with opportunities to develop their creative
                interests and gain experience beyond their regular academic activities:
              </p>

              <div className="space-y-3">
                {PARTICIPANT_ADVANTAGES.map((adv) => (
                  <div
                    key={adv.title}
                    className="p-3.5 rounded-xl bg-[#071126]/60 border border-[#B4C2DE]/12"
                  >
                    <div className="text-sm font-bold text-white mb-1">{adv.title}</div>
                    <p className="text-xs sm:text-sm text-[#B4C2DE] leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


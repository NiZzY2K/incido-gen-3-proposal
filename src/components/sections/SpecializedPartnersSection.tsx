import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shirt,
  Gift,
  Printer,
  Utensils,
  GraduationCap,
  Camera,
  Cpu,
  Building2,
  Share2,
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { SPECIALIZED_PARTNERSHIPS } from '../../data/sponsorshipData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

const PARTNER_ICON_MAP = {
  Shirt,
  Gift,
  Printer,
  Utensils,
  GraduationCap,
  Camera,
  Cpu,
  Building2,
  Share2,
};

interface SpecializedPartnersSectionProps {
  onSelectCategoryForInquiry: (categoryTitle: string) => void;
}

export const SpecializedPartnersSection: React.FC<SpecializedPartnersSectionProps> = ({
  onSelectCategoryForInquiry,
}) => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'partner-camera': true,
    'partner-technology': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInquire = (title: string) => {
    onSelectCategoryForInquiry(title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="specialized-partners"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          eyebrow="6.3 Other Partnership Opportunities"
          badge="9 Specialized Partner Categories"
          title={
            <>
              SPECIALIZED <span className="text-[#0866FF]">IN-KIND & CATEGORY</span> PARTNERSHIPS.
            </>
          }
          description="In addition to the financial sponsorship packages, INCIDO GEN 3.0 welcomes organizations to contribute through specialized partnerships. These partnerships allow organizations to support specific requirements of the event while receiving recognition in their respective partner categories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZED_PARTNERSHIPS.map((partner, idx) => {
            const Icon = PARTNER_ICON_MAP[partner.iconName];
            const hasContributions =
              partner.possibleContributions && partner.possibleContributions.length > 0;
            const isExpanded = Boolean(expandedIds[partner.id]);

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="h-full"
              >
                <SpotlightSurface className="h-full rounded-2xl bg-[#0D1B3B]/60 hover:bg-[#0D1B3B]/90 border border-[#B4C2DE]/15 hover:border-[#0866FF]/50 p-6 sm:p-7 transition-all flex flex-col justify-between">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12">
                      <span className="font-mono text-xs font-bold text-[#3B82F6]">
                        PARTNER // {partner.number}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#0866FF]/15 border border-[#0866FF]/35 text-[#3B82F6]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-white tracking-tight mb-3">
                      {partner.title}
                    </h3>

                    <p className="text-sm text-[#B4C2DE] leading-relaxed mb-5">
                      {partner.summary}
                    </p>

                    {/* Expandable Possible Contributions (for Camera, Technology, Venue, Digital Media) */}
                    {hasContributions && (
                      <div className="mb-5">
                        <button
                          type="button"
                          onClick={() => toggleExpand(partner.id)}
                          className="w-full py-2 px-3 rounded-lg bg-[#071126]/85 border border-[#B4C2DE]/15 text-xs font-mono text-[#60A5FA] flex items-center justify-between hover:border-[#3B82F6]/40 transition-colors"
                        >
                          <span>
                            Possible Contributions ({partner.possibleContributions!.length})
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-2.5 p-3.5 rounded-xl bg-[#050C1B]/90 border border-[#B4C2DE]/12 space-y-2">
                                {partner.possibleContributions!.map((contrib) => (
                                  <li
                                    key={contrib}
                                    className="flex items-start gap-2 text-xs text-[#B4C2DE]"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0866FF] shrink-0 mt-0.5" />
                                    <span>{contrib}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Official Recognition Callout */}
                    <div className="p-3.5 rounded-xl bg-[#071126]/85 border border-[#0866FF]/25 mb-4">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#60A5FA] mb-1">
                        <Award className="w-3.5 h-3.5 text-[#0866FF]" />
                        <span>Official Partner Recognition</span>
                      </div>
                      <p className="text-xs font-semibold text-white leading-relaxed">
                        {partner.recognition}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleInquire(partner.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#071126] hover:bg-[#0866FF] text-white border border-[#B4C2DE]/15 hover:border-[#0866FF] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Inquire as {partner.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Minus,
  Crown,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Info,
  Filter,
} from 'lucide-react';
import {
  SPONSORSHIP_TIERS,
  SPONSORSHIP_BENEFITS_MATRIX,
  BENEFITS_CLAUSE,
  SponsorshipTierId,
} from '../../data/sponsorshipData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

interface SponsorshipPackagesSectionProps {
  onSelectTierForInquiry: (tierName: string) => void;
  onOpenAuditModal: () => void;
}

export const SponsorshipPackagesSection: React.FC<SponsorshipPackagesSectionProps> = ({
  onSelectTierForInquiry,
  onOpenAuditModal,
}) => {
  const [expandedCardId, setExpandedCardId] = useState<SponsorshipTierId | null>('title');
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'differentiators'>('all');
  const [mobileSelectedTier, setMobileSelectedTier] = useState<SponsorshipTierId>('title');

  const filteredMatrixRows =
    matrixFilter === 'differentiators'
      ? SPONSORSHIP_BENEFITS_MATRIX.filter(
          (row) => !(row.title && row.diamond && row.gold && row.silver)
        )
      : SPONSORSHIP_BENEFITS_MATRIX;

  const handlePartnerSelect = (tierName: string) => {
    onSelectTierForInquiry(tierName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="sponsorship-packages"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-gradient-to-b from-[#071126] via-[#0D1B3B]/45 to-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          eyebrow="6.1 & 6.2 Financial Sponsorship Packages & Benefits"
          badge="Official LKR Investment Tiers"
          title={
            <>
              INVEST IN <span className="text-[#0866FF]">CREATIVE EXCELLENCE</span>.
            </>
          }
          description="The SLTC Media Unit welcomes organizations and businesses to partner with INCIDO GEN 3.0 through financial sponsorships. Select from four official tiers according to your preferred level of involvement."
        />

        {/* 4 Interactive Sponsorship Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20 items-stretch">
          {SPONSORSHIP_TIERS.map((tier, idx) => {
            const isTitle = tier.id === 'title';
            const isExpanded = expandedCardId === tier.id;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="h-full"
              >
                <SpotlightSurface
                  className={`h-full rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between relative ${
                    isTitle
                      ? 'bg-gradient-to-b from-[#0D1B3B] via-[#0D1B3B] to-[#071126] border-[#0866FF] shadow-[0_12px_40px_rgba(8,102,255,0.28)] ring-1 ring-[#0866FF]/50'
                      : 'bg-[#0D1B3B]/65 border-[#B4C2DE]/15 hover:border-[#3B82F6]/50'
                  }`}
                >
                  <div>
                    {/* Top Tier Header Badge */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12">
                      <span className="font-mono text-[11px] font-bold tracking-wider text-[#60A5FA]">
                        {tier.tierBadge}
                      </span>
                      {isTitle && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0866FF] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                          <Crown className="w-3 h-3" /> Highest Tier
                        </span>
                      )}
                    </div>

                    {/* Package Name & Investment Amount */}
                    <h3 className="text-2xl font-black text-white tracking-tight">{tier.name}</h3>
                    <div className="mt-3 mb-4 flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-white">
                        {tier.investmentFormatted}
                      </span>
                      <span className="font-mono text-xs text-[#B4C2DE]">/ package</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B4C2DE] leading-relaxed mb-6">
                      {tier.summary}
                    </p>

                    {/* Key Included Benefits Preview */}
                    <div className="space-y-2.5 mb-5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-white block">
                        Key Included Benefits ({tier.coreIncludedBenefits.length} / 13):
                      </span>
                      {tier.exclusiveHighlights.map((hl) => (
                        <div
                          key={hl}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B4C2DE]"
                        >
                          <Check className="w-4 h-4 text-[#0866FF] shrink-0 mt-0.5" />
                          <span className="text-white/95 font-medium">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Full Benefits List Interaction */}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCardId((prev) => (prev === tier.id ? null : tier.id))
                      }
                      className="w-full py-2.5 px-3.5 rounded-lg bg-[#071126]/80 hover:bg-[#071126] border border-[#B4C2DE]/15 text-xs font-mono text-[#60A5FA] flex items-center justify-between transition-colors mb-5"
                    >
                      <span>
                        {isExpanded
                          ? 'Hide Full Package Checklist'
                          : `View Full Benefits (${tier.coreIncludedBenefits.length})`}
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
                          className="overflow-hidden mb-6"
                        >
                          <div className="p-3.5 rounded-xl bg-[#050C1B]/90 border border-[#B4C2DE]/12 space-y-2 max-h-60 overflow-y-auto">
                            {tier.coreIncludedBenefits.map((benefit) => (
                              <div
                                key={benefit}
                                className="flex items-center gap-2 text-xs text-[#B4C2DE]"
                              >
                                <Check className="w-3.5 h-3.5 text-[#0866FF] shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Become a Partner CTA */}
                  <div className="pt-4 border-t border-[#B4C2DE]/12">
                    <button
                      type="button"
                      onClick={() => handlePartnerSelect(tier.name)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all ${
                        isTitle
                          ? 'bg-[#0866FF] hover:bg-[#3B82F6] text-white shadow-[0_0_25px_rgba(8,102,255,0.4)]'
                          : 'bg-[#071126] hover:bg-[#0866FF] text-white border border-[#B4C2DE]/20 hover:border-[#0866FF]'
                      }`}
                    >
                      <span>Become a {tier.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </SpotlightSurface>
              </motion.div>
            );
          })}
        </div>

        {/* Complete Sponsorship Benefits Comparison Matrix (Pages 17–18 of PDF) */}
        <div className="rounded-2xl bg-[#0D1B3B]/65 border border-[#B4C2DE]/15 overflow-hidden">
          {/* Matrix Header & Filter Controls */}
          <div className="p-6 sm:p-8 border-b border-[#B4C2DE]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#0D1B3B]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#60A5FA] mb-1">
                <span>SECTION 6.2 // COMPLETE BENEFITS MATRIX</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Official Sponsorship Benefits Comparison
              </h3>
              <p className="text-xs sm:text-sm text-[#B4C2DE] mt-1">
                Exact benefit allocations as presented on Pages 17–18 of the INCIDO GEN 3.0
                Sponsorship Proposal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center rounded-xl bg-[#071126] p-1 border border-[#B4C2DE]/15">
                <button
                  type="button"
                  onClick={() => setMatrixFilter('all')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    matrixFilter === 'all'
                      ? 'bg-[#0866FF] text-white'
                      : 'text-[#B4C2DE] hover:text-white'
                  }`}
                >
                  All 13 Benefits
                </button>
                <button
                  type="button"
                  onClick={() => setMatrixFilter('differentiators')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    matrixFilter === 'differentiators'
                      ? 'bg-[#0866FF] text-white'
                      : 'text-[#B4C2DE] hover:text-white'
                  }`}
                >
                  <Filter className="w-3 h-3" />
                  <span>Tier Differentiators (2)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Tier Selector Tabs (For effortless small-screen comparison) */}
          <div className="md:hidden p-4 bg-[#071126]/80 border-b border-[#B4C2DE]/12">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] block mb-2">
              Select Tier to Inspect on Mobile:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {SPONSORSHIP_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setMobileSelectedTier(tier.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border text-left transition-all ${
                    mobileSelectedTier === tier.id
                      ? 'bg-[#0866FF] border-[#0866FF] text-white'
                      : 'bg-[#0D1B3B] border-[#B4C2DE]/15 text-[#B4C2DE]'
                  }`}
                >
                  <div>{tier.name}</div>
                  <div className="font-mono text-[10px] opacity-80">{tier.investmentFormatted}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#071126]/90 border-b border-[#B4C2DE]/15">
                  <th className="py-4 px-5 sm:px-6 font-mono text-xs uppercase tracking-wider text-[#B4C2DE] min-w-[220px]">
                    Services / Benefits
                  </th>
                  {SPONSORSHIP_TIERS.map((tier) => (
                    <th
                      key={tier.id}
                      className={`py-4 px-4 text-center min-w-[130px] ${
                        mobileSelectedTier === tier.id ? 'table-cell' : 'hidden md:table-cell'
                      } ${tier.id === 'title' ? 'bg-[#0866FF]/10' : ''}`}
                    >
                      <div className="text-xs sm:text-sm font-black text-white">{tier.name}</div>
                      <div className="font-mono text-xs text-[#60A5FA] mt-0.5">
                        {tier.investmentFormatted}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#B4C2DE]/10">
                {filteredMatrixRows.map((row) => {
                  const isExclusiveRow = !(row.title && row.diamond && row.gold && row.silver);

                  return (
                    <tr
                      key={row.id}
                      className={`transition-colors hover:bg-white/[0.02] ${
                        isExclusiveRow ? 'bg-[#0866FF]/[0.05]' : ''
                      }`}
                    >
                      <td className="py-4 px-5 sm:px-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-white">{row.service}</span>
                          {isExclusiveRow && (
                            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#0866FF]/20 text-[#60A5FA] border border-[#0866FF]/30">
                              Tier Exclusive
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[10px] text-[#B4C2DE]/70 mt-0.5">
                          {row.category}
                        </div>
                      </td>

                      {(['title', 'diamond', 'gold', 'silver'] as SponsorshipTierId[]).map(
                        (tierKey) => {
                          const included = row[tierKey];
                          return (
                            <td
                              key={tierKey}
                              className={`py-4 px-4 text-center ${
                                mobileSelectedTier === tierKey
                                  ? 'table-cell'
                                  : 'hidden md:table-cell'
                              } ${tierKey === 'title' ? 'bg-[#0866FF]/[0.06]' : ''}`}
                            >
                              {included ? (
                                <span
                                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0866FF]/20 text-[#3B82F6] border border-[#0866FF]/40"
                                  aria-label="Included"
                                >
                                  <Check className="w-4 h-4 stroke-[2.5]" />
                                </span>
                              ) : (
                                <span
                                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#071126] text-[#B4C2DE]/35"
                                  aria-label="Not Included"
                                >
                                  <Minus className="w-4 h-4" />
                                </span>
                              )}
                            </td>
                          );
                        }
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Official Proposal Clause & Organizer Note Trigger (Page 19 of PDF) */}
          <div className="p-5 sm:p-6 bg-[#071126]/90 border-t border-[#B4C2DE]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <Info className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs sm:text-sm text-[#B4C2DE]">
                <strong className="text-white">Official Proposal Clause (Page 19):</strong>{' '}
                {BENEFITS_CLAUSE}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="font-mono text-xs text-[#60A5FA] hover:text-white underline underline-offset-4 shrink-0"
            >
              Organizer Note on Tier Differentiation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Send,
  Copy,
  Check,
  UserCheck,
  Share2,
  FileDown,
  ArrowUpRight,
} from 'lucide-react';
import { COMMITTEE_CONTACTS, EVENT_METADATA } from '../../data/eventData';
import { SPONSORSHIP_TIERS, SPECIALIZED_PARTNERSHIPS } from '../../data/sponsorshipData';
import { SectionHeader, SpotlightSurface } from '../ui/SharedUI';

interface ContactSectionProps {
  selectedPartnershipInterest: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPartnershipInterest,
}) => {
  const [organizationName, setOrganizationName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [interestPackage, setInterestPackage] = useState('Title Partner (LKR 20,000)');
  const [customNotes, setCustomNotes] = useState('');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPartnershipInterest) {
      setInterestPackage(selectedPartnershipInterest);
    }
  }, [selectedPartnershipInterest]);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Construct direct mailto link addressed to the organizing committee leads
  const buildMailtoHref = (subjectPrefix = 'Sponsorship Inquiry') => {
    const primaryRecipient = COMMITTEE_CONTACTS[0].email; // Amila Fernando (Project Chairperson)
    const ccRecipients = COMMITTEE_CONTACTS.slice(1)
      .map((c) => c.email)
      .join(',');

    const subject = encodeURIComponent(
      `${subjectPrefix} — INCIDO GEN 3.0 (${interestPackage || 'Partnership'})`
    );

    const bodyLines = [
      'Dear INCIDO GEN 3.0 Organizing Committee (SLTC Media Unit),',
      '',
      `We are interested in exploring a partnership with INCIDO GEN 3.0 under the "${interestPackage}" category.`,
      '',
      `Organization / Company: ${organizationName || '[Your Organization Name]'}`,
      `Contact Person: ${contactPerson || '[Your Name & Title]'}`,
      `Preferred Partnership Tier / Category: ${interestPackage}`,
      customNotes ? `Additional Notes: ${customNotes}` : '',
      '',
      'Please let us know a convenient time to discuss this partnership further.',
      '',
      'Best regards,',
      contactPerson || '[Your Name]',
    ]
      .filter((line, index, arr) => !(line === '' && arr[index - 1] === ''))
      .join('\n');

    return `mailto:${primaryRecipient}?cc=${ccRecipients}&subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;
  };

  const allPackageOptions = [
    ...SPONSORSHIP_TIERS.map((t) => `${t.name} (${t.investmentFormatted})`),
    ...SPECIALIZED_PARTNERSHIPS.map((p) => `${p.title} (Specialized Partnership)`),
    'Custom / Multiple Partnership Categories',
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 border-b border-[#B4C2DE]/12 bg-[#071126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="09"
          eyebrow="7. Contact Us & Partnership Inquiries"
          badge="Direct Organizing Committee Access"
          title={
            <>
              LET’S BUILD <span className="text-[#0866FF]">INCIDO GEN 3.0</span> TOGETHER.
            </>
          }
          description="For further information about INCIDO GEN 3.0, sponsorship packages, or partnership opportunities, please contact the organizing committee directly via telephone or email."
        />

        {/* Top 3 Primary Conversion CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <a
            href={buildMailtoHref('Become a Sponsor')}
            className="group p-5 rounded-2xl bg-[#0866FF] hover:bg-[#3B82F6] text-white transition-all shadow-[0_10px_30px_rgba(8,102,255,0.3)] flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 block">
                DIRECT EMAIL DISPATCH
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight mt-0.5 block">
                Become a Sponsor
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={buildMailtoHref('Discuss a Partnership')}
            className="group p-5 rounded-2xl bg-[#0D1B3B] hover:bg-[#132652] text-white border border-[#0866FF]/40 transition-all flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#60A5FA] block">
                CUSTOM & IN-KIND SUPPORT
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight mt-0.5 block">
                Discuss a Partnership
              </span>
            </div>
            <ArrowUpRight className="w-6 h-6 text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={`tel:${COMMITTEE_CONTACTS[3].telephoneHref}`}
            className="group p-5 rounded-2xl bg-[#0D1B3B]/75 hover:bg-[#0D1B3B] text-white border border-[#B4C2DE]/20 transition-all flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B4C2DE] block">
                DIRECT OUTREACH HOTLINE
              </span>
              <span className="text-lg sm:text-xl font-black tracking-tight mt-0.5 block">
                Contact Our Team
              </span>
            </div>
            <Phone className="w-5 h-5 text-[#0866FF]" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Official Organizing Committee Contacts (Pages 23–24 of PDF) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COMMITTEE_CONTACTS.map((person, idx) => (
                <motion.div
                  key={person.email}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                >
                  <SpotlightSurface className="h-full rounded-2xl bg-[#0D1B3B]/70 border border-[#B4C2DE]/15 hover:border-[#0866FF]/50 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#B4C2DE]/12">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#60A5FA]">
                          {person.departmentCode}
                        </span>
                        <UserCheck className="w-4 h-4 text-[#0866FF]" />
                      </div>

                      <h3 className="text-xl font-black text-white tracking-tight">
                        {person.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#60A5FA] mt-0.5 mb-5">
                        {person.role}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-3 border-t border-[#B4C2DE]/10">
                      {/* Clickable Telephone Link */}
                      <a
                        href={`tel:${person.telephoneHref}`}
                        className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#071126]/85 hover:bg-[#0866FF]/15 border border-[#B4C2DE]/12 hover:border-[#0866FF]/40 text-xs sm:text-sm text-white transition-colors"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#0866FF]" />
                          <span className="font-mono">{person.telephoneDisplay}</span>
                        </span>
                        <span className="font-mono text-[10px] uppercase text-[#60A5FA]">Call</span>
                      </a>

                      {/* Clickable Email Link + Copy Action */}
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`mailto:${person.email}?subject=${encodeURIComponent(
                            'INCIDO GEN 3.0 Sponsorship Inquiry'
                          )}`}
                          className="flex-1 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#071126]/85 hover:bg-[#0866FF]/15 border border-[#B4C2DE]/12 hover:border-[#0866FF]/40 text-xs text-white transition-colors min-w-0"
                        >
                          <span className="inline-flex items-center gap-2 truncate">
                            <Mail className="w-3.5 h-3.5 text-[#0866FF] shrink-0" />
                            <span className="font-mono truncate">{person.email}</span>
                          </span>
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(person.email)}
                          title="Copy email address"
                          className="p-2.5 rounded-xl bg-[#071126]/85 hover:bg-[#0D1B3B] border border-[#B4C2DE]/12 text-[#B4C2DE] hover:text-white transition-colors shrink-0"
                        >
                          {copiedEmail === person.email ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </SpotlightSurface>
                </motion.div>
              ))}
            </div>

            {/* Official SLTC Media Unit Social Media & Proposal PDF Card (Page 24 of PDF) */}
            <div className="rounded-2xl bg-[#0D1B3B]/55 border border-[#B4C2DE]/15 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#60A5FA] mb-2">
                  <Share2 className="w-4 h-4 text-[#0866FF]" />
                  <span>SLTC Media Unit — Official Social Media Channels</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 mt-3">
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/15 text-xs font-semibold text-white">
                    {EVENT_METADATA.socialMedia.primaryName}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/15 text-xs font-semibold text-white">
                    {EVENT_METADATA.socialMedia.secondaryName}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#0866FF]/15 border border-[#0866FF]/35 font-mono text-xs font-bold text-[#60A5FA]">
                    {EVENT_METADATA.socialMedia.handle}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/15 font-mono text-xs font-semibold text-white">
                    {EVENT_METADATA.socialMedia.publication}
                  </span>
                </div>
              </div>

              <a
                href={EVENT_METADATA.proposalPdfUrl}
                download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#071126] hover:bg-[#0866FF] text-white border border-[#B4C2DE]/20 hover:border-[#0866FF] text-xs font-bold shrink-0 transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Official PDF</span>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Direct Email Inquiry Composer (Opens Sponsor's Native Mail Client with Pre-Filled Details) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0D1B3B] to-[#071126] border border-[#0866FF]/45 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#B4C2DE]/12">
                <span className="font-mono text-xs uppercase tracking-wider text-[#60A5FA]">
                  QUICK PARTNERSHIP DISPATCH
                </span>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#0866FF]/20 text-white">
                  Direct Mailto Generator
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Prepare Your Sponsorship Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#B4C2DE] mb-6">
                Select your preferred package below to compose a pre-addressed email directly to the
                Project Chairperson and Organizing Committee in your default email client.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="org-name"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] mb-1.5"
                  >
                    Organization / Brand Name
                  </label>
                  <input
                    id="org-name"
                    type="text"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    placeholder="e.g., Acme Creative Studio (Pvt) Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#B4C2DE]/20 focus:border-[#0866FF] focus:outline-none text-sm text-white placeholder-[#B4C2DE]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-person"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] mb-1.5"
                  >
                    Your Name & Role
                  </label>
                  <input
                    id="contact-person"
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g., Marketing Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#B4C2DE]/20 focus:border-[#0866FF] focus:outline-none text-sm text-white placeholder-[#B4C2DE]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="package-select"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] mb-1.5"
                  >
                    Preferred Package or Partnership Category
                  </label>
                  <select
                    id="package-select"
                    value={interestPackage}
                    onChange={(e) => setInterestPackage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#B4C2DE]/20 focus:border-[#0866FF] focus:outline-none text-sm text-white"
                  >
                    {allPackageOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#071126] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="custom-notes"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] mb-1.5"
                  >
                    Specific Requirements or Notes (Optional)
                  </label>
                  <textarea
                    id="custom-notes"
                    rows={3}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="Let the team know if you'd like to schedule a call or combine financial & specialized packages..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#B4C2DE]/20 focus:border-[#0866FF] focus:outline-none text-sm text-white placeholder-[#B4C2DE]/40 resize-none"
                  />
                </div>

                <a
                  href={buildMailtoHref('Partnership Proposal Inquiry')}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#0866FF] hover:bg-[#3B82F6] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(8,102,255,0.35)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Pre-Addressed Email to Committee</span>
                </a>

                <p className="text-[11px] font-mono text-[#B4C2DE]/70 text-center">
                  Opens your email client addressed to {COMMITTEE_CONTACTS[0].email} with the
                  committee CC’d.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { ArrowUp, FileDown, ShieldAlert } from 'lucide-react';
import { EVENT_METADATA, COMMITTEE_CONTACTS } from '../../data/eventData';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050C1B] border-t border-[#B4C2DE]/15 pt-16 pb-12 text-[#B4C2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#B4C2DE]/12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="bg-[#0D1B3B] border border-[#B4C2DE]/15 rounded-xl px-3 py-2">
                <img
                  src="/incido-logo.png"
                  alt="INCIDO GEN 3.0 Official Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-black text-white tracking-tight">
                  INCIDO <span className="text-[#0866FF]">GEN 3.0</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#60A5FA]">
                  {EVENT_METADATA.organizer}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B4C2DE] max-w-md leading-relaxed">
              The third edition of the flagship creative initiative organized by the SLTC Media Unit
              (established in 2016 by {EVENT_METADATA.founder}). Empowering undergraduate talent
              across Photography, Videography, Graphic Design, and Compering.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-[#0D1B3B] text-white border border-[#B4C2DE]/15">
                {EVENT_METADATA.socialMedia.handle}
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D1B3B] text-white border border-[#B4C2DE]/15">
                {EVENT_METADATA.socialMedia.publication}
              </span>
            </div>
          </div>

          {/* Section Index */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Proposal Architecture
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: '01. About SLTC Media Unit', href: '#about-media-unit' },
                { label: '02. The INCIDO Legacy', href: '#legacy' },
                { label: '03. Experience INCIDO GEN 3.0', href: '#experience' },
                { label: '04. Proposed Event Timeline', href: '#timeline' },
                { label: '05. Why Partner With Us', href: '#why-partner' },
                { label: '06. Sponsorship Packages', href: '#sponsorship-packages' },
                { label: '07. Specialized Partnerships', href: '#specialized-partners' },
                { label: '08. Grand Finale Spotlight', href: '#grand-finale' },
                { label: '09. Organizing Committee Contacts', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Committee Summary & Resources */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Key Committee Contacts
            </h3>
            <div className="space-y-2.5 text-xs">
              {COMMITTEE_CONTACTS.map((c) => (
                <div
                  key={c.email}
                  className="p-2.5 rounded-lg bg-[#0D1B3B]/50 border border-[#B4C2DE]/10 flex items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-bold text-white">{c.name}</div>
                    <div className="text-[#B4C2DE]/80">{c.role}</div>
                  </div>
                  <div className="text-right font-mono">
                    <a
                      href={`tel:${c.telephoneHref}`}
                      className="text-[#60A5FA] hover:underline block"
                    >
                      {c.telephoneDisplay}
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-[#B4C2DE] hover:text-white block"
                    >
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={EVENT_METADATA.proposalPdfUrl}
                download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D1B3B] hover:bg-[#0866FF] text-white text-xs font-semibold border border-[#B4C2DE]/20 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Official PDF Proposal</span>
              </a>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D1B3B]/70 hover:bg-[#0D1B3B] text-[#B4C2DE] hover:text-white text-xs font-mono border border-[#B4C2DE]/15 transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Source Audit Notes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {EVENT_METADATA.organizer}. All information derived from
            the official INCIDO GEN 3.0 Sponsorship Proposal.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D1B3B] hover:bg-[#0866FF] text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};


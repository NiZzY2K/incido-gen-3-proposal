import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

const NAV_LINKS = [
  { label: 'Media Unit', href: '#about-media-unit' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Experience 3.0', href: '#experience' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Why Partner', href: '#why-partner' },
  { label: 'Packages', href: '#sponsorship-packages' },
  { label: 'Partnerships', href: '#specialized-partners' },
  { label: 'Grand Finale', href: '#grand-finale' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071126]/90 backdrop-blur-xl border-b border-[#B4C2DE]/15 py-3 shadow-[0_10px_30px_rgba(5,12,27,0.65)]'
          : 'bg-gradient-to-b from-[#071126]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo + Attribution */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="INCIDO GEN 3.0 Home"
          >
            <div className="relative flex items-center justify-center bg-[#0D1B3B]/90 border border-[#B4C2DE]/15 rounded-lg px-2.5 py-1.5 group-hover:border-[#0866FF]/60 transition-colors">
              <img
                src="/incido-logo.png"
                alt="INCIDO GEN 3.0 Official Logo"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-tight text-sm sm:text-base text-white">
                  INCIDO <span className="text-[#0866FF]">GEN 3.0</span>
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#B4C2DE]">
                SLTC Media Unit
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center gap-1 bg-[#0D1B3B]/75 border border-[#B4C2DE]/12 rounded-full px-2 py-1"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#0866FF] text-white shadow-sm'
                      : 'text-[#B4C2DE] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenAuditModal}
              title="Organizer Source Document Review Notes"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#B4C2DE] hover:text-white bg-[#0D1B3B]/80 hover:bg-[#0D1B3B] border border-[#B4C2DE]/15 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="hidden lg:inline">Proposal Notes</span>
            </button>

            <a
              href={EVENT_METADATA.proposalPdfUrl}
              download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#B4C2DE] hover:text-white bg-[#0D1B3B]/80 hover:bg-[#0D1B3B] border border-[#B4C2DE]/20 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>PDF Deck</span>
            </a>

            <a
              href="#sponsorship-packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#sponsorship-packages');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0866FF] hover:bg-[#3B82F6] transition-colors shadow-[0_0_20px_rgba(8,102,255,0.35)]"
            >
              <span>Become a Partner</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-lg bg-[#0D1B3B] border border-[#B4C2DE]/20 text-white hover:border-[#0866FF] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-[#071126]/98 backdrop-blur-2xl border-b border-[#B4C2DE]/15 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {NAV_LINKS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-colors ${
                        isActive
                          ? 'bg-[#0866FF]/20 border-[#0866FF] text-white'
                          : 'bg-[#0D1B3B]/60 border-[#B4C2DE]/10 text-[#B4C2DE] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#B4C2DE]/15 flex flex-wrap items-center gap-2.5">
                <a
                  href="#sponsorship-packages"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#sponsorship-packages');
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0866FF] hover:bg-[#3B82F6]"
                >
                  <span>Explore Sponsorships</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={EVENT_METADATA.proposalPdfUrl}
                  download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0D1B3B] border border-[#B4C2DE]/20"
                >
                  <FileDown className="w-4 h-4 text-[#3B82F6]" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuditModal();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-mono text-[#B4C2DE] bg-[#0D1B3B] border border-[#B4C2DE]/15"
                >
                  <ShieldAlert className="w-4 h-4 text-[#3B82F6]" />
                  <span>Proposal Notes</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


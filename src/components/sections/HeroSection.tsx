import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Compass,
  Camera,
  Film,
  Layers,
  Mic2,
  Sparkles,
} from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';
import { SpotlightSurface } from '../ui/SharedUI';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden border-b border-[#B4C2DE]/12"
    >
      {/* Subtle architectural grid and ambient directional light inspired by the camera/mic/pen logo */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-60" />
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[680px] h-[680px] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(8,102,255,0.65) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Organizer Attribution Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1B3B]/90 border border-[#0866FF]/35"
            >
              <span className="w-2 h-2 rounded-full bg-[#0866FF] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-white font-semibold">
                {EVENT_METADATA.organizer}
              </span>
              <span className="text-[#B4C2DE]/40">•</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#60A5FA]">
                Official Sponsorship Proposal
              </span>
            </motion.div>

            {/* Oversized Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-black tracking-tight text-white leading-[1.03]"
            >
              WHERE THE NEXT GENERATION OF{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0866FF] via-[#3B82F6] to-[#93C5FD]">
                CREATIVITY BEGINS.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg sm:text-xl text-[#B4C2DE] max-w-2xl leading-relaxed font-normal"
            >
              {EVENT_METADATA.supportingCopy}
            </motion.p>

            {/* Key Event Metadata Bar (Grand Finale Date & Venue) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl pt-1"
            >
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1B3B]/75 border border-[#B4C2DE]/15">
                <div className="p-2.5 rounded-lg bg-[#0866FF]/15 border border-[#0866FF]/30 text-[#3B82F6] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE]">
                      Grand Finale
                    </span>
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#0866FF]/20 text-[#60A5FA]">
                      Proposed
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {EVENT_METADATA.finaleDate}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0D1B3B]/75 border border-[#B4C2DE]/15">
                <div className="p-2.5 rounded-lg bg-[#0866FF]/15 border border-[#0866FF]/30 text-[#3B82F6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE] block">
                    Finale Venue
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {EVENT_METADATA.venue}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#sponsorship-packages"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0866FF] hover:bg-[#3B82F6] text-white font-bold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(8,102,255,0.4)] hover:translate-y-[-1px]"
              >
                <span>Explore Sponsorships</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about-media-unit"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0D1B3B] hover:bg-[#132652] text-white font-semibold text-sm sm:text-base border border-[#B4C2DE]/20 hover:border-[#3B82F6]/50 transition-all"
              >
                <Compass className="w-4 h-4 text-[#3B82F6]" />
                <span>Discover INCIDO</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Studio Viewfinder & Official INCIDO GEN 3.0 Visual Identity Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <SpotlightSurface className="rounded-2xl bg-gradient-to-b from-[#0D1B3B]/90 to-[#071126]/95 border border-[#B4C2DE]/20 p-6 sm:p-8 shadow-2xl viewfinder-frame">
              {/* Top Viewfinder Telemetry Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#B4C2DE]/12 font-mono text-[11px] text-[#B4C2DE]">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#0866FF]" />
                  <span>SLTC // MEDIA UNIT EST. 2016</span>
                </div>
                <span className="text-[#60A5FA]">EDITION 03 // 2026</span>
              </div>

              {/* Official Logo Showcase Panel */}
              <div className="relative rounded-xl bg-[#050C1B]/90 border border-[#0866FF]/25 p-6 sm:p-8 flex flex-col items-center justify-center overflow-hidden">
                {/* Subtle animated light beam echoing the camera/projector cone in the logo */}
                <motion.div
                  animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [0.98, 1.03, 0.98],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(8,102,255,0.28),transparent_65%)]"
                />

                <img
                  src="/incido-logo.png"
                  alt="INCIDO GEN 3.0 Official Symbol — Camera, Microphone, Videography Lens, and Pen"
                  className="relative z-10 w-full max-w-[340px] h-auto object-contain drop-shadow-[0_8px_24px_rgba(8,102,255,0.3)]"
                />

                <div className="relative z-10 mt-5 pt-4 border-t border-[#B4C2DE]/10 w-full flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B4C2DE]">FLAGSHIP CREATIVE INITIATIVE</span>
                  <span className="px-2 py-0.5 rounded bg-[#0866FF] text-white font-bold">
                    GEN 3.0
                  </span>
                </div>
              </div>

              {/* Four Competition Pillars Decoded from the Logo Symbol */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4C2DE]">
                    Four Core Creative Disciplines
                  </span>
                  <span className="font-mono text-[11px] text-[#3B82F6] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> All SLTC Undergraduates
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { icon: Camera, name: 'Photography', spec: 'Still Frame' },
                    { icon: Film, name: 'Videography', spec: 'Motion Craft' },
                    { icon: Layers, name: 'Graphic Design', spec: 'Visual Identity' },
                    { icon: Mic2, name: 'Compering', spec: 'Live Stage' },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href="#experience"
                        className="group flex items-center gap-3 p-3 rounded-xl bg-[#071126]/80 hover:bg-[#0866FF]/15 border border-[#B4C2DE]/12 hover:border-[#0866FF]/40 transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#0D1B3B] text-[#3B82F6] group-hover:bg-[#0866FF] group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.name}</div>
                          <div className="font-mono text-[10px] text-[#B4C2DE]">{item.spec}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </SpotlightSurface>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Telemetry Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 mt-8 border-t border-[#B4C2DE]/12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4C2DE] block">
              Organizing Body
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">
              SLTC Media Unit (Est. 2016)
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4C2DE] block">
              Organizational Backbone
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">
              6 Specialized Committees
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4C2DE] block">
              Recognition Tracks
            </span>
            <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">
              Most Talented & Most Popular
            </span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B4C2DE] block">
              Sponsorship Tiers
            </span>
            <span className="text-sm sm:text-base font-bold text-[#60A5FA] mt-0.5 block">
              LKR 5,000 – LKR 20,000 + In-Kind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Menu,
  X,
  Check,
  Minus,
  Phone,
  Mail,
  Camera,
  Video,
  Mic,
  PenTool,
  FileText,
  CalendarCheck,
  Film,
  Layers,
  Mic2,
  Shirt,
  Gift,
  Printer,
  Utensils,
  GraduationCap,
  Cpu,
  Building2,
  Share2,
  MapPin,
  Calendar,
  Award,
  ShieldAlert,
  Copy,
  Send,
} from 'lucide-react';
import { LiquidChrome } from './components/ui/LiquidChrome';
import { OrganizerAuditModal } from './components/layout/OrganizerAuditModal';
import {
  EVENT_METADATA,
  SLTC_MEDIA_UNIT_INFO,
  SIX_COMMITTEES,
  INCIDO_LEGACY,
  COMPETITION_FIELDS,
  EVENT_OBJECTIVES,
  PLANNED_ACTIVITIES,
  PROPOSED_TIMELINE,
  GRAND_FINALE_PROGRAMME,
  PARTICIPANT_ADVANTAGES,
  COMMITTEE_CONTACTS,
} from './data/eventData';
import {
  WHY_PARTNER_INTRO,
  WHY_PARTNER_PILLARS,
  ADVANTAGES_TO_SPONSORS_LIST,
  SPONSORSHIP_TIERS,
  SPONSORSHIP_BENEFITS_MATRIX,
  BENEFITS_CLAUSE,
  SPECIALIZED_PARTNERSHIPS,
} from './data/sponsorshipData';

export const SLIDE_TITLES: string[] = [
  'Landing Page',
  'Table of Contents',
  'What is the SLTC Media Unit?',
  'The Six Committees of the SLTC Media Unit',
  'Committee Responsibilities — Media & Stage',
  'Committee Responsibilities — Visual, Editorial & Operations',
  'Previous INCIDO Projects — GEN 1.0 & GEN 2.0',
  'INCIDO GEN 3.0 — Project Overview',
  'Four Creative Competition Fields',
  'Objectives of INCIDO GEN 3.0',
  'Event Structure and Planned Activities',
  'Proposed Project Timeline',
  'Grand Finale — 19 December 2026',
  'Why Partner with INCIDO GEN 3.0?',
  'Advantages to Participants',
  'Advantages to Sponsors',
  'Sponsorship Packages & Benefits Matrix',
  'Specialized Partnerships — Event & Experience',
  'Specialized Partnerships — Production & Digital',
  'Contact Us & Partnership Inquiries',
];

const TOTAL_SLIDES = SLIDE_TITLES.length;

function getSlideChapterLabel(index: number): string {
  if (index <= 6) return 'Our Organization & Legacy';
  if (index <= 12) return 'The Initiative — INCIDO GEN 3.0';
  return 'Become a Partner';
}

function getInitialSlideFromHash(): number {
  const num = Number(window.location.hash.replace('#slide-', ''));
  return num >= 1 && num <= TOTAL_SLIDES ? num - 1 : 0;
}

const COMMITTEE_ICONS = {
  Camera,
  Video,
  Mic,
  PenTool,
  FileText,
  CalendarCheck,
};

const FIELD_ICONS = {
  Camera,
  Film,
  Layers,
  Mic2,
};

const SPECIALIZED_ICONS = {
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

const GlassCard: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
  numberBadge?: string;
}> = ({ title, children, className = '', numberBadge }) => (
  <article className={`glass card ${className}`}>
    {numberBadge && <span className="card-number">{numberBadge}</span>}
    <h3>{title}</h3>
    {children}
  </article>
);

interface SlideContentProps {
  index: number;
  go: (slideIndex: number) => void;
  onOpenAuditModal: () => void;
}

const SlideContent: React.FC<SlideContentProps> = ({ index, go, onOpenAuditModal }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string>(
    'Title Partner (LKR 20,000)'
  );
  const [orgName, setOrgName] = useState<string>('');

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 1800);
  };

  switch (index) {
    /* SLIDE 01 — LANDING / COVER PAGE */
    case 0:
      return (
        <div className="landing">
          <div className="cover-pill">
            <span>Flagship University Media Initiative</span>
            <span>•</span>
            <span>Grand Finale: {EVENT_METADATA.finaleDate}</span>
          </div>

          <img
            className="hero-logo"
            src="/incido-logo.png"
            alt="INCIDO GEN 3.0 Official Logo"
          />

          <h1>Sponsorship Proposal</h1>
          <p className="landing-subtitle">{EVENT_METADATA.supportingCopy}</p>

          <div className="actions">
            <button type="button" className="button primary" onClick={() => go(1)}>
              <span>Get Started</span>
              <ArrowRight size={18} />
            </button>
            <a
              className="button secondary"
              href={EVENT_METADATA.proposalPdfUrl}
              download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
            >
              <Download size={17} />
              <span>Download As PDF</span>
            </a>
            <button type="button" className="button secondary" onClick={() => go(16)}>
              <span>View Packages</span>
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="organisers">
            <p>Organised by</p>
            <div className="organisers-logos">
              <div className="org-logo-pill">
                <img
                  className="org-mediaunit"
                  src="/media-unit-logo.png"
                  alt="Media Unit — Sri Lanka Technology Campus"
                />
              </div>
              <span className="org-divider" />
              <div className="org-meta">
                <strong>Media Unit of SLTC</strong>
                <span>Sri Lanka Technology Campus • Est. 2016</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* SLIDE 02 — TABLE OF CONTENTS */
    case 1:
      return (
        <>
          <p className="intro">
            Explore the interactive INCIDO GEN 3.0 sponsorship proposal. Select any page below or
            use your keyboard arrow keys (← / →) to navigate through the presentation.
          </p>
          <div className="toc-grid">
            {SLIDE_TITLES.map((title, idx) => (
              <button
                key={title}
                type="button"
                className={`toc-item ${idx === index ? 'current' : ''}`}
                onClick={() => go(idx)}
              >
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <strong>{title}</strong>
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
        </>
      );

    /* SLIDE 03 — WHAT IS THE SLTC MEDIA UNIT? */
    case 2:
      return (
        <div className="split">
          <div className="glass prose">
            <div className="eyebrow">Oldest Student Organization at SLTC</div>
            <p>{SLTC_MEDIA_UNIT_INFO.overview}</p>
            <p>{SLTC_MEDIA_UNIT_INFO.mission}</p>
            <p>{SLTC_MEDIA_UNIT_INFO.skillDevelopment}</p>

            <div className="milestones">
              <div>
                <b>2016</b>
                <span>Established at SLTC</span>
              </div>
              <div>
                <b>06</b>
                <span>Specialized Committees</span>
              </div>
              <div>
                <b>GEN 3.0</b>
                <span>3rd Flagship Edition</span>
              </div>
            </div>
          </div>

          <figure className="glass logo-panel">
            <div className="light-logo-frame">
              <img
                src="/media-unit-logo.png"
                alt="Media Unit of Sri Lanka Technology Campus official logo"
              />
            </div>
            <figcaption>
              Founded in 2016 by {EVENT_METADATA.founder} ({EVENT_METADATA.founderTitle})
            </figcaption>
          </figure>
        </div>
      );

    /* SLIDE 04 — THE SIX COMMITTEES OF THE SLTC MEDIA UNIT (PILLARS OVERVIEW) */
    case 3:
      return (
        <>
          <p className="intro">{SLTC_MEDIA_UNIT_INFO.structureSummary}</p>
          <div className="grid cols-3">
            {SIX_COMMITTEES.map((committee) => {
              const Icon = COMMITTEE_ICONS[committee.iconName];
              return (
                <GlassCard
                  key={committee.id}
                  title={committee.name}
                  numberBadge={committee.number}
                >
                  <div className="partner-icon">
                    <Icon size={28} />
                  </div>
                  <p>{committee.highlights[0]}.</p>
                  <p className="partner-detail">{committee.technicalSpec}</p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 05 — COMMITTEE RESPONSIBILITIES: MEDIA & STAGE (COMMITTEES 01–03) */
    case 4:
      return (
        <>
          <p className="intro">
            Section 1.2.1 – 1.2.3: Visual capture, motion production, and live stage hosting across
            university programmes.
          </p>
          <div className="grid cols-3">
            {SIX_COMMITTEES.slice(0, 3).map((committee) => {
              const Icon = COMMITTEE_ICONS[committee.iconName];
              return (
                <GlassCard
                  key={committee.id}
                  title={committee.name}
                  numberBadge={`1.2.${Number(committee.number)}`}
                >
                  <div className="partner-icon">
                    <Icon size={28} />
                  </div>
                  <p>{committee.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 06 — COMMITTEE RESPONSIBILITIES: VISUAL, EDITORIAL & OPERATIONS (COMMITTEES 04–06) */
    case 5:
      return (
        <>
          <p className="intro">
            Section 1.2.4 – 1.2.6: Graphic identity, institutional documentation, and end-to-end
            programme coordination.
          </p>
          <div className="grid cols-3">
            {SIX_COMMITTEES.slice(3, 6).map((committee) => {
              const Icon = COMMITTEE_ICONS[committee.iconName];
              return (
                <GlassCard
                  key={committee.id}
                  title={committee.name}
                  numberBadge={`1.2.${Number(committee.number)}`}
                >
                  <div className="partner-icon">
                    <Icon size={28} />
                  </div>
                  <p>{committee.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 07 — PREVIOUS INCIDO PROJECTS (GEN 1.0, GEN 2.0 & GEN 3.0 PROGRESSION) */
    case 6:
      return (
        <>
          <p className="intro">
            The SLTC Media Unit introduced INCIDO as an initiative to encourage students to explore
            their creative interests and develop their abilities in different media-related fields.
          </p>
          <div className="grid cols-3">
            {INCIDO_LEGACY.map((item, idx) => (
              <GlassCard
                key={item.edition}
                title={item.edition}
                numberBadge={`0${idx + 1}`}
                className={idx === 2 ? 'featured' : ''}
              >
                <p className="font-semibold text-[#60A5FA]">{item.title}</p>
                <p>{item.description}</p>
                <p className="partner-detail">{item.status}</p>
              </GlassCard>
            ))}
          </div>
        </>
      );

    /* SLIDE 08 — INCIDO GEN 3.0 PROJECT OVERVIEW */
    case 7:
      return (
        <>
          <div className="split">
            <div className="glass prose">
              <div className="eyebrow">3.1 Overview of INCIDO GEN 3.0</div>
              <p>
                The SLTC Media Unit proudly presents INCIDO GEN 3.0, the third edition of its
                flagship initiative, aimed at discovering, showcasing and developing the creative
                talents of the SLTC community.
              </p>
              <p>
                The initiative focuses on four creative fields: photography, videography, graphic
                design and compering. It is open to all SLTC undergraduates, providing them with
                opportunities to demonstrate their skills, express their creativity and gain
                recognition.
              </p>
              <p>
                INCIDO GEN 3.0 will include several activities, such as awareness sessions, online
                and in-person sessions, workshops and competitions, leading up to the Grand Finale
                and Award Ceremony.
              </p>
            </div>

            <figure className="glass logo-panel">
              <img src="/incido-logo.png" alt="INCIDO GEN 3.0 Official Symbol" />
              <figcaption>
                Recognizing participants through the <strong className="text-white">Most Talented</strong> and{' '}
                <strong className="text-white">Most Popular</strong> categories
              </figcaption>
            </figure>
          </div>

          <div className="grid cols-3" style={{ marginTop: 18 }}>
            <GlassCard title="04 Creative Fields" numberBadge="SCOPE">
              <p>Photography, Videography, Graphic Design & Compering</p>
            </GlassCard>
            <GlassCard title="All SLTC Undergraduates" numberBadge="ELIGIBILITY">
              <p>University-wide participation across faculties and cohorts</p>
            </GlassCard>
            <GlassCard title="19 December 2026" numberBadge="FINALE">
              <p>Grand Finale at the SLTC Padukka premises (Proposed Date)</p>
            </GlassCard>
          </div>
        </>
      );

    /* SLIDE 09 — FOUR CREATIVE COMPETITION FIELDS */
    case 8:
      return (
        <>
          <p className="intro">
            While the SLTC Media Unit operates through six organizing committees, the INCIDO GEN 3.0
            competition focuses on four core creative disciplines open to all SLTC undergraduates:
          </p>
          <div className="grid cols-4">
            {COMPETITION_FIELDS.map((field, idx) => {
              const Icon = FIELD_ICONS[field.iconName];
              return (
                <GlassCard
                  key={field.id}
                  title={field.name}
                  numberBadge={`0${idx + 1}`}
                >
                  <div className="partner-icon">
                    <Icon size={28} />
                  </div>
                  <p className="font-semibold text-[#60A5FA]">{field.tagline}</p>
                  <p>{field.description}</p>
                  <p className="partner-detail">
                    Tracks: Most Talented & Most Popular
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 10 — OBJECTIVES OF INCIDO GEN 3.0 */
    case 9:
      return (
        <>
          <p className="intro">
            Section 3.2: INCIDO GEN 3.0 is structured around three foundational objectives for the
            SLTC undergraduate community:
          </p>
          <div className="grid cols-3">
            {EVENT_OBJECTIVES.map((obj) => (
              <GlassCard
                key={obj.number}
                title={obj.title}
                numberBadge={obj.number}
              >
                <p>{obj.description}</p>
              </GlassCard>
            ))}
          </div>
          <div className="glass prose" style={{ marginTop: 18, padding: '22px 28px' }}>
            <p style={{ fontSize: '0.96rem' }}>
              <strong style={{ color: '#60A5FA' }}>Dual Recognition Model:</strong> By celebrating
              both <strong className="text-white">Most Talented</strong> (judges’ evaluation of creative excellence) and{' '}
              <strong className="text-white">Most Popular</strong> (university community voting), INCIDO GEN 3.0 drives
              both technical mastery and campus-wide audience engagement.
            </p>
          </div>
        </>
      );

    /* SLIDE 11 — EVENT STRUCTURE & PLANNED ACTIVITIES */
    case 10:
      return (
        <>
          <p className="intro">
            Section 3.3: INCIDO GEN 3.0 is planned as a progressive series of activities taking
            participants from the initial awareness stage to the final competition and award
            ceremony.
          </p>
          <div className="grid cols-3">
            {PLANNED_ACTIVITIES.map((act, idx) => (
              <GlassCard
                key={act.id}
                title={act.title}
                numberBadge={`0${idx + 1}`}
                className={idx === 5 ? 'featured' : ''}
              >
                <p>{act.description}</p>
                <p className="partner-detail">{act.tag}</p>
              </GlassCard>
            ))}
          </div>
        </>
      );

    /* SLIDE 12 — PROPOSED PROJECT TIMELINE */
    case 11:
      return (
        <>
          <div className="timeline">
            {PROPOSED_TIMELINE.map((item, idx) => (
              <div
                key={item.id}
                className={`glass timeline-row ${item.isFinale ? 'featured' : ''}`}
              >
                <span className="timeline-index">{idx + 1}</span>
                <strong>
                  {item.proposedDate}
                  <small>{item.statusLabel}</small>
                </strong>
                <div>
                  <h3>{item.activity}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="note">
            All dates above are listed as <strong className="text-white">proposed dates</strong> in Section 3.3 of the
            official proposal until confirmed by the organizers. Grand Finale venue:{' '}
            <strong className="text-white">{EVENT_METADATA.venue}</strong>.
          </p>
        </>
      );

    /* SLIDE 13 — GRAND FINALE SPOTLIGHT (19 DECEMBER 2026) */
    case 12:
      return (
        <>
          <div className="grid cols-3" style={{ marginBottom: 18 }}>
            <GlassCard title="19 December 2026" numberBadge="DATE">
              <p className="flex items-center gap-2">
                <Calendar size={16} className="text-[#60A5FA]" />
                <span>Proposed Grand Finale Date (8.30 AM – 4.30 PM)</span>
              </p>
            </GlassCard>
            <GlassCard title="SLTC Padukka Premises" numberBadge="VENUE">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#60A5FA]" />
                <span>On-campus finals, plenary session & award ceremony</span>
              </p>
            </GlassCard>
            <GlassCard title="Most Talented & Popular" numberBadge="AWARDS">
              <p className="flex items-center gap-2">
                <Award size={16} className="text-[#60A5FA]" />
                <span>Judges’ review of entries & grand award ceremony</span>
              </p>
            </GlassCard>
          </div>

          <div className="timeline">
            {GRAND_FINALE_PROGRAMME.map((slot, idx) => (
              <div key={slot.time} className="glass timeline-row">
                <span className="timeline-index">{idx + 1}</span>
                <strong>
                  {slot.time}
                  <small>{slot.tag}</small>
                </strong>
                <div>
                  <h3>{slot.programme}</h3>
                  <p>{slot.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="note">
            The Grand Finale brings together participants, judges, industry representatives, guests,
            and members of the SLTC community to celebrate the achievements of the competition.
          </p>
        </>
      );

    /* SLIDE 14 — WHY PARTNER WITH INCIDO GEN 3.0? */
    case 13:
      return (
        <>
          <p className="intro">{WHY_PARTNER_INTRO.lead}</p>
          <div className="grid cols-2">
            {WHY_PARTNER_PILLARS.map((pillar) => (
              <GlassCard
                key={pillar.id}
                title={pillar.title}
                numberBadge={pillar.number}
              >
                <p>{pillar.description}</p>
              </GlassCard>
            ))}
          </div>
        </>
      );

    /* SLIDE 15 — ADVANTAGES TO PARTICIPANTS (SECTION 5.1) */
    case 14:
      return (
        <>
          <p className="intro">
            Section 5.1: INCIDO GEN 3.0 provides participants with opportunities to develop their
            creative interests and gain experience beyond their regular academic activities.
          </p>
          <div className="glass impact-list">
            {PARTICIPANT_ADVANTAGES.map((adv, idx) => (
              <div key={adv.title}>
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <p>
                  <strong style={{ color: '#FFFFFF' }}>{adv.title}:</strong> {adv.description}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    /* SLIDE 16 — ADVANTAGES TO SPONSORS (SECTION 5.2) */
    case 15:
      return (
        <>
          <p className="intro">
            Section 5.2: Sponsors will receive recognition and promotional opportunities based on
            their selected partnership package:
          </p>
          <div className="glass impact-list">
            {ADVANTAGES_TO_SPONSORS_LIST.map((item, idx) => (
              <div key={item}>
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="note">
            Through these opportunities, sponsors can introduce their brands to the SLTC community
            while supporting an initiative that encourages creativity and the development of young
            talent.
          </p>
        </>
      );

    /* SLIDE 17 — SPONSORSHIP PACKAGES & BENEFITS MATRIX (SECTIONS 6.1 & 6.2) */
    case 16:
      return (
        <>
          <div className="grid cols-4 sponsorship-head">
            {SPONSORSHIP_TIERS.map((tier, idx) => (
              <GlassCard
                key={tier.id}
                title={tier.name}
                className={idx === 0 ? 'featured' : ''}
              >
                <p className="price-line">
                  LKR <strong className="price-amount">{tier.investmentLkr.toLocaleString()}</strong>
                </p>
                <div className="seat-availability">
                  <span>{tier.coreIncludedBenefits.length} / 13</span>
                  <span>benefits included</span>
                </div>
                <a
                  href={`mailto:${COMMITTEE_CONTACTS[0].email}?cc=${COMMITTEE_CONTACTS.slice(1)
                    .map((c) => c.email)
                    .join(',')}&subject=${encodeURIComponent(
                    `INCIDO GEN 3.0 Sponsorship Inquiry — ${tier.name}`
                  )}`}
                  className={`button ${idx === 0 ? 'primary' : 'secondary'}`}
                >
                  Discuss Sponsorship
                </a>
              </GlassCard>
            ))}
          </div>

          <div className="glass table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Services / Benefits</th>
                  <th>Title Partner (LKR 20,000)</th>
                  <th>Diamond Partner (LKR 15,000)</th>
                  <th>Gold Partner (LKR 10,000)</th>
                  <th>Silver Partner (LKR 5,000)</th>
                </tr>
              </thead>
              <tbody>
                {SPONSORSHIP_BENEFITS_MATRIX.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">{row.service}</th>
                    {(['title', 'diamond', 'gold', 'silver'] as const).map((tierKey) => (
                      <td key={tierKey}>
                        {row[tierKey] ? (
                          <span className="included">
                            <Check size={15} /> Included
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[#647899]">
                            <Minus size={14} /> —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <p className="note" style={{ marginTop: 0 }}>
              {BENEFITS_CLAUSE}
            </p>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:underline bg-transparent"
            >
              <ShieldAlert size={14} />
              <span>Organizer Review Note on Package Differentiation</span>
            </button>
          </div>
        </>
      );

    /* SLIDE 18 — SPECIALIZED PARTNERSHIPS PART 1 (CATEGORIES 01–05) */
    case 17:
      return (
        <>
          <p className="intro">
            Section 6.3: In addition to financial sponsorship packages, INCIDO GEN 3.0 welcomes
            organizations to contribute through specialized partnerships (Categories 01–05):
          </p>
          <div className="grid cols-3">
            {SPECIALIZED_PARTNERSHIPS.slice(0, 5).map((partner) => {
              const Icon = SPECIALIZED_ICONS[partner.iconName];
              return (
                <GlassCard
                  key={partner.id}
                  title={partner.title}
                  numberBadge={partner.number}
                >
                  <div className="partner-icon">
                    <Icon size={28} />
                  </div>
                  <p>{partner.summary}</p>
                  <p className="partner-detail">Recognition: {partner.recognition}</p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 19 — SPECIALIZED PARTNERSHIPS PART 2 (CATEGORIES 06–09 WITH POSSIBLE CONTRIBUTIONS) */
    case 18:
      return (
        <>
          <p className="intro">
            Section 6.3: Production Equipment, Technology, Venue & Facility, and Digital Media &
            Promotional Partnerships (Categories 06–09):
          </p>
          <div className="grid cols-2">
            {SPECIALIZED_PARTNERSHIPS.slice(5, 9).map((partner) => {
              const Icon = SPECIALIZED_ICONS[partner.iconName];
              return (
                <GlassCard
                  key={partner.id}
                  title={partner.title}
                  numberBadge={partner.number}
                >
                  <div className="flex items-start gap-4 mt-3">
                    <div className="partner-icon" style={{ margin: 0, flexShrink: 0 }}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <p style={{ marginTop: 0 }}>{partner.summary}</p>
                      {partner.possibleContributions && (
                        <ul className="mt-2.5 pl-4 text-xs sm:text-sm text-[#B4C2DE] space-y-1 list-disc">
                          {partner.possibleContributions.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <p className="partner-detail">Recognition: {partner.recognition}</p>
                </GlassCard>
              );
            })}
          </div>
        </>
      );

    /* SLIDE 20 — CONTACT US & PARTNERSHIP INQUIRIES */
    case 19: {
      const mailtoHref = `mailto:${COMMITTEE_CONTACTS[0].email}?cc=${COMMITTEE_CONTACTS.slice(1)
        .map((c) => c.email)
        .join(',')}&subject=${encodeURIComponent(
        `INCIDO GEN 3.0 Partnership Inquiry — ${selectedInterest}`
      )}&body=${encodeURIComponent(
        `Dear INCIDO GEN 3.0 Organizing Committee,\n\nOrganization: ${
          orgName || '[Your Organization]'
        }\nInterested Tier / Category: ${selectedInterest}\n\nWe would like to discuss partnering with INCIDO GEN 3.0.\n`
      )}`;

      return (
        <>
          <p className="intro">
            For further information about INCIDO GEN 3.0, sponsorship packages, or partnership
            opportunities, please contact the organizing committee directly:
          </p>

          <div className="grid cols-4 contacts">
            {COMMITTEE_CONTACTS.map((person) => {
              const initials = person.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

              return (
                <GlassCard key={person.email} title={person.name}>
                  <div className="avatar-monogram">{initials}</div>
                  <p className="role">{person.role}</p>

                  <a href={`tel:${person.telephoneHref}`} className="contact-row">
                    <Phone size={15} className="text-[#60A5FA]" />
                    <span>{person.telephoneDisplay}</span>
                  </a>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={`mailto:${person.email}?subject=${encodeURIComponent(
                        'INCIDO GEN 3.0 Sponsorship Inquiry'
                      )}`}
                      className="contact-row flex-1"
                    >
                      <Mail size={15} className="text-[#60A5FA]" />
                      <span>{person.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(person.email)}
                      title="Copy email"
                      className="icon-button"
                      style={{ width: 34, height: 34 }}
                    >
                      {copiedEmail === person.email ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* Direct Inquiry Bar & Social Media Attribution */}
          <div className="split" style={{ marginTop: 18 }}>
            <div className="glass card flex flex-col justify-between">
              <div>
                <h3>Quick Sponsorship Email Composer</h3>
                <p style={{ marginTop: 6 }}>
                  Select a package to open a pre-addressed inquiry to all four organizing committee
                  leads:
                </p>
                <div className="grid cols-2" style={{ marginTop: 14, gap: 12 }}>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Your Organization Name"
                    className="px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#3B82F6]/35 text-sm text-white placeholder-[#8BA1C7] focus:outline-none focus:border-[#0866FF]"
                  />
                  <select
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl bg-[#071126] border border-[#3B82F6]/35 text-sm text-white focus:outline-none focus:border-[#0866FF]"
                  >
                    {SPONSORSHIP_TIERS.map((t) => (
                      <option key={t.id} value={`${t.name} (${t.investmentFormatted})`}>
                        {t.name} ({t.investmentFormatted})
                      </option>
                    ))}
                    {SPECIALIZED_PARTNERSHIPS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} (Specialized)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href={mailtoHref} className="button primary">
                  <Send size={16} />
                  <span>Become a Sponsor</span>
                </a>
                <a
                  href={`tel:${COMMITTEE_CONTACTS[3].telephoneHref}`}
                  className="button secondary"
                >
                  <Phone size={16} />
                  <span>Call Industry Outreach</span>
                </a>
              </div>
            </div>

            <div className="glass card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3>Official Social Media</h3>
                  <div className="media-unit-badge">
                    <img
                      src="/media-unit-logo.png"
                      alt="SLTC Media Unit"
                      style={{ height: 24, width: 'auto' }}
                    />
                  </div>
                </div>
                <p style={{ marginTop: 4 }}>
                  Connect with the SLTC Media Unit across official university media channels:
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/20 text-xs font-bold text-white">
                    {EVENT_METADATA.socialMedia.primaryName}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/20 text-xs font-bold text-white">
                    {EVENT_METADATA.socialMedia.secondaryName}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#0866FF]/20 border border-[#3B82F6]/45 text-xs font-mono font-bold text-[#60A5FA]">
                    {EVENT_METADATA.socialMedia.handle}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#071126] border border-[#B4C2DE]/20 text-xs font-mono font-bold text-white">
                    {EVENT_METADATA.socialMedia.publication}
                  </span>
                </div>
              </div>

              <p className="partner-detail">
                Grand Finale: {EVENT_METADATA.finaleDate} • {EVENT_METADATA.venue}
              </p>
            </div>
          </div>
        </>
      );
    }

    default:
      return null;
  }
};

export function App() {
  const [slideIndex, setSlideIndex] = useState<number>(getInitialSlideFromHash);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [auditModalOpen, setAuditModalOpen] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);

  const go = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= TOTAL_SLIDES) return;
    setMenuOpen(false);
    window.location.hash = `slide-${nextIndex + 1}`;
    setSlideIndex(nextIndex);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  useEffect(() => {
    const onHashChange = () => setSlideIndex(getInitialSlideFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${SLIDE_TITLES[slideIndex]} | INCIDO GEN 3.0 Sponsorship Proposal`;
    mainRef.current?.focus({ preventScroll: true });
  }, [slideIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (menuOpen || auditModalOpen) return;
      const activeTag = document.activeElement?.tagName || '';
      if (['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'A'].includes(activeTag)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(slideIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(slideIndex - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slideIndex, menuOpen, auditModalOpen]);

  return (
    <div className="app">
      {/* Ambient LiquidChrome Shader Background (Dark Navy + Electric Blue) */}
      <div className="ambient" aria-hidden="true">
        <LiquidChrome
          baseColor={[0.04, 0.25, 0.68]}
          speed={0.24}
          amplitude={0.36}
          interactive={false}
        />
      </div>

      <a className="skip" href="#slide-content">
        Skip to slide
      </a>

      <div className={`presentation ${slideIndex === 0 ? 'is-cover' : ''}`}>
        {/* Top Deck Header (Shown on Slides 02–20) */}
        {slideIndex > 0 && (
          <header className="site-header">
            <button
              type="button"
              className="brand"
              onClick={() => go(0)}
              aria-label="Return to cover slide"
            >
              <img
                className="brand-incido"
                src="/incido-logo.png"
                alt="INCIDO GEN 3.0"
              />
              <span className="brand-divider" />
              <span className="media-unit-badge">
                <img
                  className="brand-mediaunit"
                  src="/media-unit-logo.png"
                  alt="SLTC Media Unit"
                />
              </span>
            </button>

            <button
              type="button"
              className="contents-button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="section-menu"
            >
              <Menu size={17} />
              <span>Contents</span>
            </button>

            <a
              className="header-download"
              href={EVENT_METADATA.proposalPdfUrl}
              download="INCIDO GEN 3.0 Sponsorship Proposal.pdf"
            >
              <Download size={16} />
              <span>Download As PDF</span>
            </a>
          </header>
        )}

        {/* Popover Contents Menu */}
        {menuOpen && (
          <nav
            className="glass menu-panel"
            id="section-menu"
            aria-label="Proposal sections"
          >
            <div className="menu-heading">
              <strong className="text-white">Contents (20 Pages)</strong>
              <button
                type="button"
                className="icon-button"
                aria-label="Close contents"
                onClick={() => setMenuOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {SLIDE_TITLES.map((title, idx) => (
              <button
                key={title}
                type="button"
                className={idx === slideIndex ? 'active' : ''}
                onClick={() => go(idx)}
              >
                <span>{String(idx + 1).padStart(2, '0')}</span>
                {title}
              </button>
            ))}
          </nav>
        )}

        {/* Main Active Slide Body */}
        <main
          ref={mainRef}
          tabIndex={-1}
          id="slide-content"
          className="slide"
          key={slideIndex}
        >
          <div className="slide-body">
            {slideIndex > 0 && (
              <div className="section-heading">
                <p className="eyebrow">
                  {getSlideChapterLabel(slideIndex)}{' '}
                  <span>/ {String(slideIndex + 1).padStart(2, '0')}</span>
                </p>
                <h1>{SLIDE_TITLES[slideIndex]}</h1>
              </div>
            )}

            <SlideContent
              index={slideIndex}
              go={go}
              onOpenAuditModal={() => setAuditModalOpen(true)}
            />
          </div>
        </main>

        {/* Bottom Deck Footer with Back / Progress Counter + Dots / Next */}
        <footer className="slide-footer">
          <div className="navigation">
            <button
              type="button"
              className="button footer-button"
              disabled={slideIndex === 0}
              onClick={() => go(slideIndex - 1)}
            >
              <ArrowLeft size={17} />
              <span>Back</span>
            </button>

            <div className="progress">
              <span>
                {String(slideIndex + 1).padStart(2, '0')} <em>/ {TOTAL_SLIDES}</em>
              </span>
              <nav className="slide-dots" aria-label="Jump to slide">
                {SLIDE_TITLES.map((title, idx) => (
                  <button
                    key={title}
                    type="button"
                    aria-label={`${idx + 1}. ${title}`}
                    aria-current={idx === slideIndex ? 'page' : undefined}
                    onClick={() => go(idx)}
                  >
                    <span />
                  </button>
                ))}
              </nav>
            </div>

            <button
              type="button"
              className="button footer-button next"
              onClick={() => go(slideIndex === TOTAL_SLIDES - 1 ? 1 : slideIndex + 1)}
            >
              <span>{slideIndex === TOTAL_SLIDES - 1 ? 'Contents' : 'Next'}</span>
              <ArrowRight size={17} />
            </button>
          </div>

          <p className="credit">
            INCIDO GEN 3.0 Official Sponsorship Proposal · Organised by the{' '}
            <strong className="text-white">Media Unit of Sri Lanka Technology Campus (SLTC)</strong>{' '}
            ·{' '}
            <button
              type="button"
              onClick={() => setAuditModalOpen(true)}
              className="underline hover:text-[#60A5FA] bg-transparent p-0 font-medium text-[#B4C2DE]"
            >
              Proposal Notes
            </button>
          </p>
        </footer>
      </div>

      {/* Organizer Source Document Audit Notes Modal */}
      <OrganizerAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}

export default App;

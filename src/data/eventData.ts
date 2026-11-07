export interface CommitteeItem {
  id: string;
  number: string;
  name: string;
  shortTitle: string;
  description: string;
  highlights: string[];
  iconName: 'Camera' | 'Video' | 'Mic' | 'PenTool' | 'FileText' | 'CalendarCheck';
  technicalSpec: string;
}

export interface LegacyEdition {
  edition: string;
  yearLabel: string;
  status: 'Completed Foundation' | 'Platform Expansion' | 'Current Flagship Edition';
  title: string;
  description: string;
  keyFocus: string[];
}

export interface CompetitionField {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  recognitionTracks: string[];
  iconName: 'Camera' | 'Film' | 'Layers' | 'Mic2';
  aspectSpec: string;
}

export interface EventObjective {
  number: string;
  title: string;
  description: string;
}

export interface PlannedActivity {
  id: string;
  step: string;
  title: string;
  description: string;
  tag: string;
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  activity: string;
  proposedDate: string;
  isoDate: string;
  statusLabel: 'Proposed Date' | 'Proposed Culmination';
  description: string;
  isFinale?: boolean;
}

export interface FinaleScheduleSlot {
  time: string;
  programme: string;
  detail: string;
  tag: string;
}

export interface CommitteeContact {
  name: string;
  role: string;
  telephoneDisplay: string;
  telephoneHref: string;
  email: string;
  departmentCode: string;
}

export interface SourceAuditNote {
  id: string;
  sectionRef: string;
  title: string;
  observation: string;
  recommendation: string;
}

export const EVENT_METADATA = {
  title: 'INCIDO GEN 3.0',
  subtitle: 'Sponsorship Proposal',
  organizer: 'Media Unit of Sri Lanka Technology Campus (SLTC)',
  organizerShort: 'SLTC Media Unit',
  foundedYear: 2016,
  founder: 'Mr. Vinol Fernando',
  founderTitle: 'Founder and President of the SLTC Media Unit',
  finaleDate: '19 December 2026',
  finaleDateStatus: 'Proposed Date',
  venue: 'SLTC Padukka premises',
  eligibility: 'Open to all SLTC undergraduates',
  awardCategories: ['Most Talented', 'Most Popular'],
  headline: 'WHERE THE NEXT GENERATION OF CREATIVITY BEGINS.',
  supportingCopy:
    'Partner with INCIDO GEN 3.0 and support the next generation of creators, storytellers, designers, and media professionals.',
  proposalPdfUrl: '/INCIDO GEN 3.0 Sponsorship Proposal.pdf',
  socialMedia: {
    primaryName: 'Media Unit of SLTC',
    secondaryName: 'SLTC Media Unit',
    handle: '@sltc_mediaunit',
    publication: 'INSIGHT SLTC',
  },
};

export const SLTC_MEDIA_UNIT_INFO = {
  overview:
    'The SLTC Media Unit is the oldest student organization at Sri Lanka Technology Campus. It was established in 2016 by Mr. Vinol Fernando, the founder and president of the SLTC Media Unit.',
  mission:
    'Since its establishment, the Media Unit has been actively involved in supporting the university, its clubs and societies by providing media coverage and assisting with the organization of various events and programmes.',
  skillDevelopment:
    'The Media Unit also provides students with opportunities to develop practical skills in photography, videography, graphic design, compering, report writing, event management and other areas of media production.',
  structureSummary:
    'To manage these responsibilities, the SLTC Media Unit is organized into six specialized committees, each handling a distinct area of media and event work. Together, these committees support the activities and projects carried out by the Media Unit.',
};

export const SIX_COMMITTEES: CommitteeItem[] = [
  {
    id: 'photography',
    number: '01',
    name: 'Photography Committee',
    shortTitle: 'Photography',
    description:
      "The Photography Committee is responsible for capturing photographs at university events, programmes and other activities. Its members document important moments and provide photographic content for publications, promotional materials and the Media Unit's digital platforms.",
    highlights: [
      'University event & programme coverage',
      'Visual documentation of campus milestones',
      'Photographic content for publications & digital platforms',
    ],
    iconName: 'Camera',
    technicalSpec: 'STILLS // RAW DOCUMENTATION',
  },
  {
    id: 'videography',
    number: '02',
    name: 'Videography Committee',
    shortTitle: 'Videography',
    description:
      'The Videography Committee focuses on recording and producing video content for university events and activities. Its responsibilities include filming, editing and preparing videos for promotional purposes, event coverage and digital publication.',
    highlights: [
      'Multi-event filming & video production',
      'Post-production editing & color grading',
      'Promotional videos & digital broadcast coverage',
    ],
    iconName: 'Video',
    technicalSpec: 'MOTION // PRODUCTION & EDIT',
  },
  {
    id: 'compering',
    number: '03',
    name: 'Compering Committee',
    shortTitle: 'Compering',
    description:
      'The Compering Committee is responsible for hosting and presenting university events and programmes. Its members take part in event presentations, introduce speakers and performers, and engage with audiences while developing their public speaking and communication skills.',
    highlights: [
      'Hosting & presenting university programmes',
      'Speaker & performer introductions',
      'Live audience engagement & public speaking',
    ],
    iconName: 'Mic',
    technicalSpec: 'VOICE // LIVE STAGE & HOSTING',
  },
  {
    id: 'design',
    number: '04',
    name: 'Design Committee',
    shortTitle: 'Design',
    description:
      'The Design Committee handles the visual content of the Media Unit and supports the promotional activities of the university, its clubs and societies. Its work includes designing posters, flyers, banners and other digital and printed materials for various events and campaigns. The committee also works to develop the design skills of its members through practical experience and initiatives such as the Master Designer project series.',
    highlights: [
      'Posters, flyers, banners & campaign visuals',
      'Digital and print identity support for SLTC clubs',
      'Skill development via the Master Designer project series',
    ],
    iconName: 'PenTool',
    technicalSpec: 'VISUAL // IDENTITY & PRINT/DIGITAL',
  },
  {
    id: 'editorial',
    number: '05',
    name: 'Editorial and Report Writing Committee',
    shortTitle: 'Editorial & Report Writing',
    description:
      'The Editorial and Report Writing Committee handles the written content and documentation of the Media Unit. Its work includes preparing event reports, writing articles, creating captions, and documenting the activities and achievements of the university and its student organizations.',
    highlights: [
      'Official event reports & institutional documentation',
      'Feature articles & media copywriting',
      ' documenting university & student achievements',
    ],
    iconName: 'FileText',
    technicalSpec: 'COPY // EDITORIAL & ARCHIVE',
  },
  {
    id: 'event-management',
    number: '06',
    name: 'Event Management Committee',
    shortTitle: 'Event Management',
    description:
      'The Event Management Committee is involved in planning and coordinating events organized by the Media Unit and supporting other university activities. Its responsibilities include handling event arrangements, coordinating with relevant teams, managing logistics, and assisting with the smooth execution of programmes.',
    highlights: [
      'End-to-end event planning & coordination',
      'Cross-committee team synchronization',
      'On-ground logistics & programme execution',
    ],
    iconName: 'CalendarCheck',
    technicalSpec: 'OPS // LOGISTICS & EXECUTION',
  },
];

export const INCIDO_LEGACY: LegacyEdition[] = [
  {
    edition: 'INCIDO GEN 1.0',
    yearLabel: 'First Edition',
    status: 'Completed Foundation',
    title: 'Establishing the Creative Foundation',
    description:
      'INCIDO GEN 1.0 was the first edition of the initiative organized by the SLTC Media Unit. It introduced the project as an opportunity for members of the SLTC community to take part in creative activities and showcase their abilities in media-related fields.',
    keyFocus: [
      'Inaugural media initiative by the SLTC Media Unit',
      'Introduced structured creative participation to the SLTC community',
      'Showcased undergraduate abilities across media-related fields',
    ],
  },
  {
    edition: 'INCIDO GEN 2.0',
    yearLabel: 'Second Edition',
    status: 'Platform Expansion',
    title: 'Expanding Creative Participation',
    description:
      'Following the first edition, INCIDO GEN 2.0 continued the initiative, building on the experience gained through the previous edition. It further developed INCIDO as a platform for creative participation and provided another opportunity for members of the SLTC community to present their talents.',
    keyFocus: [
      'Built directly on the operational experience of GEN 1.0',
      'Strengthened INCIDO as a recognized campus-wide creative platform',
      'Expanded opportunities for SLTC community members to present talent',
    ],
  },
  {
    edition: 'INCIDO GEN 3.0',
    yearLabel: 'Third Edition • 2026',
    status: 'Current Flagship Edition',
    title: 'The Flagship Creative Media Experience',
    description:
      'Building on the foundation of INCIDO GEN 1.0 and INCIDO GEN 2.0, the SLTC Media Unit is now preparing to take the initiative forward through INCIDO GEN 3.0 — aimed at discovering, showcasing and developing the creative talents of the SLTC community across four core creative fields.',
    keyFocus: [
      'Focused competition across Photography, Videography, Graphic Design & Compering',
      'Awareness sessions, online/physical sessions, workshops & competitions',
      'Grand Finale featuring an industry expert panel & dual recognition tracks (Most Talented & Most Popular)',
    ],
  },
];

export const COMPETITION_FIELDS: CompetitionField[] = [
  {
    id: 'comp-photography',
    code: 'CAT // 01',
    name: 'Photography',
    tagline: 'Visual Storytelling Through the Lens',
    description:
      'Open to SLTC undergraduates to demonstrate composition, lighting, and observational storytelling—culminating in a formal judges’ review of photography entries at the Grand Finale.',
    recognitionTracks: ['Most Talented (Judges’ Review)', 'Most Popular (Community Vote)'],
    iconName: 'Camera',
    aspectSpec: 'STILL FRAME • JUDGES REVIEW',
  },
  {
    id: 'comp-videography',
    code: 'CAT // 02',
    name: 'Videography',
    tagline: 'Cinematic Direction & Motion Production',
    description:
      'Challenges student filmmakers and videographers to craft compelling moving-image narratives through filming, editing, and visual pacing, reviewed by industry judges at the Grand Finale.',
    recognitionTracks: ['Most Talented (Judges’ Review)', 'Most Popular (Community Vote)'],
    iconName: 'Film',
    aspectSpec: 'MOTION PICTURE • 24FPS NARRATIVE',
  },
  {
    id: 'comp-graphic-design',
    code: 'CAT // 03',
    name: 'Graphic Design',
    tagline: 'Visual Communication & Digital Craft',
    description:
      'Provides undergraduate designers a competitive arena to express conceptual thinking, typography, layout, and visual artistry across digital media canvases.',
    recognitionTracks: ['Most Talented (Creative Excellence)', 'Most Popular (Community Vote)'],
    iconName: 'Layers',
    aspectSpec: 'VECTOR & RASTER • VISUAL SYSTEM',
  },
  {
    id: 'comp-compering',
    code: 'CAT // 04',
    name: 'Compering',
    tagline: 'Stage Presence, Articulate Hosting & Command',
    description:
      'Celebrates the art of live presentation, vocal articulation, spontaneity, and audience connection—spotlighting the next generation of presenters and broadcast hosts.',
    recognitionTracks: ['Most Talented (Stage Evaluation)', 'Most Popular (Community Vote)'],
    iconName: 'Mic2',
    aspectSpec: 'LIVE STAGE • VOCAL PRESENCE',
  },
];

export const EVENT_OBJECTIVES: EventObjective[] = [
  {
    number: '01',
    title: 'Discover and develop creative talent',
    description:
      'Provide a platform for SLTC undergraduates to showcase and improve their skills in photography, videography, compering, and graphic design.',
  },
  {
    number: '02',
    title: 'Encourage creative participation',
    description:
      'Foster an inclusive creative culture at SLTC by encouraging artistic expression, creative exploration, collaboration and active participation among members of the university community.',
  },
  {
    number: '03',
    title: 'Provide exposure and recognition',
    description:
      'Support emerging creative talent through skill-development opportunities, industry engagement, competitions and professional recognition, celebrating both creative ability and audience appreciation.',
  },
];

export const PLANNED_ACTIVITIES: PlannedActivity[] = [
  {
    id: 'act-awareness',
    step: 'STAGE 01',
    title: 'Awareness Sessions',
    description:
      'Introduce the initiative to the SLTC community and provide information about the competition fields, participation process, and opportunities available through INCIDO GEN 3.0.',
    tag: 'Campus Onboarding',
  },
  {
    id: 'act-sessions',
    step: 'STAGE 02',
    title: 'Online and Physical Sessions',
    description:
      'Provide opportunities for participants to engage with the initiative and develop their skills and interests in different creative fields.',
    tag: 'Hybrid Engagement',
  },
  {
    id: 'act-workshops',
    step: 'STAGE 03',
    title: 'Workshops',
    description:
      'Offer opportunities for participants to develop their knowledge and practical skills in relevant creative areas.',
    tag: 'Practical Upskilling',
  },
  {
    id: 'act-competitions',
    step: 'STAGE 04',
    title: 'Online Competitions',
    description:
      'Allow participants to showcase their creative abilities through the selected competition categories.',
    tag: 'Creative Submissions',
  },
  {
    id: 'act-voting',
    step: 'STAGE 05',
    title: 'Most Popular Voting',
    description:
      'Provide an opportunity for the university community to support their preferred creative entries through the voting round.',
    tag: 'Community Engagement',
  },
  {
    id: 'act-finale',
    step: 'STAGE 06',
    title: 'Grand Finale & Award Ceremony',
    description:
      'Culminates on 19 December 2026 at SLTC Padukka premises with final competition activities, an industry-focused plenary session, judges’ review, and the grand award ceremony.',
    tag: 'Flagship Culmination',
  },
];

export const PROPOSED_TIMELINE: TimelineMilestone[] = [
  {
    id: 'ms-registration',
    phase: 'PHASE 01',
    activity: 'Registration Opens',
    proposedDate: '17 November 2026',
    isoDate: '2026-11-17',
    statusLabel: 'Proposed Date',
    description:
      'Official opening of undergraduate registrations across Photography, Videography, Graphic Design, and Compering.',
  },
  {
    id: 'ms-awareness',
    phase: 'PHASE 02',
    activity: 'Awareness Session',
    proposedDate: '20 November 2026',
    isoDate: '2026-11-20',
    statusLabel: 'Proposed Date',
    description:
      'Introducing INCIDO GEN 3.0 to the SLTC community, detailing competition guidelines, categories, and workshop pathways.',
  },
  {
    id: 'ms-submissions',
    phase: 'PHASE 03',
    activity: 'Submissions Open',
    proposedDate: '25 November 2026',
    isoDate: '2026-11-25',
    statusLabel: 'Proposed Date',
    description:
      'Portal opens for participants to submit their creative entries across the selected competition categories.',
  },
  {
    id: 'ms-voting',
    phase: 'PHASE 04',
    activity: 'Voting Round for Most Popular Awards',
    proposedDate: '6 December 2026',
    isoDate: '2026-12-06',
    statusLabel: 'Proposed Date',
    description:
      'University-wide voting round enabling the SLTC community to support and vote for their preferred creative entries.',
  },
  {
    id: 'ms-finale',
    phase: 'PHASE 05',
    activity: 'Grand Finale',
    proposedDate: '19 December 2026',
    isoDate: '2026-12-19',
    statusLabel: 'Proposed Culmination',
    description:
      'Full-day culminating event at SLTC Padukka premises featuring parallel sessions, competition finals, industry plenary, judges’ review, and the Grand Award Ceremony.',
    isFinale: true,
  },
];

export const GRAND_FINALE_PROGRAMME: FinaleScheduleSlot[] = [
  {
    time: '8.30 AM - 9.30 AM',
    programme: 'Participant Registration and Morning Inauguration',
    detail:
      'Arrival and registration of finalists, participants, judges, industry representatives, guests, and members of the SLTC community, followed by the formal morning inauguration.',
    tag: 'Inauguration',
  },
  {
    time: '9.30 AM - 1.00 PM',
    programme: 'Parallel Sessions & Competition Finals',
    detail:
      'Live final competition activities and parallel sessions at the SLTC Padukka premises (including the planned industry-focused plenary session and expert panel discussion).',
    tag: 'Finals & Plenary',
  },
  {
    time: '1.00 PM - 2.30 PM',
    programme: "Judges' Review & Lunch Break",
    detail:
      "Formal judges' evaluation and review of the photography and videography entries alongside the scheduled afternoon networking and lunch break.",
    tag: 'Evaluation & Networking',
  },
  {
    time: '2.30 PM - 4.30 PM',
    programme: 'Grand Award Ceremony',
    detail:
      'Official celebration of participant achievements, sponsor recognition, and presentation of awards across the Most Talented and Most Popular categories.',
    tag: 'Awards & Recognition',
  },
];

export const PARTICIPANT_ADVANTAGES = [
  {
    title: 'Skill Development',
    description:
      'Participants can improve their practical skills in photography, videography, graphic design and compering through sessions, workshops and competition activities.',
  },
  {
    title: 'Creative Expression',
    description:
      'The initiative provides a platform for participants to share their ideas, explore their creativity and present their abilities to the SLTC community.',
  },
  {
    title: 'Industry Exposure',
    description:
      'Through industry engagement and the expert panel discussion, participants will have opportunities to connect with professionals and gain exposure to creative fields.',
  },
  {
    title: 'Recognition and Appreciation',
    description:
      'Participants will have the opportunity to receive recognition for their work through the competition and award ceremony, including the Most Talented and Most Popular categories.',
  },
  {
    title: 'Community Engagement',
    description:
      'The initiative encourages collaboration and interaction among undergraduates, academic staff, and non-academic staff, helping to build a more active creative community at SLTC.',
  },
];

export const COMMITTEE_CONTACTS: CommitteeContact[] = [
  {
    name: 'Amila Fernando',
    role: 'Project Chairperson',
    telephoneDisplay: '071 123 7591',
    telephoneHref: '+94711237591',
    email: 'cit-24-01-0474@sltc.ac.lk',
    departmentCode: 'LEADERSHIP // CHAIR',
  },
  {
    name: 'W.G. Tashmi Devanjanee',
    role: 'Project Secretary',
    telephoneDisplay: '074 152 6209',
    telephoneHref: '+94741526209',
    email: 'bus-24-01-0129@sltc.ac.lk',
    departmentCode: 'SECRETARIAT // ADMIN',
  },
  {
    name: 'Ravishka Rathnayake',
    role: 'Project Treasurer',
    telephoneDisplay: '+071 358 1934',
    telephoneHref: '+94713581934',
    email: 'cit-24-01-0251@sltc.ac.lk',
    departmentCode: 'FINANCE // TREASURY',
  },
  {
    name: 'Chanupa Niduwara',
    role: 'Industry Outreach Vice-Chair',
    telephoneDisplay: '070 550 4571',
    telephoneHref: '+94705504571',
    email: 'cit-24-01-0478@sltc.ac.lk',
    departmentCode: 'PARTNERSHIPS // OUTREACH',
  },
];

export const SOURCE_AUDIT_NOTES: SourceAuditNote[] = [
  {
    id: 'audit-benefits-matrix',
    sectionRef: 'Section 6.2 (Pages 17–18)',
    title: 'Sponsorship Benefit Matrix Tier Differentiation',
    observation:
      'In the official PDF table (Pages 17–18), 11 of the 13 benefits (including Opening Ceremony Speech, Presentation Opportunities, Logo Placement on Awards, and YouTube / Media Ads) are marked as included (✓) for all four financial tiers (Title, Diamond, Gold, and Silver). Only "Full Verbal Mention" (Title only) and "Media Co-Tagging" (Title and Diamond) vary in the table, leaving Gold (LKR 10,000) and Silver (LKR 5,000) with identical checkmarks.',
    recommendation:
      'The website faithfully preserves the exact checkmarks from the PDF alongside the Page 19 clause ("benefits will be provided according to the selected sponsorship package and the agreed arrangements with the organizing committee"). For future revisions, the committee may wish to specify relative logo sizing/hierarchy, banner counts, or restrict the Opening Ceremony Speech to Title/Diamond partners in `src/data/sponsorshipData.ts`.',
  },
  {
    id: 'audit-finale-plenary',
    sectionRef: 'Section 3.1 & 3.4 (Pages 7 & 11)',
    title: 'Grand Finale Plenary Session & Schedule Slot Mapping',
    observation:
      'Page 7 refers to an "industry expert panel discussion" and Page 11 prose states the programme includes "final competition activities, an industry-focused plenary session, the judges\' review of the photography and videography entries, and the grand award ceremony." However, the 4-row schedule table on Page 11 labels 9.30 AM – 1.00 PM simply as "Parallel Sessions & Competition Finals" without explicitly listing the plenary session time.',
    recommendation:
      'Both the exact schedule table and the four programme components from the prose are presented accurately, noting that the industry-focused plenary session takes place within the scheduled Grand Finale programme.',
  },
  {
    id: 'audit-submission-deadlines',
    sectionRef: 'Section 3.3 (Page 10)',
    title: 'Competition Closing & Voting End Dates',
    observation:
      'The proposed timeline table provides start dates for "Submissions Open" (25 November 2026) and "Voting Round for Most Popular Awards" (6 December 2026), but does not list explicit closing dates for submissions or voting prior to the Grand Finale (19 December 2026).',
    recommendation:
      'All dates are clearly labeled as "Proposed Date" in the timeline and can be updated in `src/data/eventData.ts` once final submission and voting cutoffs are confirmed.',
  },
  {
    id: 'audit-phone-format',
    sectionRef: 'Section 7 (Page 24)',
    title: 'Treasurer Telephone Prefix Formatting',
    observation:
      'The Project Treasurer’s telephone number is written in the PDF as "+071 358 1934" (combining a leading plus sign with the domestic trunk prefix 0).',
    recommendation:
      'The visual text preserves "+071 358 1934" as printed in the proposal, while the interactive `tel:` link is normalized to `+94713581934` so mobile dialing works reliably.',
  },
];


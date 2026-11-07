export type SponsorshipTierId = 'title' | 'diamond' | 'gold' | 'silver';

export interface WhyPartnerPillar {
  id: string;
  number: string;
  title: string;
  pdfHeading: string;
  description: string;
  iconName: 'Sparkles' | 'Eye' | 'Compass' | 'Users' | 'HeartHandshake' | 'Award';
  highlightTag: string;
}

export interface SponsorshipTier {
  id: SponsorshipTierId;
  name: string;
  investmentLkr: number;
  investmentFormatted: string;
  tierBadge: string;
  isFeatured?: boolean;
  summary: string;
  exclusiveHighlights: string[];
  coreIncludedBenefits: string[];
}

export interface BenefitMatrixRow {
  id: string;
  service: string;
  category: 'Exclusive Tier Recognition' | 'Brand Placement & Collateral' | 'Media & Stage Presence';
  title: boolean;
  diamond: boolean;
  gold: boolean;
  silver: boolean;
}

export interface SpecializedPartnership {
  id: string;
  number: string;
  title: string;
  summary: string;
  possibleContributions?: string[];
  recognition: string;
  iconName:
    | 'Shirt'
    | 'Gift'
    | 'Printer'
    | 'Utensils'
    | 'GraduationCap'
    | 'Camera'
    | 'Cpu'
    | 'Building2'
    | 'Share2';
}

export const WHY_PARTNER_INTRO = {
  lead: 'Partnering with INCIDO GEN 3.0 provides organizations with an opportunity to connect with emerging creative talent while supporting a university-wide initiative focused on creativity, communication and skill development.',
  sublead:
    'Through this partnership, organizations can become part of an initiative that brings together students, academic and non-academic staff, creative participants and industry representatives.',
};

export const WHY_PARTNER_PILLARS: WhyPartnerPillar[] = [
  {
    id: 'talent',
    number: '01',
    title: 'Access to Emerging Creative Talent',
    pdfHeading: 'ACCESS TO EMERGING CREATIVE TALENT',
    description:
      'Connect with a dynamic community of university undergraduates showcasing their talents in photography, videography, graphic design, compering and other creative media disciplines.',
    iconName: 'Sparkles',
    highlightTag: 'Talent Pipeline',
  },
  {
    id: 'visibility',
    number: '02',
    title: 'Brand Visibility & Exposure',
    pdfHeading: 'BRAND VISIBILITY & EXPOSURE',
    description:
      'Showcase your brand across competition activities, promotional campaigns, event platforms, digital media and post-event coverage, reaching an engaged audience of creative and ambitious university students.',
    iconName: 'Eye',
    highlightTag: 'Multi-Channel Reach',
  },
  {
    id: 'alignment',
    number: '03',
    title: 'Industry Connection & Alignment',
    pdfHeading: 'INDUSTRY CONNECTION & ALIGNMENT',
    description:
      "Position your organisation alongside creativity, digital media, visual storytelling, communication and innovation while strengthening its presence within Sri Lanka's emerging creative industry.",
    iconName: 'Compass',
    highlightTag: 'Brand Positioning',
  },
  {
    id: 'networking',
    number: '04',
    title: 'Networking Opportunities',
    pdfHeading: 'NETWORKING OPPORTUNITIES',
    description:
      'Build meaningful connections with talented participants, aspiring media professionals, creative enthusiasts, industry experts and distinguished guests through various event activities and engagements.',
    iconName: 'Users',
    highlightTag: 'Executive & Peer Network',
  },
  {
    id: 'empowerment',
    number: '05',
    title: 'Empowering Young Creators',
    pdfHeading: 'EMPOWERING YOUNG CREATORS',
    description:
      'Support the development of the next generation of photographers, videographers, designers, presenters and media professionals by providing a platform for them to showcase their creativity, develop their skills and gain industry exposure.',
    iconName: 'HeartHandshake',
    highlightTag: 'Educational Impact',
  },
  {
    id: 'recognition',
    number: '06',
    title: 'Exclusive Brand Recognition',
    pdfHeading: 'EXCLUSIVE BRAND RECOGNITION',
    description:
      'Receive prominent recognition across official event materials, promotional banners, digital campaigns, social media platforms, certificates and other event-related publications, ensuring valuable brand exposure throughout the competition.',
    iconName: 'Award',
    highlightTag: 'Official Attribution',
  },
];

export const ADVANTAGES_TO_SPONSORS_LIST: string[] = [
  'Brand logo placement across official event media and promotional materials.',
  'Logo visibility on the event website, official letters, awards and certificates.',
  'Brand exposure through promotional videos, emails and YouTube or other media advertisements.',
  'Banner display and recognition during event activities.',
  'Opportunities for an opening ceremony speech and presentation spots, as indicated in the sponsorship benefits matrix.',
  'Additional recognition through full verbal mentions and media co-tagging for eligible sponsorship levels.',
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'title',
    name: 'Title Partner',
    investmentLkr: 20000,
    investmentFormatted: 'LKR 20,000',
    tierBadge: 'FLAGSHIP TIER // 01',
    isFeatured: true,
    summary:
      'The premier partnership tier offering complete 13-of-13 benefit coverage, including exclusive Full Verbal Mentions and Media Co-Tagging across the initiative.',
    exclusiveHighlights: [
      'Full Verbal Mention (Exclusive to Title Partner)',
      'Media Co-Tagging across digital publications',
      'Opening Ceremony Speech & Presentation Opportunities',
    ],
    coreIncludedBenefits: [
      'Full Verbal Mention',
      'Media Co-Tagging',
      'Logo Placement Across All Media',
      'Logo Placement on the Website',
      'Logo Placement on Official Letters',
      'Logo Placement on Awards',
      'Logo Placement on Certificates',
      'Promotional Videos',
      'Logo Placement in Emails',
      'YouTube / Media Ads',
      'Banner Placement',
      'Opening Ceremony Speech',
      'Presentation Opportunities',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond Partner',
    investmentLkr: 15000,
    investmentFormatted: 'LKR 15,000',
    tierBadge: 'EXECUTIVE TIER // 02',
    summary:
      'High-visibility partnership including Media Co-Tagging alongside comprehensive logo placement, promotional media features, and stage opportunities.',
    exclusiveHighlights: [
      'Media Co-Tagging (Title & Diamond Partners only)',
      'Logo Placement Across All Media, Awards & Certificates',
      'Opening Ceremony Speech & Presentation Opportunities',
    ],
    coreIncludedBenefits: [
      'Media Co-Tagging',
      'Logo Placement Across All Media',
      'Logo Placement on the Website',
      'Logo Placement on Official Letters',
      'Logo Placement on Awards',
      'Logo Placement on Certificates',
      'Promotional Videos',
      'Logo Placement in Emails',
      'YouTube / Media Ads',
      'Banner Placement',
      'Opening Ceremony Speech',
      'Presentation Opportunities',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Partner',
    investmentLkr: 10000,
    investmentFormatted: 'LKR 10,000',
    tierBadge: 'STRATEGIC TIER // 03',
    summary:
      'Comprehensive brand integration across all official event media, website, certificates, awards, promotional videos, banners, and ceremony segments.',
    exclusiveHighlights: [
      'Logo Placement Across All Media, Website & Official Letters',
      'Logo on Awards, Certificates, Emails & Banners',
      'Promotional Videos, YouTube/Media Ads & Ceremony Presence',
    ],
    coreIncludedBenefits: [
      'Logo Placement Across All Media',
      'Logo Placement on the Website',
      'Logo Placement on Official Letters',
      'Logo Placement on Awards',
      'Logo Placement on Certificates',
      'Promotional Videos',
      'Logo Placement in Emails',
      'YouTube / Media Ads',
      'Banner Placement',
      'Opening Ceremony Speech',
      'Presentation Opportunities',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Partner',
    investmentLkr: 5000,
    investmentFormatted: 'LKR 5,000',
    tierBadge: 'SUPPORTING TIER // 04',
    summary:
      'Accessible entry-level financial partnership providing broad brand visibility across event media, digital channels, print collateral, and ceremony touchpoints.',
    exclusiveHighlights: [
      'Logo Placement Across All Media, Website & Official Letters',
      'Logo on Awards, Certificates, Emails & Banners',
      'Promotional Videos, YouTube/Media Ads & Ceremony Presence',
    ],
    coreIncludedBenefits: [
      'Logo Placement Across All Media',
      'Logo Placement on the Website',
      'Logo Placement on Official Letters',
      'Logo Placement on Awards',
      'Logo Placement on Certificates',
      'Promotional Videos',
      'Logo Placement in Emails',
      'YouTube / Media Ads',
      'Banner Placement',
      'Opening Ceremony Speech',
      'Presentation Opportunities',
    ],
  },
];

export const SPONSORSHIP_BENEFITS_MATRIX: BenefitMatrixRow[] = [
  {
    id: 'ben-verbal',
    service: 'Full Verbal Mention',
    category: 'Exclusive Tier Recognition',
    title: true,
    diamond: false,
    gold: false,
    silver: false,
  },
  {
    id: 'ben-cotagging',
    service: 'Media Co-Tagging',
    category: 'Exclusive Tier Recognition',
    title: true,
    diamond: true,
    gold: false,
    silver: false,
  },
  {
    id: 'ben-all-media',
    service: 'Logo Placement Across All Media',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-website',
    service: 'Logo Placement on the Website',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-letters',
    service: 'Logo Placement on Official Letters',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-awards',
    service: 'Logo Placement on Awards',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-certificates',
    service: 'Logo Placement on Certificates',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-promo-videos',
    service: 'Promotional Videos',
    category: 'Media & Stage Presence',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-emails',
    service: 'Logo Placement in Emails',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-youtube-ads',
    service: 'YouTube / Media Ads',
    category: 'Media & Stage Presence',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-banners',
    service: 'Banner Placement',
    category: 'Brand Placement & Collateral',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-speech',
    service: 'Opening Ceremony Speech',
    category: 'Media & Stage Presence',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
  {
    id: 'ben-presentation',
    service: 'Presentation Opportunities',
    category: 'Media & Stage Presence',
    title: true,
    diamond: true,
    gold: true,
    silver: true,
  },
];

export const BENEFITS_CLAUSE =
  'The benefits will be provided according to the selected sponsorship package and the agreed arrangements with the organizing committee.';

export const SPECIALIZED_PARTNERSHIPS: SpecializedPartnership[] = [
  {
    id: 'partner-clothing',
    number: '01',
    title: 'Clothing Partner',
    summary:
      'Supports the event by providing T-shirts, uniforms, or other apparel for the organizing team, participants, and event crew.',
    recognition: 'Official Clothing Partner across event T-shirts and promotional materials.',
    iconName: 'Shirt',
  },
  {
    id: 'partner-gift',
    number: '02',
    title: 'Gift and Prize Partner',
    summary:
      'Provides gifts, gift vouchers, merchandise, and prizes for competition winners and outstanding participants.',
    recognition: 'Official Gift and Prize Partner across award ceremonies and promotional materials.',
    iconName: 'Gift',
  },
  {
    id: 'partner-printing',
    number: '03',
    title: 'Printing Partner',
    summary:
      'Supports the printing requirements of the event, including banners, certificates, brochures, posters and other event-related materials.',
    recognition: 'Official Printing Partner across promotional and official event materials.',
    iconName: 'Printer',
  },
  {
    id: 'partner-food',
    number: '04',
    title: 'Food and Beverage Partner',
    summary:
      'Provides meals, refreshments, snacks and beverages for participants, organizers, judges and attendees.',
    recognition: 'Official Food and Beverage Partner throughout event promotions.',
    iconName: 'Utensils',
  },
  {
    id: 'partner-knowledge',
    number: '05',
    title: 'Knowledge Partner',
    summary:
      'Provides industry professionals, technical expertise, mentoring sessions and educational workshops related to creative media.',
    recognition: 'Official Knowledge Partner across workshops and educational activities.',
    iconName: 'GraduationCap',
  },
  {
    id: 'partner-camera',
    number: '06',
    title: 'Camera and Photography Equipment Partner',
    summary:
      'Provides professional photography and production equipment to support photography and videography competition activities.',
    possibleContributions: [
      'Professional lighting equipment and LED panels.',
      'Wireless microphones and audio recorders.',
      'Gimbals and stabilizers.',
      'Video monitors and accessories.',
      'Studio and production equipment.',
    ],
    recognition: 'Official Production Equipment Partner.',
    iconName: 'Camera',
  },
  {
    id: 'partner-technology',
    number: '07',
    title: 'Technology Partner',
    summary:
      'Provides technological resources and equipment required for digital creativity, competition activities, and event operations.',
    possibleContributions: [
      'Laptops and desktop computers.',
      'Monitors and display equipment.',
      'Storage devices and accessories.',
      'Technical infrastructure and equipment support.',
      'Internet connectivity and networking facilities.',
    ],
    recognition: 'Official Technology Partner.',
    iconName: 'Cpu',
  },
  {
    id: 'partner-venue',
    number: '08',
    title: 'Venue and Facility Partner',
    summary:
      'Provides suitable event spaces and facilities for competition activities, workshops, exhibitions, and award ceremonies.',
    possibleContributions: [
      'Event halls and auditoriums.',
      'Photography and videography locations.',
      'Workshop and training spaces.',
      'Exhibition and display areas.',
    ],
    recognition: 'Official Venue and Facility Partner.',
    iconName: 'Building2',
  },
  {
    id: 'partner-digital-media',
    number: '09',
    title: 'Digital Media and Promotional Partner',
    summary:
      'Supports the digital presence of INCIDO GEN 3.0 through promotional coverage, media exposure, and online publicity.',
    possibleContributions: [
      'Social media promotional coverage.',
      'Digital advertising support.',
      'Content creation and promotional campaigns.',
      'Media publication and event coverage.',
    ],
    recognition: 'Official Digital Media and Promotional Partner.',
    iconName: 'Share2',
  },
];


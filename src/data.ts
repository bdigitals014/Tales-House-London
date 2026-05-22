import { 
  ExperienceCard, 
  WhoBelongsItem, 
  ResidencyModel, 
  ProcessStep, 
  MetricItem, 
  CalendarEvent 
} from './types';

// Let's curate high-end, premium Unsplash URLs that reflect the warm, story-led, "Soho House meets creative retail" aesthetic.
export const HERO_BG_IMAGE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80'; // Warm high-end luxury boutique
export const MANIFESTO_IMAGE = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&h=1600&q=80'; // Elegant warm architectural interior spaces

export const EXPECT_CARDS: ExperienceCard[] = [
  {
    id: "curated_showcases",
    title: "Curated Brand Showcases",
    description: "Exceptional collections from the continent's most visionary designers, bridging digital visibility and concrete premium retail presence.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&h=1000&q=80"
  },
  {
    id: "founder_experiences",
    title: "Founder & Creator Experiences",
    description: "Direct connections with the visionaries behind the brands. Live panels, meet-and-greets, and intimate design deep dives.",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&h=1000&q=80"
  },
  {
    id: "activations_moments",
    title: "Activations & Cultural Moments",
    description: "A dynamic calendar of experiences including craft workshops, fragrance testing sessions, wine tasting, and poetry evenings.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&h=1000&q=80"
  },
  {
    id: "content_community",
    title: "Content & Community",
    description: "A hub for creative dialogue and storytelling in London. Integrated content studios to share stories globally in real-time.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=1000&q=80"
  }
];

export const WHO_BELONGS_ITEMS: WhoBelongsItem[] = [
  { id: "visitors", label: "Visitors", iconName: "Users" },
  { id: "creators", label: "Creators", iconName: "Palette" },
  { id: "press", label: "Press", iconName: "Newspaper" },
  { id: "buyers", label: "Buyers", iconName: "ShoppingBag" },
  { id: "founders", label: "Founders", iconName: "Lightbulb" },
  { id: "brands", label: "Brands", iconName: "Sparkles" },
  { id: "community", label: "Community", iconName: "Globe" }
];

export const RESIDENCY_MODELS: ResidencyModel[] = [
  {
    id: "discover",
    title: "DISCOVER",
    duration: "3-DAY RESIDENCY",
    price: "£960",
    bullets: [
      "Perfect for market testing",
      "Shared floor space",
      "Collective marketing support",
      "Standard visitor registration data matching"
    ],
    description: "Perfect for brands introducing products to London customers to test dynamic foot traffic."
  },
  {
    id: "grow",
    title: "GROW",
    duration: "4-DAY RESIDENCY",
    price: "£1,200",
    bullets: [
      "Extended engagement during peak traffic",
      "Targeted buyer & VIP introductions",
      "Content assets suite & photography",
      "Priority newsletter positioning"
    ],
    description: "Extended visibility and customer engagement to solidfy your presence in premium global retail."
  },
  {
    id: "take_root",
    title: "TAKE ROOT",
    duration: "7-DAY RESIDENCY",
    price: "£1,500",
    bullets: [
      "Full weekly immersion & dedicated space",
      "Exclusive evening activation space slot",
      "High-traffic peak visibility & prime display",
      "Premium buyer matchmaking & curated press exposure"
    ],
    description: "Most immersive showcase experience. Fully integrate your brand's heritage story.",
    recommended: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "01",
    stepNumber: "01",
    title: "Explore",
    description: "Review our residency models and vision to ensure alignment with your brand story, aesthetics, and readiness for a high-traffic retail environment."
  },
  {
    id: "02",
    stepNumber: "02",
    title: "Apply",
    description: "Submit your application with your detailed brand portfolio, product lookbook, high-resolution imagery, and preferred residency dates."
  },
  {
    id: "03",
    stepNumber: "03",
    title: "Get Selected",
    description: "Our core curation committee reviews all brands to ensure a premium, rich, and highly cohesive cultural experience layout for TALES House visitors."
  },
  {
    id: "04",
    stepNumber: "04",
    title: "Onboard",
    description: "Work shoulder-to-shoulder with our specialized creative layout team to finalize visual shelving, hanger displays, logistics, and visual media assets."
  },
  {
    id: "05",
    stepNumber: "05",
    title: "Activate",
    description: "Go live on Oxford Street with curated events, physical point-of-sales tracking, and coordinated global digital marketing campaigns."
  }
];

export const SOCIAL_METRICS: MetricItem[] = [
  {
    id: "years",
    number: 10,
    suffix: "+",
    label: "YEARS BUILDING BELLAFRICANA"
  },
  {
    id: "countries",
    number: 18,
    suffix: "",
    label: "COUNTRIES CONNECTED"
  },
  {
    id: "brands",
    number: 100,
    suffix: "s",
    label: "BRANDS SUPPORTED"
  },
  {
    id: "edition",
    number: 4,
    suffix: "th",
    label: "EDITION OF TALES LAUNCHING"
  }
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: "evt_1",
    date: "JUNE 6 — LAUNCH",
    tag: "OPENING WEEK",
    title: "Opening Week Unveiling",
    description: "The highly anticipated unveiling of TALES House on London's premier Oxford Street. Be the first to tour the storefront, meet initial designers, and enjoy live sets."
  },
  {
    id: "evt_2",
    date: "JUNE 15 — RESIDENCY",
    tag: "CREATOR RESIDENCY",
    title: "Creator Residency Live Look",
    description: "Live craft demonstrations, immersive weaving/design workshops, and intimate studio hours with our first cohort of visionaries."
  },
  {
    id: "evt_3",
    date: "JULY — SPOTLIGHT",
    tag: "BRAND ACTIVATIONS",
    title: "Spotlight Brand Activations",
    description: "Targeted product launch events, trunk shows, customized window displays, and curated theme weeks detailing different regions of Africa."
  },
  {
    id: "evt_4",
    date: "ONGOING — COMMUNITY",
    tag: "COMMUNITY EXPERIENCES",
    title: "Culture & Connection Tastings",
    description: "Elegant evening tastings, panel discussions, and high-value networking sessions bringing together buyers, collectors, creators, and media."
  }
];

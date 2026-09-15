/**
 * cspell:ignore Turitrend
 * Single source of factual company information.
 * Only details supplied by Turitrend Construction Limited are stored here.
 */

export const company = {
  name: "Turitrend Construction Limited",
  shortName: "Turitrend",
  tagline: "From concept to creation",
  phone: "+254 727 233 041",
  phoneHref: "tel:+254727233041",
  whatsappNumber: "254727233041",
  email: "turitrendconstruction@gmail.com",
  emailHref: "mailto:turitrendconstruction@gmail.com",
  location: "Nairobi, Kenya",
  postal: "P.O. Box 317 – 10106, Othaya",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hello Turitrend, I would like to discuss a construction project.";

export type ServiceSlug =
  | "home-improvements-renovations"
  | "building-works"
  | "fences-gates-car-shades"
  | "biodigester-works"
  | "road-electrical-water-works"
  | "project-property-management";

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string[];
  includes: { heading?: string; items: string[] }[];
  needs: string[];
  approach: { step: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: ServiceSlug[];
};

export const services: Service[] = [
  {
    slug: "home-improvements-renovations",
    number: "01",
    title: "Home Improvements & Renovations",
    shortTitle: "Home Improvements & Renovations",
    summary:
      "Upgrading, repairing and reworking existing homes — from a single room to a full property refresh.",
    intro: [
      "Renovation work is rarely just one trade. A kitchen upgrade touches plumbing, electrical, tiling and finishing; an extension touches structure, roofing and external works. We handle the works together so you are not left coordinating separate teams.",
      "We start by looking at what already exists on site, then agree what is worth changing, what should be repaired and what the sequence of work should be.",
    ],
    includes: [
      {
        items: [
          "Renovations of houses, apartments and rental units",
          "Remodeling of kitchens, bathrooms and living spaces",
          "Extensions to existing buildings",
          "Repairs to walls, floors, roofs and fittings",
          "Interior improvements and fit-outs",
          "Finishing works — plastering, tiling, painting, joinery",
          "General home improvements and maintenance works",
        ],
      },
    ],
    needs: [
      "A house that needs updating before moving in or letting out",
      "Rental units that need refurbishing between tenancies",
      "Damage, leaks or wear that keeps recurring",
      "Extra space required without moving property",
    ],
    approach: [
      { step: "Site visit", text: "We look at the existing condition before quoting anything." },
      {
        step: "Agreed scope",
        text: "You get a written scope so it is clear what is included and what is not.",
      },
      {
        step: "Sequenced works",
        text: "Trades are scheduled in the right order to avoid rework and wasted material.",
      },
      {
        step: "Supervision",
        text: "Work is supervised on site and checked against the agreed scope before handover.",
      },
    ],
    faqs: [
      {
        q: "Can you renovate one room rather than the whole house?",
        a: "Yes. Scope can be as small as a single room or as broad as a full property. We quote against whatever scope is agreed.",
      },
      {
        q: "Can we live in the house during renovation?",
        a: "Sometimes. It depends on the works involved and whether services such as water and power need to be interrupted. We discuss this during the site visit and plan the sequence accordingly.",
      },
      {
        q: "Do you supply materials?",
        a: "We can supply materials, or work with materials you supply. Either arrangement should be agreed before work starts so the quotation reflects it.",
      },
    ],
    related: ["building-works", "road-electrical-water-works", "project-property-management"],
  },
  {
    slug: "building-works",
    number: "02",
    title: "Building Works",
    shortTitle: "Building Works",
    summary:
      "New construction taken through the stages — groundworks, structure, roofing and finishes, to the agreed scope.",
    intro: [
      "We take on residential, commercial and institutional building works and can carry a project through the different stages, from groundworks to completion, according to the scope agreed with you.",
      "If you already have a contractor for part of the works, we can take on a defined package instead of the full build.",
    ],
    includes: [
      {
        heading: "Structure & shell",
        items: [
          "New building construction",
          "Groundworks and excavation",
          "Foundations",
          "Structural and concrete works",
          "Masonry and walling",
          "Roofing works",
        ],
      },
      {
        heading: "Finishes & externals",
        items: [
          "Plastering and screeding",
          "Flooring works",
          "Painting and decorating",
          "Joinery, fittings and finishing works",
          "External works around the building",
        ],
      },
    ],
    needs: [
      "Building a home on a plot you already own",
      "A rental or commercial block to be built to a set budget",
      "A partially built structure that needs to be taken forward",
      "A defined package such as roofing, plastering or external works",
    ],
    approach: [
      {
        step: "Scope and drawings",
        text: "We work from your drawings and requirements, and flag anything that needs clarifying before pricing.",
      },
      { step: "Costing", text: "Costs are broken down by work section so decisions are informed." },
      {
        step: "Staged execution",
        text: "Works progress in stages with supervision and quality checks at each one.",
      },
      {
        step: "Handover",
        text: "The completed works are reviewed against the agreed scope before the project is closed out.",
      },
    ],
    faqs: [
      {
        q: "Do you build from the client's own architectural drawings?",
        a: "Yes. We build to the drawings and specification provided, and raise any queries on them before work starts.",
      },
      {
        q: "Can you take over a project that has already started?",
        a: "Yes, subject to a site assessment of the existing works so responsibility for what is already built is clear.",
      },
      {
        q: "How is a building project priced?",
        a: "Against a defined scope of works. The more precisely the scope and specification are set out, the more accurate the quotation.",
      },
    ],
    related: [
      "home-improvements-renovations",
      "road-electrical-water-works",
      "project-property-management",
    ],
  },
  {
    slug: "fences-gates-car-shades",
    number: "03",
    title: "Car Shades, Privacy Fences, Gates Automation & Electric Fences",
    shortTitle: "Car Shades, Fences & Gates",
    summary:
      "Perimeter, access and outdoor works — securing a property and making the compound usable.",
    intro: [
      "Perimeter work covers two things at once: security and how the compound looks and functions day to day. The right combination depends on the boundary, the neighbours and how the property is used.",
      "We advise on suitable options for the site and install the works, including access and automation.",
    ],
    includes: [
      {
        items: [
          "Car shades and parking covers",
          "Privacy fencing",
          "Perimeter fencing",
          "Gates — fabrication and installation",
          "Gate automation",
          "Electric fencing",
          "Razor wire installations",
        ],
      },
    ],
    needs: [
      "A new boundary for a plot or completed house",
      "Better privacy from neighboring plots or the road",
      "Vehicle parking that needs shade and cover",
      "Automated access for a gate that is opened manually today",
    ],
    approach: [
      {
        step: "Boundary assessment",
        text: "We measure the boundary and look at ground conditions and access points.",
      },
      {
        step: "Options",
        text: "We set out suitable perimeter and access options with the cost implications of each.",
      },
      {
        step: "Installation",
        text: "Foundations, posts, panels, gates and automation are installed as one coordinated job.",
      },
      { step: "Testing", text: "Access and automation are tested with you before handover." },
    ],
    faqs: [
      {
        q: "Can gate automation be added to an existing gate?",
        a: "In many cases yes, depending on the gate's condition, weight and mounting. We assess the existing gate before advising.",
      },
      {
        q: "Do you install fencing and the gate together?",
        a: "Yes. Perimeter, gate and automation works can be delivered as one scope, which avoids gaps between separate contractors.",
      },
      {
        q: "Which fence type is right for my property?",
        a: "It depends on boundary length, privacy needs, the neighboring properties and budget. We go through the options after seeing the site.",
      },
    ],
    related: ["building-works", "road-electrical-water-works", "project-property-management"],
  },
  {
    slug: "biodigester-works",
    number: "04",
    title: "Biodigester Works",
    shortTitle: "Biodigester Works",
    summary:
      "Biodigester installation and related wastewater works for properties without a mains sewer connection.",
    intro: [
      "Where a property has no sewer connection, wastewater has to be dealt with on site. A biodigester is one of the options, and whether it suits a property depends on the site, the ground and how the property is used.",
      "We assess the site first, then install the system and the associated works around it.",
    ],
    includes: [
      {
        items: [
          "Site assessment for wastewater requirements",
          "Biodigester installation",
          "Related wastewater solutions",
          "Associated excavation, connection and drainage works where applicable",
        ],
      },
    ],
    needs: [
      "A new build with no sewer connection available",
      "An existing on-site system that is no longer coping",
      "A property where soakage and drainage need reworking",
    ],
    approach: [
      {
        step: "Assessment",
        text: "We look at the site, the ground conditions and the wastewater requirement before recommending anything.",
      },
      {
        step: "Recommendation",
        text: "We set out what is appropriate for the property rather than a standard package.",
      },
      { step: "Installation", text: "Installation and associated works are carried out together." },
      {
        step: "Guidance",
        text: "We explain what the system needs from you once it is in use.",
      },
    ],
    faqs: [
      {
        q: "Is a biodigester suitable for every property?",
        a: "No. Suitability depends on the site, ground conditions and the wastewater load. That is why we assess the property before recommending a solution.",
      },
      {
        q: "Do you carry out the excavation and connections too?",
        a: "Yes, the associated works can be included in the scope where applicable.",
      },
      {
        q: "Can it be installed on a property that is already occupied?",
        a: "In many cases yes. The sequence and any temporary arrangements are planned during the assessment.",
      },
    ],
    related: ["road-electrical-water-works", "building-works", "home-improvements-renovations"],
  },
  {
    slug: "road-electrical-water-works",
    number: "05",
    title: "Road, Electrical & Water Works",
    shortTitle: "Road, Electrical & Water Works",
    summary:
      "Three technical disciplines that most projects need — infrastructure, power and water — handled under one scope.",
    intro: [
      "Access roads, power and water are usually what hold up a project when they are treated as an afterthought. Handling them alongside the main works keeps the programme moving.",
      "Each discipline below can be taken on as part of a larger project or as standalone work.",
    ],
    includes: [
      {
        heading: "Road works",
        items: [
          "Road works",
          "Earthworks",
          "Drainage",
          "Pavements",
          "Site preparation",
          "Related civil works",
        ],
      },
      {
        heading: "Electrical works",
        items: [
          "Electrical installations",
          "Wiring",
          "Lighting",
          "Power distribution",
          "Sockets, switches and fixtures",
          "Maintenance",
        ],
      },
      {
        heading: "Water works",
        items: [
          "Water piping",
          "Plumbing",
          "Water reticulation",
          "Water storage",
          "Drainage and sewer-related works",
        ],
      },
    ],
    needs: [
      "A site that needs access, levelling and drainage before building",
      "A new or rewired electrical installation for a house or block",
      "Water supply, storage and reticulation on a property",
      "Recurring plumbing or drainage problems that need a proper fix",
    ],
    approach: [
      {
        step: "Survey",
        text: "We establish what exists on site and what the works have to connect to.",
      },
      {
        step: "Scope by discipline",
        text: "Road, electrical and water elements are scoped separately so costs are clear.",
      },
      {
        step: "Coordinated execution",
        text: "Works are sequenced with the rest of the project to avoid digging up finished work.",
      },
      { step: "Testing", text: "Installations are tested before the section is signed off." },
    ],
    faqs: [
      {
        q: "Can you take on only the electrical or only the water works?",
        a: "Yes. Each discipline can be a standalone scope or part of a wider project.",
      },
      {
        q: "Do you handle site preparation before construction starts?",
        a: "Yes — earthworks, drainage, access and site preparation are part of our civil works.",
      },
      {
        q: "Can you work alongside our main contractor?",
        a: "Yes, provided responsibilities and sequencing are agreed in advance.",
      },
    ],
    related: ["building-works", "biodigester-works", "project-property-management"],
  },
  {
    slug: "project-property-management",
    number: "06",
    title: "Project & Property Management",
    shortTitle: "Project & Property Management",
    summary: "Coordination, supervision and reporting for owners who cannot be on site every day.",
    intro: [
      "Many clients are not able to be on site daily, and the cost of a project usually moves when nobody is checking progress, workmanship and spending as it happens.",
      "We take on that coordination role — on a construction project, or on a property that needs ongoing works and maintenance.",
    ],
    includes: [
      {
        heading: "Project management",
        items: [
          "Project coordination",
          "Site supervision",
          "Progress monitoring",
          "Cost-conscious project management",
          "Project reporting where applicable",
        ],
      },
      {
        heading: "Property management",
        items: [
          "Property management",
          "Maintenance coordination",
          "Client communication on works and progress",
        ],
      },
    ],
    needs: [
      "An owner living away from the project site",
      "A build where costs and progress need independent oversight",
      "A property with recurring maintenance and repair needs",
      "Several trades that need coordinating in the right order",
    ],
    approach: [
      { step: "Baseline", text: "We agree the scope, programme and what reporting you need." },
      {
        step: "Supervision",
        text: "Work is checked on site against the agreed scope and quality.",
      },
      {
        step: "Reporting",
        text: "You are kept informed on progress and on decisions that are due.",
      },
      { step: "Close-out", text: "Outstanding items are tracked to completion before sign-off." },
    ],
    faqs: [
      {
        q: "Can you manage a project being built by another contractor?",
        a: "Yes. Project management can be provided as a separate service where the works are being carried out by others.",
      },
      {
        q: "What does property management cover?",
        a: "Coordination of works and maintenance on a property, supervision of the trades involved and communication with you on what has been done.",
      },
      {
        q: "How often would we hear from you?",
        a: "Reporting frequency is agreed at the start of the engagement so expectations are clear on both sides.",
      },
    ],
    related: ["building-works", "home-improvements-renovations", "road-electrical-water-works"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand what you need and what the project actually requires.",
  },
  {
    number: "02",
    title: "Assess",
    text: "We review the scope, site conditions and the relevant requirements.",
  },
  {
    number: "03",
    title: "Plan & cost",
    text: "We develop the appropriate approach and set out the cost information.",
  },
  {
    number: "04",
    title: "Mobilize",
    text: "We prepare the resources and coordination required to begin the work.",
  },
  {
    number: "05",
    title: "Execute & supervise",
    text: "We carry out the agreed works while monitoring progress, workmanship and coordination.",
  },
  {
    number: "06",
    title: "Complete & hand over",
    text: "We review the completed works and bring the project to completion.",
  },
];

export const whyTuritrend = [
  {
    title: "Multi-disciplinary capability",
    text: "Building, civil, water and electrical disciplines under one service structure, rather than four separate contracts.",
  },
  {
    title: "Practical coordination",
    text: "We help clients coordinate the different parts of a project so the sequence makes sense on site.",
  },
  {
    title: "Clear communication",
    text: "You are kept informed about what the project requires and where it currently stands.",
  },
  {
    title: "Quality workmanship",
    text: "A focus on work that is properly executed and checked, not simply completed.",
  },
  {
    title: "Cost consciousness",
    text: "Decisions are approached with your budget and requirements in mind.",
  },
  {
    title: "Safety & responsibility",
    text: "Responsible working practices are maintained throughout project execution.",
  },
];

export const clientTypes = [
  {
    title: "Homeowners",
    text: "New homes, renovations, improvements and related works.",
  },
  {
    title: "Property owners & landlords",
    text: "Property improvements, maintenance and related works.",
  },
  {
    title: "Developers",
    text: "Construction and associated project requirements.",
  },
  {
    title: "Businesses & institutions",
    text: "Construction, renovation and infrastructure-related works.",
  },
  {
    title: "Property managers",
    text: "Coordinated property works and maintenance requirements.",
  },
];

export const projectFinder: { label: string; slug: ServiceSlug }[] = [
  { label: "I'm building a new home", slug: "building-works" },
  { label: "I'm renovating my home", slug: "home-improvements-renovations" },
  { label: "I need fencing, a gate or car shade", slug: "fences-gates-car-shades" },
  { label: "I need a biodigester", slug: "biodigester-works" },
  { label: "I need road, electrical or water works", slug: "road-electrical-water-works" },
  { label: "I need project or property management", slug: "project-property-management" },
];

export const quoteServiceOptions = [
  "Home Improvements & Renovations",
  "Building Works",
  "Car Shades / Fences / Gates",
  "Biodigester Works",
  "Road Works",
  "Electrical Works",
  "Water Works",
  "Project Management",
  "Property Management",
  "Other",
];

export const projectStages = [
  "Planning",
  "Seeking a quotation",
  "Ready to start",
  "Already underway",
];

export type Faq = { category: string; q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    category: "Quotations",
    q: "How do I get a quotation from Turitrend?",
    a: "Send your project details through the Request a Quote form, WhatsApp or a phone call. For most works we arrange a site visit before quoting, because pricing without seeing the site is guesswork.",
  },
  {
    category: "Quotations",
    q: "What information do you need before quoting?",
    a: "The type of work, the location, a description of what you want done and the stage the project is at. Drawings, photographs or an existing bill of quantities help where you have them.",
  },
  {
    category: "Quotations",
    q: "Does a quotation cover materials and labour?",
    a: "That depends on the arrangement. We can quote for labour only, or for labour and materials. Whichever is agreed is stated in the quotation.",
  },
  {
    category: "Building Works",
    q: "Can Turitrend take a building project from groundworks to completion?",
    a: "Yes. Building works can be handled through the different stages — groundworks, structure, roofing and finishes — according to the agreed scope.",
  },
  {
    category: "Building Works",
    q: "Do you work from a client's architectural drawings?",
    a: "Yes. We build to the drawings and specification you provide and raise any queries before work starts.",
  },
  {
    category: "Renovations",
    q: "Do you take on small renovation jobs?",
    a: "Yes. Scope can be a single room, a set of repairs, or a full property refurbishment.",
  },
  {
    category: "Renovations",
    q: "How long does a renovation take?",
    a: "It depends entirely on scope and site conditions. We give an indicative programme once the scope is agreed after the site visit.",
  },
  {
    category: "Fencing & gates",
    q: "Do you install gates and gate automation?",
    a: "Yes. Gates, gate automation, perimeter fencing, privacy fencing, electric fencing, razor wire and car shades are all part of our perimeter and access works.",
  },
  {
    category: "Fencing & gates",
    q: "Can automation be fitted to an existing gate?",
    a: "Often yes, depending on the gate's condition, weight and mounting. We assess the gate before advising.",
  },
  {
    category: "Biodigesters",
    q: "What does biodigester work involve?",
    a: "A site assessment, installation of the biodigester and the associated works around it, such as excavation, connections and drainage where applicable.",
  },
  {
    category: "Biodigesters",
    q: "Is a biodigester right for my property?",
    a: "It depends on the site, ground conditions and the wastewater requirement. We assess the property before recommending a solution.",
  },
  {
    category: "Road works",
    q: "What civil works do you carry out?",
    a: "Road works, earthworks, drainage, pavements, site preparation and related civil works.",
  },
  {
    category: "Electrical works",
    q: "What electrical works do you handle?",
    a: "Electrical installations, wiring, lighting, power distribution, sockets, switches and fixtures, and maintenance works.",
  },
  {
    category: "Water works",
    q: "What water works do you handle?",
    a: "Water piping, plumbing, water reticulation, water storage and drainage or sewer-related works.",
  },
  {
    category: "Project management",
    q: "Can you manage a project built by another contractor?",
    a: "Yes. Project coordination, site supervision, progress monitoring and reporting can be provided as a standalone service.",
  },
  {
    category: "Property management",
    q: "What does property management include?",
    a: "Coordination of property works and maintenance, supervision of the trades involved, and communication with you on progress.",
  },
  {
    category: "Working with us",
    q: "Where does Turitrend work?",
    a: "We are based in Nairobi, Kenya and take on work in Nairobi and the surrounding counties. Tell us your location and we will confirm whether we can cover it.",
  },
  {
    category: "Working with us",
    q: "How do I contact Turitrend?",
    a: `Call ${company.phone}, message the same number on WhatsApp, or email ${company.email}.`,
  },
];

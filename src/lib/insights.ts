// eslint-disable-next-line prettier/prettier
export type InsightCategory ="Construction"|"Sustainability"| "Planning";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const insights: Insight[] = [
  {
    slug: "building-for-kenyas-changing-construction-landscape",
    title: "Building for Kenya's Changing Construction Landscape",
    excerpt:
      "A look at the principles shaping modern construction in Kenya, from practical design decisions to quality workmanship and long-term value.",
    category: "Construction",
    date: "September 2026",
    readTime: "5 min read",
    image: "/images/insights/insight-1.jpg",
    featured: true,
    content: [
      {
        heading: "Construction is changing",
        paragraphs: [
          "Construction continues to evolve as property owners increasingly look beyond simply completing a structure. Today's projects demand careful planning, reliable workmanship and solutions that remain practical long after handover.",
          "For contractors, this means combining technical knowledge with a clear understanding of the client's objectives, site conditions and long-term requirements.",
        ],
      },
      {
        heading: "Quality begins before construction",
        paragraphs: [
          "Successful projects are built on decisions made before the first foundation is laid. Proper planning helps identify potential challenges early, establish realistic project requirements and create a clear path from concept to completion.",
          "Good communication between the client, designers, consultants and contractor also helps ensure that decisions are understood and implemented consistently throughout the project.",
        ],
      },
      {
        heading: "Building for long-term value",
        paragraphs: [
          "A well-executed project should provide value beyond its completion date. Material selection, structural integrity, functionality and maintainability all contribute to the long-term performance of a building.",
          "This approach encourages construction decisions that balance immediate project requirements with the future needs of the property owner.",
        ],
      },
    ],
  },

  {
    slug: "why-proper-planning-matters-before-construction-begins",
    title: "Why Proper Planning Matters Before Construction Begins",
    excerpt:
      "Good construction starts long before materials arrive on site. Discover why planning is one of the most important stages of every successful project.",
    category: "Planning",
    date: "September 2026",
    readTime: "4 min read",
    image: "/images/insights/insight-2.jpg",
    content: [
      {
        heading: "Every successful project starts with a plan",
        paragraphs: [
          "Construction involves many moving parts. Without a clear plan, small uncertainties can quickly become delays, additional costs and unnecessary complications.",
          "Effective planning establishes the scope of work, project priorities, resources and expected outcomes before construction activity begins.",
        ],
      },
      {
        heading: "Understanding the site",
        paragraphs: [
          "Site conditions can have a significant influence on construction decisions. Understanding the terrain, access, drainage and surrounding environment helps the project team make informed decisions from the beginning.",
        ],
      },
      {
        heading: "Planning creates clarity",
        paragraphs: [
          "Clear planning gives clients and project teams a common understanding of what is being delivered. It also creates a framework for monitoring progress and maintaining quality throughout construction.",
        ],
      },
    ],
  },

  {
    slug: "modern-approaches-to-sustainable-residential-construction",
    title: "Modern Approaches to Sustainable Residential Construction",
    excerpt:
      "Sustainable construction is increasingly about creating homes that are efficient, practical and designed with their long-term environmental impact in mind.",
    category: "Sustainability",
    date: "September 2026",
    readTime: "5 min read",
    image: "/images/insights/insight-3.jpg",
    content: [
      {
        heading: "Sustainability starts with practical decisions",
        paragraphs: [
          "Sustainable construction does not necessarily mean adopting complicated technologies. Many meaningful improvements begin with thoughtful decisions about materials, orientation, water management and energy use.",
          "The objective is to create buildings that perform efficiently while remaining practical for the people who use them.",
        ],
      },
      {
        heading: "Efficient use of resources",
        paragraphs: [
          "Reducing unnecessary material waste and considering the life cycle of construction materials can contribute to more responsible building practices.",
          "Water management and appropriate waste-treatment solutions can also play an important role in improving the sustainability of residential developments.",
        ],
      },
      {
        heading: "Building for the future",
        paragraphs: [
          "Sustainable construction is ultimately about long-term thinking. A well-designed building should respond to its environment, serve its occupants effectively and continue providing value over time.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export const insightCategories = [
  "All",
  ...Array.from(new Set(insights.map((insight) => insight.category))),
];

export function getInsightsByCategory(category: string) {
  if (category === "All") {
    return insights;
  }

  return insights.filter((insight) => insight.category === category);
}

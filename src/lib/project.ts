import { getProjectImages } from "./project-image";

export type ProjectStatus = "Completed" | "In progress";
export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  scope: string[];
  servicesProvided: string[];
  status: ProjectStatus;
  /**
   * Images will be connected here after we confirm
   * the image filenames in each project folder.
   */
  images: {
    src: string;
    alt: string;
  }[];

  featured?: boolean;
};

/* -------------------------------------------------------------------------- */
/*                                PROJECT DATA                                */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  /* ------------------------------------------------------------------------ */
  /* BIODIGESTER                                                              */
  /* ------------------------------------------------------------------------ */

  {
    slug: "biodigester1",
    name: "Construction of Biodigester Katolani Machakos",
    category: "Biodigester",
    location: "Katolani, Machakos",
    description:
      "Biodigester installation and related construction works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Biodigester works"],
    status: "Completed",
    images: getProjectImages("biodigester1"),
  },

  /* ------------------------------------------------------------------------ */
  /* BUILDING                                                                 */
  /* ------------------------------------------------------------------------ */

  {
    slug: "building-project-1",
    name: "Blessed adoration Church Ruiru",
    category: "Building",
    location: "Buruburu,Nairobi",
    description:
      "Residential and structural construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "In progress",
    images: getProjectImages("building-project-1"),
  },

  {
    slug: "building-project-2",
    name: "Construction of a 3 Bedroom Bungalow",
    category: "Building",
    location: "Githumu,Kenya",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
    images: getProjectImages("building-project-2"),
  },

  {
    slug: "building-project-4",
    name: "Mwihoko 5-storey apartment building",
    category: "Project Management",
    location: "Mwihoko,Kiambu",
    description:
      "Turitrend provided project management services for the construction of a five-storey apartment development in MWihoko,overseeing project coordination and management requirements to support effective execution and delivery.",
    scope: [],
    servicesProvided: ["Project management"],
    status: "Completed",
    images: getProjectImages("building-project-4"),
  },

  {
    slug: "building-project-5",
    name: "Proposed Multi-dwelling Residential Development",
    category: "Building",
    location: "Kamulu, Nairobi",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "In progress",
    images: getProjectImages("building-project-5"),
  },

  /* ------------------------------------------------------------------------ */
  /* CAR SHADES & GATES                                                       */
  /* ------------------------------------------------------------------------ */

  {
    slug: "carshades-and-automation",
    name: "Car Shades & Automation",
    category: "Car Shades & Gates",
    location: "Kenya",
    description:
      "Car shade, gate and automation works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Car shades", "Gates", "Automation"],
    status: "Completed",
    images: getProjectImages("carshades-and-automation"),
  },

  /* ------------------------------------------------------------------------ */
  /* FENCING                                                                  */
  /* ------------------------------------------------------------------------ */

  {
    slug: "fences1",
    name: "Privacy Fencing Loresho",
    category: "Fences",
    location: "Loresho, Nairobi",
    description:
      "Fencing works delivered by Turitrend Construction Limited providing a practical boundary solution that enhances privacy, security and the overall appearance of the property.",
    scope: [],
    servicesProvided: ["Fencing"],
    status: "Completed",
    images: getProjectImages("fences1"),
  },

  /* ------------------------------------------------------------------------ */
  /* HOME RENOVATIONS                                                         */
  /* ------------------------------------------------------------------------ */

  {
    slug: "home-renovation1",
    name: "Fixing floor-Boards",
    category: "Home Renovations",
    location: "Loresho, Nairobi",
    description:
      "Home renovation and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation1"),
  },

  {
    slug: "home-renovation2",
    name: "Kikuyu Ondiri House Renovation",
    category: "Home Renovations",
    location: "Kikuyu, Nairobi",
    description:
      "Home renovation and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation2"),
  },

  {
    slug: "home-renovation3",
    name: "Loresho Maisonette Renovation and Painting works",
    category: "Home Renovations",
    location: "Loresho, Nairobi",
    description:
      "Home renovation and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation3"),
  },

  {
    slug: "home-renovation4",
    name: "32 Bedsitters and 2 Commercial Units Renovation",
    category: "Home Renovations",
    location: "Kirwara, Gatanga",
    description:
      "Home renovation and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation4"),
  },

  {
    slug: "home-renovation5",
    name: "Silage Bunkers Rehabilitation",
    category: "Home Renovations",
    location: "Isinya, Kajiado",
    description:
      "Turitrend carried out rehabilitation works on silage bunkers in Isinya, focusing on restoring and improving the existing structures for continued practical use.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation5"),
  },

  /* ------------------------------------------------------------------------ */
  /* INFRASTRUCTURE                                                           */
  /* ------------------------------------------------------------------------ */

  {
    slug: "infrastructure1",
    name: "Pergola,Balcony Canopies, Balustrades and Garage door automation ",
    category: "Infrastructure",
    location: "Makuyu, Murang'a",
    description:
      "Infrastructure construction and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Infrastructure works"],
    status: "Completed",
    images: getProjectImages("infrastructure1"),
  },

  {
    slug: "infrastructure2",
    name: "Prefabricated Steel Fascia Boards and External Painting Works",
    category: "Infrastructure",
    location: "Isinya, Kajiado",
    description:
      "Infrastructure construction and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Infrastructure works"],
    status: "Completed",
    images: getProjectImages("infrastructure2"),
  },

  {
    slug: "infrastructure3",
    name: "Rehabilitation Of Cabro works at MUhazi Farm",
    category: "Infrastructure",
    location: "Isinya, Kajiado",
    description:
      "Infrastructure construction and improvement works delivered by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Infrastructure works"],
    status: "Completed",
    images: getProjectImages("infrastructure3"),
  },
];

/* -------------------------------------------------------------------------- */
/*                              HELPER FUNCTIONS                              */
/* -------------------------------------------------------------------------- */

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string) {
  if (category === "All") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

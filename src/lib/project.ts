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
    name: "Biodigester Project",
    category: "Biodigester",
    location: "Kenya",
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
    name: "Building Project 1",
    category: "Building",
    location: "Kenya",
    description:
      "Residential and structural construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
    images: getProjectImages("building-project-1"),
  },

  {
    slug: "building-project-2",
    name: "Building Project 2",
    category: "Building",
    location: "Kenya",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
    images: getProjectImages("building-project-2"),
  },

  {
    slug: "building-project-3",
    name: "Building Project 3",
    category: "Building",
    location: "Kenya",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
    images: getProjectImages("building-project-3"),
  },

  {
    slug: "building-project-4",
    name: "Building Project 4",
    category: "Building",
    location: "Kenya",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
    images: getProjectImages("building-project-4"),
  },

  {
    slug: "building-project-5",
    name: "Building Project 5",
    category: "Building",
    location: "Kenya",
    description: "Building and construction works undertaken by Turitrend Construction Limited.",
    scope: [],
    servicesProvided: ["Building works"],
    status: "Completed",
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
    description: "Car shade, gate and automation works delivered by Turiend Construction Limited.",
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
    name: "Fencing Project",
    category: "Fences",
    location: "Kenya",
    description: "Fencing works delivered by Turiend Construction Limited.",
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
    name: "Home Renovation Project 1",
    category: "Home Renovations",
    location: "Kenya",
    description: "Home renovation and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation1"),
  },

  {
    slug: "home-renovation2",
    name: "Home Renovation Project 2",
    category: "Home Renovations",
    location: "Kenya",
    description: "Home renovation and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation2"),
  },

  {
    slug: "home-renovation3",
    name: "Home Renovation Project 3",
    category: "Home Renovations",
    location: "Kenya",
    description: "Home renovation and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation3"),
  },

  {
    slug: "home-renovation4",
    name: "Home Renovation Project 4",
    category: "Home Renovations",
    location: "Kenya",
    description: "Home renovation and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Home renovations"],
    status: "Completed",
    images: getProjectImages("home-renovation4"),
  },

  {
    slug: "home-renovation5",
    name: "Home Renovation Project 5",
    category: "Home Renovations",
    location: "Kenya",
    description: "Home renovation and improvement works delivered by Turiend Construction Limited.",
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
    name: "Infrastructure Project 1",
    category: "Infrastructure",
    location: "Kenya",
    description:
      "Infrastructure construction and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Infrastructure works"],
    status: "Completed",
    images: getProjectImages("infrastructure1"),
  },

  {
    slug: "infrastructure2",
    name: "Infrastructure Project 2",
    category: "Infrastructure",
    location: "Kenya",
    description:
      "Infrastructure construction and improvement works delivered by Turiend Construction Limited.",
    scope: [],
    servicesProvided: ["Infrastructure works"],
    status: "Completed",
    images: getProjectImages("infrastructure2"),
  },

  {
    slug: "infrastructure3",
    name: "Infrastructure Project 3",
    category: "Infrastructure",
    location: "Kenya",
    description:
      "Infrastructure construction and improvement works delivered by Turiend Construction Limited.",
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

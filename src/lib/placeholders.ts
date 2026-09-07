import aboutTeam from "@/assets/about-team.jpg";
import processPlanning from "@/assets/process-planning.jpg";
import projectPlaceholderOne from "@/assets/project-placeholder-1.jpg";
import projectPlaceholderTwo from "@/assets/project-placeholder-2.jpg";
import projectPlaceholderThree from "@/assets/project-placeholder-3.jpg";
import serviceBiodigester from "@/assets/service-biodigester.jpg";
import serviceBuilding from "@/assets/service-building.jpg";
import serviceFences from "@/assets/service-fences.jpg";
import serviceInfrastructure from "@/assets/service-infrastructure.jpg";
import serviceManagement from "@/assets/service-management.jpg";
import serviceRenovations from "@/assets/service-renovations.jpg";

export const serviceImages = {
  "home-improvements-renovations": {
    src: serviceRenovations,
    alt: "Illustrative view of a contemporary home renovation interior",
  },
  "building-works": {
    src: serviceBuilding,
    alt: "Illustrative view of a building structure under construction",
  },
  "fences-gates-car-shades": {
    src: serviceFences,
    alt: "Illustrative view of a modern entrance gate and perimeter fence",
  },
  "biodigester-works": {
    src: serviceBiodigester,
    alt: "Illustrative view of a biodigester installation in progress",
  },
  "road-electrical-water-works": {
    src: serviceInfrastructure,
    alt: "Illustrative view of road and utility infrastructure works",
  },
  "project-property-management": {
    src: serviceManagement,
    alt: "Illustrative view of construction drawings and site management planning",
  },
} as const;

export const aboutImage = {
  src: aboutTeam,
  alt: "Illustrative view of a construction team reviewing plans on site",
};

export const processImage = {
  src: processPlanning,
  alt: "Illustrative view of construction planning documents and measuring tools",
};

export const projectPlaceholderImages = [
  {
    src: projectPlaceholderOne,
    alt: "Illustrative architectural view representing building projects",
  },
  {
    src: projectPlaceholderTwo,
    alt: "Illustrative construction detail representing infrastructure projects",
  },
  {
    src: projectPlaceholderThree,
    alt: "Illustrative finished property representing renovation projects",
  },
] as const;
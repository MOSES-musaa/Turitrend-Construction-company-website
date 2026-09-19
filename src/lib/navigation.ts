import {
  BriefcaseBusiness,
  Building2,
  CircleHelp,
  FileText,
  House,
  Info,
  Lightbulb,
  Mail,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

export const navItems = [
  { to: "/", label: "Home", icon: House },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: BriefcaseBusiness },
  { to: "/projects", label: "Projects", icon: Building2 },
  { to: "/how-we-work", label: "How We Work", icon: Workflow },
  { to: "/faqs", label: "FAQs", icon: CircleHelp },
  { to: "/insights", label: "Insights", icon: Lightbulb },
  { to: "/contact", label: "Contact", icon: Mail },
] satisfies readonly NavItem[];

export const quoteNavItem = {
  label: "Request a Quote",
  icon: FileText,
} satisfies Pick<NavItem, "label" | "icon">;

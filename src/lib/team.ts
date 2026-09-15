export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "james-mwendia",
    name: "James Mwendia",
    role: "Director / Managing Director",
    bio: "Construction Project Manager with over 10 years of professional experience. Responsible for strategic leadership, project oversight, construction project management, site coordination, quality control and client relations.",
    initials: "JM",
  },
  {
    id: "teresia-wanjiku",
    name: "Teresiah Wanjiku",
    role: "Director / HR Manager",
    bio: "Responsible for human resource management, administration and organizational operations, supporting effective coordination and internal management.",
    initials: "TW",
  },
  {
    id: "dennis-kinyua",
    name: "Dennis Kinyua",
    role: "Project Manager",
    bio: "Responsible for project execution, site coordination, supervision, scheduling and quality assurance.",
    initials: "DK",
  },
];

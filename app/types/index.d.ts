export interface Technology {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
  icon?: string;
}

export type Category = "fullstack" | "frontend" | "backend";

export type ProjectType = "personal" | "freelance" | "company";

export interface Project {
  thumbnailLink?: string;
  title: string;
  description: string;
  technologies: ItemSkill[];
  githubRepo?: string;
  liveDemo?: string;
  screenshot?: string;
  category: Category;
  type: ProjectType;
  aiPowered?: boolean;
}

export interface Service {
  title: string;
  description: string;
  image?: string;
}

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Proficiency = "confident" | "comfortable" | "exploring";

export interface ItemSkill {
  name: string;
  level: Level;
  proficiency: Proficiency;
  icon: string;
}

export interface Skill {
  name: string;
  items: ItemSkill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  descriptions: string[];
  companyLogo?: string;
  projects?: Project[];
}

export interface Contact {
  name: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
}

export interface Certificate {
  name: string;
  platform: string;
  platformLogo?: string;
  dateCompleted: Date | "ongoing";
  description: string;
  certificateLink?: string;
  certificateImage?: string;
  courseLink?: string;
}

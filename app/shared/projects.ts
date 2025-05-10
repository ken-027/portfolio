export interface Technology {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
  icon?: string;
}

export type Category = "fullstack" | "frontend" | "backend" | "AI-powered";

export interface Project {
  thumbnailLink?: string;
  title: string;
  description: string;
  technologies: Technology[];
  githubRepo?: string;
  liveDemo?: string;
  screenshot?: string;
  category: Category;
}

export const CATEGORIES: Category[] = [
  "frontend",
  "backend",
  "fullstack",
  "AI-powered",
];

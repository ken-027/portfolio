import { type Project } from "./projects";

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

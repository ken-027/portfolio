"use client";

import SKILLS from "./skills";

export interface Technology {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
}

const language = SKILLS[0];
const frontend = SKILLS[1];
const backend = SKILLS[2];
const fullstack = SKILLS[3];
const tools = SKILLS[4];

export type Category = "all" | "fullstack" | "frontend" | "backend";

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
  //   "all",
  "frontend",
  "backend",
  "fullstack",
];

const PROJECTS: Project[] = [
  {
    category: "frontend",
    title: "EkoopBanker Plus CASA V3 (UI)",
    thumbnailLink: "/images/projects/casa-thumbnail.png",
    description:
      "A core banking system that handles banking transactions and generates financial reports.",
    technologies: [
      language.items[0],
      language.items[2],
      frontend.items[0],
      frontend.items[3],
      frontend.items[2],
      fullstack.items[0],
      tools.items[5],
      tools.items[6],
    ],
    screenshot: "/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf",
  },
  {
    category: "backend",
    title: "EkoopBanker Plus CASA V3 (API)",
    thumbnailLink: "/images/projects/casa-thumbnail.png",
    description:
      "A core banking system that handles banking transactions and generates financial reports.",
    technologies: [
      language.items[2],
      backend.items[0],
      backend.items[1],
      backend.items[2],
      tools.items[1],
      tools.items[6],
    ],
    screenshot: "/pdf/EKOOPBANKER_PLUS_CASA_V3.pdf",
  },
  {
    category: "fullstack",
    title: "EkoopBanker Plus Accounting V2",
    thumbnailLink: "/images/projects/accounting-thumbnail.png",
    description:
      "An accounting system that manages fixed asset transactions and generates detailed reports for asset management.",
    technologies: [
      language.items[5],
      backend.items[2],
      fullstack.items[3],
      tools.items[1],
    ],
    screenshot: "/pdf/EKOOPBANKER_PLUS_ACCOUNTING_V2.pdf",
  },
  {
    category: "frontend",
    title: "Portfolio Site",
    thumbnailLink: "/images/projects/portfolio-site-thumbnail.png",
    description:
      "A simple portfolio website that showcases my experiences, projects, and services",
    technologies: [
      language.items[2],
      frontend.items[0],
      frontend.items[2],
      frontend.items[3],
    ],
    githubRepo: "https://github.com/ken-027/portfolio",
    liveDemo: "https://kenneth-andales.github.io",
  },
  {
    category: "fullstack",
    title: "E-commerce Dashboard",
    thumbnailLink: "/images/projects/ecommerce-dashboard-thumbnail.png",
    description:
      "An e-commerce dashboard for managing inventory items, enabling seamless tracking, updating, and organization of products.",
    technologies: [
      language.items[0],
      language.items[3],
      language.items[4],
      frontend.items[0],
      frontend.items[4],
      frontend.items[2],
      backend.items[4],
      fullstack.items[1],
    ],
    githubRepo: "https://github.com/ken-027/laravel-ecommerce-admin",
  },
  {
    category: "fullstack",
    title: "Job Posting",
    thumbnailLink: "/images/projects/job-posting-thumbnail.png",
    description:
      "A simple job posting site that allows users to create, manage, and track job listings.",
    technologies: [
      language.items[0],
      language.items[3],
      language.items[4],
      frontend.items[0],
      frontend.items[4],
      frontend.items[2],
      backend.items[4],
      fullstack.items[1],
    ],
    githubRepo: "https://github.com/ken-027/laravelfindeasyjob",
  },
  {
    category: "fullstack",
    title: "Invoice CRUD",
    thumbnailLink: "/images/projects/invoice-crud-thumbnail.png",
    description:
      "A simple CRUD application for efficiently managing and processing invoice.",
    technologies: [
      language.items[0],
      language.items[3],
      language.items[4],
      frontend.items[0],
      frontend.items[4],
      frontend.items[2],
      backend.items[3],
      fullstack.items[1],
    ],
    githubRepo: "https://github.com/ken-027/laravelinvoicecrud",
  },
  {
    category: "frontend",
    title: "Wilson Works Landing Page",
    thumbnailLink: "/images/projects/wilson-works-thumbnail.png",
    description:
      "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
    technologies: [
      language.items[0],
      language.items[3],
      frontend.items[2],
      frontend.items[3],
    ],
    githubRepo: "https://github.com/ken-027/wiwosite",
    liveDemo: "https://kenneth-andales.github.io/wilson-works/",
  },
  {
    category: "frontend",
    title: "Libre Landing Page",
    thumbnailLink: "/images/projects/libre-thumbnail.png",
    description:
      "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
    technologies: [
      language.items[0],
      language.items[1],
      language.items[3],
      frontend.items[2],
      frontend.items[3],
    ],
    githubRepo: "https://github.com/ken-027/libre-site",
    liveDemo: "https://kenneth-andales.github.io/libre/",
  },
  {
    category: "frontend",
    title: "Educat Landing Page",
    thumbnailLink: "/images/projects/educat-thumbnail.png",
    description:
      "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
    technologies: [
      language.items[0],
      language.items[1],
      language.items[3],
      frontend.items[2],
    ],
    githubRepo: "https://github.com/ken-027/educat-landing",
    liveDemo: "https://kenneth-andales.github.io/educat/",
  },
  {
    category: "frontend",
    title: "AgencyMatch Landing Page",
    thumbnailLink: "/images/projects/agency-match-thumbnail.png",
    description:
      "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
    technologies: [
      language.items[0],
      language.items[1],
      language.items[3],
      frontend.items[2],
    ],
    githubRepo: "https://github.com/ken-027/agency-match",
    liveDemo: "https://kenneth-andales.github.io/agency-match/",
  },
  {
    category: "frontend",
    title: "TraBook Landing Page",
    thumbnailLink: "/images/projects/trabook-thumbnail.png",
    description:
      "A simple, responsive landing page with subtle animations to enhance user experience across devices.",
    technologies: [
      language.items[0],
      language.items[1],
      language.items[3],
      frontend.items[2],
    ],
    githubRepo: "https://github.com/ken-027/trabook",
    liveDemo: "https://kenneth-andales.github.io/trabook/",
  },
  {
    category: "frontend",
    title: "Buyback E-commerce Website",
    description:
      "An e-commerce site that allows customers to sell their old devices, with the option to check if their device is listed on the platform before selling.",
    technologies: [language.items[0], language.items[4], frontend.items[4]],
  },
  {
    category: "fullstack",
    title: "DSWD Minor Travelling Abroad",
    description:
      "A government website for the Department of Social Welfare and Development (DSWD) that facilitates booking and approval of travel for minors.",
    technologies: [
      language.items[0],
      language.items[3],
      language.items[4],
      frontend.items[0],
      frontend.items[1],
      frontend.items[4],
      backend.items[4],
      fullstack.items[2],
    ],
  },
  {
    category: "fullstack",
    title: "Laguna Lake Development Authority",
    description:
      "A government website for the Laguna Lake Development Authority (LLDA) that handles the approval process and certification for activities in the Laguna region.",
    technologies: [
      language.items[0],
      language.items[3],
      language.items[4],
      frontend.items[0],
      frontend.items[1],
      frontend.items[4],
      backend.items[4],
      fullstack.items[2],
    ],
  },
  {
    category: "frontend",
    title: "Customer Service Record Management System (UI)",
    description:
      "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
    technologies: [
      language.items[0],
      language.items[3],
      frontend.items[0],
      frontend.items[1],
    ],
  },
  {
    category: "backend",
    title: "Customer Service Record Management System (API)",
    description:
      "An internal customer service system designed to efficiently manage customer interactions, inquiries, and support requests.",
    technologies: [language.items[4], backend.items[3]],
  },
  {
    category: "fullstack",
    title: "EMA V2 E-commerce Website",
    description:
      "An e-commerce platform for managing merchant products, enabling seamless product listing, updates, and inventory tracking.",
    technologies: [
      language.items[0],
      language.items[3],
      frontend.items[0],
      frontend.items[1],
      language.items[4],
      backend.items[3],
    ],
  },
];

export default PROJECTS;

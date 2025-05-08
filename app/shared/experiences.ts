import PROJECTS, { type Project } from "./projects";

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

const EXPERIENCES: Experience[] = [
//   {
//     title: "Freelance Software Developer",
//     company: "Self-Employed",
//     location: "WFH",
//     startDate: new Date("2025-04-15"),
//     endDate: "Present",
//     descriptions: [
//       "Building a service offering focused on modern web development using Next.js and Laravel.",
//       "Expanding expertise in AI and DevOps while developing a professional portfolio to showcase skills.",
//       "Proactively seeking freelance projects and collaborative opportunities in the tech industry.",
//     ],
//     projects: [PROJECTS.portfolio, PROJECTS.rustify, PROJECTS.anime_dialog_translator, PROJECTS.py_to_any],
//   },
  {
    title: "Mid-Software Developer",
    company: "National Confederation of Cooperatives",
    location: "WFH",
    startDate: new Date("2023-07-25"),
    endDate: new Date("2025-03-25"),
    descriptions: [
      "Upgraded a legacy system by implementing a modern tech stack, enhancing performance, scalability, and user experience while ensuring seamless deployment and system stability.",
      "Implemented new features in a legacy system, enhancing functionality while maintaining system stability and performance.",
      "Designed and implemented report templates, improving data accessibility and reporting capabilities in a web-based system.",
      "Identified and resolved data issues in the legacy system, improving data integrity and system reliability.",
    ],
    companyLogo: "/images/companies/natcco-logo.svg",
    projects: [PROJECTS.casa, PROJECTS.casa_api, PROJECTS.fixed_asset],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "WFH",
    startDate: new Date("2022-01-05"),
    endDate: new Date("2022-05-20"),
    descriptions: [
      "Developed the admin panel and integrated a third-party API to enhance the functionality of an e-commerce platform.",
      "Implemented translation scripts and modified code to support seamless updates on new e-commerce websites.",
      "Optimized SEO performance, improving search engine visibility and user engagement.",
      "Managed deployment processes, ensuring smooth updates and maintaining website stability through efficient hosting management.",
      "Developed visually engaging and responsive landing pages based on Figma designs, delivering seamless UX across devices.",
      "Collaborated with designer and backend developer to build user interfaces from mockups and integrate API for full functionality.",
    ],
    projects: [
      PROJECTS.dashboard,
      PROJECTS.e_commerce,
      PROJECTS.wiwo,
      PROJECTS.libre,
    ],
  },
  {
    title: "Software Developer",
    company: "Cloud Panda PH",
    location: "BGC, Taguig City, Philippines",
    startDate: new Date("2019-10-10"),
    endDate: new Date("2020-03-17"),
    descriptions: [
      "Improved team productivity by assisting in the development of a responsive website, ensuring an improved user experience.",
      "Resolved critical issues on an existing website by collaborating with another team, leading to increased system stability and performance.",
      "Maintained code quality and best practices through active participation in team code reviews, reducing technical debt and improving maintainability.",
    ],
    companyLogo: "/images/companies/cloud-panda-ph-logo.svg",
    projects: [PROJECTS.mta, PROJECTS.llda],
  },
  {
    title: "Jr. Web Developer",
    company: "International Payment Processing",
    location: "Puerto Princesa City, Philippines",
    startDate: new Date("2018-05-02"),
    endDate: new Date("2019-04-17"),
    descriptions: [
      "Deployed the application and provided comprehensive end-user support, ensuring smooth adoption and minimal downtime.",
      "Maintained and optimized multiple websites, collaborating with cross-functional teams to enhance functionality and user experience.",
      "Implemented a version control strategy by regularly updating and managing code repositories on Bitbucket, ensuring seamless collaboration and code integrity.",
    ],
    companyLogo: "/images/companies/ipp-logo.svg",
    projects: [PROJECTS.csrm, PROJECTS.csrm_api, PROJECTS.ema],
  },
];

export default EXPERIENCES;

"use client";

interface Service {
  title: string;
  description: string;
  illustration: string;
}
const SERVICES: Service[] = [
  {
    title: "Custom Website Development",
    description:
      "Business websites and systems tailored to specific needs using modern technologies.",
    illustration: "/section-illustration/services/web-development.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "RESTful API creation using Node.js or PHP, plus integration with any third-party API.",
    illustration: "/section-illustration/services/integration.svg",
  },
  {
    title: "Website Maintenance & Upgrades",
    description:
      "Ongoing support, bug fixes, and feature enhancements for existing sites and systems—whether built from scratch or inherited.",
    illustration: "/section-illustration/services/upgrade.svg",
  },
  {
    title: "Single Page Applications (SPA)",
    description:
      "Develop fast, interactive apps using React or Next.js with seamless user experience and client-side routing",
    illustration: "/section-illustration/services/single-page-app.svg",
  },
  {
    title: "Bug Fixing & Performance Tuning",
    description:
      "Identify and fix slow-loading pages, broken features, or security issues across web applications.",
    illustration: "/section-illustration/services/bug-fixing.svg",
  },
  {
    title: "Cross-Team Feature Implementation",
    description:
      "Collaborate across frontend/backend teams to ship features end-to-end—clear Git workflows, commits, and documentation included.",
    illustration: "/section-illustration/services/team.svg",
  },
];

export default SERVICES;

"use client";

import CertificateIcon from "~/components/icons/certificate.icon";
import ContactIcon from "~/components/icons/contact.icon";
import ExperienceIcon from "~/components/icons/experience.icon";
import ProjectIcon from "~/components/icons/project.icon";
import ResumeMenuIcon from "~/components/icons/resume-menu.icon";
import ServicesIcon from "~/components/icons/services.icon";
import SkillsIcon from "~/components/icons/skills.icon";

type Nav = {
  name: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
};

const MENUS: Nav[] = [
  //   { name: "Home", href: "#home", Icon: ServicesIcon },
  { name: "Services", href: "#services", Icon: ServicesIcon },
  { name: "Skills", href: "#skills", Icon: SkillsIcon },
  { name: "Experiences", href: "#experiences", Icon: ExperienceIcon },
  { name: "Projects", href: "#projects", Icon: ProjectIcon },
  { name: "Certificates", href: "#certificates", Icon: CertificateIcon },
  { name: "Contact", href: "#contact", Icon: ContactIcon },
  { name: "My resume", href: "#resume", Icon: ResumeMenuIcon },
];

export default MENUS;

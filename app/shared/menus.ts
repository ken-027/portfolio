import ContactIcon from "~/components/icons/contact.icon";
import ExperienceIcon from "~/components/icons/experience.icon";
import ProjectIcon from "~/components/icons/project.icon";
import ResumeMenuIcon from "~/components/icons/resume-menu.icon";
import RibbonIcon from "~/components/icons/ribbon.icon";
import ServicesIcon from "~/components/icons/services.icon";
import SkillsIcon from "~/components/icons/skills.icon";

export type Nav = {
  name: string;
  href: string;
  Icon: React.FC<any>;
};

const MENUS: Nav[] = [
  //   { name: "About me", href: "#about-me", Icon: AboutMeIcon },
  {
    name: "What I do",
    href: "#what-i-do",
    Icon: ServicesIcon,
  },
  {
    name: "Skills",
    href: "#skills",
    Icon: SkillsIcon,
  },
  {
    name: "Experiences",
    href: "#experiences",
    Icon: ExperienceIcon,
  },
  {
    name: "Portfolio",
    href: "#portfolios",
    Icon: ProjectIcon,
  },
  {
    name: "Certificates",
    href: "#certificates",
    Icon: RibbonIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    Icon: ContactIcon,
  },
  {
    name: "My resume",
    href: "#resume",
    Icon: ResumeMenuIcon,
  },
];

export default MENUS;

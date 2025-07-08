import AboutMeIcon from "~/components/icons/about-me.icon";
import ContactIcon from "~/components/icons/contact.icon";
import ExperienceIcon from "~/components/icons/experience.icon";
import ProjectIcon from "~/components/icons/project.icon";
import ResumeMenuIcon from "~/components/icons/resume-menu.icon";
import RibbonIcon from "~/components/icons/ribbon.icon";
import ServicesIcon from "~/components/icons/services.icon";
import SkillsIcon from "~/components/icons/skills.icon";

type Nav = {
  name: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.FC<any>;
};

const MENUS: Nav[] = [
  { name: "About me", href: "#about-me", Icon: AboutMeIcon },
  { name: "Skills", href: "#skills", Icon: SkillsIcon },
  { name: "What I do", href: "#what-i-do", Icon: ServicesIcon },
  { name: "Portfolio", href: "#portfolios", Icon: ProjectIcon },
  { name: "Experiences", href: "#experiences", Icon: ExperienceIcon },
  { name: "Certificates", href: "#certificates", Icon: RibbonIcon },
  { name: "Contact", href: "#contact", Icon: ContactIcon },
  { name: "My resume", href: "#resume", Icon: ResumeMenuIcon },
];

export default MENUS;

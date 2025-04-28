import BannerLayout from "~/components/layout/banner.layout";
import type { Route } from "./+types/home";
import ServicesLayout from "~/components/layout/services.layout";
import ExperiencesLayout from "~/components/layout/experiences.layout";
import SkillsLayout from "~/components/layout/skills.layout";
import ProjectsLayout from "~/components/layout/projects.layout";
import ContactLayout from "~/components/layout/contact.layout";
import FooterLayout from "~/components/layout/footer.layout";
import CertificateLayout from "~/components/layout/certificate.layout";
import TerminalLayout from "~/components/layout/terminal.layout";
import { getStyledType } from "~/shared/local-storage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kenneth Andales - Portfolio" },
    {
      name: "description",
      content: "Explore my portfolio and see the projects I've worked on.",
    },
  ];
}

export default function Home() {
  const getStyle = getStyledType();

  return (
    <>
      {getStyle === "gui" ? (
        <>
          <BannerLayout />
          <ServicesLayout />
          <SkillsLayout />
          <ExperiencesLayout />
          <ProjectsLayout />
          <CertificateLayout />
          <ContactLayout />
          <FooterLayout />
        </>
      ) : (
        <TerminalLayout />
      )}
    </>
  );
}

import type { Route } from "./+types/home";
import { getStyledType } from "~/shared/local-storage";
import { lazy, Suspense, useEffect, useState } from "react";
import InitialPageLoaderLayout from "~/components/layout/initial-page-loader.layout";
import { visitor } from "~/api/visitor.api";
import type { Experience } from "~/shared/experiences";
import {
  getCertificates,
  getExperiences,
  getProjects,
  getServices,
  getSkills,
} from "~/api/portfolio.api";
import type { Service } from "~/shared/services";
import type { Certificate } from "~/shared/certificates";
import type { Skill } from "~/shared/skills";
import type { Project } from "~/shared/projects";

const BannerLayout = lazy(() => import("~/components/layout/banner.layout"));
const TerminalLayout = lazy(
  () => import("~/components/layout/terminal.layout")
);
const ServicesLayout = lazy(
  () => import("~/components/layout/services.layout")
);
const SkillsLayout = lazy(() => import("~/components/layout/skills.layout"));
const ProjectsLayout = lazy(
  () => import("~/components/layout/projects.layout")
);
const ExperiencesLayout = lazy(
  () => import("~/components/layout/experiences.layout")
);
const ContactLayout = lazy(() => import("~/components/layout/contact.layout"));
const FooterLayout = lazy(() => import("~/components/layout/footer.layout"));
const ChatBotLayout = lazy(() => import("~/components/layout/chatbot.layout"));
const CertificateLayout = lazy(
  () => import("~/components/layout/certificate.layout")
);

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
  const [show, setShow] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>();
  const [services, setServices] = useState<Service[]>();
  const [certificates, setCertificates] = useState<Certificate[]>();
  const [skills, setSkills] = useState<Skill[]>();
  const [projects, setProjects] = useState<Project[]>();

  const loadData = async () => {
    const [_experiences, _services, _certificates, _skills, _projects] =
      await Promise.all([
        getExperiences(),
        getServices(),
        getCertificates(),
        getSkills(),
        getProjects(),
      ]);

    setExperiences(_experiences);
    setServices(_services);
    setCertificates(_certificates);
    setSkills(_skills);
    setProjects(_projects);
  };

  useEffect(() => {
    visitor();
    loadData();

    setTimeout(() => {
      setShow(true);
    }, 400);
  }, []);

  return (
    <>
      <InitialPageLoaderLayout />
      {getStyle === "gui" ? (
        <>
          <Suspense fallback={null}>
            {show ? (
              <>
                <BannerLayout />
                <ServicesLayout services={services || []} />
                <SkillsLayout skills={skills || []} />
                <ExperiencesLayout experiences={experiences || []} />
                <ProjectsLayout projects={projects || []} />
                <CertificateLayout certificates={certificates || []} />
                <ContactLayout />
                <FooterLayout />
                <ChatBotLayout />
              </>
            ) : null}
          </Suspense>
        </>
      ) : // <TerminalLayout />
      null}
    </>
  );
}

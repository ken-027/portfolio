import type { Route } from "./+types/home";
import { getStyledType } from "~/shared/local-storage";
import { lazy, useEffect, useState } from "react";
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

import BannerLayout from "~/components/layout/banner.layout";
import TerminalLayout from "~/components/layout/terminal.layout";
import ServicesLayout from "~/components/layout/services.layout";
import SkillsLayout from "~/components/layout/skills.layout";
import ProjectsLayout from "~/components/layout/projects.layout";
import ExperiencesLayout from "~/components/layout/experiences.layout";
import ContactLayout from "~/components/layout/contact.layout";
import FooterLayout from "~/components/layout/footer.layout";
import ChatBotLayout from "~/components/layout/chatbot.layout";
import CertificateLayout from "~/components/layout/certificate.layout";

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
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
      {getStyle === "gui" ? (
        <>
          {show ? (
            <>
              <BannerLayout />
              {loading ||
              !(
                services &&
                skills &&
                experiences &&
                projects &&
                certificates
              ) ? (
                <div className="grid justify-center py-6 lg:py-10">
                  <div className="mt-2 flex items-center gap-2 lg:gap-3 lg:mt-4 justify-center">
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-yellow-300 border-[1px] border-border rounded-full ball-loading" />
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-green-300 animate-100 border-[1px] border-border rounded-full ball-loading" />
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-blue-300 delay-200 border-[1px] border-border rounded-full ball-loading" />
                  </div>
                </div>
              ) : (
                <>
                  <ServicesLayout services={services || []} />
                  <SkillsLayout skills={skills || []} />
                  <ExperiencesLayout experiences={experiences || []} />
                  <ProjectsLayout projects={projects || []} />
                  <CertificateLayout certificates={certificates || []} />
                  <ContactLayout />
                  <FooterLayout />
                  <ChatBotLayout />
                </>
              )}
            </>
          ) : null}
        </>
      ) : (
        <TerminalLayout
          loading={loading}
          skills={skills || []}
          services={services || []}
          experiences={experiences || []}
          certificates={certificates || []}
          projects={projects || []}
        />
      )}
    </>
  );
}

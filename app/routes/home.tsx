import type { Route } from "./+types/home";
import { getStyledType } from "~/shared/local-storage";
import { useEffect, useState } from "react";
import { access } from "~/api/access.api";
import {
  getAboutMe,
  getCertificates,
  getDeveloperPlatform,
  getExperiences,
  getProjects,
  getServices,
  getSkills,
  getWhatIDo,
} from "~/api/portfolio.api";

import BannerLayout from "~/components/layout/banner.layout";
import TerminalLayout from "~/components/layout/terminal.layout";
import SkillsLayout from "~/components/layout/skills.layout";
import ProjectsLayout from "~/components/layout/projects.layout";
import ExperiencesLayout from "~/components/layout/experiences.layout";
import ContactLayout from "~/components/layout/contact.layout";
import FooterLayout from "~/components/layout/footer.layout";
import ChatBotLayout from "~/components/layout/chatbot.layout";
import CertificateLayout from "~/components/layout/certificate.layout";
import type {
  Certificate,
  DeveloperPlatform,
  Experience,
  Project,
  Service,
  Skill,
  WhatIDo,
} from "~/types";
import { storeChat } from "~/api/chat-stream.api";
import AboutMeLayout from "~/components/layout/about-me.layout";
import WhatIDoLayout from "~/components/layout/what-i-do.layout";

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
  const [platforms, setPlatforms] = useState<DeveloperPlatform[]>();
  const [services, setServices] = useState<Service[]>();
  const [whatIDo, setWhatIDo] = useState<WhatIDo[]>();
  const [certificates, setCertificates] = useState<Certificate[]>();
  const [skills, setSkills] = useState<Skill[]>();
  const [projects, setProjects] = useState<Project[]>();
  const [aboutMe, setAboutMe] = useState<string[]>();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [
        _experiences,
        _services,
        _certificates,
        _skills,
        _projects,
        _platforms,
        _aboutMe,
        _whatIDo,
      ] = await Promise.all([
        getExperiences(),
        getServices(),
        getCertificates(),
        getSkills(),
        getProjects(),
        getDeveloperPlatform(),
        getAboutMe(),
        getWhatIDo(),
      ]);

      setExperiences(_experiences);
      setServices(_services);
      setCertificates(_certificates);
      setSkills(_skills);
      setProjects(_projects);
      setPlatforms(_platforms);
      setAboutMe(_aboutMe);
      setWhatIDo(_whatIDo);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    storeChat();
    access();
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
                certificates &&
                platforms &&
                aboutMe &&
                whatIDo
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
                  <AboutMeLayout aboutMe={aboutMe} />
                  <SkillsLayout skills={skills || []} />
                  <WhatIDoLayout whatIDo={whatIDo || []} />
                  <ProjectsLayout projects={projects || []} />
                  <ExperiencesLayout experiences={experiences || []} />
                  <CertificateLayout certificates={certificates || []} />
                  <ContactLayout />
                  <FooterLayout platforms={platforms || []} />
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

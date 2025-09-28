"use client";

import type { Route } from "./+types/home";
import { getStyledType } from "~/shared/local-storage";
import { Fragment, useEffect, useState } from "react";
import { access } from "~/api/access.api";
import {
  getCertificates,
  getDeveloperPlatform,
  getExperiences,
  getProjects,
  getServices,
  getSkills,
  getWhatIDo,
} from "~/api/portfolio.api";
import { useQuery } from "@tanstack/react-query";

import BannerLayout from "~/components/layout/banner.layout";
import TerminalLayout from "~/components/layout/terminal.layout";
import SkillsLayout from "~/components/layout/skills.layout";
import ProjectsLayout from "~/components/layout/projects.layout";
import ExperiencesLayout from "~/components/layout/experiences.layout";
import ContactLayout from "~/components/layout/contact.layout";
import FooterLayout from "~/components/layout/footer.layout";
import ChatBotLayout from "~/components/layout/chatbot.layout";
import CertificateLayout from "~/components/layout/certificate.layout";

import { storeChat } from "~/api/chat-stream.api";
import WhatIDoLayout from "~/components/layout/what-i-do.layout";
import NavLayout from "~/components/layout/nav.layout";
import MENUS, { type Nav } from "~/shared/menus";
import type {
  Certificate,
  DeveloperPlatform,
  Experience,
  Project,
  Skill,
  WhatIDo,
} from "~/types";
import PortfolioDB from "~/utils/db.util";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kenneth Andales - Portfolio" },
    {
      name: "description",
      content: "Explore my portfolio and see the projects I've worked on.",
    },
  ];
}

interface NavLayout extends Nav {
  Component: React.ReactNode;
}

export default function Home() {
  const [storing, setStoring] = useState<boolean>(false);
  const getStyle = getStyledType();
  const [show, setShow] = useState(false);

  const { data: experiences, isLoading: experienceLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: getExperiences,
  });
  const { data: services, isLoading: serviceLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  const { data: platforms } = useQuery({
    queryKey: ["platforms"],
    queryFn: getDeveloperPlatform,
  });
  const { data: certificates, isFetching: certificateLoading } = useQuery({
    queryKey: ["certificates"],
    queryFn: getCertificates,
  });
  const { data: skills, isLoading: skillLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
  const { data: whatIDos, isLoading: whatIdoLoading } = useQuery({
    queryKey: ["whatIDos"],
    queryFn: getWhatIDo,
  });
  const { data: projects, isFetching: projectLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const loading =
    experienceLoading ||
    serviceLoading ||
    certificateLoading ||
    skillLoading ||
    whatIdoLoading ||
    projectLoading;

  const menus: NavLayout[] = MENUS.map((menu) => {
    let Component: React.ReactNode;

    switch (menu.name.toLocaleLowerCase()) {
      case "skills":
        Component = <SkillsLayout loading={skillLoading || storing} />;
        break;
      case "what i do":
        Component = <WhatIDoLayout loading={whatIdoLoading || storing} />;
        break;
      case "experiences":
        Component = (
          <ExperiencesLayout loading={experienceLoading || storing} />
        );
        break;
      case "portfolio":
        Component = <ProjectsLayout loading={projectLoading || storing} />;
        break;
      case "certificates":
        Component = (
          <CertificateLayout loading={certificateLoading || storing} />
        );
        break;
      case "contact":
        Component = <ContactLayout />;
        break;
      case "my resume":
        Component = <FooterLayout loading={storing} />;
        break;
    }

    return { ...menu, Component };
  });

  const loadDB = async () => {
    try {
      setStoring(true);
      const db = new PortfolioDB();

      await Promise.all([
        db.storeExperiences(experiences as Experience[]),
        db.storeWhatIDos(whatIDos as WhatIDo[]),
        db.storeDevPlatforms(platforms as DeveloperPlatform[]),
        db.storeCertificates(certificates as Certificate[]),
        db.storeProjects(projects as Project[]),
        db.storeSkills(skills as Skill[]),
      ]);
    } catch (error) {
      console.error("Failed to open IndexedDB:", error);
    } finally {
      setStoring(false);
    }
  };

  const loadDBEffect = () => {
    if (loading) return;

    loadDB();
  };

  const initialLoadingEffect = () => {
    storeChat();
    access();

    setTimeout(() => {
      setShow(true);
    }, 400);
  };

  useEffect(initialLoadingEffect, []);
  useEffect(loadDBEffect, [loading]);

  return (
    <>
      {getStyle !== "terminal" ? (
        <>
          {show ? (
            <>
              <NavLayout menus={menus} />
              <BannerLayout />
              {menus.map(({ Component }, index) => (
                <Fragment key={index}>{Component}</Fragment>
              ))}
              {/* <div className="grid justify-center py-6 lg:py-10">
                  <div className="mt-2 flex items-center gap-2 lg:gap-3 lg:mt-4 justify-center">
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-yellow-300 border-[1px] border-border rounded-full ball-loading" />
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-green-300 animate-100 border-[1px] border-border rounded-full ball-loading" />
                    <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-blue-300 delay-200 border-[1px] border-border rounded-full ball-loading" />
                  </div>
                </div> */}
              {/* <SkillsLayout loading={skillLoading} skills={skills || []} />
              <WhatIDoLayout
                loading={whatIdoLoading}
                whatIDo={whatIDos || []}
              />
              <ExperiencesLayout experiences={experiences || []} />
              <ProjectsLayout projects={projects || []} />
              <CertificateLayout certificates={certificates || []} /> */}

              <ChatBotLayout />
            </>
          ) : null}
        </>
      ) : (
        <TerminalLayout
          loading={false}
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

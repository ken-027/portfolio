import type { Route } from "./+types/home";
import { getStyledType } from "~/shared/local-storage";
import { lazy, Suspense, useEffect, useState } from "react";
import InitialPageLoaderLayout from "~/components/layout/initial-page-loader.layout";
import { visitor } from "~/api/visitor.api";

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

  useEffect(() => {
    visitor();

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
                <ServicesLayout />
                <SkillsLayout />
                <ExperiencesLayout />
                <ProjectsLayout />
                <CertificateLayout />
                <ContactLayout />
                <FooterLayout />
                <ChatBotLayout />
              </>
            ) : null}
          </Suspense>
        </>
      ) : (
        <TerminalLayout />
      )}
    </>
  );
}

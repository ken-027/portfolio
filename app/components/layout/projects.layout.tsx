"use client";

import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import BoxUI from "../ui/box.ui";
import { useMemo, useRef, useState } from "react";
import SectionUI from "../ui/section.ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
import useAnimateElement from "~/hooks/useAnimateElement";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import useScreenSize from "~/hooks/useScreenSize";
import type { Category, Project } from "~/types";

type CategoryWithAI = Category | "AI-powered";

export default function ProjectsLayout({
  projects: _projects,
}: {
  projects: Project[];
}) {
  const projects = Object.keys(_projects)
    // @ts-ignore
    .map((name) => ({ ..._projects[name] }))
    .filter(({ thumbnailLink }) => thumbnailLink !== undefined);
  const projectRef = useRef(null);
  useAnimateElement("project", projectRef);

  const { responseSize } = useScreenSize();

  const CATEGORIES: CategoryWithAI[] = [
    "frontend",
    "backend",
    "fullstack",
    "AI-powered",
  ];

  const categories = CATEGORIES;

  const desktopEffect = {
    className: "pb-10!",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
  };

  const _mobileEffect = {
    className: "w-full",
    effect: "cards",
    touchEventsTarget: "container",
    grabCursor: true,
    cardsEffect: { slideShadows: false },
    modules: [EffectCards],
  };

  //   const effect = responseSize.lg ? desktopEffect : mobileEffect;
  const effect = desktopEffect;

  return (
    <SectionUI id="portfolios" ref={projectRef}>
      <HeaderUI
        headerTitle="Portfolio"
        headerSubtitle="Web Applications I've Built and Maintained"
        className="project-animate"
      />
      <PaddingWrapperUI className="min-h-[100vh] text-dark lg:space-y-32">
        {categories.map((category, index) => {
          const projectItemRef = useRef(null);
          useAnimateElement(`project-${index}`, projectItemRef);

          const filterProjects = useMemo(
            () =>
              projects.filter(({ category: itemCategory, aiPowered }) =>
                category === "AI-powered"
                  ? aiPowered
                  : category === itemCategory
              ),
            []
          );

          return (
            <div
              key={index}
              className={`flex flex-col gap-4 p-7 md:gap-7 lg:gap-16 project-${index}-animate`}
              ref={projectItemRef}
            >
              <h3
                className={`text-center text-xl md:text-2xl font-anton dark:text-light/90 lg:text-3xl capitalize project-${index}-animate`}
              >
                {category} applications
              </h3>
              <div className="lg:w-1/2 md:mx-auto md:w-[80%]">
                {/* @ts-ignore */}
                <Swiper {...effect}>
                  {filterProjects
                    .filter(
                      ({ type: projectType }: Project) =>
                        projectType === "personal"
                    )
                    .map(
                      (
                        {
                          description,
                          title,
                          thumbnailLink,
                          technologies,
                          githubRepo,
                          screenshot,
                          liveDemo,
                          dockerLink,
                        },
                        _index
                      ) => (
                        <SwiperSlide key={_index}>
                          <BoxUI
                            title={title}
                            thumbnail={thumbnailLink}
                            description={description}
                            items={technologies}
                            website={liveDemo}
                            repo={githubRepo}
                            screenshot={screenshot}
                            docker={dockerLink}
                          />
                        </SwiperSlide>
                      )
                    )}
                </Swiper>
              </div>
            </div>
          );
        })}
      </PaddingWrapperUI>
    </SectionUI>
  );
}

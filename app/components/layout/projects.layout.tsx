"use client";

import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import { useEffect, useRef, useState } from "react";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import type { Project } from "~/types";
import ProjectCardUI from "../ui/project-card.ui";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioDB from "~/utils/db.util";

type Filter = "all" | "fullstack" | "frontend" | "backend" | "ai-powered";

interface ProjectsLayout {
  loading: boolean;
}

export default function ProjectsLayout({ loading }: ProjectsLayout) {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [dbLoading, setDbLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>("fullstack");
  const [projects, setProjects] = useState<Project[]>([]);
  //   const totalProjects = useMemo(
  //     () =>
  //       Object.keys(allProjects)
  //         // @ts-ignore
  //         .map((name) => ({ ...allProjects[name] }))
  //         .filter(
  //           ({ thumbnailLink, type }) =>
  //             thumbnailLink !== undefined && type === "personal"
  //         ),
  //     [loading, allProjects]
  //   );
  const projectRef = useRef(null);
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  useAnimateElement("projects", projectRef);

  const FilterButton = ({
    filterValue,
    value,
  }: {
    filterValue: Filter;
    value: string;
  }) => (
    <button
      onClick={() => setFilter(filterValue)}
      className={`px-3 py-1 border transition-colors duration-500 flex gap-1 items-center text-sm cursor-pointer rounded-md ${
        filterValue === filter
          ? "bg-secondary text-light border-blue-600 hover:bg-secondary/90"
          : "border-border bg-white text-dark hover:bg-gray-200"
      }`}
    >
      {value}
    </button>
  );

  const getProjects = async () => {
    try {
      setDbLoading(true);

      const db = new PortfolioDB();

      const data = await db.getProjects();

      setAllProjects(
        Object.keys(data)
          // @ts-ignore
          .map((name) => ({ ...data[name] }))
          .filter(
            ({ thumbnailLink, type }) =>
              thumbnailLink !== undefined && type === "personal"
          )
      );
    } catch (err) {
      console.error("projects fetch indexdb", err);
    } finally {
      setDbLoading(false);
    }
  };

  const initialLoad = () => {
    getProjects();

    setProjects(allProjects.filter(({ category }) => category === filter));
  };

  const onFilter = () => {
    if (["fullstack", "frontend", "backend"].includes(filter)) {
      setProjects(allProjects.filter(({ category }) => category === filter));
    } else if (filter === "ai-powered") {
      setProjects(allProjects.filter(({ aiPowered }) => aiPowered));
    } else {
      setProjects(allProjects);
    }
  };

  useEffect(initialLoad, [loading, dbLoading]);
  useEffect(onFilter, [filter]);

  return (
    <SectionUI id="portfolios" ref={projectRef}>
      <HeaderUI
        headerTitle="Portfolio"
        headerSubtitle="Web Applications I've Built and Maintained"
        className="projects-animate"
      />
      <PaddingWrapperUI className="max-w-screen-2xl! space-y-6 lg:space-y-10">
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <FilterButton filterValue="all" value="All" />
          <FilterButton filterValue="fullstack" value="Full Stack" />
          <FilterButton filterValue="frontend" value="Frontend" />
          <FilterButton filterValue="backend" value="Backend" />
          <FilterButton filterValue="ai-powered" value="AI Powered" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            layout
            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {projects.map((project, index) => {
              return <ProjectCardUI key={index} {...project} />;
            })}
          </motion.div>
        </AnimatePresence>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

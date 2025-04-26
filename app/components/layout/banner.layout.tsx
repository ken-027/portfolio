import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import ProjectIcon from "../icons/project.icon";
import getExperience from "~/utils/experience-computation";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import HandIcon from "../icons/hand.icon";
import ScrollDownUI from "../ui/scroll-down.ui";
import LinkUI from "../ui/link.ui";
import GlobeUI from "../ui/globe.ui";

export default function BannerLayout() {
  const { months, years } = getExperience();
  const yearsRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className="text-center text-dark dark:bg-dark pt-10 flex flex-col justify-center gap-6 md:gap-20 lg:gap-0 2xl:gap-10 items-center h-[100vh] lg:ml-10 lg:grid lg:grid-cols-2 max-w-[1600px] mx-auto!"
      id="home"
    >
      <GlobeUI />
      <PaddingWrapperUI
        className="flex flex-col items-center gap-4 lg:gap-6 dark lg:text-left lg:items-start xl:gap-6 min-h-fit!"
        containerClassName="lg:pl-6!"
      >
        <span className="hidden lg:block">
          <HandIcon className="wave inline mr-3 lg:scale-150" />
        </span>
        <p className="flex flex-col">
          <motion.span
            animate={{
              opacity: [0.1, 1],
              y: ["20%", "0%"],
              willChange: "transform",
            }}
            transition={{ type: "tween" }}
            className="text-3xl md:text-4xl lg:text-6xl text-secondary font-anton banner-animate"
          >
            <span className="lg:hidden">
              <HandIcon className="wave inline mr-3" />
            </span>
            I'm Kenneth Andales
          </motion.span>

          <span className="text-xl md:mt-1 md:text-2xl lg:text-3xl font-bold dark:text-light/90 xl:mt-2">
            <TypeAnimation
              sequence={[
                1000,
                "Software Developer",
                1000,
                "Frontend Development",
                1000,
                "Backend Development",
                1000,
                "Fullstack Development",
              ]}
              repeat={Infinity}
              speed={1}
              deletionSpeed={70}
            />
          </span>
        </p>
        <motion.p
          animate={{
            opacity: [0.1, 1],
            y: ["20%", "0%"],
            willChange: "transform",
          }}
          transition={{ type: "tween", delay: 0.2 }}
          className="font-open-sauce dark:text-light/90 banner-animate md:text-lg lg:text-xl"
        >
          With {years > 1 && months > 3 ? "over" : null}{" "}
          <span ref={yearsRef} className="mr-1">
            {years}
          </span>
          year
          {years > 1 ? "s" : null} of experience in web development, I
          specialize in building and maintaining web applications. I’m committed
          to writing clean, efficient code, crafting intuitive user experiences,
          and delivering reliable, results-driven solutions.
        </motion.p>
        <div className="">
          <LinkUI title="My Projects" href="#projects" Icon={<ProjectIcon />} />
          <motion.div
            animate={{
              opacity: [0, 1],
              y: ["-30%", "0%"],
              willChange: "transform",
            }}
            transition={{ type: "spring", delay: 1, easel: "easeInOut" }}
            className="scale-75 lg:hidden"
          >
            <ScrollDownUI className="banner-animate" />
          </motion.div>
        </div>
      </PaddingWrapperUI>

      <motion.div
        animate={{
          opacity: [0, 1],
          y: ["-30%", "0%"],
          willChange: "transform",
        }}
        transition={{ type: "spring", delay: 1, easel: "easeInOut" }}
        className="hidden lg:block col-span-2"
      >
        <ScrollDownUI className="banner-animate" />
      </motion.div>
    </header>
  );
}

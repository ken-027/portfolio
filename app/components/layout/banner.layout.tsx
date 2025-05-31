import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import ProjectIcon from "../icons/project.icon";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { motion, useAnimate, useInView } from "motion/react";
import HandIcon from "../icons/hand.icon";
import ScrollDownUI from "../ui/scroll-down.ui";
import LinkUI from "../ui/link.ui";
import GlobeUI from "../ui/globe.ui";
import { stagger } from "motion";

export default function BannerLayout() {
  const [scope, animate] = useAnimate();

//   const isInView = useInView(scope);

  const initialEffect = () => {
    animate(
      ".banner-animate",
      {
        opacity: [0, 1],
        y: ["30%", "0%"],
      },
      { delay: stagger(0.3), type: "tween" }
    );
  };

  useEffect(initialEffect, []);

  return (
    <header
      ref={scope}
      className="text-center text-dark dark:bg-dark pt-10 flex flex-col justify-center gap-6 md:gap-20 lg:gap-0 2xl:gap-10 items-center min-h-[100vh] lg:ml-10 lg:grid lg:grid-cols-2 max-w-[1600px] mx-auto!"
      id="home"
    >
      {/* <ScrollUpUI show={!isInView} /> */}
      <GlobeUI />
      <PaddingWrapperUI
        className="flex flex-col items-center gap-4 lg:gap-6 dark lg:text-left lg:items-start xl:gap-6 min-h-fit!"
        containerClassName="lg:pl-6!"
      >
        <span className="hidden lg:block">
          <HandIcon className="wave inline mr-3 lg:scale-150" />
        </span>
        <p className="flex flex-col">
          <span className="text-3xl md:text-4xl lg:text-6xl text-secondary font-anton banner-animate">
            <span className="lg:hidden">
              <HandIcon className="wave inline mr-3" />
            </span>
            I'm Kenneth Andales
          </span>

          <span className="text-xl md:mt-1 md:text-2xl lg:text-3xl font-bold dark:text-light/90 xl:mt-2">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Handling Frontend Development",
                2000,
                "Handling Backend Development",
                2000,
                "Handling Fullstack Development",
              ]}
              repeat={Infinity}
              speed={1}
              deletionSpeed={70}
            />
          </span>
        </p>
        <p className="font-open-sauce dark:text-light/90 banner-animate md:text-lg lg:text-xl">
          With years of experience in web development, I specialize in
          designing, building, and maintaining high-performance web
          applications. I focus on writing clean, efficient code, creating
          intuitive user experiences, and delivering reliable, results-oriented
          solutions that drive real impact.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <LinkUI
            title="View Projects"
            href="#projects"
            Icon={<ProjectIcon />}
            className="banner-animate"
          />
          <div className="bounce">
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
        </div>
      </PaddingWrapperUI>

      {/* <ScrollUpUI show={!isInView} /> */}

      <div className="bounce hidden lg:block col-span-2">
        <div>
          <ScrollDownUI className="banner-animate" />
        </div>
      </div>
    </header>
  );
}

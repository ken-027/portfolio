import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import ProjectIcon from "../icons/project.icon";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import HandIcon from "../icons/hand.icon";
import ScrollDownUI from "../ui/scroll-down.ui";
import LinkUI from "../ui/link.ui";
import { stagger } from "motion";
import useDarkMode from "~/hooks/useDarkMode";

export default function BannerLayout() {
  const [scope, animate] = useAnimate();
  const darkMode = useDarkMode();

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
      className="text-center text-dark dark:bg-dark pt-10 flex flex-col justify-center gap-2 lg:gap-0 2xl:gap-10 items-center min-h-[100vh] lg:ml-10 lg:grid lg:grid-cols-2 max-w-[1600px] mx-auto!"
      id="home"
    >
      {/* <ScrollUpUI show={!isInView} /> */}
      <div className="w-fit rounded-2xl overflow-hidden bg-light dark:bg-transparent lg:ml-auto banner-animate dark:overflow-visible dark:mb-10">
        <img
          className="lg:h-[450px] md:h-[350px] h-[250px] translate-y-5"
          src={darkMode ? "/section-illustration/banner.svg" : "/images/banner.gif"}
        />
      </div>

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

          <span className="text-xl md:mt-1 md:text-2xl lg:text-3xl font-bold dark:text-dark-text xl:mt-2">
            <TypeAnimation
              sequence={[
                "Software Developer",
                1500,
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "Fullstack Developer",
                1500,
                "AI Engineer",
                1500,
              ]}
              repeat={Infinity}
              speed={1}
              deletionSpeed={70}
            />
          </span>
        </p>
        <p className="font-open-sauce dark:text-dark-text banner-animate md:text-lg lg:text-xl">
          Over 3 years of experience delivering full-stack web systems in
          cooperative banking, e-commerce, and government projects. Known for
          reliable delivery, clean code, and collaborative teamwork. I help
          teams ship faster while ensuring performance, scalability, and user
          satisfaction.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-3">
          <LinkUI
            title="View Portfolio"
            href="#portfolios"
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
              transition={{ type: "spring", delay: 1, ease: "easeInOut" }}
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

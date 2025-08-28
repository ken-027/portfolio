import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import { getDateFormat, getTotalByFormat } from "~/utils/date.utils";
import CheckIcon from "../icons/check.icon";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";
import useScreenSize from "~/hooks/useScreenSize";
import { Parallax } from "react-scroll-parallax";
import type { Experience } from "~/types";
import CompanyProjectCardUI from "../ui/comapny-project-card.ui";
import { AnimatePresence, motion } from "motion/react";

export default function ExperiencesLayout({
  experiences,
}: {
  experiences: Experience[];
}) {
  const experienceRef = useRef(null);
  useAnimateElement("experience", experienceRef);
  const { responseSize } = useScreenSize();

  return (
    <SectionUI ref={experienceRef} id="experiences" className="lg:mt-32">
      <Parallax speed={responseSize.lg ? -20 : 0}>
        <HeaderUI
          headerTitle="Experiences"
          headerSubtitle="Where I’ve Gained Experience"
          className="experience-animate lg:mb-[40vh]!"
        />
      </Parallax>

      <PaddingWrapperUI className="min-h-[100vh] text-dark">
        <div className="flex flex-col gap-16 lg:gap-[100vh]">
          {experiences.map(({ ...props }, index) => (
            <ExperienceItem {...props} index={index} key={index} />
          ))}

          <div></div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

const ExperienceItem = ({
  companyLogo,
  company,
  title,
  startDate,
  endDate,
  location,
  descriptions,
  projects,
  index,
  companyLink,
}: Experience & { index: number }) => {
  const experienceItemRef = useRef(null);
  const even = index % 2 === 0;
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  useAnimateElement(`experience-${index}`, experienceItemRef);
  const { responseSize } = useScreenSize();

  return (
    <div
      key={index}
      ref={experienceItemRef}
      className={`xl:flex xl:gap-10 xl:grid-cols-2 justify-end`}
    >
      <div className={`lg:flex-1 ${index % 2 === 0 ? "" : "order-2"}`}>
        <Parallax speed={responseSize.xl ? -50 : 0} className="lg:pt-40">
          <div
            className={`flex gap-3 flex-col items-center justify-center ${
              even ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <div
              className={`border-1 overflow-hidden transition-shadow-b-colors dark:hover:shadow-light/30 dark:hover:border-border duration-500 hover:shadow-dark/50 hover:border-dark hover:shadow-2xl border-border p-2 bg-light h-[100px] lg:h-[120px] dark:border-border-dark object-center rounded-md flex justify-center items-center object-contain aspect-3/2  experience-${index}-animate`}
            >
              <img
                className={`font-open-sauce h-full w-full max-w-full max-h-full`}
                src={
                  companyLogo ||
                  "/section-illustration/experience-thumbnail.svg"
                }
                alt={company.toLowerCase()}
                width={100}
                height={50}
              />
            </div>
            <div
              className={`lg:space-y-1 text-center ${
                even ? "lg:text-right" : "lg:text-left"
              }`}
            >
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-anton dark:text-dark-text experience-${index}-animate`}
              >
                {company}
              </h3>
              {companyLink ? (
                <a
                  target="_blank"
                  className={`text-lg lg:text-2xl text-secondary duration-500 hover:text-dark experience-${index}-animate ${
                    even ? "lg:text-right" : ""
                  }`}
                  href={companyLink}
                >
                  {companyLink.replaceAll(/(https*:\/\/)|(www.)/g, "")}
                </a>
              ) : null}
            </div>
          </div>
          <div className="dark:border-border-dark mx-4 border-border lg:mx-0">
            <div
              className={`flex flex-col font-open-sauce dark:text-dark-text md:text-lg md:text-center ${
                even ? "lg:text-right" : " lg:text-left"
              }`}
            >
              <p className={`text-secondary experience-${index}-animate`}>
                <b>{title}</b>
              </p>
              <small
                className={`text-xs md:text-sm experience-${index}-animate`}
              >
                <i>
                  {getDateFormat(startDate)} -{" "}
                  {endDate === "Present" ? "Present" : getDateFormat(endDate)}
                </i>
                <b className="ml-1">{`(${getTotalByFormat(
                  startDate,
                  endDate
                )})`}</b>
              </small>
              <small className={`experience-${index}-animate`}>
                {location}
              </small>
            </div>
            <ul className={`mt-5 md:mt-10 font-open-sauce space-y-1`}>
              {descriptions.map((description, _index) => {
                return (
                  <li
                    className={`flex gap-2 lg:gap-3 experience-${index}-animate flex-row-reverse ${
                      even
                        ? "lg:justify-end lg:flex-row"
                        : "lg:flex-row-reverse"
                    }`}
                    key={_index}
                  >
                    <small
                      className={`text-sm md:text-base lg:text-lg dark:text-dark-text ${
                        even ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {description}
                    </small>
                    <span className="mt-1 lg:mt-2.5">
                      <CheckIcon className="text-secondary lg:scale-150" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Parallax>
      </div>

      {projects?.length ? (
        responseSize.md ? (
          <Parallax
            speed={responseSize.xl ? 100 : 0}
            className="mt-5 lg:mt-10 xl:mt-0 lg:flex-1 hidden md:block"
          >
            <p
              className={`font-open-sauce md:text-lg dark:text-dark-text lg:text-xl text-center font-bold ${
                !even ? "lg:text-right" : "lg:text-left"
              }`}
            >
              Projects I Worked On
            </p>
            <div className={`mt-4 lg:mt-10 space-y-5`}>
              <AnimatePresence mode="wait">
                <motion.div
                  layout
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  className="w-full md:grid md:gap-5 justify-center lg:gap-14"
                >
                  {projects?.map((project, _index) => (
                    <CompanyProjectCardUI
                      className={`w-[80%] md:w-[60%] lg:w-[80%] ${
                        _index % 2 == (even ? 0 : 1) ? "" : "md:ml-auto"
                      }`}
                      {...project}
                      key={_index}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </Parallax>
        ) : (
          <div className="mt-5 lg:mt-0 lg:flex-1 lg:hidden">
            <p className="font-open-sauce md:text-lg text-center">
              Projects I Worked On
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                layout
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className={`mt-4 space-y-5 experience-${index}-animate`}
              >
                {projects?.map((project, _index) => (
                  <CompanyProjectCardUI {...project} key={_index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )
      ) : (
        <div>
          <img
            className="mx-auto lg:mr-auto"
            src="/section-illustration/project.svg"
          />
        </div>
      )}
    </div>
  );
};

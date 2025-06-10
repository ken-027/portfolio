import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import { getDateFormat, getTotalByFormat } from "~/utils/date.utils";
import CheckIcon from "../icons/check.icon";
import SectionUI from "../ui/section.ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useMemo, useRef } from "react";
import useScreenSize from "~/hooks/useScreenSize";
import { Parallax } from "react-scroll-parallax";
import type { Experience } from "~/types";
import { Link } from "react-router";
import ViewIcon from "../icons/view.icon";
import DownloadImageIcon from "../icons/download-image.icon";
import RepoIcon from "../icons/repo.icon";

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
  useAnimateElement(`experience-${index}`, experienceItemRef);
  const { responseSize } = useScreenSize();

  return (
    <div
      key={index}
      ref={experienceItemRef}
      className={`xl:flex xl:gap-10 xl:grid-cols-2`}
    >
      <div className={`lg:flex-1 ${index % 2 === 0 ? "" : "order-2"}`}>
        <Parallax speed={responseSize.xl ? -50 : 0} className="lg:pt-40">
          <div className="flex gap-3 md:gap-6 flex-col items-center justify-center lg:items-start">
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
            <div className="lg:space-y-1 text-center lg:text-left">
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-anton dark:text-light/90 experience-${index}-animate`}
              >
                {company}
              </h3>
              {companyLink ? (
                <a
                  target="_blank"
                  className="text-lg lg:text-2xl text-secondary duration-500 hover:text-dark"
                  href={companyLink}
                >
                  {companyLink.replaceAll(/(https*:\/\/)|(www.)/g, "")}
                </a>
              ) : null}
            </div>
          </div>
          <div className="dark:border-border-dark mx-4 border-border pt-5 lg:mx-0">
            <div className="flex flex-col font-open-sauce dark:text-light/90 md:text-lg md:text-center lg:text-left">
              <p className={`text-secondary experience-${index}-animate`}>
                <b>{title}</b>
              </p>
              <small
                className={`text-xs md:text-sm experience-${index}-animate`}
              >
                <i>
                  {getDateFormat(startDate)} - {getDateFormat(endDate)}
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
            <ul className={`mt-5 md:mt-10 font-open-sauce space-y-3`}>
              {descriptions.map((description, _index) => {
                return (
                  <li
                    className={`flex gap-2 experience-${index}-animate`}
                    key={_index}
                  >
                    <span className="mt-1">
                      <CheckIcon className="text-secondary" />
                    </span>
                    <small className="text-sm md:text-base lg:text-lg dark:text-light/90">
                      {description}
                    </small>
                  </li>
                );
              })}
            </ul>
          </div>
        </Parallax>
      </div>

      {projects ? (
        responseSize.md ? (
          <Parallax
            speed={responseSize.xl ? 100 : 0}
            className="mt-5 lg:mt-10 xl:mt-0 lg:flex-1 hidden md:block"
          >
            <p className="font-open-sauce md:text-lg dark:text-light/90 lg:text-xl font-bold">
              Projects I Worked On
            </p>
            <div className={`mt-4 lg:mt-10 space-y-5`}>
              <div className="w-full md:grid md:grid-cols-2 md:gap-5 justify-center lg:gap-10 xl:block">
                {projects?.map(
                  (
                    {
                      thumbnailLink,
                      title,
                      technologies,
                      description,
                      liveDemo,
                      screenshot,
                      githubRepo,
                      category,
                      aiPowered,
                    },
                    _index
                  ) => (
                    <div
                      key={_index}
                      className={`xl:pb-10 experience-${index}-animate`}
                    >
                      <div
                        className={`border-1 border-border transition-shadow-b-colors hover:shadow-2xl hover:border-dark dark:hover:shadow-light/30 dark:hover:border-border hover:shadow-dark/50 hover: transition-shadow xl:w-[80%] md:w-[100%] dark:border-border-dark rounded-sm overflow-hidden ${
                          _index % 2 === 0 ? "" : "ml-auto"
                        }`}
                      >
                        <img
                          className="w-full border-b border-border overflow-hidden bg-light dark:border-border-dark h-[200px] lg:h-[250px] md:h-[180px] bg-cover object-center aspect-ratio[16/9]"
                          src={
                            thumbnailLink || "/section-illustration/project.svg"
                          }
                          alt={title.toLowerCase()}
                          width={182}
                          height={99}
                        />
                        <div className="p-3 dark:text-light/90 font-anton lg:px-4 lg:py-5 lg:space-y-4">
                          <div className="">
                            <p className="lg:text-2xl">{title}</p>
                            <p className="font-open-sauce">{description}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 md:gap-2 mt-2 lg:gap-3">
                            {technologies.map(({ icon, name }, __index) => (
                              <div
                                key={__index}
                                title={name}
                                className={`border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark h-7 w-7 md:h-10 md:w-10 rounded-md flex justify-center items-center experience-${index}-animate`}
                              >
                                <img
                                  alt={name}
                                  src={icon}
                                  className="scale-75 md:scale-100"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-1.5 lg:gap-2 my-2 lg:my-3 font-open-sauce">
                            <div className="bg-dark text-light dark:bg-light dark:text-dark lowercase font-bold px-3 py-0.5 rounded-md">
                              {category}
                            </div>
                            {aiPowered ? (
                              <div className="bg-red-800 text-light lowercase font-bold px-3 py-0.5 rounded-md">
                                AI Powered
                              </div>
                            ) : null}
                          </div>
                          {liveDemo || githubRepo || screenshot ? (
                            <div className="flex flex-wrap gap-5 font-anton dark:text-light/90 md:text-xl lg:px-2">
                              {liveDemo ? (
                                <Link
                                  target={"_blank"}
                                  to={liveDemo}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <ViewIcon className="scale-125 lg:scale-200" />
                                  Demo
                                </Link>
                              ) : null}
                              {githubRepo ? (
                                <Link
                                  target="_blank"
                                  to={githubRepo}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <RepoIcon className="scale-125 lg:scale-200" />{" "}
                                  Code
                                </Link>
                              ) : null}
                              {screenshot ? (
                                <Link
                                  target="_blank"
                                  to={screenshot}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <DownloadImageIcon className="scale-125 lg:scale-200" />
                                  Screenshots
                                </Link>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Parallax>
        ) : (
          <div className="mt-5 lg:mt-0 lg:flex-1 lg:hidden">
            <p className="font-open-sauce md:text-lg">Projects I Worked On</p>
            <div className={`mt-4 space-y-5 experience-${index}-animate`}>
              <Swiper
                modules={[Navigation, Pagination]}
                className="w-full"
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={"auto"}
                navigation
                pagination={{ clickable: true }}
              >
                {projects?.map(
                  (
                    {
                      thumbnailLink,
                      title,
                      technologies,
                      description,
                      liveDemo,
                      githubRepo,
                      screenshot,
                      aiPowered,
                      category,
                    },
                    _index
                  ) => (
                    <SwiperSlide key={_index} className="pb-10">
                      <div
                        className={`border-1 border-border dark:border-border-dark rounded-sm overflow-hidden`}
                      >
                        <img
                          className="w-full border-b border-border overflow-hidden bg-light dark:border-border-dark h-[200px] md:h-[350px] bg-cover object-center aspect-ratio[16/9]"
                          src={
                            thumbnailLink || "/section-illustration/project.svg"
                          }
                          alt={title.toLowerCase()}
                          width={182}
                          height={99}
                        />
                        <div className="p-3 dark:text-light/90 font-anton">
                          <div className="">
                            <p className="lg:text-xl">{title}</p>
                            <p className="font-open-sauce">{description}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2">
                            {technologies.map(({ icon, name }, __index) => (
                              <div
                                key={__index}
                                title={name}
                                className={`border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark h-7 w-7 md:h-10 md:w-10 rounded-md flex justify-center items-center experience-${index}-animate`}
                              >
                                <img
                                  alt={name}
                                  src={icon}
                                  className="scale-75 md:scale-100"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-1.5 my-2 font-open-sauce text-sm">
                            <div className="bg-dark text-light dark:bg-light dark:text-dark lowercase font-bold px-3 py-0.5 rounded-md">
                              {category}
                            </div>
                            {aiPowered ? (
                              <div className="bg-red-800 text-light lowercase font-bold px-3 py-0.5 rounded-md">
                                AI Powered
                              </div>
                            ) : null}
                          </div>
                          {liveDemo || githubRepo || screenshot ? (
                            <div className="flex flex-wrap gap-5 mt-2 font-anton dark:text-light/90 md:text-xl lg:px-2">
                              {liveDemo ? (
                                <Link
                                  target={"_blank"}
                                  to={liveDemo}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <ViewIcon className="scale-125 lg:scale-200" />
                                  Demo
                                </Link>
                              ) : null}
                              {githubRepo ? (
                                <Link
                                  target="_blank"
                                  to={githubRepo}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <RepoIcon className="scale-125 lg:scale-200" />{" "}
                                  Code
                                </Link>
                              ) : null}
                              {screenshot ? (
                                <Link
                                  target="_blank"
                                  to={screenshot}
                                  className="flex items-center gap-2 lg:gap-4"
                                >
                                  <DownloadImageIcon className="scale-125 lg:scale-200" />
                                  Screenshots
                                </Link>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};

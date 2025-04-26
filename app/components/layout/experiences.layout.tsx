import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import EXPERIENCES from "~/shared/experiences";
import { getDateFormat, getTotalByFormat } from "~/utils/date.utils";
import CheckIcon from "../icons/check.icon";
import SectionUI from "../ui/section.ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";
import useScreenSize from "~/hooks/useScreenSize";

export default function ExperiencesLayout() {
  const experienceRef = useRef(null);
  useAnimateElement("experience", experienceRef);
  const { responseSize } = useScreenSize();

  return (
    <SectionUI ref={experienceRef} id="experiences">
      <HeaderUI
        headerTitle="Experiences"
        headerSubtitle="Where I’ve Gained Experience"
        className="experience-animate"
      />
      <PaddingWrapperUI className="min-h-[100vh] text-dark">
        <div className="space-y-[15vh]">
          {EXPERIENCES.map(
            (
              {
                companyLogo,
                company,
                title,
                startDate,
                endDate,
                location,
                descriptions,
                projects,
              },
              index
            ) => {
              const experienceItemRef = useRef(null);
              useAnimateElement(`experience-${index}`, experienceItemRef);

              return (
                <div
                  key={index}
                  ref={experienceItemRef}
                  className={`experience-${index}-animate xl:flex xl:gap-10 xl:grid-cols-2`}
                >
                  <div
                    className={`lg:flex-1 ${index % 2 === 0 ? "" : "order-2"}`}
                  >
                    <div className="flex gap-3 md:gap-6 flex-col items-center justify-center lg:items-start">
                      <div className="border-1 overflow-hidden border-border p-5 experience-animate bg-light dark:border-border-dark object-center rounded-md w-[120px] min-h-[80px] md:w-[200px] md:min-h-[100px] flex justify-center items-center">
                        <img
                          className={`font-open-sauce experience-${index}-animate`}
                          src={
                            companyLogo ||
                            "/section-illustration/experience-thumbnail.svg"
                          }
                          alt={company.toLowerCase()}
                          width={100}
                          height={50}
                        />
                      </div>
                      <h3
                        className={`text-xl md:text-2xl lg:text-3xl font-anton dark:text-light/90 experience-${index}-animate`}
                      >
                        {company}
                      </h3>
                    </div>
                    <div className="dark:border-border-dark mx-4 border-border pt-5 lg:mx-0">
                      <div className="flex flex-col font-open-sauce dark:text-light/90 transition-all md:text-lg md:text-center lg:text-left">
                        <p className="text-secondary">
                          <b>{title}</b>
                        </p>
                        <small className="text-xs md:text-sm">
                          <i>
                            {getDateFormat(startDate)} -{" "}
                            {getDateFormat(endDate)}
                          </i>
                          <b className="ml-1">{`(${getTotalByFormat(
                            startDate,
                            endDate
                          )})`}</b>
                        </small>
                        <small>{location}</small>
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
                              <small className="text-sm md:text-base lg:text-lg dark:text-light/90 transition-all">
                                {description}
                              </small>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  {responseSize.md ? (
                    <div className="mt-5 lg:mt-10 xl:mt-0 lg:flex-1 hidden md:block">
                      <p className="font-open-sauce md:text-lg lg:text-xl font-bold">
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
                              },
                              _index
                            ) => (
                              <div
                                key={_index}
                                className={`xl:pb-10 experience-${index}-animate`}
                              >
                                <div
                                  className={`border-1 border-border xl:w-[80%] md:w-[100%] dark:border-border-dark rounded-sm overflow-hidden ${
                                    _index % 2 === 0 ? "" : "ml-auto"
                                  }`}
                                >
                                  <img
                                    className="w-full border-b border-border overflow-hidden bg-light dark:border-border-dark h-[200px] lg:h-[250px] md:h-[180px] bg-cover object-center aspect-ratio[16/9]"
                                    src={
                                      thumbnailLink ||
                                      "/section-illustration/project.svg"
                                    }
                                    alt={title.toLowerCase()}
                                    width={182}
                                    height={99}
                                  />
                                  <div className="p-3 dark:text-light/90 transition-all font-anton lg:px-4 lg:py-5 lg:space-y-4">
                                    <div className="">
                                      <p className="lg:text-2xl">{title}</p>
                                      <p className="font-open-sauce">
                                        {description}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 md:gap-2 mt-2 lg:gap-3">
                                      {technologies.map(
                                        ({ Icon, name }, __index) => (
                                          <div
                                            key={__index}
                                            title={name}
                                            className={`border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark h-7 w-7 md:h-10 md:w-10 rounded-md flex justify-center items-center experience-${index}-animate`}
                                          >
                                            <Icon className="scale-75 lg:scale-100" />
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 lg:mt-0 lg:flex-1 lg:hidden">
                      <p className="font-open-sauce md:text-lg">
                        Projects I Worked On
                      </p>
                      <div
                        className={`mt-4 space-y-5 experience-${index}-animate`}
                      >
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
                                      thumbnailLink ||
                                      "/section-illustration/project.svg"
                                    }
                                    alt={title.toLowerCase()}
                                    width={182}
                                    height={99}
                                  />
                                  <div className="p-3 dark:text-light/90 transition-all font-anton">
                                    <div className="">
                                      <p className="lg:text-xl">{title}</p>
                                      <p className="font-open-sauce">
                                        {description}
                                      </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                                      {technologies.map(
                                        ({ Icon, name }, __index) => (
                                          <div
                                            key={__index}
                                            title={name}
                                            className={`border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark h-7 w-7 md:h-10 md:w-10 rounded-md flex justify-center items-center experience-${index}-animate`}
                                          >
                                            <Icon className="scale-75 md:scale-100" />
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            )
                          )}
                        </Swiper>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )}

          <div></div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

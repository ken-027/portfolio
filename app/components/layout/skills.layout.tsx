import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";
import { useEffect, useRef, useState } from "react";
import useAnimateElement from "~/hooks/useAnimateElement";
import useScreenSize from "~/hooks/useScreenSize";
import type { ItemSkill, Proficiency, Skill } from "~/types";
import GlobeUI from "../ui/globe.ui";

export default function SkillsLayout({ skills }: { skills: Skill[] }) {
  const skillRef = useRef(null);

  useAnimateElement("skill", skillRef, 0.05);

  return (
    <SectionUI ref={skillRef} id="skills">
      <HeaderUI
        headerTitle="Skills"
        headerSubtitle="Tools and Technologies I Work With"
        className="skill-animate"
      />
      <PaddingWrapperUI className="text-dark">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 skill-animate">
          <div className="w-full mx-auto grid place-items-center lg:pr-36 max-w-[800px]">
            {/* <ImageUI
              src="/section-illustration/skills.svg"
              alt="skill illustration"
              width={500}
              height={336}
              wrapperClassName="skill-animate"
            /> */}
            <GlobeUI />
          </div>
          <div className="flex flex-col items-center justify-center md:grid gap-10 md:gap-16 lg:items-start">
            {skills.map((skill, index) => (
              <SkillWrapper
                key={index}
                {...skill}
              />
            ))}
          </div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

const SkillWrapper = ({
  items,
  name,
}: Skill) => {
  return (
    <div
      className={`flex flex-col gap-2 space-y-2 md:space-y-6 items-center w-full`}
    >
      <h3
        className={`font-anton text-lg md:text-xl dark:text-light/90 skill-animate lg:text-2xl`}
      >
        {name}
      </h3>
      <div
        className={` grid grid-cols-3 gap-4 md:gap-8 md:justify-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:grid w-full`}
      >
        {items.map((item, _index) => (
          <SkillComponent key={_index} index={_index} {...item} />
        ))}
      </div>
    </div>
  );
};

const SkillComponent = ({
  icon,
  proficiency,
  index,
  name,
  level,
}: ItemSkill & { index: number }) => {
  const [mobileHover, setMobileHover] = useState(false);
  const { responseSize, width } = useScreenSize();

  const className = {
    "3": "h-[30%]",
    "4": "h-[40%]",
    "5": "h-[50%]",
    "6": "h-[60%]",
    "7": "h-[70%]",
    "8": "h-[80%]",
    "9": "h-[90%]",
    "10": "h-[100%]",
  };

  const proficiencyColor: Record<Proficiency, string> = {
    expert: "text-green-500",
    intermediate: "text-blue-500",
    beginner: "text-yellow-500",
  };

  const hoverCardColor: Record<Proficiency, string> = {
    expert:
      "hover:shadow-green-300/40 hover:border-green-500! hover:border-2 hover:shadow-2xl",
    intermediate:
      "hover:shadow-blue-300/40 hover:border-blue-500! hover:border-2 hover:shadow-2xl",
    beginner:
      "hover:shadow-yellow-300/40 hover:border-yellow-500! hover:border-2 hover:shadow-2xl",
  };

  const mobileCardColor: Record<Proficiency, string> = {
    expert: "shadow-green-300/40 border-green-500! border-2 shadow-2xl",
    intermediate: "shadow-blue-300/40 border-blue-500! border-2 shadow-2xl",
    beginner: "shadow-yellow-300/40 border-yellow-500! border-2 shadow-2xl",
  };

  const toggleTooltip = () => {
    if (responseSize.lg) return;

    setMobileHover((prevState) => !prevState);
  };

  const offTooltip = () => {
    setMobileHover(false);
  };

  useEffect(() => {
    setMobileHover(false);
  }, [width]);

  return (
    <div
      onTouchStart={toggleTooltip}
      onTouchEnd={offTooltip}
      className={`font-open-sauce group text-sm md:text-base xl:text-lg dark:text-light/90 flex  items-center gap-2 skill-animate border rounded-md border-border dark:border-dark hover:border-transparent duration-300 transition-colors ${
        mobileHover ? "border-transparent! dark:border-transparent!" : ""
      }`}
    >
      <div
        className={`border-2 border-transparent w-full grid place-items-center transition-shadow-b-colors p-3 pt-2 rounded-md space-y-2 bg-light ${
          hoverCardColor[proficiency]
        } ${mobileHover ? mobileCardColor[proficiency] : ""}`}
      >
        <div className="border-1  border-border relative z-0 h-9 w-9 min-w-9 min-h-9 lg:h-11 lg:w-11 rounded-md grid place-items-center text-center">
          <div className="absolute overflow-hidden inset-0">
            <span
              className={`bg-cyan-400/30! inset-x-0 border-t-[1px] border-cyan-500 ${
                //@ts-ignore
                className[`${level}`]
              } bottom-0 block absolute ${
                index % 2 === 0 ? "sea-wave" : "sea-wave-odd"
              }`}
            />
          </div>
          <img
            src={icon}
            alt={name}
            className="scale-90 lg:scale-100"
            onError={(e) => {
              console.error("image fetch error:", icon);
              // @ts-ignore
              e.target.src = icon;
            }}
          />
        </div>
        <p className="font-anton text-dark">{name}</p>
        <small className={`${proficiencyColor[proficiency]}`}>
          {proficiency}
        </small>
      </div>
    </div>
  );
};

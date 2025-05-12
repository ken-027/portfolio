import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import { type ItemSkill, type Skill } from "~/shared/skills";
import SectionUI from "../ui/section.ui";
import ImageUI from "../ui/image.ui";
import { useEffect, useRef, useState } from "react";
import useAnimateElement from "~/hooks/useAnimateElement";
import useScreenSize from "~/hooks/useScreenSize";

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
          <div className="xl:self-start w-1/2 max-w-[400px] mx-auto">
            <ImageUI
              src="/section-illustration/skills.svg"
              alt="skill illustration"
              width={500}
              height={336}
              wrapperClassName="skill-animate"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:grid gap-10 md:gap-16 lg:grid lg:grid-cols-2 lg:items-start">
            {skills.map((skill, index) => (
              <SkillWrapper
                key={index}
                lastItem={index === skills.length - 1}
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
  lastItem,
}: Skill & { lastItem: boolean }) => {
  return (
    <div
      className={`flex flex-col gap-2 space-y-2 md:space-y-6 items-center lg:items-start ${
        lastItem ? "lg:col-span-2" : ""
      }`}
    >
      <h3
        className={`font-anton text-lg md:text-xl dark:text-light/90 skill-animate lg:text-2xl`}
      >
        {name}
      </h3>
      <div
        className={` grid grid-cols-3 gap-3 md:flex md:gap-8 md:flex-wrap md:justify-center lg:grid-cols-2 xl:grid-cols-3 lg:grid w-full ${
          lastItem ? "xl:grid-cols-6 lg:grid-cols-4" : ""
        }`}
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
}: ItemSkill & { index: number }) => {
  const [showTooltip, setShowTooltip] = useState(false);
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

  const widthClassName = {
    "3": "w-[30%]",
    "4": "w-[40%]",
    "5": "w-[50%]",
    "6": "w-[60%]",
    "7": "w-[70%]",
    "8": "w-[80%]",
    "9": "w-[90%]",
    "10": "w-[100%]",
  };
  const toggleTooltip = () => {
    if (responseSize.lg) return;

    setShowTooltip((prevState) => !prevState);
  };

  const offTooltip = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    setShowTooltip(false);
  }, [width]);

  return (
    <div
      onClick={toggleTooltip}
      onMouseLeave={offTooltip}
      className="font-open-sauce group text-sm md:text-base xl:text-lg dark:text-light/90 flex  items-center gap-2 skill-animate"
    >
      <div className="border-1  border-border relative z-0  dark:bg-light dark:border-0 dark:border-border-dark h-9 w-9 min-w-9 min-h-9 lg:h-11 lg:w-11 rounded-md grid place-items-center">
        <div className="absolute overflow-hidden inset-0">
          <span
            className={`bg-cyan-400/30! inset-x-0 border-t-[1px] border-cyan-500 ${
              //@ts-ignore
              className[`${proficiency}`]
            } bottom-0 block absolute ${
              index % 2 === 0 ? "sea-wave" : "sea-wave-odd"
            }`}
          />
        </div>
        <div
          className={`group-hover:opacity-100 opacity-0 z-50 lg:translate-y-[40%] transition-transform group-hover:translate-y-0 absolute left-[110%] bg-light border-1 border-border rounded-md py-1 text-xs px-3 space-y-1 ${
            showTooltip ? "opacity-100 -translate-x-10" : ""
          }`}
        >
          <div className="flex gap-2 bg-light text-dark">
            Proficiency:
            <span className="font-bold">{proficiency}</span>
          </div>
          <div
            className={`h-2 border-[1px] border-cyan-500 bg-cyan-400 rounded-full ${
              // @ts-ignore
              widthClassName[`${proficiency}`]
            }`}
          />
        </div>
        {/* <Icon className="scale-90 lg:scale-100" /> */}
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
      {name}
    </div>
  );
};

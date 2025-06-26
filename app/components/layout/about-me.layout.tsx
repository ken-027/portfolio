import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";

export default function AboutMeLayout({ aboutMe }: { aboutMe: string[] }) {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const aboutMeItemRef = useRef<HTMLDivElement>(null);
  useAnimateElement(`about-me`, aboutMeRef);

  return (
    <SectionUI id="about-me" ref={aboutMeRef} className="lg:mt-30 mt-20">
      <HeaderUI
        headerTitle="About me"
        headerSubtitle="From Code to Impact: My Journey as a Full-Stack Developer"
        className=" about-me-animate"
      />
      <PaddingWrapperUI className="text-dark px-2 min-h-[70vh]!">
        <div
          className="flex flex-col gap-5 xl:gap-y-10 xl:gap-x-10 max-w-[1000px] mx-auto"
          ref={aboutMeItemRef}
        >
          {aboutMe.map((info, index) => (
            <p className="about-me-animate xl:text-lg text-justify" key={index}>
              {info}
            </p>
          ))}
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

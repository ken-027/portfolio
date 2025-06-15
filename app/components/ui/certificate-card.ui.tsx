import moment from "moment";
// @ts-expect-error @ts-ignore
import { decode } from "he";
import type { Certificate } from "~/types";
import SkillsIcon from "../icons/skills.icon";
import ViewIcon from "../icons/view.icon";
import RibbonIcon from "../icons/ribbon.icon";
import CourseIcon from "../icons/course.icon";
import { useEffect, useState } from "react";
import useScreenSize from "~/hooks/useScreenSize";

export interface CertificateCardUIProps extends Certificate {
  className?: string;
}

export default function CertificateCardUI({
  name,
  platform,
  dateCompleted,
  platformLogo,
  className,
  certificateLink,
  courseLink,
  certificateImage,
  status,
  skills,
  provider,
}: CertificateCardUIProps) {
  const shadowColor = {
    ongoing:
      "hover:shadow-blue-600/30! hover:shadow-2xl hover:border-blue-600!",
    plan: "hover:shadow-yellow-600/30! hover:shadow-2xl hover:border-yellow-600!",
    completed:
      "hover:shadow-green-600/30! hover:shadow-2xl hover:border-green-600!",
  };

  const onMobileColor = {
    ongoing: "shadow-blue-600/30! shadow-2xl border-blue-600!",
    plan: "shadow-yellow-600/30! shadow-2xl border-yellow-600!",
    completed: "shadow-green-600/30! shadow-2xl border-green-600!",
  };

  const [mobileHover, setMobileHover] = useState(false);
  const { responseSize, width } = useScreenSize();

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
      className={`border-[1px] dark:text-light/90 h-fit  py-4 lg:pt-6 min-h-[450px] duration-500 transition-shadow-b-colors bg-light dark:bg-dark border-border dark:border-border-dark rounded-md ${
        className || ""
      }
        ${shadowColor[status]}
         ${mobileHover ? onMobileColor[status].replaceAll("hover:", "") : ""}
              `}
    >
      <div className="flex justify-between">
        <div className="mb-4 px-4 flex-3/4">
          <h4 className="font-anton text-xl lg:text-2xl">{name}</h4>
          <p className="block mt-1 text-secondary dark:text-blue-400">
            {provider}
          </p>
        </div>
        <div className="md:w-12 md:h-12 w-11 h-11 mb-4 mt-1 mr-2 rounded-md overflow-hidden border-border border dark:border-border-dark">
          <img src={platformLogo} alt={platform} className="w-full h-full" />
        </div>
      </div>
      <div className="space-y-2 px-4">
        <p className="flex gap-2 font-anton text-lg">Skills</p>
        <ul className="flex items-center gap-2 flex-wrap text-sm">
          {skills.map((skill, index) => (
            <li
              className="border border-border dark:border-border-dark px-2 py-1 rounded-md"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <hr className="text-border dark:text-border-dark mt-4" />
      <div className="grid text-sm">
        <img
          src={certificateImage || "/section-illustration/working.svg"}
          alt={platform}
          className={certificateImage ? "aspect-4/3" : "aspect-4/2"}
        />
      </div>
      <hr className="text-border dark:text-border-dark mb-4" />
      <div className="flex justify-between flex-wrap px-4">
        <div className="flex items-start">
          <a
            className="font-anton flex items-center gap-2"
            href={certificateLink || courseLink}
            title={`View ${certificateLink ? "Certificate" : "Course"}`}
            target="_blank"
          >
            {certificateLink ? (
              <RibbonIcon className="scale-125" />
            ) : (
              <CourseIcon className="scale-125" />
            )}
            {certificateLink ? "Certificate" : "Course"}
          </a>
        </div>
        {status === "ongoing" ? (
          <i>Learning in Progress</i>
        ) : (
          <small>
            <strong>Issued</strong>:{" "}
            {moment(dateCompleted).format("MMMM DD, YYYY")}
          </small>
        )}
      </div>
    </div>
  );
}

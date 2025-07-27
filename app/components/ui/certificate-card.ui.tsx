import moment from "moment";
import type { Certificate, CertificateStatus } from "~/types";
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
      className={`border-[1px] dark:text-dark-text h-fit dark:bg-dark-bg py-4 lg:pt-6 min-h-[450px] duration-500 transition-shadow-b-colors bg-light border-border dark:border-border-dark rounded-md ${
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
            <SkillItem key={index} skill={skill} status={status} />
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

const SkillItem = ({
  skill,
  status,
}: {
  skill: string;
  status: CertificateStatus;
}) => {
  const [listMobileHover, setListMobileHover] = useState(false);
  const { responseSize, width } = useScreenSize();

  const bgColor: Record<CertificateStatus, string> = {
    ongoing: "hover:bg-blue-300/30! hover:border-blue-600! hover:text-blue-800",
    plan: "hover:bg-yellow-300/30! hover:border-yellow-600! hover:text-yellow-800",
    completed:
      "hover:bg-green-300/30! hover:border-green-600! hover:text-green-800",
  };

  const onMobileColor = {
    ongoing: "bg-blue-300/30! border-blue-600! text-blue-800",
    plan: "bg-yellow-300/30! border-yellow-600! text-yellow-800",
    completed: "bg-green-300/30! border-green-600! text-green-800",
  };

  const listToggleTooltip = () => {
    if (responseSize.lg) return;

    setListMobileHover((prevState) => !prevState);
  };

  const listOffTooltip = () => {
    setListMobileHover(false);
  };

  useEffect(() => {
    setListMobileHover(false);
  }, [width]);

  return (
    <li
      onTouchStart={listToggleTooltip}
      onTouchEnd={listOffTooltip}
      className={`border border-border dark:border-border-dark px-2 py-1 rounded-md duration-500 transition-colors ${
        bgColor[status]
      }         ${listMobileHover ? onMobileColor[status] : ""}`}
    >
      {skill}
    </li>
  );
};

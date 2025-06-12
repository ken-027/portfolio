import moment from "moment";
// @ts-expect-error @ts-ignore
import { decode } from "he";
import type { Certificate } from "~/types";
import SkillsIcon from "../icons/skills.icon";
import ViewIcon from "../icons/view.icon";

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
    ongoing: "hover:shadow-blue-600/30 hover:shadow-2xl hover:border-blue-600!",
    plan: "hover:shadow-yellow-600/30 hover:shadow-2xl hover:border-yellow-600!",
    completed:
      "hover:shadow-green-600/30 hover:shadow-2xl hover:border-green-600!",
  };

  return (
    <div
      className={`border-[1px] dark:text-light/90 hover:shadow-2xl h-fit  py-4 lg:pt-6 min-h-[450px] hover:shadow-dark/50 hover:border-dark duration-500 dark:hover:shadow-light/30 dark:hover:border-border transition-shadow-b-colors bg-light dark:bg-dark border-border dark:border-border-dark rounded-md ${
        className || ""
      }
        ${shadowColor[status]}
              `}
    >
      <div className="flex justify-between">
        <div className="mb-4 px-4 flex-3/4">
          <h4 className="font-anton text-xl lg:text-2xl">{name}</h4>
          <p className="block mt-1 text-secondary">{provider}</p>
        </div>
        <div className="w-fit mt-1 flex-1">
          <img
            src={platformLogo}
            alt={platform}
            className="md:w-12 md:h-12 w-11 h-11 mb-4 mx-auto"
          />
        </div>
      </div>
      <div className="space-y-2 px-4">
        <p className="flex gap-2 font-anton text-lg">
          <SkillsIcon /> Skills
        </p>
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
            className="text-secondary flex items-center gap-2 transition-transform hover:scale-110 duration-500"
            href={certificateLink || courseLink}
            title={`View ${certificateLink ? "Certificate" : "Course"}`}
            target="_blank"
          >
            <img
              src={`/images/${
                certificateLink ? "certificate-link" : "course"
              }.svg`}
              alt="Certificate Link"
              className="md:w-10 md:h-10 h-9 w-9"
            />
          </a>
        </div>
        {status === "ongoing" ? (
          <i className="text-secondary mt-1 md:mt-2">Learning in Progress</i>
        ) : (
          <small className="mt-1 md:mt-2">
            <strong>Issued</strong>:{" "}
            {moment(dateCompleted).format("MMMM DD, YYYY")}
          </small>
        )}
      </div>
    </div>
  );
}

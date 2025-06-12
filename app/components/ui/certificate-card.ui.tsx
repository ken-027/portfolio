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
      className={`border-[1px] hover:shadow-2xl p-4 h-full lg:pt-6 lg:pb-8 min-h-[450px] hover:shadow-dark/50 hover:border-dark duration-500 dark:hover:shadow-light/30 dark:hover:border-border transition-shadow-b-colors bg-light dark:bg-dark border-border dark:border-border-dark rounded-md ${
        className || ""
      }
        ${certificateImage ? null : "px-3 lg:px-6 lg:py-8 py-4"}
        ${shadowColor[status]}
              `}
    >
      <img
        src={platformLogo}
        alt={platform}
        className="w-10 h-10 lg:h-16 lg:w-16 mb-4 mx-auto"
      />
      <hr className="text-border block mt-2 mb-4" />
      <h4 className="font-anton text-xl mb-4">{name}</h4>
      <div className="space-y-2">
        <p className="flex gap-2 font-anton">
          <SkillsIcon /> Skills
        </p>
        <ul className="flex items-center gap-2 flex-wrap text-sm">
          {skills.map((skill, index) => (
            <li
              className="border border-border px-2 py-1 rounded-md font-bold"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <hr className="text-border my-4" />
      <div className="grid text-sm">
        <p>
          <strong>Provider</strong>: {provider}
        </p>
        <p>
          <strong>Platform</strong>:{" "}
          <a className="text-secondary" target="_blank" href={courseLink}>
            {platform}
          </a>
        </p>
        <p className="capitalize">
          <strong>Status</strong>: {status}
        </p>
        {status === "completed" ? (
          <p>
            <strong>Issued</strong>:{" "}
            {moment(dateCompleted).format("MMMM DD, yyyy")}
          </p>
        ) : null}
      </div>
      {certificateLink ? (
        <>
          <hr className="text-border my-4 mb-1 lg:mb-4" />
          {certificateLink ? (
            <a
              className="text-secondary flex items-center gap-2"
              href={certificateLink}
              target="_blank"
            >
              <ViewIcon /> View certificate
            </a>
          ) : (
            <small>Certificate not available yet</small>
          )}
        </>
      ) : null}
    </div>
  );
}

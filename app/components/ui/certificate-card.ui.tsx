import moment from "moment";
// @ts-expect-error @ts-ignore
import { decode } from "he";
import type { Certificate } from "~/types";

export interface CertificateCardUIProps extends Certificate {
  className?: string;
}

export default function CertificateCardUI({
  name,
  platform,
  dateCompleted,
  description,
  platformLogo,
  className,
  certificateLink,
  courseLink,
  certificateImage,
}: CertificateCardUIProps) {
  return (
    <div
      className={`border-[1px] hover:shadow-2xl hover:shadow-dark/50 hover:border-dark duration-500 dark:hover:shadow-light/30 dark:hover:border-border transition-shadow-b-colors bg-light dark:bg-dark border-border dark:border-border-dark rounded-md min-h-[100px] space-y-3 lg:space-y-6 ${
        className || ""
      }
        ${certificateImage ? null : "px-3 lg:px-6 lg:py-8 py-4"}
              `}
    >
      {certificateImage ? (
        <a href={certificateLink} className="cursor-pointer" target="_blank">
          <img
            src={certificateImage}
            alt={platform.toLowerCase()}
            className="w-full h-full aspect-6/4.5 lg:aspect-6/4 border-1 dark:border-none border-light rounded-md"
          />
        </a>
      ) : (
        <>
          <div className="flex justify-between gap-2">
            <div className="flex-1 lg:space-y-1">
              <h3 className="text-lg font-anton dark:text-light/90  lg:text-2xl">
                {name}
              </h3>
              {courseLink ? (
                <a
                  href={courseLink}
                  target="_blank"
                  className="text-secondary block lg:text-base"
                >
                  {platform}
                </a>
              ) : (
                <p className="text-secondary block lg:text-base">{platform}</p>
              )}
              <small className="block italic dark:text-light/90 lg:text-base">
                {dateCompleted === "ongoing"
                  ? "Ongoing"
                  : moment(dateCompleted).format("MMMM DD, YYYY")}
              </small>
            </div>
            <img
              src={platformLogo}
              alt={platform.toLowerCase()}
              className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] border-1 dark:border-none border-light rounded-md"
            />
          </div>
          <p
            className="text-sm lg:text-lg font-open-sauce dark:text-light/90"
            dangerouslySetInnerHTML={{
              __html: decode(description),
            }}
          />
          {certificateLink && dateCompleted !== "ongoing" ? (
            <a
              className="text-secondary text-xs lg:text-base"
              href={certificateLink}
              target="_blank"
            >
              Certificate Issued by {platform}
            </a>
          ) : (
            <p className="text-red-500 text-xs lg:text-base dark:text-red-300">
              Certificate Not Available Yet
            </p>
          )}
        </>
      )}
    </div>
  );
}

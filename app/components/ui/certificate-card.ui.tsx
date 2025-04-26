import { type Certificate } from "~/shared/certificates";

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
}: CertificateCardUIProps) {
  return (
    <div
      className={`border-[1px] bg-light dark:bg-dark border-border dark:border-border-dark rounded-md min-h-[100px] px-3 space-y-3 lg:space-y-6 lg:px-6 lg:py-8 py-4 ${
        className || ""
      }`}
    >
      <div className="flex justify-between gap-2">
        <div className="flex-1 lg:space-y-1">
          <h3 className="text-lg font-anton dark:text-light/90  lg:text-2xl">
            {name}
          </h3>
          <small className="text-secondary block lg:text-base">
            {platform}
          </small>
          <small className="block italic dark:text-light/90 lg:text-base">
            {dateCompleted.toString()}
          </small>
        </div>
        <img
          src={platformLogo}
          alt={platform.toLowerCase()}
          className="h-[50px] w-[50px] border-1 dark:border-none border-light rounded-md"
        />
      </div>
      <p
        className="text-sm lg:text-lg font-open-sauce dark:text-light/90"
        dangerouslySetInnerHTML={{ __html: description }}
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
          Certificate not issued
        </p>
      )}
    </div>
  );
}

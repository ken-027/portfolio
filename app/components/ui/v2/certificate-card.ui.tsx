import type { Certificate } from "~/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RibbonIcon from "~/components/icons/ribbon.icon";
import moment from "moment";

export default function CertificateCardUI({
  name,
  certificateLink,
  certificateImage,
  dateCompleted,
  platform,
  className,
}: Pick<
  Certificate,
  "name" | "certificateLink" | "dateCompleted" | "certificateImage" | "platform"
> & { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  const SourceLink = ({
    link,
    Icon,
    title,
    className,
  }: {
    link?: string;
    Icon: React.ReactNode;
    title: string;
    className?: string;
  }) =>
    link && (
      <a
        href={link}
        target="_blank"
        className={`px-3 py-1 flex gap-1 items-center font-anton bg-white text-dark text-sm cursor-pointer rounded-md hover:bg-gray-200 transition-opacity duration-1000 ${
          className || ""
        }`}
      >
        {Icon}
        {title}
      </a>
    );

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  const onOutsideClick = () => {
    if (!hover) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setHover(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  };

  useEffect(onOutsideClick, [hover]);

  return (
    <motion.div
      layout
      variants={cardVariants}
      className={`space-y-4 group z-0 ${className || ""}`}
    >
      <div
        // onTouchStart={onHover}
        onClick={onHover}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        ref={cardRef}
        className={`relative border aspect-5/4 border-border transition-shadow duration-500 rounded-xl overflow-hidden z-10 ${
          hover ? "shadow-2xl" : ""
        }`}
      >
        {!loaded && (
          <img
            src="/section-illustration/certificates.svg"
            alt="loading"
            className="absolute inset-0 w-full h-full object-cover animate-pulse"
          />
        )}
        <img
          src={certificateImage}
          loading="lazy"
          alt={name}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition duration-300 ${
            hover ? "scale-105" : ""
          }`}
        />

        <div
          className={`absolute inset-0 bg-slate-900/90 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 space-y-4 px-6 py-2 ${
            hover ? "opacity-100!" : ""
          }`}
        >
          <h4
            className={`font-anton text-xl text-center mb-2 transition-transform translate-y-[600%] ${
              hover ? "translate-y-0!" : ""
            }`}
          >
            {name}
          </h4>
          <p
            className={`text-sm text-gray-300 px-4 text-center opacity-0 transition-opacity duration-1000 ${
              hover ? "opacity-100!" : ""
            }`}
          >
            {platform}
          </p>
          {/* <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <div
                title={name}
                className="text-xs py-1 px-2.5 rounded-md bg-secondary text-light flex gap-2 items-center"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div> */}
          <div className="flex gap-2 flex-wrap">
            <SourceLink
              title="Certificate"
              link={certificateLink}
              Icon={<RibbonIcon />}
              className={hover ? "opacity-100!" : ""}
            />
          </div>
          <p
            className={`text-sm text-gray-300 px-4 text-center opacity-0 transition-opacity duration-1000 ${
              hover ? "opacity-100!" : ""
            }`}
          >
            <span className="font-anton">Issued:</span>{" "}
            {dateCompleted ? moment(dateCompleted).format("MMMM DD, YYYY") : ""}
          </p>
        </div>
      </div>

      <h4
        className={`font-anton lg:text-2xl dark:text-light/90 text-xl transition text-center ${
          hover ? "-translate-y-[200%]!" : ""
        }`}
      >
        {name}
      </h4>
    </motion.div>
  );
}

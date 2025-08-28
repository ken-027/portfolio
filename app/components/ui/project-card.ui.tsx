import type { Project } from "~/types";
import ViewIcon from "../icons/view.icon";
import RepoIcon from "../icons/repo.icon";
import DockerLinkIcon from "../icons/docker-link.icon";
import DownloadImageIcon from "../icons/download-image.icon";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ProjectCardUI({
  thumbnailLink,
  title,
  description,
  technologies,
  liveDemo,
  githubRepo,
  screenshot,
  dockerLink,
  className,
}: Project & { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [keyInc, setKeyInc] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };
  const skillVariants = {
    animate: {
      transition: {
        staggerChildren: 0.04,
      },
    },
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
      <motion.a
        layout
        variants={cardVariants}
        href={link}
        target="_blank"
        className={`px-3 py-1 transition-colors flex gap-1 items-center font-anton bg-white text-dark text-sm cursor-pointer rounded-md hover:bg-gray-200 ${
          className || ""
        }`}
      >
        {Icon}
        {title}
      </motion.a>
    );

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  const hoverChange = () => {
    setKeyInc((prev) => prev + 1);
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

  useEffect(hoverChange, [hover]);
  useEffect(onOutsideClick, [hover]);

  return (
    <motion.div
      layout
      variants={cardVariants}
      className={`space-y-4 group z-0 ${className || ""}`}
    >
      <div
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
            src="/section-illustration/project.svg"
            alt="loading"
            className="absolute inset-0 w-full h-full object-cover animate-pulse"
          />
        )}
        <img
          src={thumbnailLink}
          loading="lazy"
          alt={title}
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
            className={`font-anton text-center text-xl mb-2 transition-transform translate-y-[600%] ${
              hover ? "translate-y-0!" : ""
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-sm text-gray-300 px-4 text-center opacity-0 transition-opacity duration-1000 ${
              hover ? "opacity-100!" : ""
            }`}
          >
            {description}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={keyInc}
              layout
              variants={skillVariants}
              className="flex flex-wrap gap-2 justify-center"
            >
              {technologies.map(({ name, icon }, index) => (
                <motion.div
                  layout
                  variants={cardVariants}
                  title={name}
                  className="text-xs py-1 px-2.5 rounded-md bg-secondary text-light flex gap-2 items-center"
                  key={index}
                >
                  <img
                    className="w-[15px] h-[15px]"
                    src={icon}
                    height={15}
                    width={15}
                  />
                  {name}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={keyInc}
              layout
              variants={skillVariants}
              className="flex gap-2 flex-wrap"
            >
              <SourceLink
                title="Screenshot"
                link={screenshot}
                Icon={<DownloadImageIcon />}
              />
              <SourceLink title="Demo" link={liveDemo} Icon={<ViewIcon />} />
              <SourceLink
                title="Code"
                link={githubRepo}
                Icon={<RepoIcon className="scale-90" />}
              />
              <SourceLink
                title="Docker"
                link={dockerLink}
                Icon={<DockerLinkIcon />}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <h4
        className={`font-anton lg:text-2xl dark:text-light/90 text-xl transition text-center ${
          hover ? "-translate-y-[200%]!" : ""
        }`}
      >
        {title}
      </h4>
    </motion.div>
  );
}

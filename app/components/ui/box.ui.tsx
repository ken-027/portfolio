"use client";

import RepoIcon from "../icons/repo.icon";
import ViewIcon from "../icons/view.icon";
import DownloadImageIcon from "../icons/download-image.icon";
import { Link } from "react-router";
import type { Technology } from "~/types";
import DockerLinkIcon from "../icons/docker-link.icon";

interface BoxUIProps {
  thumbnail?: string;
  title: string;
  description: string;
  items: Technology[];
  screenshot?: string;
  repo?: string;
  website?: string;
  docker?: string;
  aiPowered?: boolean;
}

export default function BoxUI({
  thumbnail,
  title,
  description,
  items,
  website,
  screenshot,
  repo,
  docker,
  aiPowered,
}: BoxUIProps) {
  const isUrl = website?.match(/(https?:\/\/)/);

  return (
    <div
      className={`border-[1px] mb-2 bg-light dark:bg-dark-bg border-border transition-shadow-b-colors dark:hover:shadow-light/30 dark:hover:border-border duration-500 hover:shadow-dark/50 hover:border-dark hover:shadow-2xl overflow-hidden dark:border-border-dark rounded-sm min-h-[300px] lg:min-h-[400px] pb-5 transition-shadow`}
    >
      <img
        src={thumbnail || "/section-illustration/project.svg"}
        alt={title}
        width={205}
        height={111}
        className="w-full border-b-[1px] border-border bg-light dark:border-border-dark h-full aspect-4/2 object-cover"
      />
      <div className="px-3 space-y-3 md:space-y-6">
        <div className="space-y-2 mt-5">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-anton dark:text-dark-text">
            {title}
          </h3>
          <p className="text-sm md:text-base font-open-sauce dark:text-dark-text xl:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {items.map(({ icon, name }, index) => (
            <div
              key={index}
              title={name}
              className="border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark h-9 w-9 min-w-9 min-h-9 lg:h-11 lg:w-11 rounded-md grid place-items-center"
            >
              <img src={icon} alt={name} className="scale-75" />
            </div>
          ))}
        </div>
        {aiPowered ? (
          <div className="bg-[#D07252] border-[#8d2a09] text-light font-bold px-3 py-1.5 rounded-md capitalize w-fit">
            <p className="text-xs md:text-sm">AI Powered</p>
          </div>
        ) : null}
        <div className="flex flex-wrap gap-5 font-anton dark:text-dark-text md:text-xl lg:px-2">
          {website ? (
            <Link
              target={isUrl ? "_blank" : "_self"}
              to={website}
              className="flex items-center gap-2 lg:gap-4"
            >
              <ViewIcon className="scale-125 lg:scale-200" />
              Demo
            </Link>
          ) : null}
          {repo ? (
            <Link
              target="_blank"
              to={repo}
              className="flex items-center gap-2 lg:gap-4"
            >
              <RepoIcon className="scale-125 lg:scale-200" /> Code
            </Link>
          ) : null}
          {screenshot ? (
            <Link
              target="_blank"
              to={screenshot}
              className="flex items-center gap-2 lg:gap-4"
            >
              <DownloadImageIcon className="scale-125 lg:scale-200" />
              Screenshots
            </Link>
          ) : null}
          {docker ? (
            <Link
              target="_blank"
              to={docker}
              className="flex items-center gap-2 lg:gap-4"
            >
              <DockerLinkIcon className="scale-125 lg:scale-200" />
              Docker Image
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

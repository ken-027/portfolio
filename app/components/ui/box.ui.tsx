"use client";

import { type Technology } from "~/shared/projects";
import RepoIcon from "../icons/repo.icon";
import ViewIcon from "../icons/view.icon";
import DownloadImageIcon from "../icons/download-image.icon";
import { Link } from "react-router";

interface BoxUIProps {
  thumbnail?: string;
  title: string;
  description: string;
  items: Technology[];
  screenshot?: string;
  repo?: string;
  website?: string;
}

export default function BoxUI({
  thumbnail,
  title,
  description,
  items,
  website,
  screenshot,
  repo,
}: BoxUIProps) {
  return (
    <div
      className={`border-[1px] mb-2 bg-light dark:bg-dark border-border  overflow-hidden dark:border-border-dark rounded-sm min-h-[300px] lg:min-h-[400px] pb-5 hover:shadow-lg transition-all`}
    >
      <img
        src={thumbnail || "/section-illustration/project.svg"}
        alt={title}
        width={205}
        height={111}
        className="w-full border-b-[1px] border-border bg-light dark:border-border-dark h-full"
      />
      <div className="px-3 space-y-3 md:space-y-6">
        <div className="space-y-2 mt-5">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-anton dark:text-light/90 transition-all">
            {title}
          </h3>
          <p className="text-sm md:text-base font-open-sauce dark:text-light/90 xl:text-lg transition-all">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {items.map(({ Icon, name }, index) => (
            <div
              key={index}
              title={name}
              className="border-1 dark:bg-light dark:border-0 border-border dark:border-border-dark transition-all h-9 w-9 min-w-9 min-h-9 lg:h-11 lg:w-11 rounded-md grid place-items-center"
            >
              <Icon className="scale-90" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 font-anton dark:text-light/90 transition-all md:text-2xl lg:px-2">
          {website ? (
            <Link
              target="_blank"
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
        </div>
      </div>
    </div>
  );
}

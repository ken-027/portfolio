"use client";

import useAnimateElement from "~/hooks/useAnimateElement";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import { useRef, useState } from "react";
import ResumeMenuIcon from "../icons/resume-menu.icon";
import LinkUI from "../ui/link.ui";
import TerminalStyledIcon from "../icons/terminal-styled.icon";
import { switchStyle } from "~/shared/local-storage";
import { PORTFOLIO_BASE_URL } from "~/config/env.config";
import type { DeveloperPlatform } from "~/types";
export default function FooterLayout({
  platforms,
}: {
  platforms: DeveloperPlatform[];
}) {
  const [_switching, setSwitching] = useState(false);
  const footerRef = useRef(null);

  const onSwitchStyle = () => {
    setSwitching(true);
    switchStyle("terminal");
    // setTimeout(() => {
    location.reload();
    // }, 3500);
  };

  useAnimateElement("footer", footerRef);

  return (
    <footer
      id="resume"
      ref={footerRef}
      className="text-center text-xs font-open-sauce pt-2 dark:bg-dark transition-colors"
    >
      {/* {switching ? <PageLoaderLayout /> : null}
      <PageLoaderLayout /> */}
      <PaddingWrapperUI className="min-h-fit!">
        <div className="flex flex-col items-center gap-2 mb-10 lg:hidden">
          <p className="text-lg footer-animate">
            🤗 Thank you for visiting my portfolio
          </p>
          <p className="footer-animate">
            I appreciate you taking the time to explore my work. I&apos;m always
            open to new opportunities, collaborations, or simply a good
            conversation about building great software. Feel free to reach out —
            I’d love to connect and see how we can work together to create
            something impactful.
          </p>

          <LinkUI
            title="Get my resume"
            download
            href={`${PORTFOLIO_BASE_URL}/resume/software-developer.pdf`}
            Icon={<ResumeMenuIcon />}
            className="mt-2"
          />

          <img
            className="mx-auto border-1 border-border rounded-md mt-4 dark:border-border-dark footer-animate"
            src="/images/profile.png"
            alt="profile photo"
            width={210}
            height={260}
          />
        </div>
        <div
          className="flex justify-center mb-4 text-base"
          id="terminal-styled"
        >
          <LinkUI
            title="Try Terminal-Styled"
            onClick={onSwitchStyle}
            Icon={<TerminalStyledIcon className="terminal-icon" />}
            className="footer-animate text-base"
          />
        </div>
        <div className="lg:mt-10 mt-6 lg:mb-8 mb-4 space-y-4">
          <h4 className="text-lg lg:text-2xl">Developer's Platform</h4>
          <ul className="flex lg:gap-6 gap-4 items-center justify-center">
            {platforms.map(({ icon, link, name }, index) => (
              <li key={index}>
                <a href={link} target="_blank" title={name}>
                  <img className="lg:h-9 lg:w-9 h-6 w-6 hover:scale-110 duration-500 transition-transform" src={icon} alt={name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer-animate lg:text-lg">
          © 2025 Kenneth Andales. Software Developer
        </p>
        <small className="text-dark/50 dark:text-light/50 footer-animate lg:text-base">
          Built with Tailwind and React JS
        </small>
      </PaddingWrapperUI>
    </footer>
  );
}

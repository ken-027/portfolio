"use client";

import useAnimateElement from "~/hooks/useAnimateElement";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import { useRef } from "react";
import ResumeIcon from "../icons/resume.icon";
import ResumeMenuIcon from "../icons/resume-menu.icon";
import LinkUI from "../ui/link.ui";

export default function FooterLayout() {
  const footerRef = useRef(null);

  useAnimateElement("footer", footerRef);

  return (
    <footer
      id="resume"
      ref={footerRef}
      className="text-center text-xs font-open-sauce pt-2 dark:bg-dark transition-colors"
    >
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
            href="/resume/software-developer.pdf"
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

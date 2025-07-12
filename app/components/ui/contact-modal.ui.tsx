import { AnimatePresence, motion } from "motion/react";
import FormContactUI from "./form-contact.ui";
import HeaderUI from "./header.ui";
import LinkUI from "./link.ui";
import ResumeMenuIcon from "../icons/resume-menu.icon";
import ToastUI from "./toast.ui";
import { useState } from "react";
import { PORTFOLIO_BASE_URL } from "~/config/env.config";

interface ContactModalUIProps {
  show: boolean;
  onClose: () => void;
}

export default function ContactModalUI({ show, onClose }: ContactModalUIProps) {
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState("not-submitted");

  return (
    <>
      <ToastUI
        message={
          status === "success"
            ? "🤗 Thanks for getting in touch — I’ll respond shortly"
            : error
        }
        status={status === "success" ? "success" : "error"}
        show={status !== "not-submitted"}
      />

      <AnimatePresence>
        {show ? (
          <motion.div
            onClick={onClose}
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 backdrop-blur-xs overflow-x-hidden bg-dark/50 z-50 dark:bg-light/20 grid place-items-center overflow-y-auto py-10 px-20 gap-10"
          >
            <div className="flex items-center justify-center gap-10 w-full">
              <motion.div
                animate={{
                  x: ["-120%", "0%"],
                  opacity: [0, 1],
                  willChange: "transform",
                }}
                exit={{
                  x: ["0%", "-120%"],
                  opacity: [1, 0],
                  willChange: "transform",
                }}
                transition={{ type: "tween" }}
                className="w-1/2"
              >
                <FormContactUI
                  className="ml-auto h-fit max-w-[550px] lg:py-10"
                  header={
                    <HeaderUI
                      headerTitle="Contact"
                      headerSubtitle="Get in Touch"
                      className="mb-10! contact-animate"
                    />
                  }
                  submitStatus={(status, error) => {
                    setStatus(status);
                    setError(error || "");
                  }}
                />
              </motion.div>
              <motion.div
                animate={{
                  x: ["120%", "0%"],
                  opacity: [0, 1],
                  willChange: "transform",
                }}
                exit={{
                  x: ["0%", "120%"],
                  opacity: [1, 0],
                  willChange: "transform",
                }}
                transition={{ type: "tween" }}
                className="w-1/2  gap-2 self-stretch text-light overflow-hidden text-shadow xl:text-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full max-w-[700px] flex flex-col items-start gap-6">
                  <img
                    className="border-1 border-border rounded-md lg:w-3/4 max-w-[350px] dark:border-border-dark footer-animate"
                    src="/images/profile.png"
                    alt="profile photo"
                    width={210}
                    height={260}
                  />
                  <motion.p
                    animate={{
                      y: ["20%", "0%"],
                      opacity: [0, 1],
                      willChange: "transform",
                    }}
                    exit={{
                      y: ["0%", "20%"],
                      opacity: [1, 0],
                      willChange: "transform",
                    }}
                    transition={{ type: "tween", delay: 0.2 }}
                    className="xl:text-2xl footer-animate text-shadow-lg/30"
                  >
                    🤗 Thank you for visiting my portfolio
                  </motion.p>
                  <motion.p
                    animate={{
                      y: ["20%", "0%"],
                      opacity: [0, 1],
                      willChange: "transform",
                    }}
                    exit={{
                      y: ["0%", "20%"],
                      opacity: [1, 0],
                      willChange: "transform",
                    }}
                    transition={{ type: "tween", delay: 0.3 }}
                    className="footer-animate text-shadow-lg/30"
                  >
                    I appreciate you taking the time to explore my work.
                    I&apos;m always open to new opportunities, collaborations,
                    or simply a good conversation about building great software.
                    Feel free to reach out — I’d love to connect and see how we
                    can work together to create something impactful.
                  </motion.p>

                  <LinkUI
                    title="Get my resume"
                    target="_blank"
                    download
                    href={`${PORTFOLIO_BASE_URL}/resume/kenneth-andales.resume.2025.pdf`}
                    Icon={<ResumeMenuIcon />}
                    className="mt-2 text-light border-light dark:text-dark dark:border-dark text-shadow-lg/30"
                    borderClassName="bg-light dark:bg-dark"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

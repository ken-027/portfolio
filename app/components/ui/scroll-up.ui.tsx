import { useEffect, useState } from "react";
import ArrowUpIcon from "../icons/arrow-up.icon";
import { AnimatePresence, motion } from "motion/react";

interface ScrollUpUIProps {
  show: boolean;
}

export default function ScrollUpUI({ show }: ScrollUpUIProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  if (!loaded) return null;

  return (
    <AnimatePresence>
      {!show ? null : (
        <motion.div
          animate={{
            y: ["200%", "0%"],
            opacity: [0, 1],
            willChange: "transform",
          }}
          exit={{
            y: ["0%", "200%"],
            opacity: [1, 0],
            willChange: "transform",
          }}
          transition={{ type: "spring" }}
          className="fixed bottom-6 right-4 lg:right-10 z-40 group"
        >
          <button
            onClick={() => {
              document.body.scrollTop = 0;
            }}
            className="cursor-pointer group-hover:animate-bounce outline-none dark:bg-light dark:text-dark bg-dark text-light shadow border-[1px] border-border w-[2.4rem] h-10 lg:w-11 lg:h-12 rounded-md grid place-items-center"
          >
            <ArrowUpIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

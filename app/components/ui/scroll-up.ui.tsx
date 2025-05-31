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
            x: ["200%", "0%"],
            opacity: [0, 1],
            willChange: "transform",
          }}
          exit={{
            x: ["0%", "200%"],
            opacity: [1, 0],
            willChange: "transform",
          }}
          transition={{ type: "tween" }}
          className="fixed bottom-22 right-4 lg:bottom-32 lg:right-10 z-30 group"
        >
          <button
            onClick={() => {
              document.body.scrollTop = 0;
            }}
            className="cursor-pointer group-hover:animate-none outline-none dark:bg-light rounded-md dark:text-dark bg-dark text-light shadow border-[1px] border-border w-10 h-10 lg:w-12 lg:h-12 grid place-items-center"
          >
            <ArrowUpIcon />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

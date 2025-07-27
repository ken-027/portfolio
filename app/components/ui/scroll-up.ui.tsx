import { useEffect, useState, type RefObject } from "react";
import ArrowUpIcon from "../icons/arrow-up.icon";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

interface ScrollUpUIProps {
  body: RefObject<HTMLElement | null>;
}

export default function ScrollUpUI({ body }: ScrollUpUIProps) {
  if (!body.current) return;

  const [loaded, setLoaded] = useState(false);
  const { scrollY } = useScroll({
    container: body,
  });

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() as number);

    setScrollDirection(diff > 0 || scrollY.get() < 1000 ? "down" : "up");
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  if (!loaded) return null;

  return (
    <AnimatePresence>
      {scrollDirection === "down" ? null : (
        <motion.div
          animate={{
            y: ["-50%", "0%"],
            opacity: [0, 1],
            willChange: "transform",
          }}
          exit={{
            y: ["0%", "-50%"],
            opacity: [1, 0],
            willChange: "transform",
          }}
          transition={{ type: "tween" }}
          className="fixed top-18 lg:top-4 left-1/2 transform -translate-x-1/2 z-10 group grid place-items-center gap-1"
        >
          <button
            onClick={() => {
              document.body.scrollTop = 0;
            }}
            className="cursor-pointer group-hover:animate-none outline-none dark:bg-light rounded-md animate-bounce dark:text-dark bg-dark text-light w-9 h-9 lg:w-11 lg:h-11 grid place-items-center"
          >
            <ArrowUpIcon />
          </button>
          {/* <strong className="text-dark dark:text-dark-text text-shadow-2xs text-shadow-gray-500 dark:text-shadow-gray-500">
            Back to top
          </strong> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

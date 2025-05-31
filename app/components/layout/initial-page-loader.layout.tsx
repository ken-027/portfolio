import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useDarkMode from "~/hooks/useDarkMode";

export default function InitialPageLoaderLayout() {
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  const darkMode = useDarkMode();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 grid place-content-center place-items-center bg-transparent -z-50"
        exit={{ opacity: 0, scale: [1, 0], willChange: "transform" }}
        //   initial={{ opacity: 1, scale: 1, willChange: "transform" }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      >
        {isDarkMode !== null ? (
          <img
            className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            src={`/images/${isDarkMode ? "dark" : "light"}-logo.png`}
            alt="light logo"
            width={81}
            height={81}
          />
        ) : null}
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-yellow-300 border-[1px] border-border rounded-full ball-loading" />
          <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-green-300 animate-100 border-[1px] border-border rounded-full ball-loading" />
          <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-blue-300 delay-200 border-[1px] border-border rounded-full ball-loading" />
        </div>
        <p className="mt-2 lg:mt-4 text-dark dark:text-light">Initializing data</p>
      </motion.div>
    </AnimatePresence>
  );
}

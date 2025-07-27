import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useDarkMode from "~/hooks/useDarkMode";

export default function PageLoaderLayout() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  const darkMode = useDarkMode();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <AnimatePresence>
      {!loading ? null : (
        <motion.div
          className="fixed inset-0 dark:bg-dark grid place-content-center place-items-center bg-light z-50"
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{ ease: "easeOut" }}
        >
          {isDarkMode !== null ? (
            <img
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] animate-spin-slow"
              src={`/images/${
                isDarkMode ? "dark" : "light"
              }-logo-with-animation.gif`}
              alt="light logo with animation"
              width={81}
              height={81}
            />
          ) : null}
          <p className="text-dark dark:text-dark-text">Switching style</p>
          <div className="mt-2 flex items-center gap-2 lg:gap-3 lg:mt-4">
            <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-yellow-300 border-[1px] border-border rounded-full ball-loading" />
            <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-green-300 animate-100 border-[1px] border-border rounded-full ball-loading" />
            <div className="animate-bounce h-4 w-4 lg:h-5 lg:w-5 bg-blue-300 delay-200 border-[1px] border-border rounded-full ball-loading" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

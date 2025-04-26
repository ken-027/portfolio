import { useEffect, useState } from "react";
import ProgressBarUI from "../ui/progress-bar.ui";
import { AnimatePresence, motion } from "motion/react";
import { getDarkMode } from "~/shared/local-storage";
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
    }, 3000);
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
              className="w-[100px] h-[100px] animate-spin-slow"
              src={`/images/${
                isDarkMode ? "dark" : "light"
              }-logo-with-animation.gif`}
              alt="light logo with animation"
              width={81}
              height={81}
            />
          ) : null}
          <ProgressBarUI />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

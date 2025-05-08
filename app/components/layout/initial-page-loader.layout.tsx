import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useDarkMode from "~/hooks/useDarkMode";

export default function InitialPageLoaderLayout() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState<null | boolean>(null);

  const darkMode = useDarkMode();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <AnimatePresence>
      {!loading ? null : (
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
              alt="light logo with animation"
              width={81}
              height={81}
            />
          ) : null}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

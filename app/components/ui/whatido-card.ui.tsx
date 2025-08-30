import type { WhatIDo } from "~/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function WhatIDoCardUI({
  title,
  description: descriptions,
  image,
  className,
}: WhatIDo & { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [keyInc, setKeyInc] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState<boolean>(false);
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  const itemVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  const onOutsideClick = () => {
    if (!hover) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setHover(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  };

  const hoverChange = () => {
    setKeyInc((prev) => prev + 1);
  };

  useEffect(onOutsideClick, [hover]);
  useEffect(hoverChange, [hover]);

  return (
    <motion.div
      layout
      variants={cardVariants}
      className={`space-y-4 group z-0 ${className || ""}`}
    >
      <div
        // onTouchStart={onHover}
        onClick={onHover}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        ref={cardRef}
        className={`relative border aspect-5/4 border-border transition-shadow duration-500 rounded-xl overflow-hidden z-10 ${
          hover ? "shadow-2xl" : ""
        }`}
      >
        {!loaded && (
          <img
            src="/section-illustration/services.svg"
            alt="loading"
            className="absolute inset-0 w-full h-full object-cover animate-pulse"
          />
        )}
        <img
          src={image}
          loading="lazy"
          alt={title}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full bg-light object-cover transition-transform px-10 duration-300 ${
            hover ? "scale-125" : ""
          }`}
        />

        <div
          className={`absolute inset-0 bg-slate-900/90 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 space-y-4 px-6 py-2 ${
            hover ? "opacity-100!" : ""
          }`}
        >
          <h4
            className={`font-anton text-xl lg:text-2xl text-center mb-2 transition-transform translate-y-[600%] ${
              hover ? "translate-y-0!" : ""
            }`}
          >
            {title}
          </h4>
          <AnimatePresence mode="wait">
            <motion.ul
              key={keyInc}
              layout
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              {descriptions.map((description, index) => (
                <motion.li
                  layout
                  variants={cardVariants}
                  className="text-sm py-1 px-2.5 rounded-md text-light flex gap-2"
                  key={index}
                >
                  ● <span className="mr-2">{description}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>

      <h4
        className={`font-anton lg:text-2xl dark:text-light/90 text-xl transition text-center ${
          hover ? "-translate-y-[200%]!" : ""
        }`}
      >
        {title}
      </h4>
    </motion.div>
  );
}

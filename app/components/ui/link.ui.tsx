import { motion } from "motion/react";
import { type AnchorHTMLAttributes } from "react";

interface LinkUIProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon?: React.ReactNode;
  className?: string;
  title: string;
  borderClassName?: string;
}

export default function LinkUI({
  Icon,
  className,
  title,
  borderClassName,
  ...props
}: LinkUIProps) {
  return (
    // @ts-ignore
    <motion.a
      animate={{
        opacity: [0.1, 1],
        y: ["20%", "0%"],
        willChange: "transform",
      }}
      transition={{ type: "tween", delay: 0.4 }}
      href="#projects"
      className={`font-anton cursor-pointer relative group overflow-hidden text-dark w-fit text-base md:text-xl lg:text-2xl dark:text-dark-text px-3 py-2 lg:py-3 flex items-center justify-center gap-2 banner-animate border-b-1 border-dark/80 dark:border-light/80 ${
        className || ""
      }`}
      {...props}
    >
      <span className="lg:scale-150 lg:mr-2">{Icon}</span>
      {title}
      <span
        className={`absolute cursor-pointer left-0 -bottom-[0.5px] will-change-transform -translate-x-[101%] w-full h-1 rounded-md bg-dark dark:bg-light transition-transform duration-300 group-hover:translate-x-0 ${borderClassName}`}
      />
    </motion.a>
  );
}

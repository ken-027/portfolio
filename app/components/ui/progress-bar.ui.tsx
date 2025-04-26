"use client";
import { motion } from "motion/react";

export default function ProgressBarUI() {
  return (
    <div className="h-1 min-w-[250px] rounded-md">
      <motion.div
        className="h-[6px] bg-dark dark:bg-light w-1/2 rounded-md"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 2 }}
      ></motion.div>
    </div>
  );
}

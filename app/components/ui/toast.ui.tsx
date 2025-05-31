import { AnimatePresence, motion } from "motion/react";

interface ToastUIProps {
  message: string;
  show: boolean;
  status: "success" | "error";
}

export default function ToastUI({ message, show, status }: ToastUIProps) {
  return (
    <>
      <AnimatePresence>
        {show ? (
          <motion.div
            animate={{
              y: ["-150%", "0%"],
              opacity: [0.1, 1],
              willChange: "transform",
            }}
            exit={{
              y: ["0%", "-150%"],
              opacity: [1, 0.1],
              willChange: "transform",
            }}
            transition={{ type: "spring" }}
            className={`fixed! top-4 md:right-4 inset-x-4 md:inset-x-[unset]  border-1 text-center  z-[60] px-10 py-3 ${
              status === "success"
                ? "border-green-500 bg-green-200"
                : "bg-red-100 border-red-500"
            }`}
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

import { useInView } from "motion/react";
import { useEffect, type RefObject } from "react";

export default function useIntoView(ref: RefObject<any>) {
  const isInView = useInView(ref, {
    amount: "some",
  });

  useEffect(() => {
    if (isInView) {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [isInView]);
}

import { animate, stagger } from "motion";
import { useInView } from "motion/react";
import { useEffect, type RefObject } from "react";

export default function useAnimateElement(
  prefixClass: string,
  ref: RefObject<any>,
  delay: number = 0.1
) {
  const isInView = useInView(ref, {
    amount: "some",
  });

  const animateElements = () => {
    const animateClass = `.${prefixClass}-animate`;
    const elementClass = document.querySelectorAll(animateClass);

    if (isInView) {
      animate(
        elementClass,
        {
          opacity: [0, 1],
            y: ["10%", "0%"],
        //   scale: ["0.2", "1"],
          willChange: "transform",
        },
        {
          delay: stagger(delay),
          type: "tween",
        }
      );
    } else {
      animate(
        elementClass,
        {
          opacity: [1, 0],
          y: ["0%", "-10%"],
        //   scale: ["1", "0.2"],
          willChange: "transform",
        },
        {
          delay: stagger(delay),
          type: "tween",
        }
      );
    }
  };

  useEffect(animateElements, [isInView]);
}

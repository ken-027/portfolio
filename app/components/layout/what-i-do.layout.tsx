import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useEffect, useRef, useState } from "react";
import type { WhatIDo } from "~/types";
import WhatIDoCardUI from "../ui/whatido-card.ui";
import { AnimatePresence, motion } from "motion/react";
import PortfolioDB from "~/utils/db.util";

interface WhatIDoLayout {
  loading: boolean;
}

const db = new PortfolioDB();

export default function WhatIDoLayout({ loading }: WhatIDoLayout) {
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const serviceItemRef = useRef<HTMLDivElement>(null);
  const [whatIDo, setWhatIDo] = useState<WhatIDo[]>([]);
  useAnimateElement(`what-i-do`, whatIDoRef, 0.15);

  const getWhatIdo = async () => {
    const whatIdo = await db.getWhatIDos();

    setWhatIDo(whatIdo);
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const loadData = () => {
    if (whatIDo.length) return;

    getWhatIdo();
  };

  useEffect(loadData, [loading]);

  return (
    <SectionUI id="what-i-do" ref={whatIDoRef}>
      <HeaderUI
        headerTitle="What I do"
        headerSubtitle="Your Partner in Web Development and Innovation"
        className="what-i-do-animate"
      />
      <PaddingWrapperUI className="text-dark">
        <div className="flex flex-col items-center justify-center gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              layout
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex w-full flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-y-10 xl:gap-x-6"
              ref={serviceItemRef}
            >
              {whatIDo.map(({ ...item }, index) => (
                <WhatIDoCardUI
                  key={index}
                  {...item}
                  className={`what-i-do-animate`}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

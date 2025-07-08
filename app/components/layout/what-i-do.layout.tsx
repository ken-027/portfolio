import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import CardUI from "../ui/card.ui";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";
import type { WhatIDo } from "~/types";
import useScreenSize from "~/hooks/useScreenSize";

export default function WhatIDoLayout({ whatIDo }: { whatIDo: WhatIDo[] }) {
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const serviceItemRef = useRef<HTMLDivElement>(null);
  useAnimateElement(`what-i-do`, whatIDoRef);

  return (
    <SectionUI id="what-i-do" ref={whatIDoRef}>
      <HeaderUI
        headerTitle="What I do"
        headerSubtitle="Your Partner in Web Development and Innovation"
        className="what-i-do-animate"
      />
      <PaddingWrapperUI className="text-dark">
        <div className="flex flex-col items-center justify-center gap-10">
          <div
            className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-y-10 xl:gap-x-6"
            ref={serviceItemRef}
          >
            {whatIDo.map(({ ...props }, index) => (
              <ServiceCard
                {...props}
                index={index}
                key={index}
                ref={serviceItemRef}
              />
            ))}
          </div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

const ServiceCard = ({
  description,
  image,
  title,
  index,
  ref,
}: WhatIDo & { index: number; ref: any }) => {
  const {
    responseSize: { md },
  } = useScreenSize();

  useAnimateElement(`service-${md ? 0 : index}`, ref);
  return (
    <CardUI
      className={`service-${md ? 0 : index}-animate`}
      description={description}
      title={title}
      image={image!}
      key={index}
    />
  );
};

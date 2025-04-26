import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SERVICES from "~/shared/services";
import CardUI from "../ui/card.ui";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";

export default function ServicesLayout() {
  const serviceRef = useRef<HTMLDivElement>(null);
  useAnimateElement(`service`, serviceRef);

  return (
    <SectionUI id="services" ref={serviceRef}>
      <HeaderUI
        headerTitle="Services"
        headerSubtitle="Delivering Impactful, Scalable Solutions"
        className="service-animate"
      />
      <PaddingWrapperUI className="text-dark">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-y-10 xl:gap-x-10">
            {SERVICES.map(({ description, title, illustration }, index) => {
              const serviceItemRef = useRef(null);
              useAnimateElement(`service-${index}`, serviceItemRef);
              return (
                <CardUI
                  ref={serviceItemRef}
                  className={`service-${index}-animate`}
                  description={description}
                  title={title}
                  illustration={illustration || ""}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

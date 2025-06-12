import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";
import ImageUI from "../ui/image.ui";
import CertificateCardUI from "../ui/certificate-card.ui";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef } from "react";
import type { Certificate } from "~/types";

export default function CertificateLayout({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const certificateRef = useRef(null);

  useAnimateElement("certificate", certificateRef);

  return (
    <SectionUI ref={certificateRef} id="certificates">
      <HeaderUI
        headerTitle="Certificates"
        headerSubtitle="Verified Achievements & Professional Milestones"
        className="certificate-animate"
      />
      <PaddingWrapperUI className="min-h-[100vh] text-dark lg:min-h-fit!">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-20">
          <div className="xl:self-start w-1/2 max-w-[400px] mx-auto">
            <ImageUI
              src="/section-illustration/certificates.svg"
              alt="service illustration"
              width={500}
              height={336}
              wrapperClassName="certificate-animate"
            />
          </div>
          <div className="grid p-4 gap-3 space-y-5 xl:space-y-10 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-3 lg:gap-5">
            {certificates.map((certificate, index) => (
              <CertificateCardUI
                className={`certificate-animate`}
                {...certificate}
              />
            ))}
          </div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

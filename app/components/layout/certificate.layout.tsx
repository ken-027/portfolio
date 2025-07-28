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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const organizeByPlatforms = (
  certificates: Certificate[]
): Map<string, Certificate[]> => {
  const platforms = new Map<string, Certificate[]>();

  for (const certificate of certificates) {
    const platform = certificate.platform;
    const existingData = platforms.get(platform) || [];
    platforms.set(platform, [...existingData, certificate]);
  }

  return platforms;
};

export default function CertificateLayout({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const certificateRef = useRef(null);

  useAnimateElement("certificate", certificateRef);

  const desktopEffect = {
    className: "pb-10!",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
  };

  //   const effect = responseSize.lg ? desktopEffect : mobileEffect;
  const effect = desktopEffect;

  const platforms = organizeByPlatforms(certificates);

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
          <div className="flex flex-col gap-4 md:gap-7 lg:gap-16 w-full">
            {[...platforms.keys()].map((key) => (
              <div className="lg:w-[40%] md:mx-auto md:w-[70%] space-y-10 w-full" key={key}>
                <h3
                  className={`text-center text-2xl md:text-3xl font-anton dark:text-dark-text lg:text-3xl capitalize certificate-animate`}
                >
                  {key}
                </h3>
                <Swiper {...effect}>
                  {/* @ts-ignore */}
                  {platforms
                    .get(key)
                    .filter(({ status }) => status !== "plan")
                    .map((certificate, index) => (
                      <SwiperSlide key={index}>
                        <CertificateCardUI
                          className={`certificate-animate`}
                          {...certificate}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

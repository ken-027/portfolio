import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useEffect, useRef, useState } from "react";
import type { Certificate } from "~/types";
import { AnimatePresence, motion } from "motion/react";
import CertificateCardUI from "../ui/v2/certificate-card.ui";

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
  certificates: _certificates,
}: {
  certificates: Certificate[];
}) {
  const completedCertificates = _certificates.filter(
    ({ status }) => status === "completed"
  );
  const [filter, setFilter] = useState<string>("All");
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  const certificateRef = useRef(null);

  useAnimateElement("certificate", certificateRef);

  const FilterButton = ({ value }: { value: string }) => (
    <button
      onClick={() => setFilter(value)}
      className={`px-3 py-1 border transition-colors duration-500 flex gap-1 items-center text-sm cursor-pointer rounded-md ${
        value === filter
          ? "bg-secondary text-light border-blue-600 hover:bg-secondary/90"
          : "border-border bg-white text-dark hover:bg-gray-200"
      }`}
    >
      {value}
    </button>
  );

  //   const effect = responseSize.lg ? desktopEffect : mobileEffect;

  const platforms = organizeByPlatforms(completedCertificates);

  const initialLoaded = () => {
    setCertificates(completedCertificates);
    setFilter("Udemy");
  };
  const onFilter = () => {
    if (filter !== "All") {
      setCertificates(
        completedCertificates.filter(({ platform }) => platform === filter)
      );
    } else {
      setCertificates(completedCertificates);
    }
  };

  useEffect(initialLoaded, []);
  useEffect(onFilter, [filter]);

  console.log(platforms);

  return (
    <SectionUI ref={certificateRef} id="certificates">
      <HeaderUI
        headerTitle="Certificates"
        headerSubtitle="Verified Achievements & Professional Milestones"
        className="certificate-animate"
      />
      <PaddingWrapperUI className="max-w-screen-2xl! space-y-6">
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {["All", ...platforms.keys()].map((platform, index) => (
            <FilterButton key={index} value={platform} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            layout
            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {certificates.map((certificate, index) => {
              return <CertificateCardUI key={index} {...certificate} />;
            })}
          </motion.div>
        </AnimatePresence>
      </PaddingWrapperUI>
    </SectionUI>
  );
}

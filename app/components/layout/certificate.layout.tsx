import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import HeaderUI from "../ui/header.ui";
import SectionUI from "../ui/section.ui";

// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-cards";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Certificate } from "~/types";
import { AnimatePresence, motion } from "motion/react";
import CertificateCardUI from "../ui/v2/certificate-card.ui";
import PortfolioDB from "~/utils/db.util";

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

interface CertificateLayout {
  loading: boolean;
}

export default function CertificateLayout({ loading }: CertificateLayout) {
  const [allCertificates, setAllCertificates] = useState<Certificate[]>([]);

  const completedCertificates = useMemo(
    () => allCertificates.filter(({ status }) => status === "completed"),
    [loading, allCertificates]
  );
  const [dbLoading, setDbLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("Udemy");
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

  const getCertificates = async () => {
    try {
      setDbLoading(true);
      const db = new PortfolioDB();

      const data = await db.getCertificates();

      const order = ["Udemy", "Hacker Rank", "SimpliLearn"];

      setAllCertificates(
        data.sort(
          (a, b) => order.indexOf(a.platform) - order.indexOf(b.platform)
        )
      );
    } catch (err) {
      console.error("certificates fetch indexdb", err);
    } finally {
      setDbLoading(false);
    }
  };

  const initialLoaded = () => {
    getCertificates();

    setCertificates(
      completedCertificates.filter(({ platform }) => platform === filter)
    );
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

  useEffect(initialLoaded, [loading, dbLoading]);
  useEffect(onFilter, [filter]);

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

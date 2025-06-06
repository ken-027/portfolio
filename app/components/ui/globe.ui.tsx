import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { motion, useAnimate } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { getSkills } from "~/api/portfolio.api";
import type { ItemSkill } from "~/types";
import { delay, stagger } from "motion";

const icons = [
  "aws",
  "csharp",
  "bash",
  "bootstrap",
  "codeigniter",
  "css",
  "docker",
  "dotnet",
  "expressjs",
  "figma",
  "html",
  "javascript",
  "jest",
  "jquery",
  "laravel",
  "mariadb",
  "mysql",
  "nextjs",
  "nodejs",
  "npm",
  "php",
  "postman",
  "python",
  "reactjs",
  "redux",
  "sap",
  "sass",
  "socketio",
  "sqlserver",
  "tailwindcss",
  "typescript",
  "vscode",
  "git",
];

export default function GlobeUI({ className }: { className?: string }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icons, setIcons] = useState<ItemSkill[]>([]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const results = await getSkills();

      const iconsList = results.flatMap(({ items }) => items);

      setIcons(iconsList);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const initData = () => {
    loadImages();
  };

  const renderCustomIcon = (icon: any) => {
    return renderSimpleIcon({
      icon,
      size: 100,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e) => e.preventDefault(),
      },
    });
  };

  const cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 0.8,
      activeCursor: "default",
      tooltip: "native",
      initial: [0.1, -0.1],
      // clickToFront: 1500,
      tooltipDelay: 0,
      outlineColour: "transparent",
      maxSpeed: 0.01,
      minSpeed: 0.01,
      dragControl: false,
    },
  };

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    // @ts-ignore
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  const SkeletonGlobe = () => {
    const [scope, animate] = useAnimate();

    const loadAnimation = () => {
      animate(
        "div",
        {
          opacity: [0, 1],
          scale: [0.3, 1],
          willChange: "transform",
        },
        {
          delay: stagger(0.1),
          type: "spring",
        }
      );
    };

    useEffect(loadAnimation, []);

    return (
      <div
        className={`h-[60vw] w-[60vw] max-w-full lg:h-[600px] lg:w-[600px] mx-auto rounded-full overflow-hidden relative shadow-lg border-1 border-border/30 dark:border-border-dark/30 ${className}`}
        ref={scope}
      >
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[30%] left-[10%] rounded-full" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[60%] left-[50%] rounded-full scale-150" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[20%] left-[50%] rounded-full scale-150" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[80%] left-[80%] rounded-full scale-50" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[20%] left-[80%] rounded-full scale-50" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[10%] left-[70%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[80%] left-[30%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[60%] left-[80%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[40%] left-[55%] rounded-full scale-125" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[50%] left-[60%] rounded-full" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[50%] left-[40%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[30%] left-[30%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[90%] left-[50%] rounded-full scale-150" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[80%] left-[60%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[60%] left-[10%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[45%] left-[10%] rounded-full scale-150" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[35%] left-[80%] rounded-full scale-200" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[10%] left-[40%] rounded-full" />
        <div className="lg:h-10 lg:w-10 h-4 w-4 bg-gray-200 dark:bg-gray-700 animate-pulse absolute top-[10%] left-[25%] rounded-full scale-150" />
      </div>
    );
  };

  useEffect(initData, []);

  return (
    <>
      {loading ? (
        <SkeletonGlobe />
      ) : (
        <motion.div
          animate={{
            opacity: [0, 1],
            scale: [0.3, 1],
            willChange: "transform",
          }}
          transition={{ type: "tween", delay: 0.5, ease: "easeOut" }}
          className="w-[80%] mx-auto px-10 md:w-[70%] lg:w-full lg:pt-0 lg:ml-10"
        >
          {/* @ts-ignore */}
          <Cloud {...cloudProps}>
            <>
              <>{renderedIcons}</>
              {icons.map(({ name, icon }, index) => {
                return (
                  <a
                    className="outline-none"
                    key={index}
                    onClick={(e) => e.preventDefault()}
                  >
                    <img height="100" width="100" alt={name} src={icon} />
                  </a>
                );
              })}
            </>
          </Cloud>
        </motion.div>
      )}
    </>
  );
}

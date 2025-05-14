import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

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

export default function GlobeUI() {
  const [data, setData] = useState(null);

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

  return (
    <motion.div
      animate={{ opacity: [0, 1], scale: [0.3, 1], willChange: "transform" }}
      transition={{ type: "tween", delay: 0.5, ease: "easeOut" }}
      className="w-[80%] mx-auto px-10 md:w-[70%] lg:w-full lg:pt-0 lg:ml-10"
    >
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>
          <>{renderedIcons}</>
          {icons.map((image, index) => {
            return (
              <a
                className="outline-none"
                key={index}
                onClick={(e) => e.preventDefault()}
              >
                <img
                  height="100"
                  width="100"
                  alt={image}
                  src={`/icons/${image}.svg`}
                />
              </a>
            );
          })}
        </>
      </Cloud>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responseSize = {
    sm: size.width >= 640,
    md: size.width >= 768,
    lg: size.width >= 1024,
    xl: size.width >= 1280,
    _2xl: size.width >= 1536,
  };

  return {
    width: size.width,
    height: size.height,
    responseSize,
  };
}
